function tableFilter(){
  $("#filter").on('change keyup', function(){
    var filter = $('#filter').val();

    $.extend($.expr[':'], {
      'containsi': function(elem, i, match, array)
      {
        return (elem.textContent || elem.innerText || '').toLowerCase()
        .indexOf((match[3] || "").toLowerCase()) >= 0;
      }
    });

    $("tr td:not(:containsi('" + String(filter) + "'))").each(function(){
      $(this).parent().hide();
    });

    $("tr td:containsi('" + String(filter) + "')").each(function(){
      $(this).parent().show();
    });

  });
}

module.exports = tableFilter;
