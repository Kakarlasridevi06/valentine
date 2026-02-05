let No=document.getElementById("No");
console.log(Math.random(0));
let Yes = document.getElementById("Yes");
No.addEventListener("mouseenter",()=>{
    let n = Math.random()*100;
    No.style.marginLeft=300+n+"px";
    No.style.marginRight=n-500+"px";
    No.style.marginTop=n+"px";
    No.style.marginBottom=n+"px";
     
})
let a = document.getElementById("container");
Yes.addEventListener("click",()=>{
    a.innerHTML=`
    <h2 class="text">💖  YAY!!!   💖</h2>
    <P class="text">Best decision ever ❤️</P>
    <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmR2OGpza3QxNHlzODlseWY1dzQ4dndhbGFqM3FtY3k3ajh5enk3bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SYo1DFS8NLhhqzzjMU/giphy.gif" id="giphy1">
    <h2 class="text">I Love You🩷</h2>
    `;
    a.style.padding=35+"px";
    a.style.margin="auto";


})
