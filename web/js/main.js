let actions = {
  result: "",
  description: "",
  img: ""
};
//  trash, plastic, glass, paper, metal
let descriptions = {
  "3": "This is an Acura! It is predicted with 99.5% accuracy.",
  "14": "This is an Audi! It is predicted with 99.5% accuracy.",
  "91": "This is a Dodge! It is predicted with 99.5% accuracy.",
  "106": "This is a Ford! It is predicted with 99.5% accuracy.",
  "134": "This is a Hyundai! It is predicted with 99.5% accuracy.",
  "Unknown": "Hmmm, we couldn't detect what that was. Maybe try another image?"
}

let img = {
  "3": "../img/Acura-Logo.png",
  "14": "../img/audilogo.jpg",
  "91": "../img/Dodge_Logo1.jpg",
  "106": "../img/Ford_logo_flat.svg.png",
  "134": "../img/Hyundai.jpg",
  "Unknown": "../img/qmark.png"
}

$('#file-upload').on('change', function() {
  let fileName = $(this).val().split('\\').pop();
  $(this).next('#fileName').addClass("selected").html(fileName);
  console.log("HERE")
});

var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
if (prevScrollpos > currentScrollPos) {
  document.getElementById("navbar-main").style.top = "0";
} else {
  document.getElementById("navbar-main").style.top = "-100px";
}
  prevScrollpos = currentScrollPos;
}

document.getElementById("result").addEventListener("click", () => {
  const url = "http://127.0.0.1:5000/getPrediction"
  let type;
  fetch(url)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      type = data.result
      setActions(type)
      showElements()
      console.log(type)
    })
})

document.getElementById("again").addEventListener("click", () => {
  scrollTo("navbar-main")
  document.getElementById("results-section").classList.add("hidden");
})


function setActions(type) {
  actions.result = type;
  console.log(type)
  console.log(descriptions[type])
  actions.description = descriptions[type]
  actions.img = img[type]
}

function showElements() {
  let typeShow = document.getElementById("result-type");
  let descripShow = document.getElementById("result-description");
  let imgShow = document.getElementById("result-img");

  typeShow.innerHTML = actions.result;
  descripShow.innerHTML = actions.description;
  imgShow.src = actions.img;

  document.getElementById("results-section").classList.remove("hidden");

  scrollTo("results-section")  
}



function scrollTo(hash) {
  location.hash = "#" + hash;
}


