let solved = {1:false, 2:false};
let score = 0;
const totalPuzzles = 2;

function updateStatus(){
  document.getElementById("scoreDisplay").textContent = "Điểm: " + score;
  const done = Object.values(solved).filter(x=>x).length;
  document.getElementById("progressDisplay").textContent = "Tiến độ: " + done + " / " + totalPuzzles;
}

// Kiểm tra câu trả lời
function checkAnswer(puzzle, answer){
  const correctAnswers = {1:false, 2:true};
  const fbEl = document.getElementById("feedback"+puzzle);

  if(answer === correctAnswers[puzzle]){
    fbEl.style.color = "green";
    fbEl.textContent = "Chính xác! Giải thích: " + getExplanation(puzzle);
    if(!solved[puzzle]){
      score +=10;
      solved[puzzle] = true;
    }
  } else {
    fbEl.style.color = "red";
    fbEl.textContent = "Sai! Nguyên nhân: " + getWrongExplanation(puzzle);
  }
  updateStatus();
}

function getExplanation(puzzle){
  if(puzzle===1) return "Nguyễn Huệ chính là Quang Trung — lãnh đạo quân Tây Sơn chiến thắng quân Thanh năm 1789.";
  if(puzzle===2) return "Poster này đúng: Quang Trung = Nguyễn Huệ, hai tên cùng một người.";
}

function getWrongExplanation(puzzle){
  if(puzzle===1) return "Video nói hai người khác nhau, nhưng thực tế Nguyễn Huệ chính là Quang Trung.";
  if(puzzle===2) return "Poster đúng, bạn nhầm. Nguyễn Huệ và Quang Trung là cùng một người.";
}

// Mở cửa
function tryDoor(){
  const doorFB = document.getElementById("doorFeedback");
  const done = Object.values(solved).filter(x=>x).length;
  if(done >= totalPuzzles){
    doorFB.style.color="green";
    doorFB.textContent="Chúc mừng! Bạn đã mở cửa thành công!";
  } else {
    doorFB.style.color="red";
    doorFB.textContent="Bạn chưa giải hết các câu đố. Hoàn thành tất cả để mở cửa.";
  }
}

window.addEventListener("load", updateStatus);
