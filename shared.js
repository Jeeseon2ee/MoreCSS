var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalNoButton = document.querySelector(".modal_action_negative");
var selectPlanButtons = document.querySelectorAll(".plan button");
var toggleButton = document.querySelector(".toggle_button");
var mobileNav = document.querySelector(".mobile_nav");
var mainButton = document.querySelector(".main_nav_item_button");

// console.dir(backdrop.style['background-image']);

// console.dir(backdrop);
for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function() {
    //modal.style.display = "block";
    //backdrop.style.display = "block";
    // modal.className = 'open'; // This will actually overwrite the complete class list
    modal.classList.add("open");
    backdrop.style.display = "block";
    setTimeout(function() {
      backdrop.classList.add("open");
    }, 10)
  });
}

backdrop.addEventListener("click", function() {
  // mobileNav.style.display = 'none';
  mobileNav.classList.remove("open");
  closeModal();
});

if (modalNoButton) {
  modalNoButton.addEventListener("click", closeModal);
}

function closeModal() {
  //backdrop.style.display = "none";
  //modal.style.display = "none";
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
  setTimeout(function() {
    backdrop.style.display = "none";
  }, 200);
}

toggleButton.addEventListener("click", function() {
  // mobileNav.style.display = 'block';
  // backdrop.style.display = 'block';
  mobileNav.classList.add("open");
  backdrop.style.display = "block";
  setTimeout(function() {
    backdrop.classList.add("open");
  }, 10)
});

mainButton.addEventListener("animationstart"), function(event) {
  console.log("Animation started", event);
}

mainButton.addEventListener("animationend"), function(event) {
  console.log("Animation ended", event);
}

mainButton.addEventListener("animationiteration"), function(event) {
  console.log("Animation iteration", event);
}