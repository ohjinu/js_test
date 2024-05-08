
// 파일에 있는 모듈 가져오기
// 가져오는 모듈 inport
import {MyClass1} from './module01.js'

//파일내에 특정모듈 불러오기
import {MyClass2 as a, PI, myObj, myPrn} from './module02.js'

// 2. 파일 내 모든 모듈 불러오기
// import * as m from './module02.js'

 // MyClass1 메소드로 문자열 가져오기
const message1 = new MyClass1().myMethod1()
console.log("module01.js: MyClass1 myMethod1()=>", message1)

const obj = new MyClass2()
console.log("module02.js: MyClass2 myMethod2()=>", obj.myMethod2())

console.log("PI="+PI)
console.log("myObj="+myObj.name, myObj.age)
myPrn()
myPrn('홍길동',10)

// 2. 벌칭일 경우
// console.log("PI값은="+ m.PI)
// console.log("myObj="+ m.myObj.name, m.myObj.age)
// console.log(m.myPrn())
