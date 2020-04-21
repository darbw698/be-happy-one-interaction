// console.log("hello world");

// console.log ( $('.firstdiv'))

// console.log ( $('.seconddiv'))

console.log($(".first-div"));

console.log($(".second-div"));

$(".first-div").show();
// $('.first-div').hide();

// $(".second-div").hide();
$('.second-div').show();

$(".first-div").html(
  "I will be happy I will be happy I will be happy I will be happy I will be happy I will be happy I will be happy I will be happy I will be happy I will be happy I will be happy I will be happy I will be happy I will be happy I will be happy I will be happy I will be happy I will be happy I will be happy I will be happy I will be happy "
);

$(".second-div").html(
  "I am happy I am happy I am happy I am happy I am happy I am happy I am happy I am happy I am happy I am happy I am happy I am happy I am happy I am happy I am happy I am happy I am happy I am happy I am happy I am happy I am happy"
);

$('.first-div').on('click',(eventData)=>{
  $(".first-div").hide();
  $(".second-div").show();
})

$('.second-div').on('click',(eventData)=>{
  $(".second-div").hide();
  $(".first-div").show();
})

