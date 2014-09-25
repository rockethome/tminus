 /**********************************
 *
 *  Rockhome's tminus
 *  Version 1.1
 *
 *  Author: Mike Mackintosh
 *  Email: m [at] rocketho [dot] me
 *  Date: 20140224
 *
 **********************************/
 (function( $ ) {
    $.fn.tminus = function( options ) {

      // Default Settings:
      var defaults = {
        countdown: true,
        skip_zero: true,
        animate: false,
        // pad: false,
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

            if (k > 1){
              v = v+'s'
            }

            if ( opts.skip_zero && k == 0) {
              return true;
            }

            var template = '<span class="tzone-entry"><span class="tzone-int">'+k+'</span><span class="tzone-labels">'+v+'</span></span>';
            clock += template
          })

          // Rewrite the clock
          if( opts.animate ){
            target.fadeOut().html(clock).fadeIn()
            return;
          }

          target.html(clock);
          return;
      }

      function pad(n) {
          return (n < 10) ? '0' + n : n;
      }

      function getTime(date){
        if (date) {
            var e = new Date(date);
            var b = new Date();
            var d = (new Date(e.getTime() - b.getTime())) / 1000;
        }
        else
            var d = new Date();

        // get total seconds between the times
        var delta = Math.abs(e.getTime() - b.getTime()) / 1000;

        // calculate (and subtract) whole years
        var years = Math.floor(delta / 31557600);
        delta -= years * 31557600;
        
        // calculate (and subtract) whole months
        var months = Math.floor(delta / 2592000);
        delta -= months * 2592000;

        // calculate (and subtract) whole days
        var days = Math.floor(delta / 86400);
        delta -= days * 86400;

        // calculate (and subtract) whole hours
        var hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;

        // calculate (and subtract) whole minutes
        var minutes = Math.floor(delta / 60) % 60;
        delta -= minutes * 60;

        // what's left is seconds
        var seconds = Math.floor(delta);

        return {
          'year': pad(years),
          'month': pad(months),
          'day': pad(days),
          'hour': pad(hours),
          'minute': pad(minutes),
          'second': pad(seconds),
        };

      }

    };

}( jQuery ));
