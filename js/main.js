let object = [
  (nodir = {
    name: "Doston Peschi",
  }),
  (ulugbek = {
    name: "Ulugbek ",
  }),
];
function decloration(arr) {
  let filter = arr.filter((item) => item.name.length > 8);
  console.log(filter);
  // Hoisting hossasi
  const map = arr.map((item) => item.name.length > 8);
  console.log(map);
  // Hoisting not in map
  //true || false
}
decloration(object);
let sub = document.querySelector("#item");
let submit = document.querySelector("button");
let hello = document.querySelector("h1")

console.log(submit.textContent);
item.addEventListener("click", handleClick);
function handleClick() {
  console.log(ishladi);
  text.textContent = "Hello world"
}

