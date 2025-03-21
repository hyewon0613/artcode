// 모든 화살표를 클릭할 때 이벤트를 처리하도록 설정
document.querySelectorAll(".arrow").forEach((arrow, index) => {
  arrow.addEventListener("click", function () {
    var content = document.querySelectorAll(".content")[index];
    var title = document.querySelectorAll(".ticket-title")[index];

    // 해당 항목의 밑에 텍스트를 표시하거나 숨깁니다.
    content.style.display =
      content.style.display === "block" ? "none" : "block";

    // 해당 항목의 "티켓 구매" 제목 색상을 노란색으로 변경
    title.classList.toggle("active");
  });
});
