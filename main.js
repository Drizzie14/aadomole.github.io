

document.addEventListener("DOMContentLoaded", function () {
  // ===== YEAR UPDATE =====
  document.querySelectorAll("#year, #year2, #year3, #year4").forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  // ===== EMAILJS INIT =====
  emailjs.init("Hg4KXLDg4ArTMDc6U"); // your public key

  const form = document.getElementById('contact-form');
  const messageDiv = document.getElementById('form-message');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    messageDiv.innerHTML = '<span style="color:#7500fd;">Sending message...</span>';

    emailjs.sendForm('service_y95g5mt', 'template_4kswyf5', this)
      .then(() => {
        messageDiv.innerHTML = '<span style="color:green;">✅ Message sent successfully!</span>';
        form.reset();
      })
      .catch(error => {
        console.error('EmailJS error:', error);
        messageDiv.innerHTML = '<span style="color:red;">❌ Failed to send message. Please try again later.</span>';
      });
  });

  // ===== OPTIONAL: ANIMATION (if #heroWaves exists) =====
  const canvas = document.getElementById("heroWaves");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let w, h, t = 0;

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = 200;
    }
    window.addEventListener("resize", resize);
    resize();

    function draw() {
      ctx.clearRect(0, 0, w, h);
      t += 0.004;
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        for (let x = 0; x <= w; x++) {
          const y = h / 2 + Math.sin(x * 0.015 + t + i) * (10 + i * 5);
          ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(117,0,253,${0.2 * (3 - i)})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }
      requestAnimationFrame(draw);
    }
    draw();
  }
});

