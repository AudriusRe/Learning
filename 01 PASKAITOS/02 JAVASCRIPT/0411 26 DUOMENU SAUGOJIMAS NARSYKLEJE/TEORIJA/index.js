/////// C O O K I E S

document.cookie =
  "name=Audrius; expires=" + new Date(2024, 5, 10).toUTCString(); //susikuriam cookie

console.log(new Date(2024, 5, 10).toUTCString());

document.cookie = "lastName=Remeikis"; // susikuriam kita cookie

console.log(document.cookie); //issikonsolinam cookius

//KAIP KITAIP ISSITRAUKTI COOKIU VALUE
function getCookie(key) {
  const cookies = document.cookie.split(";"); //atskiriam atskirus cookius per kabliataski ir dedam i array

  for (let i = 0; i < cookies.length; i++) {
    const keyValue = cookies[i].trim().split("="); //atskiriam su lygybes zenklu key nuo value
    console.log(keyValue);
    if (keyValue[0] === key) {
      return keyValue[1];
    }
  }

  console.log(cookies);
}

getCookie("lastName");
//////////PAVYZDIO PABAIGA

///////////L O C A L   S T O R A G E
//LOCAL STORAGE islieka net uzdarius narsykle
localStorage.setItem("name", "Vardininkas");

//KAIP ISSITRAUKTI INFO
console.log(localStorage.getItem("name"));

//KAIP ISTRINTI
localStorage.removeItem("name");

////////////S E S S I O N  S T O R A G E
//TAS PATS KAS LOCAL STORAGE, TIK ISSITRINA UZDARIUS NARSYKLE, SKIRTINGAI NEI LOCAL STORAGE
sessionStorage.setItem("sessionStorageName", "kazkas parasyta");

//CIA KAIP PASIDARYTI KAD MYGTUKAS PRIDETU KAZKA I LOCALSTORAGE
const button = document.querySelector("button");

button.addEventListener("click", () => {
  localStorage.setItem("labas", "labas");
});

//XZ KAS CIA TOKIO
window.addEventListener("storage", function (event) {
  console.log(
    "The value for " +
      event.key +
      " Changes from " +
      event.oldValue +
      " to " +
      event.newValue
  );
});
