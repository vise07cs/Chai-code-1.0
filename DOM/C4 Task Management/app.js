const addButton = document.getElementById("addButton");
const taskInput = document.getElementById("taskInput");

const ul = document.getElementById("taskList");
const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const checkbox = document.getElementById("myCheckbox");

const p1 = document.getElementById("empty-list");
let count = 0;

let completedTaskCount = 0;

function addTask() {
  const checkbox = document.createElement("input"); // Create an input element
  checkbox.type = "checkbox"; // Set type as checkbox
  checkbox.id = "dynamicCheckbox"; // Set an ID (optional)

  const li = document.createElement("li");
  li.id = "li";
  li.textContent = taskInput.value; // Set task text

  li.prepend(checkbox);

  ul.appendChild(li);
  count = count + 1;
  totalCount();

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.id = "delete-btn";

  li.appendChild(deleteButton);
  deleteButton.onclick = () => {
    ul.removeChild(li);
    count = count - 1;
    totalCount();
  };

  checkbox.addEventListener("change", function () {
    if (this.checked) {
      li.style.backgroundColor = "red"; // Task turns red when checked
      deleteButton.disabled = true;
      completedTaskCount = completedTaskCount + 1;
      completedTask();
    } else {
      li.style.backgroundColor = "white"; // Reset to original color when unchecked
      deleteButton.disabled = false;
      completedTaskCount = completedTaskCount - 1;
      completedTask();
    }
  });

  // console.log(totalTasks.textContent)
  // console.log(completedTasks.textContent)

  function totalCount() {
    totalTasks.textContent = `{Total tasks: ${count}}`;
    if (count > 0) {
      p1.innerText = "";
    }
    if (count == 0) {
      p1.innerText = "No tasks yet. Add one above!";
    }
  }
  function completedTask() {
    completedTasks.textContent = `{Completed: ${completedTaskCount}}`;
  }
}
