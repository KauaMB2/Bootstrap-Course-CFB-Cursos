let barras=[...document.querySelectorAll('#pb')]
let carga=0
const intBarra=setInterval(()=>{
	barras.map((el)=>{
		el.innerHTML=Math.floor(carga)+"%"
		el.style.width=carga+"%"
	})
	carga=carga+0.1
	if(carga>=100){
		carga=0
	}
})


var currentlyClass=["bg-success","bg-success"]
const changeColor=()=>{
  let randomValue=Math.floor(Math.random()*5)
  barras.map((el,cont)=>{
	switch(randomValue){
	  	case 0:
	    	el.classList.remove(currentlyClass[cont])
	    	el.classList.add('bg-success')
	    	currentlyClass[cont]='bg-success'
	    	break;
	  	case 1:
	    	el.classList.remove(currentlyClass[cont])
	      	el.classList.add('bg-primary')
	      	currentlyClass[cont]='bg-primary'
	      	break;
	    case 2:
	      	el.classList.remove(currentlyClass[cont])
	      	el.classList.add('bg-info')
	      	currentlyClass[cont]='bg-info'
	      	break;
	    case 3:
	      	el.classList.remove(currentlyClass[cont])
	      	el.classList.add('bg-warning')
	      	currentlyClass[cont]='bg-warning'
	      	break;
	    case 4:
	      	el.classList.remove(currentlyClass[cont])
	      	el.classList.add('bg-danger')
	      	currentlyClass[cont]='bg-danger'
	      	break;
	    default:
	      	break;
	  }
	})
}