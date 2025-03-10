document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault();
  
      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;
      var errorMessage = document.getElementById('error-message');
  
      // Simple validation
      if (username === '' || password === '') {
          errorMessage.textContent = 'Please fill in both fields.';
      } else {
          errorMessage.textContent = '';
          // Perform actual login (e.g., AJAX request to server)
          alert('Login successful!');
      }
  });
  