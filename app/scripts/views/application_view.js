Cropsy.ApplicationView = Ember.View.extend({

  didInsertElement: function() {
    $(".viewer").zoomer();

    $(window).on("resize", function(e) {
      $(".viewer").zoomer("resize");
    });

  }

});
