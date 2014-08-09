Cropsy.ApplicationView = Ember.View.extend({

  didInsertElement: function() {
    $(".viewer").zoomer();
  }

});
