Cropsy.ApplicationView = Ember.View.extend({

  didInsertElement: function() {

    $('.dropdown').on('click', function(this) {
      $(this).addClass('active');
    });

  }

});
