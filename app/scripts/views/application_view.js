Cropsy.ApplicationView = Ember.View.extend({

  didInsertElement: function() {
    $('.viewer').zoomer();

    $('.crop').cropbox({width: 600, height: 250})
    .on('cropbox', function (e, result) {
        console.log(result);
    });
  }  

});
