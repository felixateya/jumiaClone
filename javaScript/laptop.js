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

// lenovo
document.getElementById("image1").src = lenovo.image;
document.getElementById("name1").innerText = lenovo.name;
document.getElementById("discountedPrice1").innerText = lenovo.discountPrice;
document.getElementById("originalPrice1").innerText = lenovo.originalPrice;

// hp
document.getElementById("image2").src = hechp.image;
document.getElementById("name2").innerText = hechp.name;
document.getElementById("discountedPrice2").innerText = hechp.discountPrice;
document.getElementById("originalPrice2").innerText = hechp.originalPrice;

// asus
document.getElementById("image3").src = asus.image;
document.getElementById("name3").innerText = asus.name;
document.getElementById("discountedPrice3").innerText = asus.discountPrice;
document.getElementById("originalPrice3").innerText = asus.originalPrice;

// dell
document.getElementById("image4").src = dell.image;
document.getElementById("name4").innerText = dell.name;
document.getElementById("discountedPrice4").innerText = dell.discountPrice;
document.getElementById("originalPrice4").innerText = dell.originalPrice;

// macbook
document.getElementById("image5").src = macbook.image;
document.getElementById("name5").innerText = macbook.name;
document.getElementById("discountedPrice5").innerText = macbook.discountPrice;
document.getElementById("originalPrice5").innerText = macbook.originalPrice;

// samsung
document.getElementById("image6").src = samsung.image;
document.getElementById("name6").innerText = samsung.name;
document.getElementById("discountedPrice6").innerText = samsung.discountPrice;
document.getElementById("originalPrice6").innerText = samsung.originalPrice;




document.getElementById("lenovo").onclick = function () {
  window.location.href = "/pick.html" + "?" + lenovo.itemId;
};

document.getElementById("hechp").onclick = function () {
  window.location.href = "/pick.html" + "?" + hechp.itemId;
};

document.getElementById("asus").onclick = function () {
  window.location.href = "/pick.html" + "?" + asus.itemId;
};

document.getElementById("dell").onclick = function () {
  window.location.href = "/pick.html" + "?" + dell.itemId;
};

document.getElementById("macbook").onclick = function () {
  window.location.href = "/pick.html" + "?" + macbook.itemId;
};

document.getElementById("samsung").onclick = function () {
  window.location.href = "/pick.html" + "?" + samsung.itemId;
};