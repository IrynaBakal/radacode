window.onload = function(){
	var imgs = document.querySelectorAll(".cont_paws > img");
	console.log(imgs);
	for(let i=0; i<imgs.length; i++){
		imgs[i].classList.add("visible");
	
	}
	
}