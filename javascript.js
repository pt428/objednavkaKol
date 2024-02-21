function spocitat() {
  let celkovaCena = 0;
  let maxCena = 0;
  let cenaKolo = 0;
  let pocetDni = 0;
  let cyklonosic = 0;

  const kolo = document.querySelectorAll("input[type=checkbox]");
  const pocet = document.querySelectorAll("input[type=number]");

  // typ kola + pocet kusu
  if (kolo[0].checked) {
    cenaKolo += 500 * pocet[0].value;
  }
  if (kolo[1].checked) {
    cenaKolo += 200 * pocet[1].value;
  }
  if (kolo[2].checked) {
    cenaKolo += 1500 * pocet[2].value;
  }
  if (kolo[3].checked) {
    cenaKolo += 2500 * pocet[3].value;
  }

  // pocet dni
  const dny = document.querySelector("#select").value;
  if (dny === "den1") {
    pocetDni = 1;
  } else if (dny === "den5") {
    pocetDni = 5;
  } else if (dny === "tyden") {
    pocetDni = 7;
  } else if (dny === "mesic") {
    pocetDni = 30;
  }

  // vypocet ceny s cyklonosicem
  const cyklonosice = document.querySelectorAll("input[type=radio]");
  if (cyklonosice[0].checked) {
    cyklonosic = 0.05;
  } else if (cyklonosice[1].checked) {
    cyklonosic = 0.1;
  } else {
    cyklonosic = 0;
  }

  // vypocet celkove ceny a vlozeni do input
  celkovaCena = cenaKolo * pocetDni * cyklonosic + cenaKolo * pocetDni;
  document.querySelector("#cena").value = celkovaCena;

  // max cena od zakaznika
  maxCena = document.querySelector("#suma").value;

  // navrh celkove castky vyhovuje/nevyhovuje
  if (maxCena - celkovaCena >= 0) {
    document.querySelector("#lblRozdil").setAttribute("style", "color:green");
    document.querySelector("#lblRozdil").textContent =
      "Navrhovaná částka je dostačující";
  } else {
    document.querySelector("#lblRozdil").setAttribute("style", "color:red");
    document.querySelector(
      "#lblRozdil"
    ).textContent = ` Navrhovaná částka není dostačující `;
  }
}

// kontrola zda je @ v emailu
function odeslat() {
  let inputEmail = document.querySelector("#email").value;
  if (inputEmail.includes("@")) {
    document.querySelector("#btn").disabled = false;
    console.log("ano");
  } else {
    document.querySelector("#btn").disabled = true;
    console.log("ne");
  }
}
