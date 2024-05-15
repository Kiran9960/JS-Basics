
let inputElem = document.getElementById("inputField");
let clickBtn = document.querySelector(".btn");
let todoElem = document.querySelector(".todoListsElem");
// let todoFirst = document.getElementById("todoFirst");

const addTodo = () => {
  console.log(inputElem.value);
  // todoFirst.textContent = inputElem.value;
  let pElem = document.createElement("p");
  pElem.textContent = inputElem.value;
  console.log(pElem);
  todoElem.append(pElem);

  inputElem.value = "";
};

clickBtn.addEventListener("click", () => {
  addTodo();
});

todoElem.addEventListener("click", (event) => {
  console.log(event.target);
  let currentElem = event.target;
  currentElem.remove();
});