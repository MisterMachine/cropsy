Cropsy.ApplicationController = Ember.ObjectController.extend({

  applicationName: "Cropsy",

  actions: {

    addImage: function() {
      this.transitionToRoute('index');
    },

    closeNotification: function(image) {
      console.log('close notification');
    }

  }

});
