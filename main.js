//signupdot
document.querySelector(".signdot i").addEventListener("click", function (event) {
  event.stopPropagation(); 
  const menu = document.getElementById("menu");
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
});

document.addEventListener("click", function () {
  const menu = document.getElementById("menu");
  menu.style.display = "none";
});

//Dropdwon
function toggleDropdown() {
    const menu = document.getElementById('dropdowncontent');
    const arrow = document.getElementById('arrow');
    menu.classList.toggle('show');
    arrow.classList.toggle('rotate');
  }


  const staffBtn = document.getElementById("staff-read-more");//professional staff
  const staffShort = document.getElementById("staff-short");
  const staffMore = document.getElementById("staff-more");

  staffBtn.addEventListener("click", function () {
    if (staffMore.style.display === "none") {
      staffMore.style.display = "block";
      staffBtn.textContent = "SHOW LESS";
    } else {
      staffMore.style.display = "none";
      staffBtn.textContent = "READ MORE";
    }
  });
  const priceBtn = document.getElementById("price-read-more");//affordable price
  const priceShort = document.getElementById("price-short");
  const priceMore = document.getElementById("price-more");

  priceBtn.addEventListener("click", function () {
    if (priceMore.style.display === "none") {
      priceMore.style.display = "block";
      priceBtn.textContent = "SHOW LESS";
    } else {
      priceMore.style.display = "none";
      priceBtn.textContent = "VIEW PRICELIST";
    }
  });

  const readMoreBtn = document.getElementById("read-more-btn");//Insurance Partner
  const moreText = document.getElementById("more-text");
  const shortText = document.getElementById("short-text");

  readMoreBtn.addEventListener("click", function () {
    if (moreText.style.display === "none") {
      moreText.style.display = "block";
      readMoreBtn.textContent = "SHOW LESS";
    } else {
      moreText.style.display = "none";
      readMoreBtn.textContent = "READ MORE";
    }
  });

  //doctor
  const doctorInfo = {
    "Dr. Saga Lundqvist": "Dental & Heart Disease – National University os Seattle(2005), Masters in internal Medicine(2007).",
    "Dr. Danni Fisher": "Obstetrics & Gynaecology – Founder of Medanta. Studied at King George’s Medical College.",
    "Dr. Danny Nguyen": "Dental & Outpatient Surgery – Former Director of AIIMS Delhi. Specialized in respiratory medicine.",
    "Dr. Micheal Don": "Obstetrics & Gynaecology and Gynecological & Heart Diseases – Founder of Thyrocare. Holds a PhD in Thyroid Biochemistry.",
    "Dr. Anna Reeves": "Cancer, Dental & Elder Clinic – Known for innovations in heart surgery. Alumni of AIIMS.",
    "Dr. Michelle Liv": "Cancer & Children Clinic & Pediatric – Former VC of Manipal University. Studied at Stanley Medical College.",
  };

  const selectElement = document.getElementById("doctor-select");
  const detailView = document.getElementById("detail-view");
  const selectView = document.getElementById("select-view");
  const doctorDetails = document.getElementById("doctor-details");
  const backButton = document.getElementById("back-button");

  selectElement.addEventListener("change", function () {
    const selectedDoctor = selectElement.value;
    if (doctorInfo[selectedDoctor]) {
      doctorDetails.textContent = doctorInfo[selectedDoctor];
      selectView.style.display = "none";
      detailView.style.display = "block";
    }
  });

  backButton.addEventListener("click", function () {
    selectElement.value = "Choose a doctor";
    detailView.style.display = "none";
    selectView.style.display = "block";
  });



//Slide Bar
let slideIndex = 0;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
let slideTimer;

function showSlides(n = null) {
  if (n !== null) {
    slideIndex = n - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove("active");
  }

  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");

  slideTimer = setTimeout(() => showSlides(), 2000);
}

function plusSlides(n) {
  clearTimeout(slideTimer);
  showSlides(slideIndex + n);
}
function currentSlide(n) {
  clearTimeout(slideTimer);
  showSlides(n);
}

showSlides();

//welcome to medical
function toggleReadMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("readBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.textContent = "Read More";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.textContent = "Read Less";
        moreText.style.display = "inline";
    }
}

//search bar

