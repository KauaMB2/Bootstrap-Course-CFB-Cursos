var currentlyClass="alert-secondary"
const changeColor=()=>{
  let div=document.getElementById('i')
  let text=document.getElementById('text')
  let randomValue=Math.floor(Math.random()*5)
  console.log(randomValue)
  switch(randomValue){
    case 0:
      div.classList.remove(currentlyClass)
      div.classList.add('alert-secondary')
      currentlyClass='alert-secondary'
      text.innerHTML='alert-secondary'
      break;
    case 1:
      div.classList.remove(currentlyClass)
      div.classList.add('alert-primary')
      currentlyClass='alert-primary'
      text.innerHTML='alert-primary'
      break;
    case 2:
      div.classList.remove(currentlyClass)
      div.classList.add('alert-info')
      currentlyClass='alert-info'
      text.innerHTML='alert-info'
      break;
    case 3:
      div.classList.remove(currentlyClass)
      div.classList.add('alert-warning')
      currentlyClass='alert-warning'
      text.innerHTML='alert-warning'
      break;
    case 4:
      div.classList.remove(currentlyClass)
      div.classList.add('alert-danger')
      currentlyClass='alert-danger'
      text.innerHTML='alert-danger'
      break;
    default:
      break;
  }
}