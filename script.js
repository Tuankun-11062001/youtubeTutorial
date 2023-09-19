// listen input

const input = document.querySelector("input");
const buttonSubmit = document.querySelector(".todo_submit");
const buttonEdit = document.querySelector(".todo_edit");
const todoError = document.querySelector(".todo_err");
const listTodo = document.querySelector(".todo_list");

input.addEventListener("focus", () => {
  todoError.innerHTML = "";
  input.classList.remove("error");
});

// create dom
const createDomElement = (value) => {
  const liEl = document.createElement("li");
  const pEl = document.createElement("p");
  const para = document.createTextNode(value);
  const divEl = document.createElement("div");
  const buttonCheck = document.createElement("button");
  const imageElCheck = document.createElement("img");
  const buttonTrash = document.createElement("button");
  const imageElTrash = document.createElement("img");
  liEl.classList.add("todo_item");
  pEl.appendChild(para);
  divEl.classList.add("todo_actions");

  imageElCheck.src = "./asset/check.svg";
  buttonCheck.classList.add("todo_check");
  buttonCheck.appendChild(imageElCheck);
  imageElTrash.src = "./asset/trash.svg";
  buttonTrash.classList.add("todo_trash");
  buttonTrash.appendChild(imageElTrash);
  divEl.appendChild(buttonCheck);
  divEl.appendChild(buttonTrash);

  liEl.appendChild(pEl);
  liEl.appendChild(divEl);

  buttonCheck.addEventListener("click", (e) => btnCheckFun(e));
  buttonTrash.addEventListener("click", (e) => btnTrashFun(e));

  //   pEl.addEventListener("click", (e) => editWork(e));

  return liEl;
};

const btnCheckFun = (e) => {
  const parent = e.target.parentElement.parentElement;
  parent.classList.add("success");
};

const btnTrashFun = (e) => {
  const parent = e.target.parentElement.parentElement;
  parent.classList.add("fall");
  parent.addEventListener("transitionend", () => {
    listTodo.removeChild(parent);
  });
};

// const editWork = (e) => {
//   const parent = e.target.parentElement;
//   console.log(e.target.parentElement);
//   let itemId;

//   listTodo.querySelectorAll(".todo_item").forEach((el) => {
//     if (el.classList.contains("edit")) {
//       el.classList.remove("edit");
//     }
//   });

//   parent.classList.add("edit");

//   listTodo.querySelectorAll(".todo_item").forEach((el) => {
//     if (el.classList.contains("edit")) {
//       itemId = el;
//       return;
//     }
//   });

//   let oldValue = itemId.querySelector("p").innerHTML;

//   buttonSubmit.classList.remove("action");
//   buttonEdit.classList.add("action");
//   input.value = oldValue;

//   buttonEdit.addEventListener("click", () => {
//     const newValue = input.value;
//     console.log(newValue);
//     itemId.querySelector("p").innerHTML = newValue;
//     buttonSubmit.classList.add("action");
//     buttonEdit.classList.remove("action");
//     parent.classList.remove("edit");
//     input.value = "";
//   });
//   console.log("h1");

//   return;
// };

buttonSubmit.addEventListener("click", () => {
  if (input.value === "") {
    todoError.innerHTML = "Please write your work";
    input.classList.add("error");
    return;
  }

  const liEl = createDomElement(input.value);
  listTodo.appendChild(liEl);

  input.value = "";
  input.focus();
});
