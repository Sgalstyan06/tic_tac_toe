let tableFortic = document.querySelectorAll(".aa");
let check = 0;
let res = "x";
let finish = document.querySelector(".finish");
function resetTable() {
  tableFortic.forEach((elem) => {
    elem.removeEventListener("click",gm,false);
  });
  let result;
  if (check === 9) {
    result = "no winners";
  } else {
    result = `player ${res} is win`;
  }
  let fin = ` ${result}`;
  finish.insertAdjacentHTML("beforeend", fin);

  
  //check = 0;
  setTimeout(function () {
    window.location.reload();
  }, 2000);
}

function gm() {
  for (let i = 0; i < tableFortic.length; i++) {
    tableFortic[i].addEventListener("click", function () {
      if (
        tableFortic[i].innerHTML !== "x" &&
        tableFortic[i].innerHTML !== "0"
      ) {
        tableFortic[i].innerHTML = res;
        check++;
      } else {
        alert("please choose empty place");
        return;
      }
      if (
        tableFortic[0].innerHTML === res &&
        tableFortic[1].innerHTML === res &&
        tableFortic[2].innerHTML === res
      ) {
        setTimeout(function () {
          resetTable();
        }, 1000);
        return;
      }
      if (
        tableFortic[3].innerHTML === res &&
        tableFortic[4].innerHTML === res &&
        tableFortic[5].innerHTML === res
      ) {
        setTimeout(function () {
          resetTable();
        }, 1000);
        return;
      }
      if (
        tableFortic[6].innerHTML === res &&
        tableFortic[7].innerHTML === res &&
        tableFortic[8].innerHTML === res
      ) {
        setTimeout(function () {
          resetTable();
        }, 1000);
        return;
      }

      if (
        tableFortic[0].innerHTML === res &&
        tableFortic[3].innerHTML === res &&
        tableFortic[6].innerHTML === res
      ) {
        setTimeout(function () {
          resetTable();
        }, 1000);
        return;
      }
      if (
        tableFortic[1].innerHTML === res &&
        tableFortic[4].innerHTML === res &&
        tableFortic[7].innerHTML === res
      ) {
        setTimeout(function () {
          resetTable();
        }, 1000);
        return;
      }
      if (
        tableFortic[2].innerHTML === res &&
        tableFortic[5].innerHTML === res &&
        tableFortic[8].innerHTML === res
      ) {
        setTimeout(function () {
          resetTable();
        }, 1000);
        return;
      }
      if (
        tableFortic[0].innerHTML === res &&
        tableFortic[4].innerHTML === res &&
        tableFortic[8].innerHTML === res
      ) {
        setTimeout(function () {
          resetTable();
        }, 1000);
        return;
      }
      if (
        tableFortic[2].innerHTML === res &&
        tableFortic[4].innerHTML === res &&
        tableFortic[6].innerHTML === res
      ) {
        setTimeout(function () {
          resetTable();
        }, 1000);
        return;
      }

      if (check === 9) {
        setTimeout(function () {
          resetTable();
        }, 1000);

        return;
      }
      if (res === "x") {
        res = "0";
      } else {
        res = "x";
      }
    });
  }

  return;
}
document.querySelector("button").addEventListener("click", gm);
//gm();
console.log("welcome winner");
