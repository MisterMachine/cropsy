Cropsy.ApplicationView = Ember.View.extend({

  didInsertElement: function() {
    $('.viewer').zoomer();

    $( '.crop' ).cropbox({width: 500, height: 500})
    .on('cropbox', function (e, result) {
        console.log(result);
    });
  }

});
