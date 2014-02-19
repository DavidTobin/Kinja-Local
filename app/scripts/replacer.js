'use strict';

;(function() {
  'use strict';

  var REGEX       = /(.*)\.(.*)\.com:9000\/?(.*)/,
      REPLACEMENT = '$1.kinja.local:9000/$3';

  $(document).ready(function() {
    console.log("Replacing Kinja live URLs with Kinja local URLs...");
    $('a[href]').each(function(index, url) {
      var $url = $(url);

      if (this.href.match(REGEX) !== null) {
        $url.attr('href', this.href.replace(REGEX, '$1.kinja.local:9000/$3'));
      }
    });
  });
})();
