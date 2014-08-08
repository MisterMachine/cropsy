Cropsy.Router.map(function () {
  
  this.resource('images', function(){
    this.resource('image', { path: '/:image_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });
  
});
