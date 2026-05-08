//DOM(Document Object Model) : HTML을 JS가 조작할 수 있게 만든 객체 구조
console.log("connected");

const title = document.getElementById("title");
console.log(title);

title.innerText = "반갑습니다.";

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    console.log("버튼이 클릭되었습니다.");
});