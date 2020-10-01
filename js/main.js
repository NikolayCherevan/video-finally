$(document).ready(function() {

    $('.div-block-46').click(function(event) {
        $('.div-block-46, .header__menu, .top, .bottom, .home, .work,.process').toggleClass('active');
        $('body').toggleClass('lock');
    })
    new WOW().init();

    $('').hover(function() {
        $('.work__examples-block img').css('transform', 'scale3d(1.02, 1.02, 1)')
    })

    $(".work__examples-block h3").hover(
        function() {
            $(this).prev().css("transform", "scale3d(1.02, 1.02, 1)");
        },
        function() {
            $(this).prev().css("transform", "scale3d(1, 1, 1)");
        }
    );
    $(".work__examples-block img").hover(
        function() {
            $(this).css("transform", "scale3d(1.02, 1.02, 1)");
        },
        function() {
            $(this).css("transform", "scale3d(1, 1, 1)");
        }
    );
    $(window).resize(function() {
        if ($(window).width() > 470) {
            $('.video').css('height', 'inherit');
        }
        $('.video').css('min-height', 'inherit');
        $('.screen').width($('.banner').width());
        $('.screen').height($('.banner').height() - 5)
    });

    // $(window).bind('mousewheel', function (event) {
    //   if (event.originalEvent.wheelDelta >= 0) {

    //   }
    //   else {

    //   }
    // });
    function scrollDetect() {
        var lastScroll = 0;

        window.onscroll = function() {
            let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value

            if (currentScroll > 0 && lastScroll <= currentScroll && currentScroll >40) {
                lastScroll = currentScroll;
                
                if (!$(".header__menu").hasClass("active")) {
                    $('.header').addClass('header-hide')
                    $('.header').removeClass('header-fixed')
          
                }
            } else {
                lastScroll = currentScroll;
                if (!$(".header__menu").hasClass("active")) {
                    $('.header').removeClass('header-hide');
                    $('.header').addClass('header-fixed');
                }
            }
        };
    }


    scrollDetect();
    var lastY;
    $(document).bind('touchmove', function(e) {
        var currentY = e.originalEvent.touches[0].clientY;
        if (currentY > lastY) {
            if (!$(".header__menu").hasClass("active")) {
                $('.header').removeClass('header-hide');
                $('.header').addClass('header-fixed');
            }
        } else if (currentY < lastY) {
            if (!$(".header__menu").hasClass("active")) {
                $('.header').addClass('header-hide')
                $('.header').removeClass('header-fixed')
            }
        }
        lastY = currentY;
    });


})


var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/player_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var tv,
    playerDefaults = { autoplay: 1, border: 0, autohide: 1, modestbranding: 0, rel: 0, showinfo: 1, controls: 1, disablekb: 0, enablejsapi: 0, iv_load_policy: 3 };
var vid = [
        { 'videoId': '7oEDgtjBiw8', 'startSeconds': 0, 'endSeconds': 105, 'suggestedQuality': 'hd720' }
    ],
    randomvid = Math.floor(Math.random() * (vid.length - 1 + 1));

function onYouTubePlayerAPIReady() {
    tv = new YT.Player('tv', { events: { 'onStateChange': onPlayerStateChange }, playerVars: playerDefaults });
}

function onPlayerReady() {
    tv.loadVideoById(vid[randomvid]);

}

function stopVideo() {
    tv.stopVideo();

}
window.onload = function() {

    let trailer = document.querySelector(".trailer");
    document.querySelector('.video__button').addEventListener('click', function(event) {
            event.preventDefault();

            if ($(window).width() > 1000) {
                $('.video').css('min-height', 'inherit');
                const bannerH = $('.banner').height() + 329;
                const bannerW = $('.banner').width() + 589;
                $('.screen').width(bannerW);
                $('.screen').height(bannerH);
            } else if (($(window).width() > 1000) && ($(window).width() < 1450)) {
                // const bannerH = $('.banner').height() + 11;
                // const bannerW = $('.banner').width() + 26;
                console.log('ok')
                $('.screen').width($(window).width() - 152);
                $('.screen').height($(window).height() - 200);
            } else {
                $('.video').css('height', 'inherit');
                const bannerH = $('.banner').height() + 11;
                const bannerW = $('.banner').width() + 26;
                $('.screen').width(bannerW);
                $('.screen').height(bannerH);
            }
            document.querySelector('.bg-overlay').style.cssText = "opacity: 1; z-index: 11111"
            onPlayerReady();
            trailer.classList.add("active");
        }


    );
    document.querySelector('.banner').addEventListener('click', function(event) {
        event.preventDefault();
        if (($(window).width() > 1030) && ($(window).width() < 1450)) {
            // const bannerH = $('.banner').height() + 11;
            // const bannerW = $('.banner').width() + 26;
            $('.screen').width($(window).width() - 152);
            $('.screen').height($(window).height() - 220);

        } else if (($(window).width() > 1000) && ($(window).width() < 1050)) {
            $('.screen').width($(window).width() - 152);
            $('.screen').height($(window).height() - 360);
        } else if (($(window).width() > 1000)) {
            $('.video').css('min-height', 'inherit');
            const bannerH = $('.banner').height() + 329;
            const bannerW = $('.banner').width() + 589;
            $('.screen').width(bannerW);
            $('.screen').height(bannerH);
        } else {
            $('.video').css('height', 'inherit');
            const bannerH = $('.banner').height() + 11;
            const bannerW = $('.banner').width() + 26;
            $('.screen').width(bannerW);
            $('.screen').height(bannerH);
        }



        document.querySelector('.bg-overlay').style.cssText = "opacity: 1; z-index: 11111"
        onPlayerReady();
        trailer.classList.add("active");
    });
    $(window).scroll(function() {
        if (($(window).scrollTop()) > 1000) {
            stopVideo()
            trailer.classList.remove("active");
            document.querySelector('.bg-overlay').style.cssText = "display: none"
            document.querySelector('.banner').style.cssText = "display: block";
        }
    });
    document.querySelector('.bg-overlay').addEventListener('click', function() {
        stopVideo();
        if ($(window).width() < 470) {
            $('.video').css('height', '30vh');
        }
        if ($(window).width() > 1000) {
            $('.video').css('min-height', '675');
        }
        trailer.classList.remove("active");
        document.querySelector('.bg-overlay').style.cssText = "display: none"
        document.querySelector('.banner').style.cssText = "display: block";
    });
}

// tv.pauseVideo();
function onPlayerStateChange(e) {
    if (e.data === 1) {
        $('#tv').addClass('active');
    } else if (e.data === 0) {
        tv.seekTo(vid[randomvid].startSeconds)
    }
}





$('.hi span').on('click', function() {
    $('#tv').toggleClass('mute');
    if ($('#tv').hasClass('mute')) {
        tv.unMute();
        $(this).siblings('i').html('unmute');
    } else {
        tv.unMute();
        $(this).siblings('i').html('mute');
    }
});
let acc = document.getElementsByClassName("accordion-item-trigger");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function openTabs() {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
};


function toggle() {

    video = document.querySelector("video"),
        home = document.querySelector('html'),
        banner = document.querySelector('.banner'),
        header = document.querySelector('.header');
    header.classList.toggle('active');
    home.classList.toggle('bg');



    video.currentTime = 0;
};