function handleClick(){
  document.querySelector(".heartbody").style.display ="none";
  document.querySelector(".explosionDiv").style.display ="block";
  
  setTimeout(()=>{
    document.querySelector(".explosionDiv").style.display ="none";
    document.querySelector(".Ask").style.display="block";
  }, 8500)
}

function done(){
  document.querySelector(".Ask").style.display="none";
  document.querySelector(".saidYes").style.display="block";
  setTimeout(()=>{
    document.querySelector(".saidYes").style.display ="none";
  }, 6000)
}