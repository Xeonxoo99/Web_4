document.addEventListener("DOMContentLoaded", () => {
  const img = [];
  const scrollBox = document.getElementById("imageSequence");
  const scrollMax = document.body.scrollHeight - window.innerHeight;

  // 이미지 배열 만들기
  for (let i = 0; i <= 109; i++) {
    const num = i.toString().padStart(5, "0"); // 00000 ~ 00109
    img.push(`./images/001/large_${num}.jpg`);
  }

  console.log("이미지 배열:", img);

  window.addEventListener("scroll", () => {
    const scrollPercent = (window.scrollY / scrollMax) * 100;
    console.log("현재 스크롤 위치:", window.scrollY);
    console.log("최대 스크롤 가능 값:", scrollMax);
    console.log("스크롤 퍼센트:", scrollPercent);

    // 스크롤 비율을 0 ~ 109 범위로 변환!
    const imgIndex = Math.min(109, Math.floor((scrollPercent / 100) * 109));

    // background-image 변경
    scrollBox.style.backgroundImage = `url(${img[imgIndex]})`;

    // 95% 이상이면 투명도 애니메이션
    if (scrollPercent >= 95) {
      scrollBox.animate(
        [
          { opacity: 1 }, 
          { opacity: 0 },
        ],
        { duration: 1000, fill: "forwards" }
      )
    }
    else {
      scrollBox.style.opacity = 1;
    }
  });
});

// animate 사용하지 않고 직접 이미지태그를 만들어서 사용
// document.addEventListener("DOMContentLoaded", () => {
//   const scrollBox = document.getElementById("imageSequence");
//   const scrollMax = document.body.scrollHeight - window.innerHeight;
//   const imgPath = "./images/001/";

//   // 이미지 태그 생성
//   const imgElement = document.createElement("img");
//   imgElement.style.position = "absolute";
//   imgElement.style.width = "100%";
//   imgElement.style.height = "100%";
//   imgElement.style.objectFit = "contain";
//   imgElement.style.transition = "opacity 0.1s ease-in-out"; // ✨ 자연스러운 전환 추가
//   scrollBox.appendChild(imgElement);

//   // 스크롤 이벤트
//   window.addEventListener("scroll", () => {
//     const scrollPercent = window.scrollY / scrollMax;
//     const imgIndex = Math.min(109, Math.floor(scrollPercent * 109));

//     // 이미지 경로 변경
//     imgElement.src = `${imgPath}large_${String(imgIndex).padStart(5, "0")}.jpg`;

//     // 95% 이상이면 서서히 사라지게 하기
//     if (scrollPercent >= 0.95) {
//       imgElement.style.opacity = "0";
//     } else {
//       imgElement.style.opacity = "1";
//     }
//   });
// });
