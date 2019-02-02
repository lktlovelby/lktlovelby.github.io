/**
 * author : myc
 * date : 2019-01-20
 * */
(function($){
	var Carousel = function( poster , options ){
		var self = this;
		//保存单个旋转木马对象
		this.poster = poster;
		this.posterItemMain = poster.find("ul.poster-list");
		this.nextBtn = poster.find("div.poster-next-btn");
		this.prevBtn = poster.find("div.poster-prev-btn");
		this.posterItems = poster.find("li.poster-item");
		if( this.posterItems.size() % 2 == 0 ){
			this.posterItemMain.append( this.posterItems.eq(0).clone() );
			this.posterItems = this.posterItemMain.children();
		};
		this.posterFirstItem = this.posterItems.first();
		this.posterLastItem = this.posterItems.last();
		this.rotateFlag = true;
		this.spliceDistance = 0;
		this.spliceIndex = Math.floor( this.posterItems.length / 2 );
		//左右条目
		this.leftItems = [];
		this.rigthItems = [];

		//默认配置参数
		this.setting = {
			"width"  :  1000,			//幻灯片的宽度
			"height"  :  270,			//幻灯片的高度
			"posterWidth"  :  640,	//幻灯片第一帧的宽度
			"posterHeight"  :  270,	//幻灯片第一帧的高度
			"scale"  :  0.9,			//记录显示比例关系
			"speed"  :  300,
			"autoPlay"  :  false,
			"delay"  :  5000,
			"verticalAlign"  :  "middle" //top bottom
		};
		$.extend( this.setting , this.getSetting( options ) );
		
		//设置配置参数值
		this.setSettingValue();
		//初始化幻灯片位置
		this.setPosterPos();
		//点击图片切换
		this.posterItems.click(function () {

		})
		//阻止冒泡
		this.posterFirstItem.find('a').click(function () {
			if($(this).data('href')) window.open($(this).data('href'));
			return false;
		})
		//左旋转按钮
		this.nextBtn.click(function(){
			if(self.rotateFlag){
				self.rotateFlag = false;
				self.carouseRotate("left");
			};
		});
		//右旋转按钮
		this.prevBtn.click(function(){
			if(self.rotateFlag){
				self.rotateFlag = false;
				self.carouseRotate("right");
			};
		});
		//是否开启自动播放
		if(this.setting.autoPlay){
			this.autoPlay();
			this.poster.hover( function(){
				//self.timer是setInterval的种子
				window.clearInterval(self.timer);
			}, function(){
				self.autoPlay();
			});			
		};
	};
	Carousel.prototype = {
		autoPlay : function(){
			var self = this;
			this.timer = window.setInterval( function(){
				self.nextBtn.click();
			}, this.setting.delay );
		},

		//旋转
		carouseRotate : function( dir ){
			var _this_  = this;
			var zIndexArr = [];

			//左旋转
			if(dir === "left"){
				this.posterItems.each(function(){
					var self = $(this),
						prev = self.prev().get(0)?self.prev() : _this_.posterLastItem,
						width = prev.width(),
						height =prev.height(),
						opacity = prev.css("opacity"),
						left = prev.css("left"),
						top = prev.css("top"),
						zIndex = prev.css("zIndex");

					zIndexArr.push(zIndex);
					self.animate({
						width  : width,
						height  : height,
					  	//zIndex  : zIndex,
					    opacity  : opacity,
					    left  : left,
					    top  : top
					},_this_.setting.speed,function(){
						_this_.rotateFlag = true;
					});
				});
				//zIndex需要单独保存再设置，防止循环时候设置再取的时候值永远是最后一个的zindex

				this.posterItems.each( function(i){
					$(this).css( "zIndex" , zIndexArr[i] );
					if( zIndexArr[i] == _this_.spliceIndex )
						$(this).addClass('poster-active');
					else
						$(this).removeClass('poster-active')
				});
			}else if(dir === "right"){//右旋转
				this.posterItems.each(function(){
					var self = $(this),
						next = self.next().get(0)?self.next() : _this_.posterFirstItem,
						width = next.width(),
						height = next.height(),
						opacity = next.css("opacity"),
						left = next.css("left"),
						top = next.css("top"),
						zIndex = next.css("zIndex");

					zIndexArr.push(zIndex);					
					self.animate({
						width  : width,
						height  : height,
					  	//zIndex  : zIndex,
					    opacity  : opacity,
					    left  : left,
					    top  : top
					},_this_.setting.speed,function(){
						_this_.rotateFlag = true;
					});	
				});
				//zIndex需要单独保存再设置，防止循环时候设置再取的时候值永远是最后一个的zindex
				this.posterItems.each( function(i) {
					$(this).css( "zIndex" , zIndexArr[i] );
					if( zIndexArr[i] == _this_.spliceIndex )
						$(this).addClass('poster-active');
					else
						$(this).removeClass('poster-active')
				});
			}

			this.setItemsPosition();
		},

		//动态计算左右条目
		setItemsPosition : function () {
			var self = this ;
			self.leftItems = [];
			self.rigthItems = [];
			setTimeout( function () {
				self.posterItems.each(function () {
					var distance = $(this).css('left').replace('px','');
					if( distance < self.spliceDistance ) self.leftItems.push( $(this) );
					if( distance > self.spliceDistance ) self.rigthItems.push( $(this) );
				})
				self.setItemsClickEvent();
			} , self.setting.speed)
		},

		//添加点击事件
		setItemsClickEvent : function () {
			var _this = this;

			//清除事件绑定
			_this.posterItems.off();

			//左侧点击
			for( var i = 0 ; i < _this.leftItems.length ; i ++ ){
				_this.leftItems[i].on('click',function () {
					go( $(this) , 'right');
				})
			}
			//右侧点击
			for( var i = 0 ; i < _this.leftItems.length ; i ++ ){
				_this.rigthItems[i].on('click',function () {
					go( $(this) , 'left');
				})
			}

			function go ( obj , direction ) {
				_this.carouseRotate( direction );
				setTimeout( function () {
					if( !$( obj ).hasClass('poster-active') ) _this.carouseRotate( direction )
				}, _this.setting.speed )
			}
		},

		//设置剩余的帧的位置关系
		setPosterPos : function(){
			var self = this,
				sliceItems = this.posterItems.slice(1),
				sliceSize = sliceItems.size() /2,
				rightSlice = sliceItems.slice(0,sliceSize),
				//存在图片奇偶数问题
				level = Math.floor(this.posterItems.size()/2),
				leftSlice = sliceItems.slice(sliceSize);

			$(this.posterItems[0]).addClass('poster-active');

			//设置右边帧的位置关系和宽度高度top
			var firstLeft = (this.setting.width - this.setting.posterWidth)/2;
			var rw = this.setting.posterWidth,
				fixOffsetLeft = firstLeft + rw,
				rh = this.setting.posterHeight,
				gap = ((this.setting.width - this.setting.posterWidth)/2)/level;

			//设置右边位置关系
			rightSlice.each(function(i){
				level--;
				rw = rw * self.setting.scale;
				rh = rh * self.setting.scale;
				var j = i;
				$(this).css({
					zIndex  : level,
					width  : rw,
					height  : rh,
					opacity  : 1/(++j),
					left  : fixOffsetLeft+(++i)*gap - rw,
					top  : self.setVerticalAlign(rh)
				});
			});

			//设置左边的位置关系
			var lw = rightSlice.last().width(),
				lh  =rightSlice.last().height(),
				oloop = Math.floor(this.posterItems.size()/2);
			leftSlice.each(function(i){
				$(this).css({
					zIndex : i,
					width : lw,
					height : lh,
					opacity : 1/oloop,
					left : i*gap,
					top : self.setVerticalAlign(lh)
				});
				lw = lw/self.setting.scale;
				lh = lh/self.setting.scale;
				oloop--;
			});

			//中心点的距离
			this.spliceDistance = this.poster.find("a.poster-active").css('left').replace('px','');

			this.setItemsPosition();
		},

		//设置垂直排列对齐
		setVerticalAlign : function(height){
			var verticalType  = this.setting.verticalAlign,
				top = 0;
			if(verticalType === "middle"){
				top = (this.setting.height-height)/2;
			}else if(verticalType === "top"){
				top = 0;
			}else if(verticalType === "bottom"){
				top = this.setting.height-height;
			}else{
				top = (this.setting.height-height)/2;
			};
			return top;
		},

		//设置配置参数值去控制基本的宽度高度
		setSettingValue : function(){
			this.poster.css({
				width : this.setting.width,
				height : this.setting.height
			});
			this.posterItemMain.css({
				width : this.setting.width,
				height : this.setting.height
			});
			//计算上下切换按钮的宽度
			var w = (this.setting.width-this.setting.posterWidth) / 2;
			//设置切换按钮的宽高，层级关系
			// this.nextBtn.css({
			// 	width : w,
			// 	height : this.setting.height,
			// 	zIndex : Math.ceil( this.posterItems.size() / 2 )
			// });
			// this.prevBtn.css({
			// 	width : w,
			// 	height : this.setting.height,
			// 	zIndex : Math.ceil( this.posterItems.size() / 2 )
			// });
			this.posterFirstItem.css({
				width : this.setting.posterWidth,
				height : this.setting.posterHeight,
				left : w,
				top : 0,
				zIndex : Math.floor( this.posterItems.size() / 2 )
			});
		},

		//获取人工配置参数
		getSetting : function( options ){
			var setting = options;
			if(setting && setting != ""){
				return setting;
			}else{
				return {};
			};
		}	
	};

	Carousel.init = function( posters , options ){
		var _this_ = this;
		posters.each(function(){
			new  _this_($(this) , options );
		});
	};

	//挂载到window下
	window["Carousel"] = Carousel;

})(jQuery);