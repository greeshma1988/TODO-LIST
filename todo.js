const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container")
function addTask(){
    const task=inputBox.value.trim();
    if(!task){
        alert("please write down a task");
        return;
    }
  
    const li=document.createElement("li");
    li.innerHTML = `
  <label>
    <input type="checkbox">
    <span>${task}</span>
  </label>
  <span class="edit-btn"><button>Edit</button></span>
  <span class="delete-btn"><button>Delete</button></span>
`;

listContainer.appendChild(li);
    inputBox.value="";


  const checkbox=li.querySelector("input");
  const editbtn=li.querySelector(".edit-btn")
  const taskSpan=li.querySelector("span");
  
  checkbox.addEventListener("click",()=>{
    li.classList.toggle("completed",checkbox.checked)
    updateCounters();
  });
  editbtn.addEventListener("click", function () {
    const update = prompt("Edit task:", taskSpan.textContent);
    if (update !== null) {
      taskSpan.textContent = update;
      li.classList.remove("completed");
      checkbox.checked=false;
      updateCounters();
    }
  });
  const deleteBtn=li.querySelector(".delete-btn")
deleteBtn.addEventListener("click",function(){
  if(confirm("are you sure you want to delete the task?")){
    li.remove();
    updateCounters();
  }
});

  
}

const completedCounter = document.getElementById("completed-counter");
const uncompletedCounter = document.getElementById("uncompleted-counter");
function updateCounters() {
  const completedTasks = document.querySelectorAll(".completed").length;
  const uncompletedTasks =
    document.querySelectorAll("li:not(.completed)").length;

  completedCounter.textContent = completedTasks;
  uncompletedCounter.textContent = uncompletedTasks;
}
