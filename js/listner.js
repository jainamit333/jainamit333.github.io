$( "#movie_section .option-toggler" ).click(function() {

  $( "#movie_section .option-toggler" ).removeClass( "btn-success" );
  $( "#movie_section .option-toggler" ).addClass( "btn-default" );
  $(this).addClass( "btn-success" );
  $(".movie-section-unit").hide( "slow" );
  var val = $(this).val();
  switch (val) {
    case "all":
      $(".movie-section-unit ").show( "slow" );
      break;
    case "ontheater":
      $(" .ontheater").show( "slow" );
      break;
    case "thisweek":
      $(" .thisweek").show( "slow" );
      break;
    case "comingsoon":
      $(" .comingsoon").show( "slow" );
      break;
  }
});

$( "#portfolio .option-toggler" ).click(function() {
  $( "#portfolio .option-toggler" ).removeClass( "btn-success" );
  $( "#portfolio .option-toggler" ).addClass( "btn-default" );
  $(this).addClass( "btn-success" );
  $(".video-scroller-unit").hide( "slow" );
  var val = $(this).val();
  switch (val) {
    case "all":
      $(".video-scroller-unit ").show( "slow" );
      break;
    case "trailer":
      $(" .video-scroller-unit-TRAILER").show( "slow" );
      break;
    case "songs":
      $(" .video-scroller-unit-SONGS").show( "slow" );
      break;

  }
});
