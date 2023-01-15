//Varaiables
const toDoItems = document.getElementsByClassName("to-do-items")[0];

const input = document.getElementById("input");

const trashIcon = document.getElementById("trash");


//Event Implementation
input.addEventListener("keydown", function(event) {
				if(event.key === "Enter")
				addItem();
})


//Programming addItem()
function addItem() {
				var divParent = document.createElement("div");
				
				var divChild = document.createElement("div");
				
				var checkIcon = document.createElement("i");
				
				var trashIcon = document.createElement("i");
				
				divParent.className = "item";
				divParent.innerHTML = '<div>' + input.value + '<div>';
				
				checkIcon.className = "bi bi-check-lg";
				checkIcon.style.color = "lightgrey";
				checkIcon.addEventListener("click", function(){
								checkIcon.style.color = "limegreen";
				})
				divChild.appendChild(checkIcon);
				
				trashIcon.className = "bi bi-trash3-fill";
				
				trashIcon.style.color = "darkgrey";
				trashIcon.addEventListener("click", function() {
								divParent.remove()
				})
				
				divChild.appendChild(trashIcon);
				
				divParent.appendChild(divChild);
				
				toDoItems.appendChild(divParent);
				
				input.value = '';
}