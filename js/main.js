$(document).ready(function () {
  console.log();
  var x = document.documentElement.scrollTop || document.body.scrollTop;
  var y = $('#other').offset().top;
  $('#scroll').on('click', function () {
    $('html, body').animate({
      scrollTop: $("#other").offset().top
    }, 1200);

  });
  // $(window).on('scroll', function () {
  // });
});
