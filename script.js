const nasiGoreng = document.querySelector("#nasi-goreng");

nasiGoreng.addEventListener("mouseover", function () {
  nasiGoreng.setAttribute("src", "assets/image/nasi-goreng2.jpg");
});

nasiGoreng.addEventListener("mouseout", function () {
  nasiGoreng.setAttribute("src", "assets/image/nasi-goreng.jpg");
});

const menu = document.querySelector(".menu");
const dropdown = document.querySelector("nav div");

document.addEventListener("click", function (e) {
  if (e.target.className !== "menu") {
    dropdown.classList.remove("dropdown");
    dropdown.style.display = "none";
    menu.style.fontWeight = "400";
  } else {
    dropdown.classList.toggle("dropdown");
    if (dropdown.classList.contains("dropdown")) {
      dropdown.style.display = "flex";
      menu.style.fontWeight = "bold";
    } else {
      dropdown.style.display = "none";
      menu.style.fontWeight = "400";
    }
  }
});
