(function ($) {

  $('#register-form').on('submit', function (form) {

    form.preventDefault();
    var password = $(this).find("input[name='password']").val();
    var confirmPassword = $(this).find("input[name='confirmPassword']").val();

    if (password !== confirmPassword) {
      return alert('Password not matched');
    }

    $('#register-form').trigger("reset");

  });

})(jQuery);