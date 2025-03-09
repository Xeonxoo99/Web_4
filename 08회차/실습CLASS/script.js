/*
    [ 프로토타입을 이용하여 jQuery 만들기 ]

    아래 코드가 동작하게 만들어보세요.
    
    $('.logo').fadeIn(5000);
*/

/*
    [ Class를 이용하여 jQuery 만들기 ]

    1. Array를 Extends하는 jQuery라는 Class를 만드세요.
    
    2. 생성자함수를 이용하여 요소들을 받아오고 [] 안에 받아온 요소들을 전부 push하세요.
    
    3. 인자로 요소들을 받아오고 그 요소를 인자로 받아 새로운 제이쿼리 인스턴스를 리턴하는 $라는 이름의 함수를 만드세요.
    
    
    ------------------------------------------------------------------

    아래 코드가 동작하게 만들어보세요.

    4. $('.logo').fadeIn(1000); 가 작동되도록 만들어보세요.
   
    5. $("h1").removeClass("mario").removeClass("luigi").removeClass("kino"); 가 작동되도록 만들어보세요.
    
    6. const attr = $(".mario").attr("class"); $("h1").addClass(attr);이 작동되도록 만들어보세요.
    
    7. contains라는 메서드를 이용하면 특정 클래스가 존재하는지 확인 가능합니다.
    element.classList.contains('클래스이름'); 이걸 활용하여
    
    if ($("h1").hasClass("kino")) {$(".logo")[0].style.opacity = 0;} 가 작동되도록 만들어보세요.


*/

/* 선생님이랑 한 것 */

class jQuery extends Array {
  constructor(el) {
    super();
    const elements = document.querySelectorAll(el);

    for (let i = 0; i < elements.length; i++) {
      this.push(elements[i]);
    }
  }
  fadeIn(sec) {
    for (let i = 0; i < this.length; i++) {
      this[i].style.display = 'inline-block';
      this[i].style.opacity = 1;
      this[i].style.transition = `${sec / 1000}`

      //   this[i].style.display = 'inline-block';
      //   this[i].style.opacity = 0.01;
      //   let num = 0.01;
      //   setInterval(()=>{
      //     if(num < 1){
      //       num = num + 0.01;
      //       this[i].style.opacity = num
      //     }
      //   },sec/100)
    }
    return this
  }

  addClass(className) {
    for (let i = 0; i < this.length; i++) {
      this[i].classList.add(className);
    }
    return this
  }
  
  removeClass(className) {
    for (let i = 0; i < this.length; i++) {
      this[i].classList.remove(className);
    }
    return this
  }

  hasClass(className) {
    return this[0].classList.contains(className)
  }

  attr(attr, value = null) {
    let getAttr = this
    if (value) {
      this.each(function (el) {
        el.setAttribute(attr, value);
      })
    } else {
      getAttr = this[0].getAttribute(attr)
    }
    return getAttr;
  }
}

const $ = function (el) {
  return new jQuery(el)
}




/*
 내가 한 것
const fadeInLogo = (n) => {
  const logo = document.querySelector('.logo');
  logo.style.transition = `${n}s ease-in`;
  // 보이기
  logo.style.opacity = 1
  // 서서히 나타나게 하기
}

fadeInLogo(5)

const fadeInC = () => {
  const c = document.querySelectorAll('img')

  for(let i = 1; i < c.length; i++){
    c[i].style.opacity = 1;
    c[i].style.transition = `${i * 5}s ease`
  }
}

document.querySelector('.logo').addEventListener('click', fadeInC)

const attr = () => {
  const h1 = document.querySelector('h1');
  const mario = document.querySelector('mario');
  const luigi = document.querySelector('luigi');
  const kino = document.querySelector('kino');

  
}

attr()
*/

$(".logo").fadeIn(1000);

$(".logo")[0].addEventListener("click", () => {
  $(".mario").fadeIn(500);
  $(".luigi").fadeIn(1000);
  $(".kino").fadeIn(1500);
});

$(".mario")[0].addEventListener("click", () => {
  $("h1").removeClass("mario").removeClass("luigi").removeClass("kino");
  const attr = $(".mario").attr("class");
  $("h1").addClass(attr);
  $("h1")[0].innerText = attr;
});

/*


$(".luigi")[0].addEventListener("click", () => {
  $("h1").removeClass("mario").removeClass("luigi").removeClass("kino");
  const attr = $(".luigi").attr("class");
  $("h1").addClass(attr);
  $("h1")[0].innerText = attr;
});

$(".kino")[0].addEventListener("click", () => {
  $("h1").removeClass("mario").removeClass("luigi").removeClass("kino");
  const attr = $(".kino").attr("class");
  $("h1").addClass(attr);
  $("h1")[0].innerText = attr;

  if ($("h1").hasClass("kino")) {
    $(".logo")[0].style.opacity = 0;
  }
});
*/

