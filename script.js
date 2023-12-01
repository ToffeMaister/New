function launchRocket() {
  const rocket = document.createElement('div');
  rocket.className = 'rocket';
  document.body.appendChild(rocket);

  const x = Math.random() * window.innerWidth;
  const y = window.innerHeight;

  rocket.style.left = `${x}px`;
  rocket.style.bottom = '0';
  rocket.style.opacity = '1';

  setTimeout(() => {
    rocket.style.transform = 'translate(-20%, -100%)';
  }, 10);

  setTimeout(() => {
    rocket.remove();
  }, 2000);
}
