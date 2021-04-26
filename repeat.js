// 반복문

let i = 0; // const는 변수의 값을 수정 불가능하기에 쓰면 error난다.
while(i < 10) {
    document.write("coding everybody <br />");
    i++
}

// for 반복문
/* for(초기화; 반복조건; 반복이 될 때마다 실행되는 코드) {
    반복해서 실행할 코드
}
*/

for(let a = 0; a < 10; a++) {
    console.log("hi");
}

// 초기화 : 변수 설정




// 반복문 제어 break, continue
for(let i = 0; i < 10; i++) {
    if(i === 5) {
        break; // i === 5일때 반복문을 완전 종료 
    }
    document.write('hi' +i+ '<br />');
}

for(let i = 0; i < 10; i++) {
    if(i === 5) {
        continue; // i === 5일때만 중단하고 나머지는 실행
    }
    console.log('hi'+i);
}

// 반복문 중첩
for(let i = 0; i < 10; i++) {
    for(let j = 0; j < 10; j++) {
        document.write(String(i) + String(j) + '<br />');
    }
}

