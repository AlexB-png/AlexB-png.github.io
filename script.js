// const title = document.querySelector("h1");
// title.innerHTML = "hehe sd31";

// setInterval(() => {
//   title.innerHTML = title.innerHTML += "1";
// }, 1000);

// makes a window appear that says hello with opt to close
// const button = document.querySelector("button");
// button.addEventListener("click", () => {
//   dialog.close()
// })

// const dialog = document.querySelector("#MyDialog");
// setTimeout(() => {
//   dialog.showModal();
// }, 5000);

const PythonDialog = document.querySelector("#python");

const python = document.querySelector("#PythonButton");
python.addEventListener("click", () => {
  PythonDialog.showModal();
});

const PythonButton = document.querySelector("#ClosePython");
PythonButton.addEventListener("click", () => {
  PythonDialog.close();
});
