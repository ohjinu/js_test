// Promise직렬 처리하기
// 외부 데이터를 가져오 ㅏ후ㅗㅛ 처리 작업에 사용할 경우
// Promise => await, async

/*
Promise.resolve()
    .then(()=>{
        new Promise ((resolve)=>{
            setTimeout(()=>{
                console.log('첫번째 Promise', new Date().toLocaleDateString())
                resolve()
            },3000)
        })
    })
    .then(()=>{
        new Promise((resolve)=>{
            setTimeout(()=>{
                console.log('두번째 Promise', new Date().toLocaleDateString())
                resolve()
            }, 1000)
        })
    })
*/
//Await와 async 적영시

start() // 함수호출

async function start () {
    console.log('---await, async')
    

    // await : Promise가 끝날때까지 기달
    await new Promise ((resolve)=>{
        setTimeout(()=>{
            console.log('첫번째 Promise', new Date().toLocaleDateString())
            resolve()
        },3000)
    })

    await new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('두번째 Promise', new Date().toLocaleDateString())
            resolve()
        }, 1000)
    })
}