// Savollarga avtomatik javob chiqarish
document.getElementById("answer1").innerText = "C";
document.getElementById("answer2").innerText = "A";
document.getElementById("answer3").innerText = "D";

// O‘ng tugma menyusi
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  alert("Yashirin javob menyusi!");
});
