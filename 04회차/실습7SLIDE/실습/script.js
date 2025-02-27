/*
    1. .icons a를 클릭하였을때 active라는 class를 활성하고 나머지 .icons a는 비활성화해보세요.

    2. 
    디자이너 : .icons a를 클릭하였을때 슬라이드가 960크기 만큼 움직이게 해보세요.
    개발자 : .icons a를 클릭하였을때 .hero-slide li의 width값만큼 슬라이드가 움직이게 해보세요.

    3. 페이지 방문시에 첫번째 슬라이드가 active 되게 해보세요.

    4. prev와 next를 클릭시 동작되게 해보세요.

    5. prev와 next를 클릭시 슬라이드가 끝에 도달했을때 다시 처음이나 마지막 슬라이드로 가도록 만들어보세요.
    마지막 슬라이드에서 right 클릭 : 첫 슬라이드
    첫 슬라이드에서 left 클릭 : 마지막 슬라이드

    6. prev와 next를 하나의 click이벤트로 묶어서 작성해보세요.
    $('.prev, .next').click

    7. prev, next 이벤트와 .icons a를 연동시켜보세요.
    .icons a의 아무곳이나 클릭하고 prev, next 동작시에 다음 슬라이드로 잘 작동해야 합니다.

*/

// $('.hero-slide li').eq(0).addClass('active');
// $('.icons a').eq(0).addClass('active');

// $(document).ready(function () {
//     let currentIndex = 0;
//     const slides = $('.hero-slide li');
//     const totalSlides = slides.length;
//     const slideWidth = slides.width();

//     // 아이콘 클릭 시
//     $('.icons a').on('click', function () {
//         currentIndex = $(this).index(); // 인덱스 업데이트
//         updateSlide(currentIndex);
//     });

//     // next 버튼 클릭 시
//     $('.next').on('click', function () {
//         currentIndex = (currentIndex + 1) % totalSlides; // 다음 인덱스
//         updateSlide(currentIndex);
//     });

//     // prev 버튼 클릭 시
//     $('.prev').on('click', function () {
//         currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // 이전 인덱스
//         updateSlide(currentIndex);
//     });

//     // 슬라이드와 아이콘 상태를 동시에 업데이트하는 함수
//     function updateSlide(index) {
//         const targetWidth = slideWidth * index;

//         // 슬라이드 이동
//         $('.hero-slide').css('transform', `translateX(${-targetWidth}px)`);

//         // 아이콘 활성화 상태 변경
//         $('.icons a').removeClass('active');
//         $('.icons a').eq(index).addClass('active');
//     }
// });

// 선생님이랑 한 것


let current = 0;

$('.icons a').on('click', function () {
    let index = $(this).index();
    let width = $('.hero-slide li').width();
    $(this).addClass('active');
    $(this).siblings().removeClass('active');

    $('.hero-slide').animate({ left: -width * index });

    current = index;
});

$('.icons a').eq(0).trigger('click');
/*
$('.prev').on('click', function(){
    current = current-1;

    if(current < 0){
        current = 4;
    }

    $('.icons a').eq( current ).trigger('click');

})

$('.next').on('click', function(){
    current = current+1;
    if(current > 4){
        current = 0;
    }
    $('.icons a').eq( current ).trigger('click');
})
*/

$('.prev, .next').on('click',function(){
    let cl = $(this).attr('class');

    if ( cl === 'prev'){
        current --;
    }
    else{
        current ++;
    }

    if(current < 0){
        current = 4;
    }
    if(current > 4){
        current = 0;
    }

    $('.icons a').eq( current ).trigger('click');
})