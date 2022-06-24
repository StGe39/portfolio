const frontDesignPage = document.querySelector("#webDesign");
const frontWebPage = document.querySelector("#webPublishing");
const frontPlanPage = document.querySelector("#webPlan");
const frontProfilePage = document.querySelector("#profile");

const frontDesignLeft = document.querySelector("#webDesign>.designCover>.bookImg");
const frontWebLeft = document.querySelector("#webPublishing>.publishingCover>.bookImg");
const frontPlanLeft = document.querySelector("#webPlan>.planCover>.bookImg");
const frontProfileLeft = document.querySelector("#profile>.profileCover>.bookImg");

const frontDesignOpen = document.querySelector("#webDesign>.designCover>.openImg");
const frontWebOpen = document.querySelector("#webPublishing>.publishingCover>.openImg");
const frontPlanOpen = document.querySelector("#webPlan>.planCover>.openImg");
const frontProfileOpen = document.querySelector("#profile>.profileCover>.openImg");


let chk = true;

function funcDesign(){

  frontDesignOpen.style.transformOrigin = "103% 0"
  frontDesignLeft.style.transformOrigin = "0 103%";
  if(chk == true){
    
    /*첫번 째를 제외한 element*/
    frontWebPage.style.transform = "translate(2000px)";
    frontPlanPage.style.transform = "translate(2000px)";
    frontProfilePage.style.transform = "translate(2000px)";
    
    /*첫번 째 element*/
    frontDesignPage.style.transform = "scale(2) translate(180%)";
    frontDesignOpen.style.transform = "rotateY(90deg)";
    frontDesignLeft.style.transform = "rotateY(180deg)"


    console.log(frontProfileOpen)

    

    chk = false;
  }
  else{

    /*첫번 째를 제외한 element*/
    frontWebPage.style.transform = "translate(0px)";
    frontPlanPage.style.transform = "translate(0px)";
    frontProfilePage.style.transform = "translate(0px)";

    /*첫번 째 element*/
    frontDesignPage.style.transform = "scale(1) translate(0%)";
    frontDesignOpen.style.transform = "rotateY(0deg)";
    frontDesignLeft.style.transform = "rotateY(0deg)"

    chk = true;
  }
  
}
function funcWeb(){

  frontWebOpen.style.transformOrigin = "103% 0"
  frontWebLeft.style.transformOrigin = "0 103%";
  if(chk == true){

    /*첫번 째를 제외한 element*/
    frontDesignPage.style.transform = "translate(2000px)";
    frontPlanPage.style.transform = "translate(2000px)";
    frontProfilePage.style.transform = "translate(2000px)";

    /*첫번 째 element*/
    frontWebPage.style.transform = "scale(2) translate(93.5%)";
    frontWebOpen.style.transform = "rotateY(90deg)";
    frontWebLeft.style.transform = "rotateY(180deg)"

    chk = false;
  }
  else{

    /*첫번 째를 제외한 element*/
    frontDesignPage.style.transform = "translate(0px)";
    frontPlanPage.style.transform = "translate(0px)";
    frontProfilePage.style.transform = "translate(0px)";
    /*첫번 째 element*/
    frontWebPage.style.transform = "scale(1) translate(0%)";
    frontWebOpen.style.transform = "rotateY(0deg)";
    frontWebLeft.style.transform = "rotateY(0deg)"

    chk = true;
  }
  
}
function funcPlan(){

  frontPlanOpen.style.transformOrigin = "103% 0"
  frontPlanLeft.style.transformOrigin = "0 103%";
  if(chk == true){

    /*첫번 째를 제외한 element*/
    frontWebPage.style.transform = "translate(2000px)";
    frontDesignPage.style.transform = "translate(2000px)";
    frontProfilePage.style.transform = "translate(2000px)";
    
    /*첫번 째 element*/
    frontPlanPage.style.transform = "scale(2) translate(7%)";
    frontPlanOpen.style.transform = "rotateY(90deg)";
    frontPlanLeft.style.transform = "rotateY(180deg)"

    chk = false;
  }
  else{

    /*첫번 째를 제외한 element*/
    frontWebPage.style.transform = "translate(0px)";
    frontDesignPage.style.transform = "translate(0px)";
    frontProfilePage.style.transform = "translate(0px)";

    /*첫번 째 element*/
    frontPlanPage.style.transform = "scale(1) translate(0%)";
    frontPlanOpen.style.transform = "rotateY(0deg)";
    frontPlanLeft.style.transform = "rotateY(0deg)"

    chk = true;
  }
  
}
function funcProfile(){

  frontProfileOpen.style.transformOrigin = "103% 0"
  frontProfileLeft.style.transformOrigin = "0 103%";
  if(chk == true){

    /*첫번 째를 제외한 element*/
    frontWebPage.style.transform = "translate(2000px)";
    frontPlanPage.style.transform = "translate(2000px)";
    frontDesignPage.style.transform = "translate(2000px)";

    /*첫번 째 element*/
    frontProfilePage.style.transform = "scale(2) translate(-79.8%)";
    frontProfileOpen.style.transform = "rotateY(90deg)";
    frontProfileLeft.style.transform = "rotateY(180deg)";

    chk = false;
  }
  else{

    /*첫번 째를 제외한 element*/
    frontWebPage.style.transform = "translate(0px)";
    frontPlanPage.style.transform = "translate(0px)";
    frontDesignPage.style.transform = "translate(0px)";

    /*첫번 째 element*/
    frontProfilePage.style.transform = "scale(1) translate(0%)";
    frontProfileOpen.style.transform = "rotateY(0deg)";
    frontProfileLeft.style.transform = "rotateY(0deg)";

    chk = true;
  }
}
frontDesignPage.addEventListener("click",funcDesign);
frontWebPage.addEventListener("click",funcWeb);
frontPlanPage.addEventListener("click",funcPlan);
frontProfilePage.addEventListener("click",funcProfile);
