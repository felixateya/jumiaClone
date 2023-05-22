var PhoneOne = {
  image: "/images/a23.png",
  name: "Samsung Galaxy A23",
  discountedPrice: "kshs" + " " + 22 + "," + 299,
  originalPrice: "kshs" + " " + 27 + "," + 299,
  itemId: "B001"
};

var PhoneTwo = {
  image: "images/a33.png",
  name: "Samsung Galaxy A33 5G",
  discountedPrice: "kshs" + " " + 34 + "," + 499,
  originalPrice: "kshs" + " " + 36 + "," + 499,
  itemId: "B002"
};

var PhoneThree = {
  image: "images/a54.png",
  name: "Samsung Galaxy A54 5G",
  discountedPrice: "kshs" + " " + 44 + "," + 499,
  originalPrice: "kshs" + " " + 45 + "," + 499,
  itemId: "B003"
};

var PhoneFour = {
  image: "images/a74.png",
  name: "Samsung Galaxy A74 5G",
  discountedPrice: "kshs" + " " + 53 + "," + 499,
  originalPrice: "kshs" + " " + 55 + "," + 499,
  itemId: "B004"
};



// phoneOne
document.getElementById("A23").src = PhoneOne.image;
document.getElementById("name1").innerText = PhoneOne.name;
document.getElementById("discountedPrice").innerText = PhoneOne.discountedPrice;
document.getElementById("originalPrice").innerText = PhoneOne.originalPrice;

// phoneTwo
document.getElementById("A33").src = PhoneTwo.image;
document.getElementById("name2").innerText = PhoneTwo.name;
document.getElementById("price2").innerText = PhoneTwo.discountedPrice;
document.getElementById("original2").innerText = PhoneTwo.originalPrice;

// phoneThree
document.getElementById("A54").src = PhoneThree.image;
document.getElementById("name3").innerText = PhoneThree.name;
document.getElementById("price3").innerText = PhoneThree.discountedPrice;
document.getElementById("original3").innerText = PhoneThree.originalPrice;

// phoneFour
document.getElementById("A74").src = PhoneFour.image;
document.getElementById("name4").innerText = PhoneFour.name;
document.getElementById("price4").innerText = PhoneFour.discountedPrice;
document.getElementById("original4").innerText = PhoneFour.originalPrice;


document.getElementById("phoneOne").onclick = function () {
  window.location.href = "/select.html" + "?" + PhoneOne.itemId;
};

document.getElementById("phoneTwo").onclick = function () {
  window.location.href = "/select.html" + "?" + PhoneTwo.itemId;
};

document.getElementById("phoneThree").onclick = function () {
  window.location.href = "/select.html" + "?" + PhoneThree.itemId;
};

document.getElementById("phoneFour").onclick = function () {
  window.location.href = "/select.html" + "?" + PhoneFour.itemId;
};
