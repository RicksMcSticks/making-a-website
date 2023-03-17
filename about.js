console.log("hello world");

let coon = document.querySelector(`#kitty`)

const catPic = () => {
    alert(`You are looking meowtastic!!`)
}

coon.addEventListener(`mouseover`, catPic)



function handleSubmit(evt) {
	
	evt.preventDefault();
	
	alert(`Form submitted successfully!`)

	
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);