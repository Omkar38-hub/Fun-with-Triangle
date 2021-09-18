const input=document.querySelectorAll(".input-box");
const btn=document.querySelector("#Area-btn");
const output=document.querySelector("#output");

function calculateArea(a,b,c)
{
  var s=(a+b+c)/2;
  var area=Math.sqrt(s*(s-a)*(s-b)*(s-c));
  return area;
}
btn.addEventListener("click",function()
{
  var userArea=calculateArea(Number(input[0].value),Number(input[1].value),Number(input[2].value));
  output.innerText="The Area of triangle is "+userArea.toFixed (4)+"(cm²)";
})
