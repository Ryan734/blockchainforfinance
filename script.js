document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Retrieve form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    // Display a success message
    document.getElementById("formMessage").textContent = `Thank you, ${name}. We will get back to you at ${email} soon!`;
    
    // Reset form fields
    document.getElementById("contactForm").reset();
});
