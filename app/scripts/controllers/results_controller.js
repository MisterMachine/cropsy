Cropsy.ResultsController = Ember.ObjectController.extend({

  cropX: 50,
  cropY: 50,
  cropW: 400,
  cropH: 400,

  actions: {

    cancel: function(image) {
      this.transitionToRoute('images', image.id);
    },

    finish: function(image) {
      this.transitionToRoute('index');
    }

  }

});

