/*if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

function wheel(event) {
    var delta = 0;
    if (event.wheelDelta) delta = event.wheelDelta / 5;
    else if (event.detail) delta = -event.detail / 3;

    handle(delta);
    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
}

var goUp = true;
var end = null;
var interval = null;

function handle(delta) {
	var animationInterval = 20; //lower is faster
  var scrollSpeed = 20; //lower is faster

	if (end == null) {
  	end = $(window).scrollTop();
  }
  end -= 20 * delta;
  goUp = delta > 0;

  if (interval == null) {
    interval = setInterval(function () {
      var scrollTop = $(window).scrollTop();
      var step = Math.round((end - scrollTop) / scrollSpeed);
      if (scrollTop <= 0 || 
          scrollTop >= $(window).prop("scrollHeight") - $(window).height() ||
          goUp && step > -1 || 
          !goUp && step < 1 ) {
        clearInterval(interval);
        interval = null;
        end = null;
      }
      $(window).scrollTop(scrollTop + step );
    }, animationInterval);
  }
}


*/

function myFunction() {
  document.getElementById("web").style.width = "60%";
  document.getElementById("PHP").style.width = "10%";
  document.getElementById("JAVA").style.width = "10%";
  document.getElementById("Python").style.width = "50%";
  
  }


function show_skill_set() {
  var element = document.getElementById("sub_skill_bar");

  //var txtFile = "/home/leesikas01/m/maier/public_html/32/dist/login_details.txt";
  

  //element.style.transition = "1s";
  //element.style.visibility = "visible";
  element.style.display = "block";
  //element.style.webkitTransition = 'opacity 1s';



  //element.scrollIntoView({block:"center"}); // center
  //element.style.opacity = "1";
  document.getElementById("web2").style.width = "50%";
  

}