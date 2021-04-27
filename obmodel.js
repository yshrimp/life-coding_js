/* Object model(객체화)란
큰 이유는 js를 통해 브라우저의 element들을 객체화 시켜 접근할 수 있다.

0. Window 객체
모든 객체들의 가장 상위 계층에 있는 객체다. 1, 2, 3 모두 이 객체 안에 소속된다.
document, navigator, function 등 앞에는 다 window가 약속으로 생략되어 있는 것을 뿐, 전역 객체도 마찬가지다.
전역 객체란 

1. DOM(document object model)
직역하면 문서 객체화, 여기서 문서란 html을 의미한다. 
html의 여러 element들을 DOM으로 객체화해서 javascript로 제어할 수 있다.
이는 js의 매우 큰 힘 중 하나다.
document.xxxxxx로 객체화한다.
ex) const id = document.getElementById 로 태그의 선택자중 하나인 Id선택자를 객체화한다.

2. BOM(Browser Object Model)
브라우저를 제어하기 위한 object model

3. Javascript core
javascript는 웹에서만 쓰이는 것이 아니다. 서버에서도 쓰일 수 있고, 앱쪽에서도 쓰이고 있는데
앞선 DOM, BOM은 운영체제가 browser다. 그렇기에 서버나 앱은 아니기에 1,2는 없다
하지만 모든 곳에서 일맥상통하게 쓰일 수 있는 것이 js core다. 여기에는 Object, array, function 등 기본적인 것들이 있다.
*/