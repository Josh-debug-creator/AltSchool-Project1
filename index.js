window.addEventListener("DOMContentLoaded", (e) => {
// GET BUTTON
    const toggleBtn = document.getElementById("open-btn");
    const closeBtn = document.getElementById("close-btn");
    const sideNav = document.getElementById("side-nav2");
    const subNav = document.getElementsByClassName("subnav-1")[0];
    const toggleBtn2 = document.getElementsByClassName("toggle1")[0];
    const closeSubNav = document.getElementsByClassName("close")[0]

// function to display side navigation
  function displayNav (){

    sideNav.classList.remove("display-none");
    sideNav.classList.add("display-block");
}
// function to remove side navigation
function removeNav (){
  sideNav.classList.remove("display-block");
  sideNav.classList.add("display-none");

} 
// function to display sub navigation
function displaySubNav (){
    subNav.classList.add("display-flex");
  toggleBtn2.classList.add("display-none");
  closeSubNav.classList.add("display-flex");
}
// function to remove sub navigation
closeSubNav.addEventListener("click", function(){
  subNav.classList.remove("display-flex");
  closeSubNav.classList.remove("display-flex");
  toggleBtn2.classList.remove("display-none");
  
})
// ANIMATION


 
  
// EVENT LISTENERS
  if (toggleBtn2){
 toggleBtn2.addEventListener("click",function(){
  displaySubNav()
} )

}
if (toggleBtn){
  toggleBtn.addEventListener("click",function(){
    displayNav()
  } )
  
  }

if (closeBtn){
  closeBtn.addEventListener("click",function(){
    removeNav()
  } )
  
  }


})
    














  // document.addEventListener("DOMContentLoaded", function() {
  //   // Get references to the button and menu section
  //   const toggleButton = document.getElementById("toggle-button");
  //   const menuSection = document.getElementById("menu-section");
    
  //   // Add click event listener to the button
  //   toggleButton.addEventListener("click", function() {
  //     // Toggle the visibility of the menu section
  //     if (menuSection.style.display === "none") {
  //       menuSection.style.display = "block";
  //     } else {
  //       menuSection.style.display = "none";
  //     }
  //   });
  // });


   
    












  