// API 통신 결과

class ApiResultData { // 데이터를 구성할수 있는 구조
    constructor(){
        this.resule
        this.errorMessage
        this.user_name
        this.age
    }
}

// response 데이터 변환
function parseData(response) { // 함수명과 매개변수 포함
    const apiResultData = new ApiResultData()

    apiResultData.result = response.result
    apiResultData.errorMessage = response.errorMessage
    apiResultData.userName = response.user_name
    apiResultData.age = response.age

    console.log(apiResultData.userName, apiResultData.age)
}

const apiResponse = {
    resulte: true,
    user_name:'강감찬',
    age:10
}
// 데이터 구조 확인
console.log(apiResponse)
// 함수 호출(실행)
parseData(apiResponse)