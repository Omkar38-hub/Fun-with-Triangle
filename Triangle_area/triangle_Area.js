const input=document.querySelectorAll(".input-box");
const btn=document.querySelector("#Area-btn");
const output=document.querySelector("#output");

function calculateArea(a,b,c)
{
    if((a+b)>c && (b+c)>a && (c+a)>b)
    {
      var s=(a+b+c)/2;
      var area=Math.sqrt(s*(s-a)*(s-b)*(s-c));
      output.innerText="The Area of triangle is "+area.toFixed (4)+"(cm²)";
    }
    else
     output.innerText="Please enter valid inputs!!";
}
btn.addEventListener("click",function()
{
  if((input[0].value).length>0 &&(input[1].value).length>0 &&(input[2].value).length>0 ){
  calculateArea(Number(input[0].value),Number(input[1].value),Number(input[2].value));
}
else
  output.innerText="All fields are required!!";
})
