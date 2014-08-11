Cropsy.ResultsController = Ember.ObjectController.extend({

  cropX: 50,
  cropY: 50,
  cropW: 400,
  cropH: 400,

  actions: {

    cancel: function(image) {
      console.log('finished cropping');
    },

    finish: function(image) {
      console.log('finished cropping');
    }

  }

});

