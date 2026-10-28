var foodImg = document.getElementById("food-img");
var foodName = document.getElementById("food-name");
var foodDesc = document.getElementById("food-desc");
var foodPrice = document.getElementById("food-price");
var random = document.getElementById("random");

var foods = [
      {
        name: "BEFF WELLINGTON",
        desc: "Stop it im hungry",
        price: "ราคา 4,890 บาท",
        image: "beefwellington.jpg"
      },
      {
        name: "chicken tikka masala",
        desc: "Put the chicken tikka masala in my butt cheek coach",
        price: "ราคา 50-60 บาท",
        image: "chicken tikka masala.jpg"
      },
      {
        name: "Haggis",
        desc: "EW EW EW EW EW EEWEWWEWEWEW",
        price: "ราคา 15 บาท",
        image: "haggis.jpg"
      },
      {
        name: "Hawaiian Pizza",
        desc: "Italian won't like this",
        price: "ราคา 339 บาท",
        image: "hawaiianpizza.jpg"
      },
      {
        name: "HOLY COW",
        desc: "SMITE 5 แถมน้ำมนต์",
        price: "ราคา 80 บาท",
        image: "holycow.jpg"
      }
    ];
var lastIndex = -1;

function showFood(index) {
  var food = foods[index];
  foodImg.src = food.image;
  foodImg.alt = food.name;
  foodName.textContent = food.name;
  foodDesc.textContent = food.desc;
  foodPrice.textContent = food.price;
}
function pickRandom() {
  var index = Math.floor(Math.random() * foods.length);
  while (index === lastIndex) {
    index = Math.floor(Math.random() * foods.length);
  }
  lastIndex = index;
  showFood(index);
}

random.addEventListener("click", pickRandom);
pickRandom();