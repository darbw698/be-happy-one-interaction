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

$(".first-div").css("opacity", "1");
// $(".second-div").hide();

// opacity is between 0, and 1 (0.5 == 50% opacity)
//https://developer.mozilla.org/en-US/docs/Web/CSS/opacity
$(".second-div").css("opacity", "0");

$(".third-div").css("opacity", "0");
$(".fourth-div").css("opacity", "0");
$(".fifth-div").css("opacity", "0");
$(".sixth-div").css("opacity", "0");
$(".seventh-div").css("opacity", "0");
$(".eighth-div").css("opacity", "0");
$(".ninth-div").css("opacity", "0");
$(".tenth-div").css("opacity", "0");
$(".eleventh-div ").css("opacity", "0");
$(".twelfth-div").css("opacity", "0");

$(".first2-div").css("opacity", "0");
$(".second2-div").css("opacity", "0");
$(".third2-div").css("opacity", "0");
$(".fourth2-div").css("opacity", "0");
$(".fifth2-div").css("opacity", "0");
$(".sixth2-div").css("opacity", "0");
$(".seventh2-div").css("opacity", "0");
$(".eighth2-div").css("opacity", "0");
$(".ninth2-div").css("opacity", "0");
$(".tenth2-div").css("opacity", "0");
$(".eleventh2-div ").css("opacity", "0");
$(".twelfth2-div").css("opacity", "0");

$(".first-div").on("click", eventData => {
  $(".first-div").css("opacity", "0");
  $(".fifth2-div").css("opacity", "1").addClass("test-example").addClass("test-example5");
});

$(".fifth2-div").on("click", eventData => {
  $(".fifth2-div").css("opacity", "0");
  $(".ninth-div").css("opacity", "1").addClass("test-example6");
});

$(".ninth-div").on("click", eventData => {
  $(".ninth-div").css("opacity", "0");
  $(".third2-div").css("opacity", "1").addClass("test-example5");
});

$(".third2-div").on("click", eventData => {
  $(".third2-div").css("opacity", "0");
  $(".twelfth-div").css("opacity", "1").addClass("test-example2");
});

$(".twelfth-div").on("click", eventData => {
  $(".twelfth-div").css("opacity", "0");
  $(".first2-div").css("opacity", "1").addClass("test-example5");
});

$(".first2-div").on("click", eventData => {
  $(".first2-div").css("opacity", "0");
  $(".seventh-div").css("opacity", "1").addClass("test-example6");
});

$(".seventh-div").on("click", eventData => {
  $(".seventh-div").css("opacity", "0");
  $(".eighth2-div").css("opacity", "1").addClass("test-example3");
});

$(".eighth2-div").on("click", eventData => {
  $(".eighth2-div").css("opacity", "0");
  $(".sixth-div").css("opacity", "1").addClass("test-example5");
});

$(".sixth-div").on("click", eventData => {
  $(".sixth-div").css("opacity", "0");
  $(".eleventh2-div").css("opacity", "1");
});

$(".eleventh2-div").on("click", eventData => {
  $(".eleventh2-div").css("opacity", "0");
  $(".third-div").css("opacity", "1").addClass("test-example5");
});

$(".third-div").on("click", eventData => {
  $(".third-div").css("opacity", "0");
  $(".ninth2-div").css("opacity", "1").addClass("test-example2");
});

$(".ninth2-div").on("click", eventData => {
  $(".ninth2-div").css("opacity", "0");
  $(".second-div").css("opacity", "1").addClass("test-example5");
});

$(".second-div").on("click", eventData => {
  $(".second-div").css("opacity", "0");
  $(".twelfth2-div").css("opacity", "1").addClass("test-example");
});

$(".twelfth2-div").on("click", eventData => {
  $(".twelfth2-div").css("opacity", "0");
  $(".tenth-div").css("opacity", "1").addClass("test-example5");
});

$(".tenth-div").on("click", eventData => {
  $(".tenth-div").css("opacity", "0");
  $(".second2-div").css("opacity", "1").addClass("test-example6");
});

$(".second2-div").on("click", eventData => {
  $(".second2-div").css("opacity", "0");
  $(".eighth-div").css("opacity", "1").addClass("test-example4");
});

$(".eighth-div").on("click", eventData => {
  $(".eighth-div").css("opacity", "0");
  $(".sixth2-div").css("opacity", "1").addClass("test-example5");
});

$(".sixth2-div").on("click", eventData => {
  $(".sixth2-div").css("opacity", "0");
  $(".fourth-div").css("opacity", "1").addClass("test-example6");
});

$(".fourth-div").on("click", eventData => {
  $(".fourth-div").css("opacity", "0");
  $(".tenth2-div").css("opacity", "1").addClass("test-example5");
});

$(".tenth2-div").on("click", eventData => {
  $(".tenth2-div").css("opacity", "0");
  $(".fifth-div").css("opacity", "1").addClass("test-example3");
});

$(".fifth-div").on("click", eventData => {
  $(".fifth-div").css("opacity", "0");
  $(".seventh2-div").css("opacity", "1").addClass("test-example6");
});

$(".seventh2-div").on("click", eventData => {
  $(".seventh2-div").css("opacity", "0");
  $(".eleventh-div").css("opacity", "1").addClass("test-example5");
});

$(".eleventh-div").on("click", eventData => {
  $(".eleventh-div").css("opacity", "0");
  $(".fourth2-div").css("opacity", "1");
});

$(".fourth2-div").on("click", eventData => {
  $(".fourth2-div").css("opacity", "0");
  $(".first-div").css("opacity", "1").addClass("test-example2");
});
