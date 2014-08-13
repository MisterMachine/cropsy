Cropsy.ImageEditController = Ember.ObjectController.extend({

  actions: {

    setAspectRatio: function(image) {
      image = $(image);
    },

    resetImage: function(image) {
      this.transitionToRoute('/images/'+image.id);
    }

  }
});

