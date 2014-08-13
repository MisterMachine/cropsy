Cropsy.ResultsController = Ember.ObjectController.extend({

  actions: {

    cancel: function(image) {
      this.replaceRoute('images', image.id);
    },

    finish: function(image) {
      this.transitionToRoute('index');
    }

  }

});

