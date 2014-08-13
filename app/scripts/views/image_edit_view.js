Cropsy.ImageEditView = Ember.View.extend({

  didInsertElement: function() {

    // Instantiate the Image Cropper plugin
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

    // Add Aspect Ratio Dropdown click events
    $('.dropdown-toggle').on('click', function() {
      $('.dropdown').toggleClass('active');
    });

    $('.aspect-ratio').on('click', function() {
      var $ratio = $(this).data('value');
      $image.cropper("setAspectRatio", $ratio);
      $('.dropdown').removeClass('active');
    });

    $(".16-9-ratio").click(function() {
        $("#results-ratio")
        .removeClass("threextwo square")
        .addClass("sixteenxnine");
     });
 
     $(".3-2-ratio").click(function() {
        $("#results-ratio")
        .removeClass("sixteenxnine square")
        .addClass("threextwo");
     });
 
     $(".1-1-ratio").click(function() {
        $("#results-ratio")
        .removeClass("sixteenxnine threextwo")
       .addClass("square");
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

    // Output the results
    function setResults(data) {
      $("input[name='data-x']" ).val(data.x);
      $("input[name='data-y']" ).val(data.y);
      $("input[name='data-width']" ).val(data.width);
      $("input[name='data-height']" ).val(data.height);
    }

  }

});
