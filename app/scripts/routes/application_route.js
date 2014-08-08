Cropsy.ApplicationRoute = Ember.Route.extend({

  // Migrate this to IndexRoute
  model: function() {
    return this.get('store').find('image');
  }

});
