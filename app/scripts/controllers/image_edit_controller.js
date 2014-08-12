Cropsy.ImageEditController = Ember.ObjectController.extend({

  needs: 'image',

  actions: {
    save: function(){
      self = this
      this.get('buffer').forEach(function(attr){
        self.get('controllers.image.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('image',this.get('model'));
    },

    setAspectRatio: function(image) {
      image = $(image);
    },

    cropImage: function(image) {
      this.transitionToRoute('/images/'+image.id);
    }

  }
});

