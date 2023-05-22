var lenovo = {
  image: "/images/lenovo2.webp",
  name: "Lenovo Yoga Book 9i",
  discountPrice: 180000,
  originalPrice: 199459,
  itemId: "l001"
};

var hechp = {
  image: "/images/hp.jpeg",
  name: "HP Pavillion 14",
  discountPrice: "135000",
  originalPrice: "140000",
  itemId: "l002"
};

var asus = {
  image: "/images/asus.png",
  name: "Asus Laptop X415FA i3",
  discountPrice: "50000",
  originalPrice: "52000",
  itemId: "l003"
};

var dell = {
  image: "/images/dell.jpg",
  name: "Dell Vostro 3500 Laptop Core i7",
  discountPrice: "86000",
  originalPrice: "90000",
  itemId: "l004"
};

var macbook = {
  image: "/images/macbook.jpg",
  name: "Apple Macbook Air MQD32HN/A",
  discountPrice: "110000",
  originalPrice: "120000",
  itemId: "l005"
};

var samsung = {
  image: "/images/samsung.jpg",
  name: "Samsung NP300E5V A02IN",
  discountPrice: "28000",
  originalPrice: "30000",
  itemId: "l006"
};

var selectId = decodeURIComponent(window.location.search);

var selectedItem = selectId.substring(1);

console.log(selectedItem);

document.getElementById("display").innerText = selectedItem;

if (selectedItem == lenovo.itemId) {
  document.getElementById("image1").src = lenovo.image;
  document.getElementById("name1").innerText = lenovo.name;
  document.getElementById("discountedPrice1").innerText = lenovo.discountPrice;
  document.getElementById("originalPrice1").innerText = lenovo.originalPrice;

  var cost = lenovo.discountPrice;
  qty(cost);
} else if (selectedItem == hechp.itemId) {
  document.getElementById("image1").src = hechp.image;
  document.getElementById("name1").innerText = hechp.name;
  document.getElementById("discountedPrice1").innerText = hechp.discountPrice;
  document.getElementById("originalPrice1").innerText = hechp.originalPrice;

  var cost = hechp.discountPrice;
  qty(cost);
} else if (selectedItem == asus.itemId) {
  document.getElementById("image1").src = asus.image;
  document.getElementById("name1").innerText = asus.name;
  document.getElementById("discountedPrice1").innerText = asus.discountPrice;
  document.getElementById("originalPrice1").innerText = asus.originalPrice;

  var cost = asus.discountPrice;
  qty(cost);
} else if (selectedItem == dell.itemId) {
  document.getElementById("image1").src = dell.image;
  document.getElementById("name1").innerText = dell.name;
  document.getElementById("discountedPrice1").innerText = dell.discountPrice;
  document.getElementById("originalPrice1").innerText = dell.originalPrice;

  var cost = dell.discountPrice;
  qty(cost);
} else if (selectedItem == macbook.itemId) {
  document.getElementById("image1").src = macbook.image;
  document.getElementById("name1").innerText = macbook.name;
  document.getElementById("discountedPrice1").innerText = macbook.discountPrice;
  document.getElementById("originalPrice1").innerText = macbook.originalPrice;

  var cost = macbook.discountPrice;
  qty(cost);
} else if (selectedItem == samsung.itemId) {
  document.getElementById("image1").src = samsung.image;
  document.getElementById("name1").innerText = samsung.name;
  document.getElementById("discountedPrice1").innerText = samsung.discountPrice;
  document.getElementById("originalPrice1").innerText = samsung.originalPrice;

  var cost = samsung.discountPrice;
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
    var Thika = 500;
    var Nairobi = 200;
    var Nakuru = 800;

    var delivery = document.getElementById("Location").value;

    if (delivery == "Thika") {
      document.getElementById("total").innerText = "Total: KES " + (total + Thika);
    } else if (delivery == "Nairobi") {
      document.getElementById("total").innerText = "Total: KES " + (total + Nairobi);
    } else if (delivery == "Nakuru") {
      document.getElementById("total").innerText = "Total: KES " + (total + Nakuru);
    }
  };
}