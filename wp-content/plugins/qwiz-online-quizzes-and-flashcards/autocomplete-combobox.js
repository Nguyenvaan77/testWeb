   (function($) {
       $.widget("custom.combobox", {
           _create: function() {
               this.wrapper = $("<span>")
                   .addClass("custom-combobox")
                   .insertAfter(this.element);
               this.element.hide();
               this._createAutocomplete();
               this._createShowAllButton();
           },
           _createAutocomplete: function() {
               var selected = this.element.children(":selected"),
                   value = selected.val() ? selected.text() : "";
               this.input = $("<input>")
                   .appendTo(this.wrapper)
                   .val(value)
                   .attr("title", "")
                   .addClass("custom-combobox-input ui-widget ui-widget-content ui-state-default ui-corner-left")
                   .autocomplete({
                       delay: 0,
                       minLength: 0,
                       source: $.proxy(this, "_source"),
                       select: function(event, ui) {
                           qwiz_combobox_callback(ui.item.label, 'class_by_name', this);
                       }
                   })
               /*
               .tooltip({
                  tooltipClass: "ui-state-highlight"
               });
               */
               this._on(this.input, {
                   autocompleteselect: function(event, ui) {
                       ui.item.option.selected = true;
                       this._trigger("select", event, {
                           item: ui.item.option
                       });
                   },
                   autocompletechange: "_removeIfInvalid"
               });
           },
           _createShowAllButton: function() {
               var input = this.input,
                   wasOpen = false;
               $("<a>")
                   .attr("tabIndex", -1)
                   .attr("title", "Show all items")
                   .appendTo(this.wrapper)
                   .button({
                       icons: {
                           primary: "ui-icon-triangle-1-s"
                       },
                       text: false
                   })
                   .removeClass("ui-corner-all")
                   .addClass("custom-combobox-toggle ui-corner-right")
                   .mousedown(function() {
                       wasOpen = input.autocomplete("widget").is(":visible");
                   })
                   .click(function() {
                       input.focus();
                       if (wasOpen) {
                           return;
                       }
                       input.autocomplete("search", "");
                   });
           },
           _source: function(request, response) {
               var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
               response(this.element.children("option").map(function() {
                   var text = $(this).text();
                   if (this.value && (!request.term || matcher.test(text)))
                       return {
                           label: text,
                           value: text,
                           option: this
                       };
               }));
           },
           _removeIfInvalid: function(event, ui) {
               if (ui.item) {
                   return;
               }
               var value = this.input.val(),
                   valueLowerCase = value.toLowerCase(),
                   valid = false;
               this.element.children("option").each(function() {
                   if ($(this).text().toLowerCase() === valueLowerCase) {
                       this.selected = valid = true;
                       return false;
                   }
               });
               if (valid) {
                   return;
               }
               /*
               this.input
                  .val( "" )
                  .attr( "title", value + " didn't match any item" )
                  .tooltip( "open" );
               this._delay(function() {
                  this.input.tooltip( "close" ).attr( "title", "" );
               }, 2500 );
               */
               this.element.val("");
               this.input.autocomplete("instance").term = "";
           },
           _destroy: function() {
               this.wrapper.remove();
               this.element.show();
           }
       });
   })(jQuery);
   /*
   $(function() {
      $( "#combobox" ).combobox();
      $( "#toggle" ).click(function() {
         $( "#combobox" ).toggle();
      });
   });
        */