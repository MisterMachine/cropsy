Cropsy.ImageEditView = Ember.View.extend({

  didInsertElement: function() {

    var $image = $(".image-container img");

    $image.cropper({
        aspectRatio: 16 / 9,
        dragCrop: false,
        data: {
            x: 100,
            y: 100,
            width: 320,
            height: 180
        },
        preview: ".image-preview",
        done: function(data) {
          setResults(data);
        }
    });

    $('.aspect-ratio').on('click', function() {
      var $ratio = $(this).data('value');
      $image.cropper("setAspectRatio", $ratio);
    });

    // Added this from proto. Needs tuning
    $("#toggle-preview").click(function() {
        $("#preview")
        .removeClass("invisible")
        .toggleClass("active");
        $('html, body').animate({
        scrollTop: $("#preview").offset().top
        }, 500);
    });

    // Destroy the tool and screen when done cropping
    $('.reset-image').on('click', function() {
      $image.cropper("destroy");
    });

    function setResults(data) {
      $("input[name='data-x']" ).val(data.x);
      $("input[name='data-y']" ).val(data.y);
      $("input[name='data-width']" ).val(data.width);
      $("input[name='data-height']" ).val(data.height);
    }

  }

});
