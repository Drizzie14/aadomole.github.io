document.addEventListener("DOMContentLoaded", function () {
  // ✅ Initialize EmailJS
  emailjs.init({
    publicKey: "hOEiBKtAuZt0G-xD3", // your actual public key
  });

  // ✅ Contact form handling
  const form = document.getElementById("contact-form");
  const messageDiv = document.getElementById("form-message");

  if (!form) {
    console.error("❌ Contact form not found in the DOM!");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Show sending message
    messageDiv.innerHTML = '<span style="color:#7500fd;">Sending message...</span>';

    // Send email
    emailjs.sendForm("service_frb8uz8", "template_1m1r0v9", form)
      .then(() => {
        messageDiv.innerHTML = '<span style="color:green;">✅ Message sent successfully!</span>';
        form.reset();
      })
      .catch((error) => {
        console.error("❌ EmailJS Error:", error);
        messageDiv.innerHTML = '<span style="color:red;">❌ Failed to send message. Please check the console.</span>';
      });
  });

  // ✅ Footer year update
  document.querySelectorAll("#year, #year2, #year3, #year4").forEach(el => {
    el.textContent = new Date().getFullYear();
  });
});
