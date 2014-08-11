Cropsy.ImageController = Ember.ObjectController.extend({

  actions: {

    cropImage: function(image) {
      console.log('crop image');

      this.transitionToRoute('images');

    }

  }

});

