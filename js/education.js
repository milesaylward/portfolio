$(function(){

  $('.report-card.treehouse').reportCard({
      userName: 'milesaylward',
      site: 'treehouse',
      badgesAmount: 7
  });


  $("#reportCard").click(function(event) {
    if($('.report-card.treehouse').css('display') == 'none'){
      $('.report-card.treehouse').slideDown(1000);
    }
    else{
      $('.report-card.treehouse').slideUp(1000);
    }
  });
});
