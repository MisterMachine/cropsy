Cropsy.ImageController = Ember.ObjectController.extend({

  actions: {

    setAspectRatio: function(image) {
      console.log('set aspect ratio');
    },

    zoomIn: function(image) {
      console.log('zoom in');
    },

    zoomOut: function(image) {
      console.log('zoom out');
    },

    cropImage: function(image) {
      console.log(image.id);

      this.transitionToRoute('results', image.id);

    }

  }

});

