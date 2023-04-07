$(function() {
    $(window).on('load', function () {
        AOS.refresh();
    });

    /* HEADER */
    function sitemapBtnClick(ele) {
        let sitemapStatus = $('#header').attr('data-sitemap');
    
        if (sitemapStatus === "close") {
            $('#header').attr('data-sitemap', "open");
            $('#sitemapBtn .btn__text').text('Close');
            $('#sitemap').addClass('on');
            $('body').addClass('dim');
        } else {
            $('#header').attr('data-sitemap', "close");
            $('#sitemapBtn .btn__text').text('JB Family');
            $('#sitemap').removeClass('on');
            $('body').removeClass('dim');
        }
    }
    $('.gnb > li').on('mouseenter', function() {
        $(this).addClass('active').siblings().removeClass('active');
        $('.gnb').attr('data-hover','on');
    });
    $('.gnb > li').on('mouseleave', function() {
        $(this).removeClass('active');
        $('.gnb').attr('data-hover','off');
    });
    $('#sitemapBtn').on('click', sitemapBtnClick);
    $('.sitemap__list li').on('mouseenter', function() {
        $(this).addClass('active').siblings().removeClass('active');
    });
    /* FOOTER */
    $('.footer__top').on('click', function() {
        $('html, body').animate({scrollTop:0}, 1000, "linear").delay(1500);
        return false;
    });

    /* CURSOR */
    var pointSize = $(".pointer").width()/2;
    $(window).mousemove(function(e){
        $('.pointer').css("top", e.clientY-pointSize);
        $('.pointer').css("left", e.pageX-pointSize);
    });

    function pointerAddFade() {
        $('.pointer').addClass('fade');
    }
    function pointerRemoveFade() {
        $('.pointer').removeClass('fade');
    }

    $('.btnwrap').on('mouseenter', pointerAddFade);
    $('.btnwrap').on('mouseleave', pointerRemoveFade);
    $('#sitemapBtn').on('mouseenter', pointerAddFade);
    $('#sitemapBtn').on('mouseleave', pointerRemoveFade);
});