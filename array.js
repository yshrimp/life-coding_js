// array : 연관된 데이터를 모아서 통으로 관리하기 위해 사용하는 데이터 타입

const a = [3, 2, "ajfdskl"];

a[0] // 3
a[1] // 2

// 배열의 진가는 반복문과 결합했을 때 나타난다.

function get_member() {
    return ['egoing', 'hwang', 'solari'];
}

let members = get_member();

for(i =0; i < members.length; i++) {
    console.log(members[i].toUpperCase());
}

// array 조작 push, concat, unshift, shift, pop, reverse, sort
let li = ['a', 'b', 'c', 'd'];

li.push('e'); // 맨 뒤에 e 추가

li.concat('f', 'g') // 복수의 element 추가할 때

li.unshift('z') // 맨 앞에 element 추가

li.shift() // 맨 앞의 element 제거

li.pop() // 맨 뒤 element 제거

li.reverse() // element들을 역순으로 정렬

li.sort() // element들을 정렬
