// console.log ( $('.firstdiv'))

// console.log ( $('.seconddiv'))


// $(".first-div").html(
//   "I will be happy I will be happy I will be happy I will be happy I will be happy I will be happy I will be happy I will be happy I will be happy I will be happy I will be happy I will be happy I will be happy I will be happy I will be happy I will be happy I will be happy I will be happy I will be happy I will be happy I will be happy "
// );

// $(".second-div").html(
//   "I am happy I am happy I am happy I am happy I am happy I am happy I am happy I am happy I am happy I am happy I am happy I am happy I am happy I am happy I am happy I am happy I am happy I am happy I am happy I am happy I am happy"
// );


console.log($(".first-div"));

console.log($(".second-div"));

//.hide() === setting    display:none    in CSS


$(".first-div").css('opacity','1');
// $(".second-div").hide();

// opacity is between 0, and 1 (0.5 == 50% opacity)
//https://developer.mozilla.org/en-US/docs/Web/CSS/opacity
$(".second-div").css('opacity','0')

$(".third-div").css('opacity','0');
$(".fourth-div").css('opacity','0');
$(".fifth-div").css('opacity','0');
$(".sixth-div").css('opacity','0');
$(".seventh-div").css('opacity','0');
$(".eighth-div").css('opacity','0');
$(".ninth-div").css('opacity','0');
$(".tenth-div").css('opacity','0');
$(".eleventh-div ").css('opacity','0');
$(".twelfth-div").css('opacity','0');

$(".first2-div").css('opacity','0');
$(".second2-div").css('opacity','0');
$(".third2-div").css('opacity','0');
$(".fourth2-div").css('opacity','0');
$(".fifth2-div").css('opacity','0');
$(".sixth2-div").css('opacity','0');
$(".seventh2-div").css('opacity','0');
$(".eighth2-div").css('opacity','0');
$(".ninth2-div").css('opacity','0');
$(".tenth2-div").css('opacity','0');
$(".eleventh2-div ").css('opacity','0');
$(".twelfth2-div").css('opacity','0');


$('.first-div').on('click',(eventData)=>{
  $(".first-div").css('opacity','0')
  $(".fifth2-div").css('opacity','1').addClass('test-example');
  
})

$(".fifth2-div").on('click',(eventData)=>{
 $(".fifth2-div").css('opacity','0')
  $(".ninth-div").css('opacity','1')
})

$(".ninth-div").on('click',(eventData)=>{
   $(".ninth-div").css('opacity','0')
  $(".third2-div").css('opacity','1');
})

$(".third2-div").on('click',(eventData)=>{
  $(".third2-div").css('opacity','0');
 $(".twelfth-div").css('opacity','1')
})

$(".twelfth-div").on('click',(eventData)=>{
  $(".twelfth-div").css('opacity','0')
  $(".first2-div").css('opacity','1')
})

$(".first2-div").on('click',(eventData)=>{
  $(".first2-div").css('opacity','1')
  $(".seventh-div").css('opacity','0')
})

