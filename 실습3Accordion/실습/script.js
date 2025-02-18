/*
	1. .tt를 클릭하면 클릭한 .tt요소안에 h2에 open 클래스가 붙도록 만드세요. o

	2. .tt를 클릭하면 클릭한 .tt요소안에 h2에만 open 클래스가 붙고 나머지는 없어지게 만들어보세요. o

	3. .tt를 클릭하면 클릭한 .tt요소의 아코디언 메뉴가 아래로 열리게 해보세요.

	4. .tt를 클릭하면 클릭한 .tt요소의 아코디언 메뉴만 열리고 나머지는 닫히게 해보세요.

	5. .tt를 클릭하면 나머지 이미지 요소는 안보이고 클릭한 .tt요소의 이미지만 생성되게 해보세요.

	[ 여기까지가 디자이너들 목표! ]

	6. this를 활용하면 전체 코드를 10줄미만으로 작성가능합니다. 코드를 간략하게 만들어보세요.
*/


// $('.tt').on('click',function(){
// 	let hasOpen = $($(this).children('h2')[0]).hasClass('open')
// 	console.log(this)

// 	// open class 생성
// 	$($(this).children('h2')).addClass('open');
// 	// 아래로 슬라이드하면서 보이기
// 	$(this).children('p').slideDown(()=>{
// 			$(this).children().css('display', 'block');
// 	})
// 	// 글자색 변경
// 	$($(this).children('h2')).toggleClass().css({color:'green',backgroundPosition :'left bottom' })

// 	if(hasOpen == true){
// 		$(this).children('p').css('display','none')
// 		$(this).children('img').fadeOut()
// 	}
// 	console.log(hasOpen)
// })

// $('.tt').on('click', function() {
//     // 현재 클릭한 .tt 내부의 p와 img 상태 확인
//     let currentP = $(this).children('p');
//     let currentImg = $(this).children('img');
//     let isOpen = currentP.is(':visible');

//     // 1. 모든 h2에서 open 클래스를 제거하고, 현재 클릭한 것에만 토글
//     $('.tt h2').removeClass('open');
//     if (!isOpen) {
//         $(this).children('h2').addClass('open');
//     }

//     // 2. 모든 p와 img를 닫음
//     $('.tt p').slideUp();
//     $('.tt img').fadeOut();

//     // 3. 클릭한 .tt 내부의 p와 img만 열기 (현재 닫혀 있는 경우에만)
//     if (!isOpen) {
//         currentP.slideDown();
//         currentImg.fadeIn();
//     }
// });

$('.tt').on('click',function(){
	let p = $(this).children('p');
	let img = $(this).children('img');
	let h2 = $(this).children('h2');
	let hasClass = h2.hasClass('open');

	$('.tt h2').removeClass('open');
	$('.tt p').slideUp();
    $('.tt img').fadeOut();

	if(!hasClass){
		p.slideDown();
		img.fadeIn();
		$(this).children('h2').addClass('open');
		$($(this).children('h2')).css({color:'green',backgroundPosition :'left bottom' })
	}else{
		p.slideUp();
		img.fadeOut();
		$($(this).children('h2')).css({color:'#666',backgroundPosition :'left top' })
	}
});