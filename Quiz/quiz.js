var quiz=document.querySelector(".quiz-form");
var submit=document.querySelector("#submit-btn");
var output=document.querySelector("#output");

var correctAnswer=["90°","right angled","one right angle","12, 16, 20","Equilateral triangle","85°","40°","a + b + c","no","45°"];
submit.addEventListener("click",function(){
  var index=0;
  var score=0;
  const result= new FormData(quiz); //provides a way to easily construct a set of key/value pairs representing form fields and their values,
  for(let entry of result.values())// .values() used to acces only value pairs
  {
    if(entry===correctAnswer[index])
    {
      score=score+1;
    }
    index=index+1;
  }
  output.innerText="Your Score is "+score+" out of 10.!!";
})
