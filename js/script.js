
//Data for project containers

var dict = {
  1: ["Sissejuhatus_id_1","Esimene_loik_id_1","Teine_loik_id_1",3],
  2: ["Sissejuhatus_id_2","Esimene_loik_id_2","Teine_loik_id_2",3],
  
};

//Creation of project html elemnts/containers
function create_box_elements(){
  for (var i in dict) { //Get data from dictionary, which includes id, text
    var arr = dict[i];
    var html = [
      '<div class="single_container" id="id_'+i+'_single_container">',
            '<div class="img_text_container" id="id_'+i+'_img_text_container">',
                '<img class="single_image" id="id_'+i+'_single_image" src="img/project_container_img.svg" alt="project">',
                '<div class="single_text" id="id_'+i+'_single_text">'+arr[0],
                '</div>',
            '</div>',
            '<div class="second_text_container_none" id="id_'+i+'_second_text_container">',
                '<h1>. . .</h1>',
                '<p id="id_'+i+'_ghostly_text">' +arr[1],
                '<br><br>'+arr[2]+' </p>',
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
  $(".middle_container").append(html);//Add to parent element

  //Adding some smooth reveal animation
  $("#id_"+i+"_single_container").focus(); // Prep to accept changes
  $("#id_"+i+"_single_container").css("transition-delay", i*0.2+"s");
  $("#id_"+i+"_single_container").addClass('appear');
  
  }
}
window.onload=create_box_elements; // Load project containers when page has loaded

/**********ON CLICK EVENTS*************/
/*Expand single container based on id*/
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



//Close modal gallery when clicked outside 
$(document).on('click', '#modal_gallery', function(event) {
  var modal_gallery = document.getElementById('modal_gallery');
  if(event.target == modal_gallery ){
    $("#modal_gallery").removeClass('modal_gallery_active');

  }
});


//Generate modal gallery
$(document).on('click', '.gallery', function() {
  var id = $(this).attr('id').substr(0,4); // id_1
  var id_number = id.substr().substr(3,3); // 1
  var file_count = dict[id_number]; // array


  $( ".small_image_container" ).empty();//Empty the parend container
  $("#modal_gallery").toggleClass('modal_gallery_active'); // Show gallery
  $("#expand_image").attr('src', 'img/'+id+'/1.jpg');//Show first image


  //Loop based on number of image files in folder and create img tags
  for (i = 1; i <= file_count[3]; i++) { 
    var html = [
      '<div class="small_image"><img src="'+'img/'+id+'/'+i+'.jpg'+'" alt="Nature" onclick="modal_gallery_change(this);"></div>'
  ].join("\n");
  //Add elements
  $(".small_image_container").append(html);
  }
});

//View image on bigger container
function modal_gallery_change(imgs) {
  var expandImg = document.getElementById("expand_image");
  expandImg.src = imgs.src; // Replace
}





/**************************************************************************************************
 * ************************************************************************************************
 * ************************************************************************************************
 * ************************************************************************************************
 * ************************************************************************************************
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



$(document).on('click', '.oops', function() {
  $(this).toggleClass('hoops');
  
});

