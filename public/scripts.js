const modalOverlay = document.querySelector('.modal-overlay');
const recipeCards = document.querySelectorAll('.recipe-card');

for (let recipeCard of recipeCards) {
  recipeCard.addEventListener('click', () => {
    modalOverlay.classList.add('active');
  });
}

document.querySelector('.modal-close').addEventListener('click', () => {
  modalOverlay.classList.remove('active');
});