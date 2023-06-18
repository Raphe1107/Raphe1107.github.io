const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowLeft = document.querySelector (".arrow_left");
const arrowRight = document.querySelector (".arrow_right");

document.querySelector(".dots").innerHTML = 
'<div class="dot"></div>'
+'<div class="dot"></div>'
+'<div class="dot"></div>'
+'<div class="dot"></div>';

// On défini l'index de la diapositive actuelle
let currentSlide = 0;

// Fonction qui permet d'afficher la diapositive actuelle 
function showSlide() {

	// On récupècure nos éléments dans le HTML
	const tagLine = document.querySelector ("#banner p");
	const Image = document.querySelector (".banner-img");

	// On récupère l'objet de la diapositive correspondante à l'index actuel
	const currentSlideObj = slides[currentSlide];


	// On met à jour l'image de la diapositive
	Image.src = `./assets/images/slideshow/${currentSlideObj.image}`;

	// On met à jour la tagLine de la diapositive
	tagLine.innerHTML = currentSlideObj.tagLine;

	const dots = document.querySelectorAll('.dot');

	// On défini le point actif en fonction de la diapositive 
	dots.forEach((dot, dotPosition) => {
	if (dotPosition === currentSlide) {
		dot.classList.add('dot_selected');
	} else {
		dot.classList.remove('dot_selected');
	}
	});
};

// On ajoute un évenement sur la flèche de gauche 
arrowLeft.addEventListener ("click" , ()=> {
	// On décrémente l'index de la diapositive actuelle 
	currentSlide--;

	// On vérifie avec la condition if si l'index est inférieur à 0 et donc revenir à la diapositive précédente
	if (currentSlide <0) {
		currentSlide = slides.length - 1;
	}
	
	// On affiche la diapostive mise à jour
	showSlide();
});

// On ajoute un évenement sur la flèche de droite
arrowRight.addEventListener ("click" , ()=> {
	// On incrémente l'index de la diapositive actuelle 
	currentSlide ++;

	// On vérifie si l'index dépasse la dernière diapositive
	if (currentSlide >= slides.length) {
		currentSlide = 0; // On réinitialise l'index à 0 
	}

	// On affiche la diapostive mise à jour
	showSlide();
});

showSlide();










