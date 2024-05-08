
// 상위클래스(부모클래스, 슈퍼클래스)
class MyParent {
    perentMethod () {
        console.log('MyParent: 부모클래스')
    }
}
// 자식클래스: 부모클래스로부터 상속받은 클래스
class MyChild extends MyParent {
    childMethod (){
        console.log('MyChild: MyParent클래스로부터 상속받은 자식클래스')
    }
}

const myParent = new MyParent()
console.log('1. 부모클래스:')
myParent.perentMethod()

const myChild = new MyChild()
console.log('2. 자식클래스:')
myChild.childMethod()
myChild.perentMethod()

console.log('----------3');

class Person {                                     // 생성자가 초기화를 해주는데 문제는 상속이 안됨
    constructor (name, age) { // 
        this.name = name;
        this.age = age
        console.log('부모생성자 호출')
    }
    sayHello(){
        console.log(`이름: ${this.name}, 나이: ${this.age}`)
    }
}

class Student extends Person {
    constructor (name, age, grade) { // 부모생성자: super()
        super(name, age) // 여기!!  부모클래스 멤버변수는 부모생성자에서

        this.grade = grade
        console.log('자식생성자 호출')
    }
    sayStudent(){
        console.log('sayStudent()=>', this.name, this.age, this.grade)
    }
}

console.log('---->person')
const person = new Person('길순이',15)

console.log(person.name, person.age)
person.sayHello()

console.log("--> Student")
const student = new Student ('동길이', 12, 4)

student.sayHello()
person.sayHello()