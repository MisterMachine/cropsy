Cropsy.ImageEditView = Ember.View.extend({

  didInsertElement: function() {

    var $image = $(".img-container img")

    $image.cropper({
        aspectRatio: 16 / 9,
        dragCrop: false,
        data: {
            x: 480,
            y: 60,
            width: 640,
            height: 360
        },
        preview: ".img-preview",
        done: function(data) {
          setResults(data);
        }
    });

    $('.aspect-ratio').on('click', function() {
      $ratio = $(this).data('value');
      $image.cropper("setAspectRatio", $ratio);
    });

    function setResults(data) {
      $("input[name='data-x']" ).val(data.x);
      $("input[name='data-y']" ).val(data.y);
      $("input[name='data-width']" ).val(data.width);
      $("input[name='data-height']" ).val(data.height);
    }

  }

});
