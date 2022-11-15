const ativar=(el)=>{
	let itens=document.getElementsByClassName("nav-link");
	for(i=0;i<itens.length;i++){
		itens[i].classList.remove("active")
	}
	el.children[0].classList.add("active")
}