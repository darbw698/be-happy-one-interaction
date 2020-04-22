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
$(".second-div").show();
$("").show();
$("").show();
$("").show();
$("").show();
$("").show();
$("").show();
$("").show();
$("").show();
$("").show();
$("").show();

$(".first2-div").hide();


$('.first-div').on('click',(eventData)=>{
  $(".first-div").hide();
  $(".second-div").show();
})

$('.second-div').on('click',(eventData)=>{
  $(".second-div").hide();
  $(".first-div").show();
})
