$(function(){
    // 요소 중 ''
    // $('.inner_1 p:contains(내용1)').css('background-color','#ff0')
    // 하위요소 중
    // $('.inner_1').contents().css('background-color','#ff0')
    // 선택한 요소중
    // $('.inner_1 p:has(strong)').css('background-color','#ff0')
    // 선택한 요소 제외
    // $('.inner_2 p').not(':first').css('background-color','#ff0')
    // $('.inner_2 p').not(':nth-child(2)').css('background-color','#ff0')
    // :nth-child(위치), .eq(인덱스번호)
    // $('.inner_2 p').eq(2).css('background-color','#ff0')
    // 인택스를 선택하기 전의
    $('.inner_2 p').eq(2).end().css('background-color','#ff0')

    // find(): ㅜ직방향(하위), filter(): 형제선탵ㄱ자
    // $('.inner_1 .txt1').css('border', '1px solid red')
    var inner_1 = $('.inner_1')
    inner_1.find('.txt1').css('border', '1px solid red')

    //
    var inner_2 = $('.inner_2 p')
    inner_2.filter(':nth-child(2)').css('color','red')
    // $('.inner_2 p:nth-child(2)').css('color','red')
    //
    inner_2.filter(function(idx,obj){
        console.log(idx,obj)
        return idx%2 == 0
    }).css('color','green')

    // 배열.map

    var rs1 = $('.inner_2 p').eq(2).is(":visible")
    console.log(":visible =>", rs1)
    var rs2 = $('.inner_2 p').eq(3).is(":visible")
    console.log(":visible =>", rs2)

    var rs3 = $('#chk1').is(":checked")
    console.log(':checked =>', rs3)
    var rs4 = $('#chk2').is(":checked")
    console.log(':checked =>', rs4)


    var name = $('.name').html()
    console.log(name)
    var age = $('.age').text()
    console.log(age)
    $('.name').html('<i>홍길동</i>') // .innerHTML = ''
    $('.age').text('<i>10</i>')

    //
    var attr = $('.name').attr('class') // 
    console.log(attr)
    $('.name').attr('id','name') // 
    $('.name').removeAttr('my') // 

    var imgSrc = $('.box5 img').attr('src')
    console.log(imgSrc)

    $('.box5 img').attr({
        'width': 150,
        'src': imgSrc.replace("1.jpg", "2.jpg"),
        'alt': '바위'
    }).removeAttr('border')

    // addClass()
    $('.box6 p:nth-child(1)').addClass('add')
    $('.box6 p:nth-child(2)').removeClass('block')
    var is_has1 = $('.box6 p:nth-child(1)').hasClass('add')
    var is_has2 = $('.box6 p:nth-child(2)').hasClass('block')
    console.log(is_has1, is_has2)
    $('.box6 p:nth-child(3)').toggleClass('to')
    $('.box6 p:nth-child(4)').toggleClass('to')

})