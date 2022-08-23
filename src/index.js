

let funct = function(fun1){
  document.getElementById('new-task-description').innerHTML = document.querySelector('h2').innerHTML
}

let button = document.querySelector("submit")
button.addEventListener("click", funct())