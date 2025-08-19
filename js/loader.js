export const initLoader = () => {
  const loader = document.querySelector('.intro__loader');
  if (!loader) return;

  loader.addEventListener('animationend', () => {
    const introEl = document.querySelector('.intro');
    if (!introEl) return;

    const introOverlay = document.createElement('div');
    introOverlay.className = 'intro__overlay';

    introOverlay.addEventListener('animationstart', () => {
      setTimeout(() => introEl.remove(), 1000);
    });

    introOverlay.addEventListener('animationend', () => {
      setTimeout(() => introOverlay.remove(), 1000);
    });

    document.body.appendChild(introOverlay);
  });
}