title = document.querySelector(".title");
input = document.querySelector("#input");
btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  title.innerText = "반갑습니다.";
});

submitBtn = document.querySelector("#submit");

submitBtn = addEventListener("click", () => {
  inputValue = input.value;
  console.log(inputValue);
});
