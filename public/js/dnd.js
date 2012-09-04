$(function() {
  
  $.extend( $.fn.dataTableExt.oStdClasses, {
    "sSortAsc": "header headerSortDown",
    "sSortDesc": "header headerSortUp",
    "sSortable": "header"
  });
  $('#main > .accordion-group').on('show', function(e) {
    $('.dataTables_wrapper').after('<table/>').remove();
    var section = $(this).attr('data-js');
    $.ajax({
      url:'/js/data/'+section+'.js',
      // data: data,
      success: success,
      // dataType: dataType
    });
    function success(d) {
      var races = [];
      $.each(json_06_races.D20Rules.RulesElement, function(i,v) {
        if (v['@type'] === 'Race') {
          races.push(v);
        }
      });
      $('#races .accordion-inner table').dataTable({
        "sDom": "<'row'<'span6'l><'span6'f>r>t<'row'<'span6'i><'span6'p>>",
        'iDisplayLength':30,
        "sPaginationType": "bootstrap",
        'aaData': races,
        'aoColumnDefs': [
          {"aTargets": [ 0 ],sTitle:'Name', mData:function(obj) {
            return obj['@name'];
          }}
          // {sTitle:'Level',"sSortDataType": "dom-text", "sType": "numeric"},
          // {sTitle:'Action'},
          // {sTitle:'Power'}
        ],
        fnRowCallback: function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {
          $(nRow).attr('data-race', aData['@internal-id'] );
          return nRow;
        }
        // "aaSorting": [[1,'asc'], [3, 'asc']]
      });
      
      $('tr').click(function() {
        var race = $(this).attr('data-race');
        var r = json_06_races.D20Rules.RulesElement.filter(function(obj) {
          return obj['@internal-id'] === race;
        })[0];
        // console.log(r);
        var html = "<h1>"+r['@name']+"</h1>";
        html += "<em>"+r.Flavor.$+"</em>";
        html += "<p class='collapse'>"+r.$+"</p><dl>";
        $.each(r.specific, function(i,v) {
          if (v['@name'] != 'Playing' && v['@name'] != 'Physical Qualities' && v['@name'] != 'Racial Traits' && v['@name'] != 'Short Description') {
            html += '<dt>'+v['@name']+'</dt><dd>'+v.$+'</dd>';
          } else if ( v['@name'] == 'Racial Traits') {
            var traits = v.$.replace(/\s/g,'').split(',');
            // console.log(traits);
            $.each(traits, function(i,v) {
              var t = json_06_races.D20Rules.RulesElement.filter(function(obj) {
                return obj['@internal-id'] === v;
              })[0];
              if (typeof t === 'undefined') {
                html += '<dt>Dragon Breath</dt><dd>You have the dragon breath power.</dd>';
              } else {
                html += '<dt>'+t['@name']+'</dt><dd>'+t.$+'</dd>';
              }
            });
          }
        });
        html += '</dl>';
        $('#races .accordion-inner .details').html(html);
      });
      
    }
  });
  
});