var forms = document.querySelectorAll('.needs-validation')

// Loop over them and prevent submission
Array.prototype.slice.call(forms).forEach(function (form) {//Passa por cada elemento dentro do formulário
  console.log(form)
  form.addEventListener('submit', function (event) {//Adiciona o escutador de "submit" no formulário
    console.log(event+"\n"+form.checkValidity())
    if (!form.checkValidity()) {//Verifica se todos os dados são válidos
      event.preventDefault()//Impede o envio do formulário
      event.stopPropagation()//Para  apropagação(???????????)
    }
    form.classList.add('was-validated')//Adiciona a classe no formulário
  }, false)
})