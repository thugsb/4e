window.items = [];
window.item_types = ['-'];
window.feats = [];

$(function() {
  
  $.extend( $.fn.dataTableExt.oStdClasses, {
    "sSortAsc": "header headerSortDown",
    "sSortDesc": "header headerSortUp",
    "sSortable": "header"
  });
  $('#main > .accordion-group').on('show', function(e) {
    $('.dataTables_wrapper').after('<table/>').remove();
    var sections = $(this).attr('data-js').split(',');
    console.log(sections);
    if ($(this).attr('id') === 'races') {show_races(sections);}
    if ($(this).attr('id') === 'feats') {show_feats(sections);}
    if ($(this).attr('id') === 'items') {show_items(sections);}
      

  });
  
  
  
});

function show_feats(sections) {
  $.ajax({
    url:'/js/data/'+sections[0]+'.js',
    success: success9,
  });
  function success9(d) {
    $.each(json_09_feats.D20Rules.RulesElement, function(i,v) {
      if (v['@type'] === 'Feat') {
        feats.push(v);
      }
    });
    $('#feats .accordion-inner table').before('<p id="itemLvlFilter"></p><p id="itemTypeFilter"></p>');
    $('#feats .accordion-inner table').dataTable({
      "sPaginationType": "bootstrap",
      'aaData': window.feats,
      'aoColumnDefs': [
        {"aTargets": [ 0 ],sTitle:'Name', mData:function(obj) {
          return obj['@name'];
        }}
      ],
      fnRowCallback: function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {
        $(nRow).attr('data-item', aData['@internal-id'] );
        return nRow;
      }
    });
    
    $(document).on('click','#feats tr',function() {
      var feat = $(this).attr('data-item');
      var r = feats.filter(function(obj) {
        return obj['@internal-id'] === feat;
      })[0];
      // console.log(r);
      var output = readObj(r,'');
      str = JSON.stringify(r,undefined,2);
      $('#feats .details').html('<pre>'+syntaxHighlight(str)+'</pre>');
    });
  }
}


function show_items(sections) {
  $.when(
    $.ajax({
      url:'/js/data/'+sections[0]+'.js',
      success: success3,
    }),
    $.ajax({
      url:'/js/data/'+sections[1]+'.js',
      success: success4,
    }),
    $.ajax({
      url:'/js/data/'+sections[2]+'.js',
      success: success40,
    })
  ).then(function() {
    $.each(items, function(i,v) {
      $.each(v.specific, function(ii,vv) {
        if (vv['@name'] === 'Magic Item Type') {
          // console.log(vv.$);
          if (vv.$ && item_types.indexOf(vv.$) == -1) {
            item_types.push(vv.$);
          }
        }
      });
    });
    item_types.sort();
    console.log(item_types);
    makeItemsTable();
  });
  function success3(d) {
    $.each(json_03_base_items.D20Rules.RulesElement, function(i,v) {
      if (v.specific) {
        window.items.push(v);
      }
    });
  }
  function success4(d) {
    $.each(json_04_new_items.D20Rules.RulesElement, function(i,v) {
      if (v.specific) {
        window.items.push(v);
      }
    });
  }
  function success40(d) {
    $.each(json_40_gear.D20Rules.RulesElement, function(i,v) {
      if (v.specific) {
        window.items.push(v);
      }
    });
  }
}

function makeItemsTable() {
  
  $('#items .accordion-inner table').before('<p id="itemLvlFilter"></p><p id="itemTypeFilter"></p>');
  $('#items .accordion-inner table').dataTable({
    "sPaginationType": "bootstrap",
    'aaData': window.items,
    'aoColumnDefs': [
      {"aTargets": [ 0 ],sTitle:'Lvl', mData:function(obj) {
        var result = $.grep(obj.specific, function(e){ return e['@name'] == 'Level'; });
        if (result.length == 0) {
          return '0';
        } else if (result.length == 1) {
          if (result[0].$) {
            return result[0].$;
          } else {
            return '0';
          }
        } else {
          console.log(result);
          return result;
        }
      }},
      {"aTargets": [ 1 ],sTitle:'Name', mData:function(obj) {
        return obj['@name'];
      }},
      {"aTargets": [ 2 ],sTitle:'Type', mData:function(obj) {
        var result = $.grep(obj.specific, function(e){ return e['@name'] == 'Magic Item Type'; });
        if (result.length == 0) {
          return '-';
        } else if (result.length == 1) {
          if (result[0].$) {
            return result[0].$;
          } else {
            return '-';
          }
        } else {
          console.log(result);
          return result;
        }
      }}
    ],
    fnRowCallback: function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {
      $(nRow).attr('data-item', aData['@internal-id'] );
      return nRow;
    }
  }).columnFilter({  
    sPlaceHolder: "head:after",
    aoColumns: [
      { sSelector: "#itemLvlFilter", type: "number" },
      null,
      { sSelector: "#itemTypeFilter", type: "select", values: item_types }
    ]
  });
  
  $(document).on('click','#items tr',function() {
    var item = $(this).attr('data-item');
    var r = items.filter(function(obj) {
      return obj['@internal-id'] === item;
    })[0];
    // console.log(r);
    var output = readObj(r,'');
    str = JSON.stringify(r,undefined,2);
    $('#items .details').html('<pre>'+syntaxHighlight(str)+'</pre>');
  });
}

function syntaxHighlight(json) {
  json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  json = json.replace(/\s+},/g, '').replace(/\s+{\n/g, "\n").replace(/,\n\s+"\$"/g, ' "$"').replace(/\\n/g, '<br>');
  json = json.replace(/At-Will/g, "<span class='badge badge-success'>At-Will</span>").replace(/Encounter/g, "<span class='badge badge-important'>Encounter</span>").replace(/Daily/g, "<span class='badge'>Daily</span>");
  return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
    var cls = 'number';
    if (/^"/.test(match)) {
      if (/:$/.test(match)) {
        cls = 'key';
      } else {
        cls = 'string';
      }
    } else if (/true|false/.test(match)) {
      cls = 'boolean';
    } else if (/null/.test(match)) {
      cls = 'null';
    }
    return '<span class="' + cls + '">' + match + '</span>';
  });
}

function readObj(obj,output) {
  $.each(obj, function(i,v) {
    if (typeof v === 'string') {
      output += i+': '+v;
    } else if (typeof v === 'object') {
      readObj(v,output);
    } else {
      alert(typeof v);
    }
  });
  return output;
}


function show_races(sections) {
  $.ajax({
    url:'/js/data/'+sections[0]+'.js',
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
      // "sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",
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
}
