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

function project_container_expand(){
  var element1 = document.getElementById("id_1");
  var element2 = document.getElementById("id_1_links_container");
  var element3 = document.getElementById("more_link");
  var element4 = document.getElementById("more_expand");



  element1.style.transition = "1s";
  element1.style.backgroundColor = "black";
  element1.style.display = "block";
  element1.style.width = "100%";
  element2.style.width = "100%";
  element3.style.width = "100%";
  element4.style.width = "100%";
  element4.style.padding = "14px 0px";
  element4.style.transform = "scaleX(-1)";
  element4.style.filter = " FlipH";

  
}



$(document).on('click', '.more', function() {
  var id = $(this).attr('id');
  //window.alert(id);
  $("#"+id+"_more_expand").toggleClass('id_more_expand');
  $("#"+id+"_single_container").toggleClass('id_single_container');
  $("#"+id+"_links_container").toggleClass('id_links_container');
  $("#"+id+"_more_link").toggleClass('id_more_link');
  $("#"+id+"_single_text").toggleClass('id_single_text');
  $("#"+id+"_single_image").toggleClass('id_single_image');
  $("#"+id+"_second_text_container").toggleClass('id_second_text_container');
  $("#"+id+"_ghostly_text").toggleClass('id_ghostly_text');
});


$(document).on('click', '#modal_gallery', function(event) {
  var modal_gallery = document.getElementById('modal_gallery');

  if(event.target == modal_gallery ){
    $("#modal_gallery").removeClass('modal_gallery_active');

  }
});

$(document).on('click', '#id_1_gallery_modal_expand', function() {
  $("#modal_gallery").toggleClass('modal_gallery_active');
});


function modal_gallery_change(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expand_image");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  
  // Show the container element (hidden with CSS)
}



$(document).on('click', '.oops', function() {
  $(this).toggleClass('hoops');
  
});










/*
document.getElementById('modal_close').addEventListener("click", function() {
  var modal_gallery = document.getElementById('modal_gallery');
	// If user clicks inside the element, do nothing
	//if (event.target.closest(".box")) return;

	// If user clicks outside the element, hide it!
//box.classList.add("js-is-hidden");
modal_gallery.style.visibility = "hidden";
modal_gallery.style.visibility = "hidden";
$("#modal_gallery").toggleClass('modal_gallery_active');
});*/
/*
window.onclick = function(event) {
  var modal_close = document.getElementById('modal_close');
  var modal_gallery = document.getElementById('modal_gallery');

  if (event.target == modal_close) {
    modal_gallery.style.visibility = "hidden";
  }
}*/