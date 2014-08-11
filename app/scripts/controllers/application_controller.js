Cropsy.ApplicationController = Ember.ObjectController.extend({

  applicationName: "Cropsy",

  actions: {

    addImage: function() {
      this.transitionToRoute('index');
    },

    closeNotification: function(image) {
      console.log('close notification');
    },

    setAspectRatio: function(image) {
      console.log('set aspect ratio');
    },

    zoomIn: function(image) {
      console.log('zoom in');
    },

    zoomOut: function(image) {
      console.log('zoom out');
    }


  }

});
