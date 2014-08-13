Cropsy.ImageEditController = Ember.ObjectController.extend({

  needs: 'image',

  actions: {

    setAspectRatio: function(image) {
      image = $(image);
    },

    resetImage: function(image) {
      this.transitionToRoute('/images/'+image.id);
    }

  }
});

