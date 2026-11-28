// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di-klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  e.preventDefault(); // Mencegah halaman loncat ke atas karena href="#"
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Toggle class active utk  search  form
const searchForm = document.querySelector(".search-form");
const searchBox = document.getElementById("search-box");
const searchButton = document.querySelector("#search-button");
// ketika search button di-klik
searchButton.onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Klik di luar sidebar untuk menghilangkan nav
document.addEventListener("click", function (e) {
  if (!searchForm.contains(e.target) && !searchButton.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

// toggle class active utk shopping card

const toggleShoppingCart = document.querySelector("#shopping-cart-button");
const shoppingCart = document.querySelector(".shopping-cart");

toggleShoppingCart.onclick = (e) => {
  e.preventDefault();
  if (!shoppingCart.classList.contains("active")) {
    shoppingCart.classList.add("active");
  } else {
    shoppingCart.classList.remove("active");
  }
};

document.onclick = (e) => {
  if (
    !shoppingCart.contains(e.target) &&
    !toggleShoppingCart.contains(e.target)
  ) {
    shoppingCart.classList.remove("active");
  }
};

// Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

// itemDetailButtons.forEach((btn) => {
//   btn.onclick = (e) => {
//     e.preventDefault();
//     itemDetailModal.style.display = "flex";
//   };
// });

document.addEventListener("click", function (e) {
  // Cari apakah yang diklik adalah .item-detail-button (atau icon <svg>/<use> di dalamnya)
  const detailBtn = e.target.closest(".item-detail-button");
  if (detailBtn) {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  }
});

// for (const btn of itemDetailButtons) {
//   btn.onclick = (e) => {
//     e.preventDefault();
//     itemDetailModal.style.display = "flex";
//   };
// }

// klik tombol close
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// Klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
