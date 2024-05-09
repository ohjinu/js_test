$(function(){
    // $('#menu li:first').css('background-color', '#0ff')
    // $('#menu li:last').css('background-color', '#0ff')
    // $('#menu li').last().css('background-color', '#0ff')
    // $('#menu li:odd').css('background-color', '#0ff')
    // $('#menu li:even').css('background-color', '#0ff')
    // $('#menu li').eq(2).css('background-color', '#0ff')
    // $('#menu li:lt(2)').css('background-color', '#0ff') // 인덱스 번호로
    // $('#menu li:gt(1)').css('background-color', '#0ff')
    // $('#menu li:nth-child(2n)').css('background-color', '#0ff') // 위치
    // $('#menu li:first-of-type').css('background-color', '#0ff')
    $('#menu li').slice(1,3).css('background-color', '#0ff') // 1~3의 범위 & 끝은 포함 x

    //
    // $.each(배열, 수행할 내용)
    const arr = $('#menu li')
    // console.log(arr)
    $.each($('#menu li'), function(idx, obj) {
        // console.log(idx, obj)
        console.log(idx,$(this))
    })
    $(arr).each((idx,obj) => {
        console.log(idx,obj)
    })

    // $.map() : 새 열에 저장하고 반환
    // $.grep(): 반복 수행하고
    const info = [
        {"area":"서울","name":"홍길동"},
        {"area":"부산","name":"홍길순"},
        {"area":"대전","name":"길순이"}
    ]

    const info2 = $.map(info, (a,b)=>{
        console.log("---$.map()")
        console.log(a,b)
        if (a.area == "서울") return a
    })
    console.log('area:', info2)

    console.log("------------------")
    const info3 = $.grep(info, (a,b)=>{
        console.log("---$.grep()")
        console.log(a,b)
        if (a.area == "서울") return true
        else return false
    })
    console.log('area:', info3)

    //선택자의 인덱스 추출
    const idx = $('#menu li').index($('#item'))
    console.log('idx=', idx)


})