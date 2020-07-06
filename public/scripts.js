const cards = document.querySelectorAll('.recipe-card');

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', () => {
        const id = i

        window.location.href = `/recipes/${id}`
    })
}

const card = document.querySelector('.recipe');
const btnIngre = document.querySelector('#btn-ingredient');
const btnPrep = document.querySelector('#btn-preparation');
const btnInfo = document.querySelector('#btn-info');

btnIngre.addEventListener('click', () => {
    const cardIngredient = document.querySelector('.card-ingredient');

    if (cardIngredient.classList.contains('show-info-active')) {
        cardIngredient.classList.remove('show-info-active');
        btnIngre.innerHTML = 'Mostrar';
    } else {
        cardIngredient.classList.add('show-info-active');
        btnIngre.innerHTML = 'Esconder';
    }
});

btnPrep.addEventListener('click', () => {
    const cardPreparation = document.querySelector('.card-preparation')

    if (cardPreparation.classList.contains('show-info-active')) {
        cardPreparation.classList.remove('show-info-active');
        btnPrep.innerHTML = 'Mostrar';
    } else {
        cardPreparation.classList.add('show-info-active');
        btnPrep.innerHTML = 'Esconder';
    }
});

btnInfo.addEventListener('click', () => {
    const cardInfo = document.querySelector('.text-info');

    if (cardInfo.classList.contains('show-info-active')) {
        cardInfo.classList.remove('show-info-active');
        btnInfo.innerHTML = 'Mostrar';
    } else {
        cardInfo.classList.add('show-info-active');
        btnInfo.innerHTML = 'Esconder';
    }
});