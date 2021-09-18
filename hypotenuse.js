const input=document.querySelectorAll(".input-box");
const btn=document.querySelector("#hypotenuse-btn");
const output=document.querySelector("#output");

function calculateHypotenuse(a,b)
{
  var hypo=Math.sqrt(a*a+b*b);
  return hypo;
}
btn.addEventListener("click",function()
{
  if(Number(input[0].value)&&Number(input[1].value)){
  var hypotenuse=calculateHypotenuse(Number(input[0].value),Number(input[1].value));
  output.innerText="The Length of Hypotenuse is "+hypotenuse.toFixed(2)+"(cm)";
}else
  output.innerText="All fields are required!!";
})
