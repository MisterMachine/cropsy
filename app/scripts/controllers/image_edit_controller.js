Cropsy.ImageEditController = Ember.ObjectController.extend({

  needs: 'image',

  actions: {
    save: function(){
      var self = this;
      this.get('buffer').forEach(function(attr){
        self.get('controllers.image.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('image',this.get('model'));
    },

    setAspectRatio: function(image) {
      image = $(image);
    },

    resetImage: function(image) {
      this.transitionToRoute('/images/'+image.id);
    }

  }
});

