console.log('connecté !')
// Je selectionne et je stocke
// la DIV switch
const switchBox = document.querySelector('.switch');
console.log(switchBox);
// la DIV btn (le cercle)
const btn = document.querySelector('.btn');
console.log(btn);
// l'icone
const icone = document.querySelector('i');
console.log(icone);
// la DIV container
const container = document.querySelector('.container');
console.log(container);
// le titre
const titre = document.querySelector('h1');
console.log(titre);

// Ajout écouteur evenement
switchBox.addEventListener('click', function(){
    console.log('DIV cliquée');
    btn.classList.toggle('btn-change');
    icone.classList.toggle('icone-change');
    icone.classList.toggle('fa-sun');
    switchBox.classList.toggle('switch-change');
    container.classList.toggle('container-change');
    if(titre.innerText === 'Dark-Mode'){
        titre.innerText = 'Light-Mode'
    }
    else{
        titre.innerText = 'Dark-Mode'
    }
});
