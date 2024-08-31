const submit = document.getElementById('submit-btn');
submit.addEventListener('click', function() {
  const phoneNumber = '6287876220034';  
  const fullName = document.getElementById('form_name').value.trim();
  const email = document.getElementById('form_email').value.trim();
  const subject = document.getElementById('form_subject').value.trim();
  const message = document.getElementById('form_message').value.trim();

  if (fullName == '' || email == '' || subject == '' || message == '') {
    alert('Please fill the information')
  } else {
    window.open(`
      https://api.whatsapp.com/send?phone=${phoneNumber}&text=Name:%20${fullName}%0AEmail:%20${email}%0ASubject:%20${subject}%0AMessage:%20${message}
    `);
  }

})