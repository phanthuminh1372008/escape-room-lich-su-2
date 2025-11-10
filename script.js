let solved = {1:false, 2:false};
let score = 0;

function checkAnswer(puzzle, answer){
  const correctAnswers = {1:false, 2:true};
  const feedbackEl = document.getElementById("feedback"+puzzle);

  if(answer === correctAnswers[puzzle]){
    feedbackEl.style.color = "green";
    feedbackEl.textContent = "Chính xác! Giải thích: " + getExplanation(puzzle);
    if(!solved[puzzle]){
      score +=10;
      solved[puzzle]=true;
    }
  } else {
    feedbackEl.style.color = "red";
    feedbackEl.textContent = "Sai! Nguyên nhân: " + getWrongExplanation(puzzle);
  }
}

function getExplanation(puzzle){
  if(puzzle===1) return "Nguyễn Huệ chính là Quang Trung, lãnh đạo quân Tây Sơn chiến thắng quân Thanh năm 1789.";
  if(puzzle===2) return "Poster này ghi đúng: Quang Trung = Nguyễn Huệ, hai tên cùng một người.";
}

function getWrongExplanation(puzzle){
  if(puzzle===1) return "Video nói hai người khác nhau, nhưng thực tế Nguyễn Huệ là Quang Trung.";
  if(puzzle===2) return "Poster đúng, bạn nhầm. Nguyễn Huệ và Quang Trung là cùng một người.";
}

function tryDoor(){
  const doorFB = document.getElementById("doorFeedback");
  if(solved[1] && solved[2]){
    doorFB.style.color="green";
    doorFB.textContent="Chúc mừng! Bạn đã mở cửa thành công!";
  } else {
    doorFB.style.color="red";
    doorFB.textContent="Bạn chưa giải hết các câu đố. Hoàn thành tất cả để mở cửa.";
  }
}
