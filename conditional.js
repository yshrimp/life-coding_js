/* 
Boolean 새로운 data type인데, 값이 true, false로 나오는 것들이 boolean
*/

// if 조건문
if(true) { // if 뒤에 나오는 조건은 무조건 true가 나와야 한다. false나 boolan이 아닌 것이 나오면 조건문 자체를 성립시키지 않아 뒤에 나오는 코드들이 실행되지 않는다.
    console.log("hi");
}

// else 
if(false) {
    console.log(2);
} else {
    console.log(1);
} // 1
// else는 주어진 조건이 거짓일 때 실행할 구간을 정의

// else if 더 다양한 케이스의 조건을 검사할 수 있다.
const a = 30;

if(a < 30) {
    console.log(1);
} else if (a > 20) {
    console.log(2);
} else {
    console.log(3);
}

// 조건문 중첩
let id = prompt('아이디를 입력 요망') // prompt()는 User가 입력한 content를 변수에 할당하는 함수다.
if(id == "hwang"){
    password = prompt("비밀번호 입력 요망");
    if(password === "1111") {
        alert("인증");
    } else {
        alert("인증 실패");
    }
} else {
    alert("인증 실패");
}
// id, pw 검사하는 if 중첩을 이용하는 한 방법



/* 논리 연산자
&&(And) 조건이 둘 다 true이어야 값이 true
||(Or) 조건이 하나라도 true를 충족시키면 true 배출
! Boolean값을 역전시킨다.
*/ 


/* false로 간주되는 데이터형
if(0) {
    console.log(1); 
}

조건에 0, 빈 문자열, 값이 할당되지 않은 변수, undefined, null, NaN은 false로 간주된다.
*/