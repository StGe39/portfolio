const frontDesignPage = document.querySelector("#webDesign");
const frontWebPage = document.querySelector("#webPublishing");
const frontPlanPage = document.querySelector("#webPlan");
const frontProfilePage = document.querySelector("#profile");
const frontTotalPage = document.querySelectorAll("#mainContent>div");
let chk = true;


function chklog(){

  //나머지에 .hidden을 넣어서 숨기기
  if(chk === true){
    frontWebPage.classList.add("hidden");
    frontPlanPage.classList.add("hidden");
    frontProfilePage.classList.add("hidden");
    frontDesignPage.style.transform = "scale(1.5)";

    chk = false;
    console.log(frontTotalPage);
  }
  else{
    frontWebPage.classList.remove("hidden");
    frontPlanPage.classList.remove("hidden");
    frontProfilePage.classList.remove("hidden");
    frontDesignPage.style.transform = "scale(1)";

    chk = true;
  }
  
}
frontDesignPage.addEventListener("click",chklog);
