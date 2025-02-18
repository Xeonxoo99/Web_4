/*
	1. 선반위의 캐릭터 이미지를 클릭하면 그 캐릭터의 이미지가 사라지게 만들어보세요.

	2. 총을 클릭하면 끝에서부터 캐릭터가 사라지게 만드세요.

	3. 돈을 클릭하면 돈은 사라지고 모든 인형이 다시 나오게 만드세요.
	!다시 총을 클릭하면 다시 끝에서부터 캐릭터가 사라져야 합니다.

	4. 총이 아닌 캐릭터 이미지를 클릭할때도 총이 변하게 해보세요.
	!인형을 클릭했다가 총을 클릭했을때 총이 변해야 합니다.

  	mousedown mouseup 이벤트 사용하면 됩니다.
*/

$('.sunban li img').on('click', function(){
	$(this).fadeOut(1000);
  })

  let index = 11;
  $('.gun').on('click',function(){

	$('.sunban li img').eq(index).fadeOut();
	index--;
  })

  $('money li').on('click',function(){
	$('.sunban li img').fadeIn();
	$(this).fadeOut
	index = 11;
  })

  $('.sunban li img').mousedown(()=>{
	$('.gun').css('background-position','bottom')
  })

  $('.sunban li img').mouseup(()=>{
	$('.gun').css('background-position','top')
  })