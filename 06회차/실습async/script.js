/*
  [ User List 가져오기 ]

  1. users라는 빈 배열을 만들어주세요.

  2. filteredUsers라는 빈 배열을 만들어주세요.

  3. 데이터 가져오기
  https://raw.githubusercontent.com/seik1224/data-zelda/main/data.json
  
  위 링크에서 데이터를 비동기로 가져와서 테이블에 표시하는 getUsers함수를 작성하세요.

  4. 데이터를 가져오고 그 데이터를 filteredUsers에 넣어주세요.

  5. renderUsers라는 함수로 따로 만들어주세요.
  renderUsers 함수는 필터된 filteredUsers 데이터를 테이블 tr td 태그를 만들어서 데이터를 표시하는 함수입니다.



  [ 종족 필터링 ]

  1. 종족 필터링을 위한 filterByRace함수를 작성하세요.

  2. select 태그의 value값을 가져와서 filteredUsers에 해당하는 데이터만 넣어주세요.

  3. renderUsers함수를 호출하세요.

  4. select 태그에서 value값이 변경될 때마다 filterByRace함수를 호출하세요.
  document.getElementById("raceFilter").addEventListener("change", filterByRace);



  [ 이름 검색 ]

  1. 이름 검색을 위한 searchByName함수를 작성하세요.

  2. input 태그의 value값을 가져와서 filteredUsers에 해당하는 데이터만 넣어주세요.

  3. renderUsers함수를 호출하세요.

  4. input 태그에서 value값이 변경될 때마다 searchByName함수를 호출하세요.
  document.getElementById("searchInput").addEventListener("input", searchByName);



  [ 가입일 정렬 ]

  1. 가입일 정렬을 위한 sortByDate함수를 작성하세요.

  2. 버튼을 클릭할 때마다 filteredUsers를 가입일 순으로 정렬하여 renderUsers함수를 호출하세요.
  document.getElementById("sortDateButton").addEventListener("click", sortByDate);
*/

const users = [];
const filteredUsers = [];

async function fetchData() {
  try {
    const response = await fetch("https://raw.githubusercontent.com/seik1224/data-zelda/main/data.json");
    const data = await response.json();
    console.log(data); // 데이터가 정상적으로 받아지는지 확인
    console.log(data[0])
  } catch (error) {
    console.error("데이터를 가져오는 중 오류 발생:", error);
  }
}

fetchData();

async function getUsers() {
  try {
    const response = await fetch("https://raw.githubusercontent.com/seik1224/data-zelda/main/data.json");
    const users = await response.json(); // JSON 데이터 가져오기

    console.log(users);

    const userTableBody = document.getElementById("userList"); // tbody 요소 가져오기
    // userTableBody.innerHTML = ""; // 기존 데이터 초기화

    users.forEach(user => {
      const row = document.createElement("tr"); // 새로운 행 생성

      row.innerHTML = `
        <td><img src="${user.imgSrc}" alt="${user.name}" width="50"></td>
        <td>${user.name}</td>
        <td>${user.isMen ? "남성" : "여성"}</td>
        <td>${user.kind}</td>
        <td>${user.date}</td>
      `;

      userTableBody.appendChild(row); // 테이블에 행 추가
    });
  } catch (error) {
    console.error("데이터를 가져오는 중 오류 발생:", error);
  }
}

getUsers(); // 함수 실행

document.getElementById('raceFilter').addEventListener('change', async function () {
  console.log(this.value); // 선택된 option의 value 출력

  try {
    const response = await fetch("https://raw.githubusercontent.com/seik1224/data-zelda/main/data.json");
    const users = await response.json(); // JSON 데이터 가져오기

    const userTableBody = document.getElementById("userList"); // tbody 가져오기
    userTableBody.innerHTML = ""; // 기존 행 초기화

    // 선택한 종족과 일치하는 유저만 표시
    users.forEach(user => {
      if (this.value === "" || this.value === user.kind) {
        const row = document.createElement("tr"); // 새로운 행 생성
        row.innerHTML = `
          <td><img src="${user.imgSrc}" alt="${user.name}" width="50"></td>
          <td>${user.name}</td>
          <td>${user.isMen ? "남성" : "여성"}</td>
          <td>${user.kind}</td>
          <td>${user.date}</td>
        `;
        userTableBody.appendChild(row); // 테이블에 추가
      }
    });
  } catch (error) {
    console.error("데이터 가져오는 중 오류 발생:", error);
  }
});

document.getElementById('searchInput').addEventListener('change', async function () {
  console.log(this.value);

  try {
    const response = await fetch("https://raw.githubusercontent.com/seik1224/data-zelda/main/data.json");
    const users = await response.json(); // JSON 데이터 가져오기

    const userTableBody = document.getElementById("userList"); // tbody 가져오기
    userTableBody.innerHTML = ""; // 기존 행 초기화

    // 선택한 종족과 일치하는 유저만 표시
    users.forEach(user => {
      if (this.value === "" || this.value === user.name) {
        const row = document.createElement("tr"); // 새로운 행 생성
        row.innerHTML = `
          <td><img src="${user.imgSrc}" alt="${user.name}" width="50"></td>
          <td>${user.name}</td>
          <td>${user.isMen ? "남성" : "여성"}</td>
          <td>${user.kind}</td>
          <td>${user.date}</td>
        `;
        userTableBody.appendChild(row); // 테이블에 추가
      }
    });
  } catch (error) {
    console.error("데이터 가져오는 중 오류 발생:", error);
  }
})

// 내가 하다 포기한 것
// document.getElementById("sortDateButton").addEventListener("click", async function sortByDate(){
//   try {
//     const response = await fetch("https://raw.githubusercontent.com/seik1224/data-zelda/main/data.json");
//     const users = await response.json(); // JSON 데이터 가져오기
//     const dateArray = [];
//     const userTableBody = document.getElementById("userList"); // tbody 가져오기
    
//     // 선택한 종족과 일치하는 유저만 표시
//     users.forEach((user, index) => {
//       console.log(user.date)
//       dateArray.push(user.date)
//       dateArray.sort((a,b)=> b - a)
//       console.log(dateArray)

//     });
//   } catch (error) {
//     console.error("데이터 가져오는 중 오류 발생:", error);
//   }
// });

document.getElementById("sortDateButton").addEventListener("click", async function sortByDate() {
  try {
    const response = await fetch("https://raw.githubusercontent.com/seik1224/data-zelda/main/data.json");
    let users = await response.json(); // JSON 데이터 가져오기

    const userTableBody = document.getElementById("userList"); // tbody 가져오기
    userTableBody.innerHTML = ""; // 기존 데이터 초기화

    // 날짜 기준으로 내림차순 정렬
    users.sort((a, b) => b.date - a.date);

    // 정렬된 데이터를 테이블에 추가
    users.forEach(user => {
      const row = document.createElement("tr"); // 새로운 행 생성
      row.innerHTML = `
        <td><img src="${user.imgSrc}" alt="${user.name}" width="50"></td>
        <td>${user.name}</td>
        <td>${user.isMen ? "남성" : "여성"}</td>
        <td>${user.kind}</td>
        <td>${user.date}</td>
      `;
      userTableBody.appendChild(row); // 테이블에 추가
    });

  } catch (error) {
    console.error("데이터 가져오는 중 오류 발생:", error);
  }
});
