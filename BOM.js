// User와 Communication

// alret 경고용 거의 안쓰임

// confirm 확인용 console에 confirm 해보면 직관적으로 알게 됨 true, false를 return함
function func_confirm() {
    if(confirm('ok?')) {  // 확인을 누르면 true로 if 조건문의 코드를 실행
        alert('ok');
    } else {   // 취소 누리면 else의 실행
        alert('cancel');
    }
}

// prompt  User에게 무언가를 입력받아 나타낼 수 있음 잘 안쓰임
function func_prompt() {
    if(prompt('id ?') === 'egoing') {
        alert('welcome');
    } else {
        alert('fail');
    }
}

// location 문서의 URL과 관련된 객체로 URL의 정보를 얻거나 변경을 행할 수 있다.
location.href // 해당 url
location.protocol // http: or https:
location.host // 메인 서버
location.pathname // 웹페이지의 더 다양한 정보를 담고는 있는 곳의 정보를 줌
// 이밖에도 search, port, hash 등이 있다.

location.href = 'url' // 을 통해 url을 변경 가능
location.reload(); // 리로드


// navigator 브라우저의 정보를 제공하는 객체
// 브라우저의 호환성이나 기능 테스트를 한다.


// 창 제어 window.open(arg), close
