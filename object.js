// 객체 

const foodcal = {"rice" : 334, "spam" : 1000, "andkf": "adkfjka"};

console.log(foodcal.rice); // 334

/* console.log와 foodcal.rice의 공통점이 보인다.
console과 foodcal은 둘 다 객체다.
.뒤에 나오는 것들은 이 객체들의 키인데 log와 rice의 차이점은
log는 함수인 키이고 rice는 단순히 value값만 있는 키다. */
 
// object와 function의 만남
const a = {"key1" : 1, "key2": 2, "key3": function (){
    return "hi";
    }
};

a.key3() // hi

// object와 반복문의 조우
const grades = {'egoing': 10, 'hwang': 3, 'solari': 5};

for(key in grades) {
    document.write("key : "+key+" value : "+grades[key]+"<br />");
}

/* key : egoing value : 10
   key : hwnag value : 3
   key : solari value : 5
*/


// 객체지향 프로그래밍
const grades = {
    'list': {'egoing': 3, 'hwnag': 4, 'adsfj': 10},
    'show': function () {
        for(let name in this.list) {
            document.write(name + ':' + this.list[name] + "<br />");
        }
    }
};

grades.show();

// object의 value에는 object가 될 수도 있고 array도 되고, function도 되고 다 된다.
