// JavaScript to trigger animation on page load
window.onload = () => {
  const elements = document.querySelectorAll('.brOne, .brTwo');
  elements.forEach(element => {
    element.style.animation = 'openingDoor 2s forwards';
  });
};
