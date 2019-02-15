/**
 * author : kt
 * date : 2019-01-15
 * */

$(function () {
    var wHeight = document.body.clientHeight,
        wWidth = document.body.clientWidth,
        tScrollTop = document.body.scrollHeight;

    //经典案例轮播初始化
    // var mySwiper = new Swiper('.slide-content', {
    //     autoplay: 3000,
    //     loop: true,
    //     // 如果需要分页器
    //     pagination: '.swiper-pagination',
    //     paginationClickable: true,
    //     autoplayDisableOnInteraction: false,
    //     // 如果需要前进后退按钮
    //     nextButton: '.swiper-button-next',
    //     prevButton: '.swiper-button-prev',
    //     onSlideChangeEnd: function (swiper) {
    //         var _index = swiper.activeIndex,
    //             _currentElement = swiper.slides[_index];
    //         numAnimate(_currentElement);
    //     }
    // })

    //鼠标悬停轮播停止
    // $(document.querySelector('.slide-content')).mouseover(function () {
    //     mySwiper.stopAutoplay();
    // }).mouseout(function () {
    //     mySwiper.startAutoplay();
    // })

    //公司动态轮播初始化
    Carousel.init($(document.querySelector('.pictureSlider')), {
        width: wWidth > 1080 ? 1080 : 1080 * 0.9,
        height: wWidth > 1080 ? 244 : 244 * 0.9,
        posterWidth: wWidth > 1080 ? 444 : 444 * 0.9,
        posterHeight: wWidth > 1080 ? 244 : 244 * 0.9,
        scale: 0.9,
        autoPlay: true,
        delay: 3000,
        speed: 300
    });

    //导航链接
    (function () {
        var anchors = $(document.querySelectorAll('.product')),
            isScroll = false,
            /*    l1 = 0,
             l2 =  $('.full-page').height() ,
             l3 = l2 + $('.bus-introduce-box').height(),
             l4 = l3 + $('.product-introduce-box').height(),
             l5 = l4 + $('.bus-introduce-box').height() + $('.product-introduce-box').height() + $('.application-box').height() + $('.classic-box').height() + 70 * 3,
             l6 = wHeight + $('.bus-introduce-box').height() + $('.product-introduce-box').height() + $('.application-box').height() + $('.classic-box').height() + 40 * 3;
             */

            l1 = 0,
            l2 = $('.index-banner-wrap').height(),
            l3 = $('.index-banner-wrap').height() + wHeight + 100,
            l4 = wHeight + $('.index-banner-wrap').height() + $('.index-products-wrap').height() + 60,
            l5 = wHeight + $('.index-banner-wrap').height() + $('.index-products-wrap').height() + $('.index-cases-wrap').height() + 70 * 2,
            l6 = wHeight + $('.index-banner-wrap').height() + $('.index-products-wrap').height() + $('.index-cases-wrap').height() + $('.index-advantagies-wrap').height() + 50 * 3,
            l7 = wHeight + $('.index-banner-wrap').height() + $('.index-products-wrap').height() + $('.index-cases-wrap').height() + $('.index-advantagies-wrap').height() + $('.index-media').height() + $('.new-footer').height() + 80 * 4;
        //判断不同的链接
        anchors.on('click', function () {
            var anchor = $(this).data('anchor');
            switch (anchor) {
                case 1:
                    scrollAnimate({ distance: l1, anchor_id: anchor });
                    break;
                case 2:
                    scrollAnimate({ distance: l2, anchor_id: anchor });
                    break;
                case 3:
                    scrollAnimate({ distance: l3, anchor_id: anchor });
                    break;
                case 4:
                    scrollAnimate({ distance: l4, anchor_id: anchor });
                    break;
                case 5:
                    scrollAnimate({ distance: l5, anchor_id: anchor });
                    break;
                case 6:
                    scrollAnimate({ distance: l6, anchor_id: anchor });
                    break;
                case 7:
                    scrollAnimate({ distance: l7, anchor_id: anchor });
                    break;
                default:
                    scrollAnimate({ distance: 0, anchor_id: anchor });
                    break;
            }
        })


        //监控滚动条事件
        $(window).on('scroll', function () {
            var currentOffsetTop = $('html').scrollTop();
            if (isScroll) return false;
            if (currentOffsetTop < l2) {  
                anchors.removeClass('active');
                $('.product[data-anchor="1"]').addClass('active');
            } else if (currentOffsetTop < l3) {
                anchors.removeClass('active');
                $('.product[data-anchor="2"]').addClass('active');
            } else if (currentOffsetTop < l4) {
                anchors.removeClass('active');
                $('.product[data-anchor="3"]').addClass('active');
            } else if (currentOffsetTop < l5) {
                anchors.removeClass('active');
                $('.product[data-anchor="4"]').addClass('active');
            } else if (currentOffsetTop < l6) {
                anchors.removeClass('active');
                $('.product[data-anchor="5"]').addClass('active');
            } else if (currentOffsetTop < l7) {
                anchors.removeClass('active');
                $('.product[data-anchor="6"]').addClass('active');
            } else if (currentOffsetTop < tScrollTop) {
                anchors.removeClass('active');
                $('.product[data-anchor="7"]').addClass('active');
            } else {
                anchors.removeClass('active');
                $('.product[data-anchor="7"]').addClass('active');
            }
        })

        //滚动条动画
        function scrollAnimate(options) {
            isScroll = true;
            anchors.removeClass('active');
            $('.product[data-anchor=' + options.anchor_id + ']').addClass('active');

            $('html').animate({ scrollTop: options.distance }, 600, function () {
                isScroll = false;
            });
        }
    })();


    (function () {
        var dialog = $(document.querySelector('.dialog'));
        //表单提交
        $(document.querySelector('#leave')).on('click', function () {
            var name = $.trim($(document.querySelector('#name')).val()),
                phone = $.trim($(document.querySelector('#phone')).val()),
                area = $.trim($(document.querySelector('#area')).val()),
                extra = $.trim($(document.querySelector('#extra')).val());

            if (!name.length) {
                dialog.find('.d-content').html('姓名不能为空!');
                dialog.show();
                return false;
            }
            if (!phone.length) {
                dialog.find('.d-content').html('联系方式输入有误!');
                dialog.show();
                return false;
            }
            if (!area.length) {
                dialog.find('.d-content').html('所在区域不能为空!');
                dialog.show();
                return false;
            }

            var data = {
                name: name,
                telephone: phone,
                address: area,
                remark: '乐豆呀PC官网：' + extra,
                device: 'pc',
                product_type: '乐豆呀红包盒PC官网',
                type: 1
            }

            $(document.querySelector('.loading-box')).show();
            //数据提交
            $.ajax({
                url: 'http://www.ledouya.com/douyanet/saveData',
                type: 'POST',
                data: data,
                success: function (res) {
                    $(document.querySelector('.loading-box')).hide();
                    if (res.error == 0) {
                        dialog.find('.d-content').html('提交成功');
                        dialog.show();
                    } else {
                        dialog.find('.d-content').html(res['error_reason']);
                        dialog.show();
                    }
                },
                error: function () {
                    $(document.querySelector('.loading-box')).hide();
                    dialog.find('.d-content').html('网络错误，请稍候重试!');
                    dialog.show();
                }
            })
        })

        $(document.querySelector('.d-btn')).on('click', function () {
            dialog.hide();
        })
    })();



    //数字动画
    function numAnimate(activeElment) {
        var activeItems = $(activeElment).find('.classic-statistic-item');
        $(activeItems).each(function () {
            NumUpUI($(this).find('.classic-statistic-num').get(0))
        })
    }
})
