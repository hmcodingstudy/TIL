'use strict';
//자바스크립트 = 동기적
//호이스팅이 된 후부터 코드가 하나하나씩 동기적으로 실행된다.

//hoisting: var 변수, 함수 선언들이 자동적으로 제일 위로 올라가는 것.

//콜백함수 : 전달받은 함수를 나중에 불러줌
console.log('1');
setTimeout(() => console.log('2'),1000);
//1000ms 뒤에 2를 전달  
//*브라우저에게 요청하는 동안 다음줄이 먼저 실행됨

// setTimeout(function(){
//     console.log('2');
// }, 1000); 
console.log('3');
//=> 1 3 2 순서로 출력


//*콜백을 사용하는 경우 2가지
//[Synchronous callback(즉각적,동기적으로 실행)]

function printImmediately(print){
    print();
}
printImmediately(()=> console.log('hello'));

//[Asynchronous callback(비동기적, 나중에 실행,언제 실행될지 알 수 없음.)]
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}   //선언은 제일 위로 올라가게 됨.
printWithDelay(() => console.log('async callback'), 2000);


//Callback Hell example
class UserStorage {
    loginUser(id, password,onSuccess,onError){
        setTimeout(() => {
            if(
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout(() => {
            if (user === 'ellie'){
                onSuccess({ name: 'ellie', role: 'admin'}); //이런 오브젝트를 전달
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

//콜백지옥의 문제점 => 가독성이 좋지 않고, 로직을 이해하기 어려움. 에러가 발생하거나 디버깅을 할때도 문제를 파악하기 어려움. 유지보수도 어려움
const userStorage = new UserStorage();  //UserStorage라는 클래스를 만듦
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id, 
    password, 
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error)
    }
)

 