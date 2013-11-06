$(document).ready(function() {
 
  $("#slide-home").owlCarousel({
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      autoHeight: true 
  });

  $("#carousel-home").owlCarousel({
      autoPlay: 3000, 
       items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
      itemsTablet : [768,3]
  });
 
});