/*
	1. 페이지 방문시에 .gallery li 이미지 각각의 요소가 나타나게 만드세요.
	단! 순차적으로 나타나야 합니다.

	2. li.type-a에 마우스 올리면
	border값을 2로 변경하고 이미지의 opacity를 1로 만들어보세요.

	3. li.type-a에 마우스 떼면
	원래 상태로 만들어보세요.

	4. li.type-b에 마우스 올리면 이미지의 top값과 opacity값을 변경하고,
	li.type-b에 마우스 떼면 이미지를 원래 상태로 만들어보세요.

	5. li.type-c에 마우스 올리면 이미지가 올라오고 떼면 원래 사태로 만들어보세요.
	단! li.type-c안의 이미지는 각각 높이가 다릅니다. 이 점을 유의하여 작성해보세요.


*/

// for(let i = 0; i=$('.gallery li').length; i++){
// 	$('.gallery li').eq(i).delay(i * 100).fadeIn();
// }

$('.gallery li').each(function(i){
	$(this).delay(i*100).fadeIn();
})


$('.type-a').on('mouseover',function(){
	// console.log('this:',this)
	$(this).children('img').css('opacity','1');
	$(this).css('border', '2px solid #000');

})

$('.type-a').on('mouseleave',function(){
	// console.log('this:',this)
	$(this).children('img').css('opacity','0.5');
	$(this).css('border', '5px solid #000')
})

$('.type-b').on('mouseover',function(){
	// console.log('this:',this)
	$(this).children('img').css({top:'0px',opacity:'1'})
})

$('.type-b').on('mouseleave',function(){
	// console.log('this:',this)
	$(this).children('img').css({top:'-40px',opacity:'0.5'})
})

$('.type-c').on('mouseover',function(){
	console.log('this:',this)
    let src = $(this).find('img').attr('src');
	console.log(src)
	$(this).css('background-color','#fff')
	if(src == 'hero-01.png'){
		$(this).children('.inner').animate(
			{
				height:'256px',
			},1000
		)
		$(this).animate(
			{
				letterSpacing:'15px',
				textIndent:'20px',
			},1000
		)
	}
	if(src == 'hero-02.png'){
		$(this).children('.inner').animate(
			{
				height:'189px'
			},1000
		)
		$(this).animate(
			{
				letterSpacing:'15px',
				textIndent:'20px',
			},1000
		)
	}
	if(src == 'hero-03.png'){
		$(this).children('.inner').animate(
			{
				height:'353px'
			},1000
		)
		$(this).animate(
			{
				letterSpacing:'15px',
				textIndent:'20px',
			},1000
		)
	}
})

$('.type-c').on('mouseleave',function(){
	$(this).css('background-color','#999')
	$(this).children('.inner').animate(
		{
			height:'0px'
		},1000
	)
	$(this).animate(
		{
			letterSpacing:'0px',
			textIndent:'0px',
		},100
	)
})