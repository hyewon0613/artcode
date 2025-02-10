$(".circle-graph-sec3_5").each(function (index, node) {
  let perNum = $(this).attr("circleProgress");
  let fillColors = ["#EB926A", "#5e51f3"]; // 그래프의 색상 배열
  let fillColor = fillColors[index];

  $(this).circleProgress({
    size: 150, // 그래프 크기
    value: perNum / 65, // 그래프에 표시될 값
    startAngle: 300, // 시작지점
    thickness: 25, // 그래프 두께
    fill: {
      // 그래프 선 색
      color: fillColor,
    },
    animation: {
      duration: 1200,
    },
    lineCap: "round", // 그래프 선 모양
    reverse: false, // 그래프가 진행되는 방향
  });
});
