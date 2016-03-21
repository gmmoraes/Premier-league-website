function navbarTop(){
  $('#leagueRankingNav a').click(function(){
    $('#navbarTop').find(".active").removeClass("active");
    $(this).parent().addClass('active');
  });
  $('#schedulesNav a').click(function (){
    $('#navbarTop').find('.active').removeClass('active');
    $(this).parent().addClass('active');
  });
  $('#mapNav a').click(function(){
    $('#navbarTop').find('.active').removeClass('active');
    $(this).parent().addClass('active');
  });
}

module.exports = navbarTop;
