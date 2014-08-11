Cropsy.Router.map(function () {

  this.resource('patterns');
  
  this.resource('prototype');

  this.resource('images', function(){
    this.resource('image', { path: '/:image_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });

  this.resource('stage', {
    path: 'stage/:image_id'
  });

  this.resource('toolbar');

  this.resource('results', {
    path: 'results/:image_id'
  });

  this.resource('notifications');
  
});
