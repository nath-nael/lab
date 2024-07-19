function showDetails(cardNumber) {
  var details = document.getElementById("details" + cardNumber);
  if (details.style.display === "none") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
}
