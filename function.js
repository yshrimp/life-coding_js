// function


function multifly(arg1, arg2) {
    return arg1 * arg2;
}

multifly(3, 4);

// ref 함수에서 function, function()의 차이는 조건에 상관없이 바로 실행하냐 아니냐에 차이다. ()이 바로 실행이다.

function get_member() {
    return 'hwang';
    return 'adfkal1';
    return 'afadkhl2';
} // 보면 알듯이 return은 함수의 값을 반환하는 동시에 함수를 종료한다. 따라서 hwang이외의 값들은 반환하지 않는다.

