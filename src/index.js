document.addEventListener("DOMContentLoaded", () => {
  // your code herez

const form = document.getElementById('create-task-form');
form = addEventListener('submit',dataSubmit)

})
function dataSubmit (event){
    event.preventDefault()
     // console.log("hfhfdj")

     listOfTasks= document.getElementById('tasks')
     const tasks = document.createElement('li')
     tasks.textContent =event.target.description.value;
     listOfTasks.append(tasks);

    const deleteButton = document.createElement('button')
  deleteButton.textContent = 'x'
  deleteButton.addEventListener('click', () => {
    //console.log ('xxx')
  task.remove()
  });
  task.append(deleteButton);

  event.target.reset();
}



     






