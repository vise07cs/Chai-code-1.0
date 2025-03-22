function addButton(){
  // getting the value of item added 
  const todoInput = document.getElementById("todo"); // Get input element
  const todo_task = todoInput.value.trim(); // Get the value and trim spaces
  if(todo_task==""){
    alert("Add Items , input field cannot be empty")
    return
  }
  // adding todo list 
  const ul=document.getElementById("list-items")
  const li=document.createElement("li")
  li.textContent=todo_task

  let li_content=li.textContent;

  // console.log(typeof(li))
  ul.appendChild(li)

// creating a delete button next to li tag and adding functionlity to it . 
  const deleteButton=document.createElement("button")
  deleteButton.textContent="Delete"
  deleteButton.id="delete-btn";
  li.appendChild(deleteButton)

  deleteButton.onclick=()=>{
    ul.removeChild(li)
  }

  todoInput.value = "";
  todoInput.placeholder = "Enter task";

  // creating  an edit button next to delete button
  
  const editButton=document.createElement("button")
  editButton.textContent="Edit";
  editButton.id="edit-btn";
  li.appendChild(editButton);

  editButton.onclick=()=>{
    (todoInput.value=li_content)
    ul.removeChild(li)
  }


}


