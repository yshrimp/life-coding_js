/* Document Object Model
웹페이지를 javascript로 제어하기 위한 객체 모델 */

// getElementsByTagName 
const li = document.getElementsByTagName("li");

for(i = 0; i < li.length; i++) {
    li[i].style.color = "red";
}

// getElementsBy Id, ClassName 등


// querySelector & querySelectorAll 차이 : querySelector는 조건에 맞는 것을 하나만 return하는데 All하면 다 해줌
// querySelector는 css 선택자의 문법을 이용해서 객체를 조회할 수 있다.
