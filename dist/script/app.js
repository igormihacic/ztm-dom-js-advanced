const newTask = document.querySelector("#addTask");
const input = document.querySelector("#task");
const tasksContainer = document.querySelector("#taskList");

newTask.addEventListener("submit", (e) => {
	e.preventDefault();

	let inputValue = input.value;
	inputValue = inputValue.trim();

	if (inputValue.length > 0) {
		addTask(inputValue);
	} else {
		window.alert("Please enter a task!");
	}
});

function addTask(task) {
	// create div task container
	const divTaskContainer = document.createElement("div");
	divTaskContainer.setAttribute("class", "listItem flex flex-row");
	tasksContainer.appendChild(divTaskContainer);

	// create task text container
	const divTask = document.createElement("div");
	divTask.setAttribute(
		"class",
		"task flex-1 bg-c2 rounded-lg p-2 my-1 border border-c2"
	);
	divTaskContainer.appendChild(divTask);

	//create input filed with actual task text
	const divTaskInput = document.createElement("input");
	divTaskInput.setAttribute("type", "text");
	divTaskInput.setAttribute(
		"class",
		"form-input p-0 m-0 bg-transparent border-0 focus:ring-transparent w-full"
	);
	divTaskInput.setAttribute("value", task);
	divTaskInput.disabled = true;
	divTask.appendChild(divTaskInput); /*

	/* ************************ */
	/* Create buttons           */
	/* ************************ */

	// edit/save btn div
	const editSaveBtn = document.createElement("div");
	editSaveBtn.setAttribute(
		"class",
		"edit flex-none bg-c5 rounded-lg p-2 m-1 ml-2 text-c1 w-16 text-center cursor-pointer hover:bg-c1 hover:border hover:border-c5 hover:text-c5"
	);
	editSaveBtn.appendChild(document.createTextNode("Edit"));
	divTaskContainer.appendChild(editSaveBtn);

	// done btn div
	const doneBtn = document.createElement("div");
	doneBtn.setAttribute(
		"class",
		"done flex-none bg-c5 rounded-lg p-2 m-1 ml-2 text-c1 w-16 text-center cursor-pointer hover:bg-c1 hover:border hover:border-c5 hover:text-c5"
	);
	doneBtn.appendChild(document.createTextNode("Done"));
	divTaskContainer.appendChild(doneBtn);

	// delete btn div
	const deleteBtn = document.createElement("div");
	deleteBtn.setAttribute(
		"class",
		"delete flex-none bg-c5 rounded-lg p-2 m-1 mr-0 text-c1 w-16 text-center cursor-pointer hover:bg-c1 hover:border hover:border-c5 hover:text-c5"
	);
	deleteBtn.appendChild(document.createTextNode("Delete"));
	divTaskContainer.appendChild(deleteBtn);
	// listener for delete action
	deleteBtn.addEventListener("click", (e) => {
		tasksContainer.removeChild(divTaskContainer);
	});

	input.value = "";
	document.querySelector("#task").focus();
}

// console.log("Task submited!");
// console.log(input.value);
// console.log(input.value.length);
// console.log("Task length before trim: " + input.value.length);
// console.log(input.value);
// console.log("Task length after trim: " + inputValue.length);
// console.log(inputValue);
