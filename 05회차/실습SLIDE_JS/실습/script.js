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

/*
	자바스크립트로 코드 변경하세요.
*/


document.addEventListener("DOMContentLoaded", function () {
    const icons = document.querySelectorAll(".icons a");
    const slide = document.querySelector(".hero-slide"); // 전체 슬라이드 컨테이너
    const prevBtn = document.querySelector(".prev"); // Prev 버튼
    const nextBtn = document.querySelector(".next"); // Next 버튼
    const slideItems = document.querySelectorAll(".hero-slide li"); // 슬라이드 아이템들
    let currentIndex = 0; // 현재 활성화된 슬라이드 인덱스
    let width = slideItems[0].offsetWidth; // 한 개 슬라이드의 너비

    // 첫 번째 아이콘에 active 클래스 추가
    if (icons.length > 0) {
        icons[0].classList.add("active");
    }

    function updateSlide(index) {
        // 모든 아이콘에서 active 클래스 제거
        icons.forEach(icon => icon.classList.remove("active"));
        // 현재 인덱스에 해당하는 아이콘에 active 클래스 추가
        icons[index].classList.add("active");

        // 슬라이드 이동
        slide.style.transform = `translateX(${-width * index}px)`;
        slide.style.transition = "transform 0.5s ease-in-out";
    }

    // 아이콘 클릭 이벤트
    for (let i = 0; i < icons.length; i++) {
        icons[i].addEventListener("click", function () {
            currentIndex = i; // 현재 인덱스 업데이트
            updateSlide(currentIndex);
        });
    }

    // Prev 버튼 클릭 이벤트
    prevBtn.addEventListener("click", function () {
            currentIndex--;
			if(currentIndex < 0){
				currentIndex = 4;
			}
            updateSlide(currentIndex);
    });

    // Next 버튼 클릭 이벤트
    nextBtn.addEventListener("click", function () {
        currentIndex++;
		if(currentIndex > 4){
			currentIndex = 0;
		}
		updateSlide(currentIndex);
    });
});

