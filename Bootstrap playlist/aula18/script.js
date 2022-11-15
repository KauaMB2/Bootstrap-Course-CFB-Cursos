const ativar=(el)=>{
	let itens=document.getElementsByClassName("page-item");
	for(i=0;i<itens.length;i++){
		itens[i].classList.remove("active")
	}
	el.classList.add("active")
}