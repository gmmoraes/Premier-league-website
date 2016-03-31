function routes(){
  page('/maps.html', function(){
    alert('lol');
    window.location.href='maps.html';
  });
  page('/index.html', function(){
    alert('a');
    window.location.href='index.html';
  });
}
page();

module.exports = routes;
