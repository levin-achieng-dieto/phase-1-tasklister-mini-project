// // let funct = function(fun1){
//   // document.getElementById('new-task-description').innerHTML = document.querySelector('h2').innerHTML


// // }
// // funct()


// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
//   document.getElementById("create-task-form").addEventListener("submit", (e) =>{
//     e.preventDefault()
//    handleToDo(e.target.new_task_description.value)
//   })
// })

// // let button = document.querySelector("submit")
// // button.addEventListener("click", funct())



// const toDo = document.getElementById('new-task-description')
// const toDoList = document.getElementById('tasks')
// const addToDo = document.querySelector('submit')

// addToDo.addEventListener('click', function(){
//   // e.preventDefault();
//   const paragraph = document.createElement('p')
//   paragraph.innerText = toDo.value;
//   toDoList.appendChild(paragraph)
// })



// // document.addEventListener("DOMContentLoaded", () => {
// //   // your code here
// //   document.getElementById("create-task-form").addEventListener("submit", (e) =>{
// //     e.preventDefault()
// //    handleToDo(e.target.new_task_description.value)
// //   })
// // })
// // function handleToDo(todo){
// //   let p = document.createElement('p')
// //   let btn = document.createElement('button')
// //   btn.addEventListener('click', handleDelete)
// //   btn.textContent = 'x'
// //   p.textContent = toDo.value
// //   p.appendChild(btn)
// //   document.getElementById("tasks").appendChild(p)
// // }
// // function handleDelete(e){
// //   e.target.parentNode.remove()
// // }
const text = document.querySelector('#new-task-description')
// console.log(text);

function createToDo(){
  const p = document.createElement('p')
  p.textContent = text.value
  const button = document.createElement('button')
  button.textContent = 'x'
  p.appendChild(button)
  document.querySelector('#tasks').appendChild(p)
  // console.log(p);

  button.addEventListener('click', function(){
    button.parentNode.remove()
  })

  const selectColors = document.createElement('select')
  const red = document.createElement('option')
  red.textContent = 'red'
  red.style.backgroundColor = "red";
  const green = document.createElement('option')
  green.textContent = "green"
  green.style.backgroundColor = "green"
  const yellow = document.createElement('option')
  yellow.textContent = "yellow"
  yellow.style.backgroundColor = "yellow"


  selectColors.append(red, green, yellow)

  p.appendChild(selectColors)
  console.log(p);
  
  selectColors.addEventListener("click", function(){
    p.style.backgroundColor = selectColors
  })

}

document.getElementById('create-task-form').addEventListener('submit', function(e){
e.preventDefault()
createToDo()
})

