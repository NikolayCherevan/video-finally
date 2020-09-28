$(document).ready(function() {
  $('.header__burger').click(function(event) {
      $('.header__burger, .header__menu, .top, .bottom, .home, .work,.process').toggleClass('active');
      $('body').toggleClass('lock');
  })
  new WOW().init();
})


var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/player_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var tv,
    playerDefaults = {autoplay: 1, autohide: 1, modestbranding: 0, rel: 0, showinfo: 1, controls: 1, disablekb: 1, enablejsapi: 0, iv_load_policy: 3};
var vid = [
  {'videoId': 'uTquP1KWFho', 'startSeconds': 0, 'endSeconds': 105, 'suggestedQuality': 'hd720'} 
],
    randomvid = Math.floor(Math.random() * (vid.length - 1 + 1));

function onYouTubePlayerAPIReady(){
  tv = new YT.Player('tv', {events: { 'onStateChange': onPlayerStateChange}, playerVars: playerDefaults});
}

function onPlayerReady(){
  tv.loadVideoById(vid[randomvid]);

}
function stopVideo(){
  tv.stopVideo();
  
}
window.onload = function() {

    let trailer = document.querySelector(".trailer");
    document.querySelector('.video__button').addEventListener('click',  function() {
      document.querySelector('.bg-overlay').style.cssText = "opacity: 1; z-index: 11111"
      onPlayerReady();
      document.querySelector('.banner').style.cssText = "display: none"
      trailer.classList.add("active");
    }
    
      );
      document.querySelector('.bg-overlay').addEventListener('click',  function() {
        stopVideo()
        trailer.classList.remove("active");
        document.querySelector('.bg-overlay').style.cssText = "display: none"
        document.querySelector('.banner').style.cssText = "display: block";
      });
}

// tv.pauseVideo();
function onPlayerStateChange(e) {
  if (e.data === 1){
    $('#tv').addClass('active');
  } else if (e.data === 0){
    tv.seekTo(vid[randomvid].startSeconds)
  }
}





$('.hi span').on('click', function(){
  $('#tv').toggleClass('mute');
  if($('#tv').hasClass('mute')){
    tv.unMute();
    $(this).siblings('i').html('unmute');
  } else {
    tv.unMute();
    $(this).siblings('i').html('mute');
  }
});
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
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

