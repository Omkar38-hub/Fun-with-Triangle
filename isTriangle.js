const input = document.querySelectorAll(".input-box");
const btn = document.querySelector("#isTrainagle-btn");
const output = document.querySelector("#output");

function calculateSum(a, b, c) {
  return (a + b + c);
}

function showMsg(msg) {
  output.innerText = msg;
}
btn.addEventListener("click", function() {
  if (Number(input[0].value) && Number(input[1].value) && Number(input[2].value)) {
      var userSum = calculateSum(Number(input[0].value), Number(input[1].value), Number(input[2].value));
      if (userSum === 180) {
        showMsg("Yay, The angles form a triangle!");
      } else {
        showMsg("Oh! Given angles doesn't form a triangle.");
      }
    } else
    showMsg("Oh! Given angles doesn't form a triangle.");
})
