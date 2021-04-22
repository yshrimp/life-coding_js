// string에서 따옴표 추가법 'egoing\'s javascript'  \를 앞에 위치시키면 문자열의 시작과 끝을 구분하는 구분자가 아니라 단순한 문자로 해석하도록 강제할 수 있다. 이런 방법을 escape라 한다.
// 여러줄 표시는 \n으로 가능
// 문자열 연결 "coding" + " everybody" >> coding everybody
// 문자열 길이 구하는 법 length / python의 len과 같음

// 변수(variable) var, const, let 등이 있다.
// 변수 할당법  var a = "coding", b = "everybody"

// 데이터 타입 null : 값이 없다는 뜻(의도적으로 값이 없다고 하는 경우) / undefined는 의도치 않게 값이 없는 경우
// === 등호가 3개인 경우 값 뿐만 아니라 data type까지 같다는 것이 성립해야 True 다.

/* 조건문
형식 if(boolean(true/false)){
    true일 경우 실행될 코드
} 
else / else if  */

// 논리연산자 && = and / ||가 or임
// 0은 false 0이 아닌 값은 true로 간주된다.

// while, for 반복문이 있다.
/* for(초기화; 반복조건; 반복이 될 때마다 실행되는 코드){
        반복해서 실행될 코드 
} */
// 반복문 제어법 break, continue
/* break과 continue의 차이점
break는 반복문을 즉각 중단시키지만 continue는 true인 조건만 중단시키고 반복문은 계속 진행시킨다. */

/*함수(function) 함수명(인자(argument)){ 함수는 재사용성이 매우 뛰어나다.
    code
    return 반환값
} */

// return : 함수의 결과를 반환하면서 동시에 함수를 종료시킨다.
/* ex) function id() {
    return 'egoing'
    return 'hwang'
    retrun 'fuck'
}
console.log(id()) // egoing 을 출력하면서 함수가 종료되기에 밑의 것들을 출력되지 않는다. */

// 인자(argument)
/* function get_argument(arg){
    return arg
}
console.log(get_argument(1)); // 1

복수의 인자
function get_argument(arg1, arg2){
    return arg1 + arg2;
}
console.log(get_argument(10, 20)) // 30
*/

// array
/* array allocation 
var variable = [element1, element2, ....]
How to manipulate element
variable[0] * 0부터 시작인것을 인지하자
variable[1]
*/
// array 제어에는 여러가지가 있음 생활코딩 참조

// object(python의 dictionary라 보면 됨)
/* array에서는 element의 index를 숫자로 이용했지만 string을 사용하고 싶다면 object를 사용하면 된다.
var grades = {'egoing' : 10, 'hwnag': 5, 'hi': 30} 즉, egoing = key, 10 = value
grades['egoing'] // 10  object의 key값 가져오는 법
grades.hwang 객체의 속성에 접근하는법