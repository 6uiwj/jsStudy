//DOM(Document Object Model) : HTML을 JS가 조작할 수 있게 만든 객체 구조
console.log("connected");

const title = document.getElementById("title");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    title.innerText = "변경";
});

const inputValue = document.getElementById("inputName");
const outbutBtn = document.getElementById("outputBtn");

outputBtn.addEventListener("click", () => {
    console.log(inputValue.value);
});