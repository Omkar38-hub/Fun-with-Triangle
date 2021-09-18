const input=document.querySelectorAll(".input-box");
const btn=document.querySelector("#isTrainagle-btn");
const output=document.querySelector("#output");

function calculateSum(a,b,c)
{
  return (a+b+c);
}
btn.addEventListener("click",function()
{
  var userSum=calculateSum(Number(input[0].value),Number(input[1].value),Number(input[2].value));
  if(userSum===180)
  {
    output.innerText="Yay, The angles form a triangle!";
  }
  else
  {
        output.innerText="Oh! Given angles doesn't form a triangle";
  }
})
