Cropsy.ImageController = Ember.ObjectController.extend({

  actions: {

    edit: function(image) {
      this.transitionToRoute('/images/'+image.id+'/edit');
    }

  }

});

