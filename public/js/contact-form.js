/*
--------------------------------
Ajax Contact Form
--------------------------------
+ https://github.com/mehedidb/Ajax_Contact_Form
+ A Simple Ajax Contact Form developed in PHP with HTML5 Form validation.
+ Has a fallback in jQuery for browsers that do not support HTML5 form validation.
+ version 1.0.1
+ Copyright 2016 Mehedi Hasan Nahid
+ Licensed under the MIT license
+ https://github.com/mehedidb/Ajax_Contact_Form
*/

(function ($, window, document, undefined) {
    'use strict';

    var $form = $('#contact-form');

    $form.submit(function (e) {
        // remove the error class
        $('.form-group').removeClass('has-error');
        $('.help-block').remove();
        // get the form data
        var formData = {
            'subject' : $('input[name="form_subject"]').val(),
            'email' : $('input[name="form_email"]').val(),
            'phone' : $('input[name="form_phone"]').val(),
            'message' : $('textarea[name="form_message"]').val(),
            'token': $('input[name="_token"]').val()
        };

        // process the form
        $.ajax({
            type : 'POST',
            url: 'api/email',
            data : formData,
            dataType : 'json',
            encode : true
        }).done(function (data) {
            // handle errors
            if (!data.success) {
                if (data.errors.name) {
                    $('#name-field').addClass('has-error');
                    $('#name-field').find('.form-input').append('<span class="help-block">' + data.errors.name + '</span>');
                }

                if (data.errors.email) {
                    $('#email-field').addClass('has-error');
                    $('#email-field').find('.form-input').append('<span class="help-block">' + data.errors.email + '</span>');
                }

                if (data.errors.phone) {
                    $('#phone-field').addClass('has-error');
                    $('#phone-field').find('.form-input').append('<span class="help-block">' + data.errors.phone + '</span>');
                }

                if (data.errors.message) {
                    $('#message-field').addClass('has-error');
                    $('#message-field').find('.form-input').append('<span class="help-block">' + data.errors.message + '</span>');
                }
            } else {
                // display success message
                $form.html('<div class="alert alert-success">' + data.message + '</div>');
            }
        }).fail(function (data) {
            console.log(data);
            
            if(data.success){
                swal("Your message has Sent!", data.responseText, "success");
            }
        });

        e.preventDefault();
    });
}(jQuery, window, document));
