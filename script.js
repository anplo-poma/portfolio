// =====================================================
// Lightbox — minimal, vanilla JS, keyboard-friendly
// =====================================================

(function () {
  const photos = Array.from(document.querySelectorAll('.gallery .photo'));
  if (photos.length === 0) return;

  // Build lightbox DOM
  const overlay = document.createElement('div');
  overlay.className = 'lightbox';
  overlay.innerHTML = `
    <button class="lightbox-close" aria-label="Close">×</button>
    <button class="lightbox-nav lightbox-prev" aria-label="Previous">‹</button>
    <button class="lightbox-nav lightbox-next" aria-label="Next">›</button>
    <img class="lightbox-img" src="" alt="">
    <div class="lightbox-counter"></div>
  `;
  document.body.appendChild(overlay);

  const img = overlay.querySelector('.lightbox-img');
  const counter = overlay.querySelector('.lightbox-counter');
  const closeBtn = overlay.querySelector('.lightbox-close');
  const prevBtn = overlay.querySelector('.lightbox-prev');
  const nextBtn = overlay.querySelector('.lightbox-next');

  let currentIndex = 0;

  function getImageSrc(photo) {
    const real = photo.querySelector('img');
    return real ? real.src : null;
  }

  function open(index) {
    const src = getImageSrc(photos[index]);
    if (!src) return; // skip placeholders without images
    currentIndex = index;
    img.src = src;
    img.alt = photos[index].querySelector('img').alt || '';
    counter.textContent = `${index + 1} / ${photos.length}`;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay.classList.remove('open');
    img.src = '';
    document.body.style.overflow = '';
  }

  function step(direction) {
    let i = currentIndex;
    for (let n = 0; n < photos.length; n++) {
      i = (i + direction + photos.length) % photos.length;
      if (getImageSrc(photos[i])) {
        open(i);
        return;
      }
    }
  }

  // Click on photo
  photos.forEach((photo, i) => {
    photo.addEventListener('click', () => open(i));
  });

  // Click on overlay (background) closes
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });

  closeBtn.addEventListener('click', close);
  prevBtn.addEventListener('click', (e) => { e.stopPropagation(); step(-1); });
  nextBtn.addEventListener('click', (e) => { e.stopPropagation(); step(1); });

  // Keyboard
  document.addEventListener('keydown', (e) => {
    if (!overlay.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') step(-1);
    if (e.key === 'ArrowRight') step(1);
  });
})();
