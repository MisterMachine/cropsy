/*global Ember*/
Cropsy.Image = DS.Model.extend({
  url : DS.attr('string'),
  title : DS.attr('string')
});

// probably should be mixed-in...
Cropsy.Image.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// delete below here if you do not want fixtures
Cropsy.Image.FIXTURES = [
  
  {
    id: 0,
    url: 'http://fillmurray.com/650/400',
    title: 'Fill Murray'
  },
  
  {
    id: 1,
    url: 'http://www.fillmurray.com/700/400',
    title: 'Bourbon Murray'
  },

  {
    id: 2,
    url: 'http://www.fillmurray.com/600/500',
    title: 'Steve Murray'
  }

];
