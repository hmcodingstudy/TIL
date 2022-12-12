
//Callback Hell example
class UserStorage {
    loginUser(id, password){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(
                    (id === 'ellie' && password === 'dream') ||
                    (id === 'coder' && password === 'academy')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        });
    }
        

    getRoles(user){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'ellie'){
                    resolve({ name: 'ellie', role: 'admin'}); //이런 오브젝트를 전달
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        });
    }
}




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