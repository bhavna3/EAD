function validateForm() {
      // Validate Phone Number (10 digits)
      const phone = document.getElementById('phone').value;
      if (!/^\d{10}$/.test(phone)) {
          alert("Phone number must be 10 digit. Please enter NUMBER");
          return false;
      }
  
      // Validate Email (abc@gmail.com or abc@org.ac.in)
      const email = document.getElementById('email').value;
      if (!/^[a-zA-Z0-9._%+-]+@(gmail\.com|[a-zA-Z0-9._%+-]\.ac\.in)$/.test(email)) {
          alert("Email must be in the format abc@gmail.com or abc@org.ac.in.");
          return false;
      }
  
      // Validate Preferred Date (not in the past)
      const preferredDate = document.getElementById('preferredDate').value;
      const today = new Date().toISOString().split('T')[0];
      if (preferredDate < today) {
          alert("Preferred date cannot be in the past.");
          return false;
      }
  
      // Validate Designation (must be selected)
      const designation = document.getElementById('designation').value;
      if (designation === "") {
          alert("Please select your designation.");
          return false;
      }
  
      // Validate Topics (at least one selected)
      const topics = document.querySelectorAll('input[name="interests"]:checked');
      if (topics.length === 0) {
          alert("Please select at least one topic.");
          return false;
      }
  
      // If all validations pass
      alert("Form submitted successfully!");
      return true;
  }