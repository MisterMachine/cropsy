Cropsy.ApplicationController = Ember.ObjectController.extend({

  actions: {

    closeNotification: function(image) {
      console.log('close notification');
    },

    finishCropping: function(image) {
      console.log('finished cropping');

      // example of toggling class on button click
      //$('.result').toggleClass('active');

    },

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
      console.log('crop image');
    }

  }

});
