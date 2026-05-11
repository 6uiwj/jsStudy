//DOM(Document Object Model) : HTML을 JS가 조작할 수 있게 만든 객체 구조
console.log("connected");

const title = document.getElementById("title");
console.log(title);

title.innerText = "반갑습니다.";

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  console.log("버튼이 클릭되었습니다.");
});

title.innerHTML = "<span>안녕</span>";
title.style.color = "red";
title.style.fontSize = "50px";

/**
 * | 메서드         | 설명             |
| ---------------- | -----------     |
| getElementById   | id로 찾기        |
| querySelector    | CSS 선택자로 찾기 |
| addEventListener | 이벤트 연결       |
| innerText        | 글자 변경         |
| innerHTML        | HTML 변경        |
| value            | 입력값 가져오기    |

 */
