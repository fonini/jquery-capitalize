;
(function($, window, document, undefined) {
  var pluginName = 'capitalize';
  var ignoredKeys = [8, 13, 16, 17, 18, 37, 39];

  var NN_POINT = /\./g;
  var NN_POINT_SPACE = '. ';
  var NN_SPACE = ' ';
  var NN_REGEX_MULTIPLE_SPACES = /\s+/g;
  var NN_REGEX_ROMAN_NUMERAL = /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;

  function Plugin(element) {
    this.element = element;
    this._name = pluginName;
    this.init();
    this.ignoredKeys = ignoredKeys;
  }

  Plugin.prototype = {
    init: function() {

      if ($(this.element).is('input')) {
        var that = this;

        $(this.element).on('keydown', function(e) {
          if ($.inArray(e.keyCode, that.ignoredKeys) === -1) {
            $(this).val(that.capitalize($(this).val()));
          }
        });

        $(this.element).on('blur', function(e) {
          $(this).val(that.capitalize($(this).val()));
        });
      } else {
        $(this.element).text(this.capitalize($(this.element).text()));
      }
    },
    capitalize: function(str) {
      str = str.replace(NN_POINT, NN_POINT_SPACE);

      str = str.replace(NN_REGEX_MULTIPLE_SPACES, NN_SPACE);

      str = str.replace(/[A-Za-z0-9àÀâÂäÄáÁéÉèÈêÊëËìÌîÎïÏòÒôÔöÖùÙûÛüÜçÇ’ñ]*\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });

      var parts = str.split(NN_SPACE);

      var exceptions = [
        'de', 'di', 'do', 'da', 'dos', 'das', 'dello', 'della',
        'dalla', 'dal', 'del', 'e', 'em', 'na', 'no', 'nas', 'nos', 'van', 'von',
        'y'
      ];

      for (var i = 0; i < parts.length; ++i) {
        for (var j = 0; j < exceptions.length; j++) {
          if (parts[i].toLowerCase() == exceptions[j].toLowerCase()) {
            parts[i] = exceptions[j];
          }
        }

        if (parts[i].toUpperCase().match(NN_REGEX_ROMAN_NUMERAL)) {
          parts[i] = parts[i].toUpperCase();
        }
      }

      return parts.join(NN_SPACE);
    }
  };

  $.fn[pluginName] = function() {
    return this.each(function() {
      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName, new Plugin(this));
      }
    });
  };

})(jQuery, window, document);