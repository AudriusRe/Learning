//VIETOJ DEFER NUO SIOL RASOME TYPE="MODULE"
//sinchroninis programavimas
//pvz

let x = 10; //step1

x += 10; //step2

console.log(x); //step3

/////////////////////
//ASINCHRONINIS PROGRAMAVIMAS
//Reiskia kad kazkoks kodas uzregistruojamas, taciau ivykdomas veliau

setTimeout(() => {
  console.log("labas");
}, 2000);
//kaip kad pavyzdziui sitas timeoutas

/////////////////  PROMISE

const pr = new Promise((resolve, reject) => {
  //resolve reiskia OK VISKAS PAVYKO, reject reiskia kad BLOGAI, NIEKO GERO NEIVYKO
  const user = {
    name: "Vardenis",
    age: 20,
  };
  resolve(user);
  //reject("redzektinom");
});

// THEN
//THEN NAUDOJAM KAI PROMISAS RESOLVINA. KAI PROMISAS IVYKO (RESOLVINO), TAI THEN VYKSTA TAS ANAS IR KITAS
pr.then((data) => {
  //KIEKVIENAM THEN IR CATCH RASOM CALLBACK FUNKCIJAS, NES JIE TURI KAZKA PADARYTI
  console.log("Resolved", data);
  return "perduota is then 1";
})
  .then((data) => {
    console.log("then 2", data);
    return "perduota is then 2";
  })
  .then((data) => {
    //THEN'US GALIMA CHAININTI
    console.log("then 3");
    return "kazkoks returnas ir then 3";
  })
  .catch((err) => {
    //CATCH NAUDOJAMAS APDIRBTI ERRORUI
    console.log("cia yra catchas", err);
  })
  .finally((x) => {
    //FINALLY NERA BUTINAS
    console.log("cia yra finally", x);
  });

// ASYNC/AWAIT
// YRA KIEK KITOKIA THEN/CATCH SINTAKSE

const userInfoPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject({
      name: "Audrius",
      lastName: "Remeikis",
    });
  }, 1000);
});

//userInfoPromise.then((data) => console.log(data));

//const userInfo = await userInfoPromise;
//console.log(userInfo);

async function displayUserInfo() {
  try {
    const usrInfo = await userInfoPromise;
    const p = document.createElement("p");
    p.textContent = `${usrInfo.name} ${usrInfo.lastName}`;
    document.body.append(p);
  } catch {
    console.log("kazkoks errroooorrrraaaaas ivyko");
  }
  console.log("mygtukas paspaustas");
}

const btn = document.querySelector("button");

btn.addEventListener("click", displayUserInfo);

/////////////// ERRORAI

// const err = new Error("negalima gauti userio info");
// throw err;

//////////// FETCH
//FETCH pats sukuria PROMISE'a
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    console.log(data);
  });
