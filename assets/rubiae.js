(() => {
  const toggle = document.querySelector('[data-menu-toggle]');
  const navigation = document.getElementById('SiteNavigation');
  const label = document.querySelector('[data-menu-label]');

  if (!toggle || !navigation || !label) return;

  const setOpen = (isOpen) => {
    navigation.classList.toggle('is-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? toggle.dataset.closeMenu : toggle.dataset.openMenu);
    label.textContent = isOpen ? toggle.dataset.closeMenu : toggle.dataset.openMenu;
  };

  toggle.addEventListener('click', () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });
})();
