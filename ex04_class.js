//클래스에서 메서드 사용하기
/*
class MyClass {
    constructor() {
        this.name = '홍길순'

    }

    myNamePrn() {
        console.log("이름:"+this.name)
    }
}

const obj1 = new MyClass()
console.log(obj1)

console.log(obj1.name)
obj1.myNamePrn()
*/

//-------


class Student {
    constructor(name, kor, mat, eng) {
        this.name = name
        this.kor = kor
        this.mat = mat
        this.eng = eng

        this.tot = 0,
        this.avg = 0.0
    }
    // 총점 계산
    totMethod() {
        this.tot = this.kor + this.mat + this.eng
    }
    // 평균 계산
    avgMethod() {
        this.avg = (this.tot) / 3
    }
    scoreInfo(){
        console.log(`이름: ${this.name}, 평균: ${this.tot}, 평균: ${this.avg}`)
    }
}

const student = new Student("홍길순", 100, 90, 80)
console.log("초기값:",student)
student.totMethod()
student.avgMethod()
console.log("계산후:",student)

student.name = "동길이"
console.log(student)