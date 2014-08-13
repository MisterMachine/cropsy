Cropsy.ImageEditRoute = Ember.Route.extend({

  model: function(params) {
    return this.get('store').find('image', this.modelFor('image').id);
  },

  setupController: function(controller, model){
    controller.set('model', model);
    var buffer = model.get('attributes').map(function(attr){
      return { key: attr.get('key'), value: attr.get('value') };
    });
    controller.set('buffer', buffer);
  }

});

