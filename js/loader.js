var pageLoaded = $(document).attr("title");

$(document).ready(function (){
   if(pageLoaded == "The Works of Dune Zerna"){
       $(".alpha").load("vslider.html")
   }
});