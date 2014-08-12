Cropsy.PatternsView = Ember.View.extend({

  didInsertElement: function() {

    var $image = $(".img-container img"),
      $dataX = $("#data-x"),
      $dataY = $("#data-y"),
      $dataHeight = $("#data-height"),
      $dataWidth = $("#data-width")

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
            $dataX.val(data.x);
            $dataY.val(data.y);
            $dataHeight.val(data.height);
            $dataWidth.val(data.width);
        }
    });

    $("#reset").click(function() {
        $image.cropper("reset");
    });

    $('.aspect-ratio').on('click', function() {
      $ratio = $(this).data('value');
      $image.cropper("setAspectRatio", $ratio);
    });

  }

});
