document.getElementById("countTripsBtn").addEventListener("click", function () {
  let tripCount = document.querySelectorAll(".card").length
  alert("Numero di viaggi disponibili: " + tripCount)
})
