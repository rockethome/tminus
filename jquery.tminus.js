        (function( $ ) {
            $.fn.tminus = function( options ) {

              // Default Settings:
              var defaults = {
                countdown: true,
                pad: false,
              };

              // Override options
              var opts = $.extend( defaults, options );
              
              // Facechange
              facechange($(this))

              // This handles the clock change
              function facechange( target ){
                  var clock = '';
                  
                  // Time set to .5 seconds
                  setTimeout(function() { facechange(target); }, 500);

                  $.each(getTime(opts.tminus), function(v, k){
                    if (k > 0){
                      v = v+'s'
                    }

                    var template = '<span class="tzone-entry"><span class="tzone-int">'+k+'</span><span class="tzone-labels">'+v+'</span></span>';
                    clock += template
                  })

                  // Rewrite the clock
                  target.html(clock)
              }
              
              function pad(n) {
                  return (n < 10) ? '0' + n : n;
              }
              
              function getTime(date){
                  if (date) {
                      var e = new Date(date);
                      var b = new Date();
                      var d = new Date(e.getTime() - b.getTime());
                  } else
                      var d = new Date();
                      var t = pad(date ? d.getFullYear() - 70 : d.getFullYear())
                          + '' + pad(date ? d.getMonth() : d.getMonth() + 1)
                          + '' + pad(date ? d.getDate() - 1 : d.getDate())
                          + '' + pad(d.getHours())
                          + '' + pad(d.getMinutes())
                          + '' + pad(d.getSeconds());
                  return {
                      'year': t.charAt(2)+t.charAt(3),
                      'month': t.charAt(4)+t.charAt(5),
                      'day': t.charAt(6)+t.charAt(7),
                      'hour': t.charAt(8)+t.charAt(9),
                      'minute': t.charAt(10)+t.charAt(11),
                      'second': t.charAt(12)+t.charAt(13),
                  };
              }

            };

        }( jQuery ));