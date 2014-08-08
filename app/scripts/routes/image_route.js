Cropsy.ImageRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('image', params.image_id);
  }
});

