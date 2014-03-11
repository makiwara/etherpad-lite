function customStart()
{
  //define your javascript here
  //jquery is available - except index.js
  //you can load extra scripts with $.getScript http://api.jquery.com/jQuery.getScript/

  var lines = {};
  var _data = {};

  var topOffset = 39;



  window.lineWatch = function( data ) {
  	for (var i=0; i<data.length; i++) {
  		if (_data[ data[i].id ]) {
  			if (_data[ data[i].id ].top != data[i].top) {
  				$('#lineAuthor_'+data[i].id).css({ top: data[i].top +topOffset })
  			}
  			_data[ data[i].id ].updated = true;
  		}
  		else {
  			$('.lineAuthors').append(
  				$("<div id='lineAuthor_"+data[i].id+"'></div>")
  					.addClass('b-names--one')
  					.addClass(data[i].cls)
  					.html(className2Author(data[i].cls))
  					.css({ top: data[i].top +topOffset })
  			)
  		}
  	}
  	for (var i in _data) 
  		if (!_data[i].updated) {
  			$('#lineAuthor_'+i).remove();
  		}
  	_data = {}
  	for (var i=0; i<data.length; i++)
  		_data[ data[i].id ] = data[i];
  }

  // copy from ace2_inner.js
  function className2Author(className)
  {
    if (className.substring(0, 7) == "author-")
    {
      return className.substring(7).replace(/[a-y0-9]+|-|z.+?z/g, function(cc)
      {
        if (cc == '-') return '.';
        else if (cc.charAt(0) == 'z')
        {
          return String.fromCharCode(Number(cc.slice(1, -1)));
        }
        else
        {
          return cc;
        }
      });
    }
    return null;
  }  

}
