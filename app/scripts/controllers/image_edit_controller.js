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
      console.log('set aspect ratio');
    },

    zoomIn: function(image) {
      console.log('zoom in');
    },

    zoomOut: function(image) {
      console.log('zoom out');
    },

    cropImage: function(image) {
      console.log(image.id);

      this.transitionToRoute('results', image.id);

    }


  }
});

