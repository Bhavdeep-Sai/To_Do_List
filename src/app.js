var listOfActivities = [];
var input = document.getElementById("input");
var todolist = document.getElementById("todolist");
document.getElementById("button").onclick = click;

// Challenge 1 : - Complete the function such that a new activity can be added to the list on typing and clicking add. Show list function is already completed for you.
function click() {
  listOfActivities.push(input.value);
  console.log(listOfActivities);
  input.value="";
  showList();
}



function showList() {
  todolist.innerHTML = "Your Tasks ";
 listOfActivities.forEach(function (n, i) {
    todolist.innerHTML +=
      "<li>" +
      n +
      "<a onclick='editItem(" +
      i +
      ")'>Edit</a>" +
      "<a onclick='deleteItem(" +
      i +
      ")'>&times | </a></li>";
  });
}

// Challenge 2 : - On clicking the x mark, the added activity should be deleted. Complete the function that will enforce this action
function deleteItem(i) {
  listOfActivities.splice(i,1);
  showList();
}

// Challenge 3 :- On Clicking the edit, the made activity should be able to be edited. Complete the function accordingly

function editItem(i) {
  var newInput = prompt("Please insert your new task")
  listOfActivities.splice(i,1,newInput)
  showList();
}