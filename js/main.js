/**
 * Riotive Autowash Innovations - Main Interactive Script
 * Flawless mobile & PC browser interaction
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle & Backdrop Management
  const mobileToggle = document.getElementById('mobileToggle');
  const mainNav = document.getElementById('mainNav');

  // Create backdrop element if not already present
  let navBackdrop = document.querySelector('.nav-backdrop');
  if (!navBackdrop) {
    navBackdrop = document.createElement('div');
    navBackdrop.className = 'nav-backdrop';
    document.body.appendChild(navBackdrop);
  }

  function closeMobileNav() {
    if (mainNav && mainNav.classList.contains('open')) {
      mainNav.classList.remove('open');
      navBackdrop.classList.remove('active');
      if (mobileToggle) mobileToggle.innerHTML = '&#9776;';
      document.body.style.overflow = '';
    }
  }

  function openMobileNav() {
    if (mainNav) {
      mainNav.classList.add('open');
      navBackdrop.classList.add('active');
      if (mobileToggle) mobileToggle.innerHTML = '&times;';
      document.body.style.overflow = 'hidden';
    }
  }

  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = mainNav.classList.contains('open');
      if (isOpen) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });

    navBackdrop.addEventListener('click', closeMobileNav);

    // Close when tapping any navigation link
    mainNav.querySelectorAll('.nav-link, .dropdown-link').forEach(link => {
      link.addEventListener('click', () => {
        closeMobileNav();
      });
    });
  }

  // Wash Cycle Step Visualizer
  const cycleTabs = document.querySelectorAll('.cycle-step-tab');
  const cycleTitle = document.getElementById('cycleStageTitle');
  const cycleDesc = document.getElementById('cycleStageDesc');
  const cycleDuration = document.getElementById('cycleStageDuration');
  const cycleIcon = document.getElementById('cycleStageIcon');

  const cycleData = {
    degreaser: {
      title: 'Phase 1: Targeted Degreaser Spray',
      duration: '30 Seconds',
      icon: '🧪',
      desc: 'Dual dedicated chemical nozzles deliver a concentrated, industrial-grade solvent spray specifically targeting road oil, grease, engine grime, and chain residue.'
    },
    snowfoam: {
      title: 'Phase 2: Ultra Snow Foam Shampoo',
      duration: '30 Seconds',
      icon: '🫧',
      desc: 'High-density active snow foam thoroughly blankets the motorcycle exterior, encapsulating grit and abrasive dust particles to ensure 100% scratch-free wash safety.'
    },
    highpressure: {
      title: 'Phase 3: High-Pressure Robotic Rinse',
      duration: '3 Minutes 15 Seconds',
      icon: '🌊',
      desc: 'Pneumatically oscillating piston-pump jets sweep across 360-degree contours, stripping away all dissolved dirt and foam with powerful, pinpoint water streams.'
    }
  };

  if (cycleTabs.length > 0) {
    cycleTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        cycleTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const stepKey = tab.getAttribute('data-step');
        const data = cycleData[stepKey];
        if (data && cycleTitle && cycleDesc && cycleDuration && cycleIcon) {
          cycleTitle.textContent = data.title;
          cycleDesc.textContent = data.desc;
          cycleDuration.textContent = data.duration;
          cycleIcon.textContent = data.icon;
        }
      });
    });
  }

  // Lightbox Modal for Images & Posters
  const modalOverlay = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImageContent');
  const modalCaption = document.getElementById('modalCaptionText');
  const modalClose = document.getElementById('modalCloseBtn');
  const triggerImages = document.querySelectorAll('.lightbox-trigger');

  if (modalOverlay && modalImg && modalClose) {
    triggerImages.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const fullSrc = trigger.getAttribute('data-full') || trigger.getAttribute('src');
        const caption = trigger.getAttribute('data-caption') || trigger.getAttribute('alt') || 'Riotive Engineering View';
        modalImg.src = fullSrc;
        if (modalCaption) modalCaption.textContent = caption;
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    function closeModal() {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
      }
    });
  }

  // Video Modal
  const videoModal = document.getElementById('videoModal');
  const videoCloseBtn = document.getElementById('videoCloseBtn');
  const videoCards = document.querySelectorAll('.video-card-trigger');

  if (videoModal && videoCloseBtn) {
    videoCards.forEach(card => {
      card.addEventListener('click', () => {
        const videoTitle = card.getAttribute('data-title') || 'Riotive System Demo';
        const titleEl = document.getElementById('videoModalTitle');
        if (titleEl) titleEl.textContent = videoTitle;
        videoModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    function closeVideoModal() {
      videoModal.classList.remove('active');
      document.body.style.overflow = '';
    }

    videoCloseBtn.addEventListener('click', closeVideoModal);
    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) closeVideoModal();
    });
  }

  // Quotation & WhatsApp Form Integration
  const quoteForm = document.getElementById('quotationForm');
  const sendWhatsAppBtn = document.getElementById('btnSendWhatsApp');

  function getFormData() {
    const name = (document.getElementById('inqName')?.value || '').trim() || 'Valued Client';
    const phone = (document.getElementById('inqPhone')?.value || '').trim() || 'Not provided';
    const product = (document.getElementById('inqProduct')?.value || '').trim() || 'Aqua Dragon Automated Wash';
    const location = (document.getElementById('inqLocation')?.value || '').trim() || 'Sri Lanka';
    const message = (document.getElementById('inqMessage')?.value || '').trim() || 'Inquiry about machinery purchase, bay civil guidelines, and setup.';
    return { name, phone, product, location, message };
  }

  function buildWhatsAppUrl(data) {
    const text = `*RIOTIVE AUTOWASH INNOVATIONS - OFFICIAL INQUIRY*%0A%0A` +
                 `👤 *Full Name:* ${encodeURIComponent(data.name)}%0A` +
                 `📞 *Phone / WhatsApp:* ${encodeURIComponent(data.phone)}%0A` +
                 `⚙️ *Machinery of Interest:* ${encodeURIComponent(data.product)}%0A` +
                 `📍 *Bay Location / City:* ${encodeURIComponent(data.location)}%0A` +
                 `📝 *Requirements / Details:*%0A${encodeURIComponent(data.message)}%0A%0A` +
                 `_Submitted via Riotive Innovations Official Website_`;
    return `https://wa.me/94741643595?text=${text}`;
  }

  function buildMailtoUrl(data) {
    const subject = encodeURIComponent(`Official Machinery Inquiry - ${data.name} (${data.product})`);
    const body = encodeURIComponent(
      `RIOTIVE AUTOWASH INNOVATIONS (PVT) LTD - OFFICIAL INQUIRY\n` +
      `=======================================================\n\n` +
      `Full Name: ${data.name}\n` +
      `Phone / WhatsApp: ${data.phone}\n` +
      `Machinery of Interest: ${data.product}\n` +
      `Bay Location / City: ${data.location}\n\n` +
      `Facility Requirements / Notes:\n${data.message}\n\n` +
      `---\n` +
      `Sent via Riotive Innovations Website\n` +
      `Target: riotiveinnovations@gmail.com | WhatsApp: +94 74 164 3595`
    );
    return `mailto:riotiveinnovations@gmail.com?subject=${subject}&body=${body}`;
  }

  // "Send via WhatsApp" Button Click Handler
  if (sendWhatsAppBtn) {
    sendWhatsAppBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const data = getFormData();
      const waUrl = buildWhatsAppUrl(data);
      window.open(waUrl, '_blank');
    });
  }

  // "Submit Official Inquiry" Form Handler
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = getFormData();
      const waUrl = buildWhatsAppUrl(data);
      const mailUrl = buildMailtoUrl(data);
      const statusNotice = document.getElementById('formStatusNotice');

      // 1. Instantly open WhatsApp chat to 074 164 3595 with filled data
      window.open(waUrl, '_blank');

      // 2. Dispatch email to riotiveinnovations@gmail.com
      const emailPayload = {
        name: data.name,
        phone: data.phone,
        machinery_product: data.product,
        location: data.location,
        requirements_message: data.message,
        _subject: `New Official Machinery Inquiry from ${data.name} - ${data.product}`,
        _replyto: data.phone,
        _captcha: "false"
      };

      // Background delivery to riotiveinnovations@gmail.com
      fetch('https://formsubmit.co/ajax/riotiveinnovations@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(emailPayload)
      }).catch(err => {
        console.log('Background email dispatch:', err);
      });

      // Also trigger direct mailto protocol for default mail app
      setTimeout(() => {
        const mailAnchor = document.createElement('a');
        mailAnchor.href = mailUrl;
        mailAnchor.target = '_blank';
        mailAnchor.click();
      }, 400);

      // 3. Display comprehensive confirmation status on the form
      if (statusNotice) {
        statusNotice.style.display = 'block';
        statusNotice.innerHTML = `
          <div style="background: rgba(16, 185, 129, 0.12); border: 1px solid #10b981; color: #ffffff; padding: 18px 22px; border-radius: 10px; margin-top: 18px;">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
              <span style="font-size: 1.3rem;">✅</span>
              <strong style="color: #10b981; font-size: 1.05rem;">Official Inquiry Dispatched!</strong>
            </div>
            <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 12px;">
              Your filled inquiry details have been forwarded to <strong>riotiveinnovations@gmail.com</strong>, and a WhatsApp chat to <strong>074 164 3595</strong> has opened in a new tab.
            </p>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              <a href="${waUrl}" target="_blank" class="btn btn-whatsapp btn-sm">💬 WhatsApp Chat (074 164 3595)</a>
              <a href="${mailUrl}" class="btn btn-secondary btn-sm">✉️ Open Email Draft</a>
            </div>
          </div>
        `;
        quoteForm.reset();
      }
    });
  }

  // Machine Product Cards Keyboard Accessibility
  document.querySelectorAll('.product-card[data-href]').forEach(card => {
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        window.location.href = card.getAttribute('data-href');
      }
    });
  });
});
