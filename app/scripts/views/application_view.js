Cropsy.ApplicationView = Ember.View.extend({

  didInsertElement: function() {
    $(".viewer").zoomer( {
      controls: {
        zoomIn: ".zoom_in",
        zoomOut: ".zoom_out"
      }
    });

    $(window).on("resize", function(e) {
      $(".viewer").zoomer("resize");
    });

  }

});
