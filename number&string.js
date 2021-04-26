/* 수와 숫자
data에는 다양한 type이 있다. 대표적인 type인 number와 string에 대해 알아보자
*/

alert(1+1); // ', "" 붙지 않는 숫자는 숫자로 인식된다.

console.log(Math.pow(3,2)); // 3의 2승 9

console.log(typeof 1); // 데이터의 타입을 확인하는 방법인 typeof

console.log('hwang\'s javascript'); // \을 앞에 위치시키면 문자열의 시작과 끝을 구분하는 구분자가 아니라 단순한 문자로 해석다록 강제할 수 있다는점! 이러한 기법을 escape라 한다.

// 여러줄 표시 C와 만찬가지로 \n을 하면 줄바꿈을 의미한다.
console.log("안녕하세요. \n생활코딩의 세계에 오신 것을 환영합니다.");

console.log("life" + " coding"); //string 결합

console.log("hwangdaeha".length); // string 길이 구하는 법