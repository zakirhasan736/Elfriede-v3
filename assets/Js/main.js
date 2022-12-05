$(document).ready(function() {
    $('.elfriede-navigation-bar').on('click', function(){
        $('.elfriede-navigation-wrapper').addClass('info-open');
      })
      $('.elfriede-trigger-close').on('click', function(){
        $('.elfriede-navigation-wrapper').removeClass('info-open');
      })
});
const load = gsap.timeline({
  paused: "true"
})
load.to("#percent , #bar, .loader", {
  duration: 1,
  opacity: 0,
  zIndex: 1
})

var id, width = 1;
function loading(){
  id = setInterval(frame, 25);
}
function frame(){
  if(width>=100){
      clearInterval(id)
      load.play();
  }
  else{
      width++;
      document.getElementById("barconfirm").style.width = width + '%';
      document.getElementById("percent").innerHTML = width + '%';
  }
}
window.onload = function(){
  loading();
}