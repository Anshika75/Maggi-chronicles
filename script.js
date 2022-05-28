var icon = document.getElementById("icon");
var count = 0;
function themechange(){
    count++;
    if(count%2 != 0){
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        document.documentElement.style.setProperty("--lprimary", "#9E2A79");
        document.documentElement.style.setProperty("--lsecondary", "#050D27");
    }
    else{
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        document.documentElement.style.setProperty("--lsecondary", "#9E2A79");
        document.documentElement.style.setProperty("--lprimary", "#050D27");
    }
}
(function () {
    const items = document.querySelectorAll(".timeline li");
    function check(e) {
      let area = e.getBoundingClientRect();
      return (
        area.top >= 0 && area.left >= 0 && area.bottom <= (window.innerHeight || document.documentElement.clientHeight) && area.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function slide() {
      for (let i = 0; i < items.length; i++) {
        if (check(items[i])) {
          items[i].classList.add("slide");
        } 
        // else {
        //   items[i].classList.remove("slide");
        // }
      }
    }
  
    window.addEventListener("load", slide);
    window.addEventListener("scroll", slide);
    window.addEventListener("resize", slide);
  })();