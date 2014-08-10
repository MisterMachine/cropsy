Cropsy.Router.map(function () {
  
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

  this.resource('results', function(){
    this.resource('image', { path: '/:image_id' } );
  });


  this.resource('notifications');
  
});
