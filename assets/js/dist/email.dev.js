"use strict";

var btn = document.getElementById('button');
document.getElementById('form').addEventListener('submit', function (event) {
  event.preventDefault();
  btn.value = 'Sending...';
  var serviceID = 'default_service';
  var templateID = 'template_fpa1qrg';
  emailjs.sendForm(serviceID, templateID, this).then(function () {
    btn.value = 'Send Email';
    alert('message sent successfully!');
  }, function (err) {
    btn.value = 'Send Email';
    alert(JSON.stringify(err));
  });
});
//# sourceMappingURL=email.dev.js.map
