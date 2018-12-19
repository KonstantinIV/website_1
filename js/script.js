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
function create_box_elements(){
  var title = "Constructing HTML Elements";
  var id_number = 1;
  for (i = 1; i < 25; i++) { 
    var html = [
      '<div class="single_container" id="id_'+i+'_single_container">',
            '<div class="img_text_container" id="id_'+i+'_img_text_container">',
                '<img class="single_image" id="id_'+i+'_single_image" src="img/project_container_img.svg" alt="project">',
                '<div class="single_text" id="id_'+i+'_single_text">Kõnesünteesikeskkond koondab endas eesti keele tekst-kõne sünteesi erinevaid variante, rakendusi, liideseid ja muid materjale.. ',
                '</div>',
            '</div>',
            '<div class="second_text_container_none" id="id_'+i+'_second_text_container">',
                '<h1>. . .</h1>',
                '<p id="id_'+i+'_ghostly_text"> Kõnesünteesikeskkond koondab endas eesti keele tekst-kõne sünteesi erinevaid variante, rakendusi, liideseid ja muid materjale.. ',
                '<br><br>Kõnesünteesikeskkond koondab endas eesti keele tekst-kõne sünteesi erinevaid variante, rakendusi, liideseid ja muid materjale..Kõnesünteesikeskkond koondab endas eesti keele tekst-kõne sünteesi erinevaid variante, </p>',
            '</div>',
            '<div class="single_links_container" id="id_'+i+'_links_container">',
                '<a class="single_link " href="main.html"><img class="single_link_icon github" src="img/github.svg" alt="project">',
                '</a>  ',
                
                '<a class="single_link " href="main.html"><img class="single_link_icon web_link" src="img/link.svg" alt="project"></a> ',
                '<div class="single_link " ><img class="single_link_icon gallery" id="id_'+i+'_gallery_modal_expand"src="img/gallery.svg" alt="project"></div> ',
                '<div class="single_link more_link_container" id="id_'+i+'_more_link" ><img class="single_link_icon more" id="id_'+i+'" src="img/more.svg" alt="project" ></div> ',
            '</div>',
        '</div>'
  ].join("\n");
  // html: '<div ...>\n<h1 ...>Constructing HTML Elements<h1>\n</div>'
  
  $(".middle_container").append(html);
 // setTimeout(\,3000);/*
 /*$(".single_container").css("opacity", "0");
  $(".single_container").css("transition", "1s");
  $(".single_container").css("opacity", "1");*/
  $("#id_"+i+"_single_container").focus();
  $("#id_"+i+"_single_container").css("transition-delay", i*0.2+"s");
  $("#id_"+i+"_single_container").addClass('appear');
  

  }

  
  
}
window.onload=create_box_elements;









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
  var element2 = document.getElementById("id'+i+'links_container");
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
  $("#"+id+"_single_container").css("transition-delay", "0s");
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

$(document).on('click', '.gallery', function() {
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





