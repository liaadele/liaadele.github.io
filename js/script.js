$(document).ready(function(){

	$(window).scroll(function () { 

   $('.icons').css({
      'top' : -($(this).scrollTop()/9)+"px"
   }); 

});
}); 




