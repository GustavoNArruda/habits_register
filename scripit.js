const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')//está procurando o "button" dentro de "header" no index

button.addEventListener('click', add)//fica esperando um... click, quando acontece, puxa a função "add"
form.addEventListener("change", save)

function add(){
  const today = new Date().toLocaleDateString("pt-br").slice(0,-5) //pega o dia de hoje, deixa no padrão br e tira os ultimos 5 caracteres (que seriam /2023)
  const dayExists = nlwSetup.dayExists(today)
  if (dayExists){
    alert("dia ja cadastrado")
    return
  }
  nlwSetup.addDay(today)

}

function save(){
  localStorage.setItem('meuPcDahora', JSON.stringify(nlwSetup.data))//entre aspas é uma chave, o json pega a informação do nlwsetup.data e transforma em string

}
const data = JSON.parse(localStorage.getItem("meuPcDahora")) || {}//carrega os dados e volta eles para strings, usando a senha criada. "ou" objeto vazio pra não dar erro na primeira vez que o app for utilizado
nlwSetup.setData(data)
nlwSetup.load()