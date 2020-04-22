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


$(".first-div").show();
$(".second-div").hide();
$(".third-div").hide();
$(".fourth-div").hide();
$(".fifth-div").hide();
$(".sixth-div").hide();
$(".seventh-div").hide();
$(".eighth-div").hide();
$(".ninth-div").hide();
$(".tenth-div").hide();
$(".eleventh-div ").hide();
$(".twelfth-div").hide();

$(".first2-div").hide();
$(".second2-div").hide();
$(".third2-div").hide();
$(".fourth2-div").hide();
$(".fifth2-div").hide();
$(".sixth2-div").hide();
$(".seventh2-div").hide();
$(".eighth2-div").hide();
$(".ninth2-div").hide();
$(".tenth2-div").hide();
$(".eleventh2-div ").hide();
$(".twelfth2-div").hide();


$('.first-div').on('click',(eventData)=>{
  $(".first-div").hide();
  $(".fifth2-div").show();
})

$(".fifth2-div").on('click',(eventData)=>{
  $(".fifth2-div").hide();
  $(".ninth-div").show();
})

$(".ninth-div").on('click',(eventData)=>{
  $(".ninth-div").hide();
  $(".third2-div").show();
})

$(".third2-div").on('click',(eventData)=>{
  $(".third2-div").hide();
  $(".twelfth-div").show();
})

$(".twelfth-div").on('click',(eventData)=>{
  $(".twelfth-div").hide();
  $(".first2-div").show();
})
