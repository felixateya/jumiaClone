var PhoneOne = {
  image: "/images/a23.png",
  name: "Samsung Galaxy A23",
  discountedPrice: 22299,
  originalPrice: 27299,
  itemId: "B001"
};

var PhoneTwo = {
  image: "images/a33.png",
  name: "Samsung Galaxy A33 5G",
  discountedPrice: 34499,
  originalPrice: 36499,
  itemId: "B002"
};

var PhoneThree = {
  image: "images/a54.png",
  name: "Samsung Galaxy A54 5G",
  discountedPrice: 44499,
  originalPrice: 45499,
  itemId: "B003"
};

var PhoneFour = {
  image: "images/a74.png",
  name: "Samsung Galaxy A74 5G",
  discountedPrice: 53499,
  originalPrice: 55499,
  itemId: "B004"
};

var selectId = decodeURIComponent(window.location.search);

var selectedItem = selectId.substring(1);

console.log(selectedItem);

document.getElementById("display").innerText = selectedItem;

if (selectedItem == PhoneOne.itemId) {
  document.getElementById("A23").src = PhoneOne.image;
  document.getElementById("name1").innerText = PhoneOne.name;
  document.getElementById("discountedPrice").innerText =
    PhoneOne.discountedPrice;
  document.getElementById("originalPrice").innerText = PhoneOne.originalPrice;

  var cost = PhoneOne.discountedPrice;
  qty(cost);
} else if (selectedItem == PhoneTwo.itemId) {
  document.getElementById("A23").src = PhoneTwo.image;
  document.getElementById("name1").innerText = PhoneTwo.name;
  document.getElementById("discountedPrice").innerText =
    PhoneTwo.discountedPrice;
  document.getElementById("originalPrice").innerText = PhoneTwo.originalPrice;

  var cost = PhoneTwo.discountedPrice;
  qty(cost);
} else if (selectedItem == PhoneThree.itemId) {
  document.getElementById("A23").src = PhoneThree.image;
  document.getElementById("name1").innerText = PhoneThree.name;
  document.getElementById("discountedPrice").innerText = PhoneThree.discountedPrice;
  document.getElementById("originalPrice").innerText = PhoneThree.originalPrice;

  var cost = PhoneThree.discountedPrice;
  qty(cost);
} else if (selectedItem == PhoneFour.itemId) {
  document.getElementById("A23").src = PhoneFour.image;
  document.getElementById("name1").innerText = PhoneFour.name;
  document.getElementById("discountedPrice").innerText = PhoneFour.discountedPrice;
  document.getElementById("originalPrice").innerText = PhoneFour.originalPrice;

  var cost = PhoneFour.discountedPrice;
  qty(cost);
}

function qty(cost) {
  document.getElementById("qty").onkeyup = function () {
    var amount = parseInt(cost);
    var quantity = parseInt(document.getElementById("qty").value);

    if (quantity > 1) {
      var total = quantity * amount;
      document.getElementById("total").innerText = "Total: KES " + total;
      userLocation(total);
    } else {
      var total = 1 * amount;
      document.getElementById("total").innerText = "Total: KES " + total;

      userLocation(total);
    }
  };
}

function userLocation(total) {
  document.getElementById("Location").onchange = function () {
    var Karen = 500;
    var Kitsuru = 600;
    var Muthaiga = 700;

    var delivery = document.getElementById("Location").value;

    if (delivery == "Karen") {
      document.getElementById("total").innerText =
        "Total: KES " + (total + Karen);
    } else if (delivery == "Kitsuru") {
      document.getElementById("total").innerText =
        "Total: KES " + (total + Kitsuru);
    } else if (delivery == "Muthaiga") {
      document.getElementById("total").innerText =
        "Total: KES " + (total + Muthaiga);
    }
  };
}
