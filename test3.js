var Student = {
    name : "홍길동",
    kor : 100,
    eng : 100,
    mat : 100,

    tot : function (){
        return(this.kor + this.eng + this.mat)
    },
    avg : function (){
        return(this.kor + this.eng + this.mat)/3
    }
}

console.log("결과값: 학생이름: "+Student.name+", 총점:"+Student.tot()+", 평균: "+Student.avg().toFixed(2))