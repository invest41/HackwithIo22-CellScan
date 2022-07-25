$(document).ready(function () {
    // Init
    $('.image-section').hide();
    $('.loader').hide();
    $('#result').hide();

    // Upload Preview
    function readURL(input) {
        if (input.files && input.files[0]) {
            // $('#my_image').attr('src','second.jpg');
            // var reader = new FileReader();
            // reader.onload = function (e) {
            //     console.log(e)
            //     $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
            //     $('#imagePreview').hide();
            //     $('#imagePreview').fadeIn(650);
            // }
            // reader.readAsDataURL(input.files[0]);
           const img =  document.getElementById('image-output')
           img.src = URL.createObjectURL($('input[type=file]')[0].files[0])
        }
    }
    $("#imageUpload").change(function () {
        $('.image-section').show();
        $('#btn-predict').show();
        $('#result').text('');
        $('#result').hide();
        readURL(this);
    });

    // Predict
    $('#btn-predict').click(function () {
        var form_data = new FormData();
<<<<<<< HEAD
        form_data.append("image", $('input[type=file]')[0].files[0]);
=======
        form_data.append("file", $('input[type=file]')[0].files[0]);
>>>>>>> af79d27c9121ad2488f36b6f19867f07dd8a022c

        // Show loading animation
        $(this).hide();
        $('.loader').show();

        // Make prediction by calling api /predict
        $.ajax({
            type: 'POST',
<<<<<<< HEAD
            url: 'http://35.239.79.117/predict',
=======
            url: '/predict',
>>>>>>> af79d27c9121ad2488f36b6f19867f07dd8a022c
            data: form_data,
            contentType: false,
            cache: false,
            processData: false,
            async: true,
            success: function (data) {
                // Get and display the result
                $('.loader').hide();
                $('#result').fadeIn(600);
                // $('#result').text(' Result:  ' + JSON.stringify(data));
                $('#result').text(' Result:  ' + data);
                console.log('Success!');
            },
        });
    });

});
