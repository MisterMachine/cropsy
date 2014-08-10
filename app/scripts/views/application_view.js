Cropsy.ApplicationView = Ember.View.extend({

  didInsertElement: function() {
    $('.viewer').zoomer();

    $('.crop').cropbox({width: 600, height: 250})
    .on('cropbox', function (e, result) {
        console.log(result);
    });

    var $image = $(".img-container img"),
    $dataX = $("#data-x"),
    $dataY = $("#data-y"),
    $dataHeight = $("#data-height"),
    $dataWidth = $("#data-width");

    $image.cropper({
        aspectRatio: 16 / 9,
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


    $("#free-ratio").click(function() {
        $image.cropper("setAspectRatio", "auto");
    });

  }  

});
