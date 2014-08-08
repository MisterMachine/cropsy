Cropsy.ImagesRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('image');
  }
});

