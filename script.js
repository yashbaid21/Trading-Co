AOS.init({ once: true, duration: 700, easing: 'ease-out-cubic' });

AOS.init();

const hamb = document.querySelector('.hamb');
const menu = document.querySelector('nav ul');

hamb.addEventListener('click', () => {
  hamb.classList.toggle('active');
  menu.classList.toggle('show');
  const open = hamb.classList.contains('active');
  hamb.setAttribute('aria-expanded', open ? 'true' : 'false');
});

// Close menu after clicking link (mobile)
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("show");
    hamb.classList.remove("active");
  });
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Simple client-side form handler
const form = document.getElementById('quoteForm');
const note = document.getElementById('formNote');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get('name').trim();
  const phone = data.get('phone').trim();
  const email = data.get('email').trim();
  const service = data.get('service');
  const message = data.get('message').trim();

  if (!name || !phone) {
    note.textContent = 'Please provide your name and phone number so we can contact you.';
    note.style.color = 'var(--warn)';
    return;
  }

  // Build WhatsApp message for quick contact
  const text = encodeURIComponent(`Quote Request from ${name}\nPhone: ${phone}\nEmail: ${email || '—'}\nLooking for: ${service}\nMessage: ${message || '—'}`);
  const wa = `https://wa.me/919999999999?text=${text}`;

  note.innerHTML = `Thanks, ${name}! We\'ll get back to you shortly. <a href="${wa}" target="_blank" rel="noopener">Send via WhatsApp</a> to speed things up.`;
  note.style.color = 'var(--ok)';

  form.reset();
});

// Hide/Show Navbar on Scroll
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll > 50) {
    // Scroll down → hide
    header.style.top = '-100px';
  } else {
    // Scroll up → show
    header.style.top = '0';
  }

  lastScroll = currentScroll;
});



// Close menu on link click (optional)
document.querySelectorAll('#menu a').forEach(link => {
  link.addEventListener('click', () => {
    hamb.classList.remove('active');
    menu.classList.remove('show');
  });
});

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  // Add shrink class
  if(currentScroll > 50){
    header.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
  }

  // Hide on scroll down, show on scroll up
  if (currentScroll > lastScroll && currentScroll > 100) {
    header.style.top = "-80px"; // hide
  } else {
    header.style.top = "0"; // show
  }
  lastScroll = currentScroll;
});

document.getElementById('year').textContent = new Date().getFullYear();
