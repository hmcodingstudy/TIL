// *promise
// 비동기를 간편하게 처리할 수 있도록 도와주는 오브젝트
// 정해진 장시간의 기능을 수행하고 나서, 정상적으로 기능이 수행되어졌다면 성공 메시지와 함께 결과값을 전달해주고,
// 기능을 수해앟다가 예상치 못한 문제가 발생했다면, 에러를 전달해 준다.

'use strict';

// Promise
// 자바스크립트에 내장된 오브젝트. 비동기적인것을 수행할때 콜백함수 대신에 사용
// 1) state(상태) . 프로세스가 무거운 오퍼레이션을 수행하고 있는 중인지. 기능 수행이 완료되어서 성공했는지 실패했는지
// pending(오퍼레이션 수행 중일때) -> fulfilled (완료) or rejected

// 2) producer(정보 제공자) vs consumer(정보 소비자)의 차이점 이해

// 1. Producer
const promise = new Promise((resolve, reject) => { //promise는 클래스이기 때문에 new로 생성
    //resolve : 기능을 정상적으로 수행해서 마지막에 최종 데이터를 전달
    //reject : 기능을 수행하다가 중간에 문제가 생기면 호출
    //doing heavy work 네트워크, 파일을 읽어오는 것 <- 시간이 꽤 걸리는 일을 동기적으로 처리하게 되면
    // 파일을 읽어오고, 네트워크에서 데이터를 받아오는 동안 다음 라인의 코드가 실행되지 않기 때문에 시간이 조금 걸리는 일들은 promise를 이용하여 비동기적으로 처리하는것이 좋다.
    //**(주의)promise를 만드는 순간 그 안의 executer가 실행
    //**이로 인해 발생하는 문제점 => 사용자가 원하지도 않았는데 네트워크에서 데이터를 받아올 수 있음.
    setTimeout(() => {
        // resolve('ellie');
        reject(new Error('no network')); //Error - 자바스크립트에서 제공하는 오브젝트.무언가 에러가 생겼다는걸 나타냄.
    },2000)
})


//2. Consumers : then, catch, finally
promise
    .then(value => {  //값이 정상적으로 잘 수행된다면 그때(then) value 값을 받아와서 
    console.log(value);  //원하는 기능을 수행하는 콜백함수를 전달해주면 된다.
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => { //성공하든 실패하든 상관없이 어떤 기능을 마지막으로 실행하고 싶을때 사용.
        console.log('finally');
    });

//3. Promise chaining
const fetchNumber = new Promise ((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);  // => 1
});

fetchNumber
.then(num => num * 2)   // => 2
.then(num => num * 3)   // => 6
.then( num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num -1), 1000);   // => 5
    });
})
.then(num => console.log(num));   // => 5가 출력



// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐓'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
        // setTimeout(() => resolve(`${hen} => 🥚`), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🥘`), 1000);
    });

// getHen()
// .then(hen => getEgg(hen))
// .then(egg => cook(egg))
// .then(meal => console.log(meal));

//한가지 값만 받아올때는 아래처럼 생략이 가능하다.
getHen() //
    .then(getEgg)
    .catch(error => {
        return '🥖';
    })
    .then(cook)
    .then(console.log);
    // .catch(console.log);
