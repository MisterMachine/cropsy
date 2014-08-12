Cropsy.ApplicationController = Ember.ObjectController.extend({

  applicationName: "Cropsy",

  actions: {

    addImage: function() {
      this.transitionToRoute('index');
    }

  }

});
