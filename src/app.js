import "bootstrap";
import "./style.css";
window.onload = function() {
  alert("Para generar tu excusa ¡pulsa en el botón rosa!");

  function generarExcusa() {
    let who = ["Link", "Mario", "Zelda", "Luigi", "Sonic", "Pikachu"];

    let what = [
      "se tragó",
      "me robó",
      "superaumentó",
      "rompió",
      "teletransportó",
      "encogió"
    ];
    let object = [
      "mis setas especiales",
      "mi mapa del laberinto",
      "mi varita mágica",
      "mis pokeballs",
      "mi motivación"
    ];

    let randomWho = Math.floor(Math.random() * who.length);
    let randomWhat = Math.floor(Math.random() * what.length);
    let randomobject = Math.floor(Math.random() * object.length);

    document.querySelector(
      "#excuse"
    ).innerHTML = `${who[randomWho]} ${what[randomWhat]} ${object[randomobject]}!`;
  }
  document
    .getElementById("button")
    .addEventListener("click", () => generarExcusa());
};
