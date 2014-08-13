Cropsy.ApplicationView = Ember.View.extend({

  didInsertElement: function() {

    $('.dropdown-toggle').on('click', function() {
      $('.dropdown').toggleClass('active');
    });

  }

});
