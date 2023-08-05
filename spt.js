function genPassword() {
    let displayPassword = document.getElementById('display-password');
    let passwordLength = document.getElementById('password-length').value;
    let error = document.getElementById('error-info');
    let password = '';
    let characters = 
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()+~}{[]=';
  
    parseInt(passwordLength);
    if (passwordLength == 0) {
      error.innerHTML = 'Please select password length';
      displayPassword.value = 'Please select password length';
      error.style.padding = '10px 20px';
      setTimeout(() => {
        error.style.visibility = 'hidden';
        window.location.reload();
      }, 2000);
    }
  
    for (let i = 0; i < passwordLength; i++) {
   // password += String.fromCharCode(Math.floor(Math.random() * characters.length));
     password += characters[Math.floor(Math.random() * characters.length)];
    }
    displayPassword.value = password;
  }

  
