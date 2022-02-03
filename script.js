let tableFortic = document.querySelectorAll(".aa");
let check = 0;
function resetTable() {
  tableFortic.forEach((elem) => {
    elem.innerHTML = "";
    
  });
  check = 0;
}

function gm() {
  let res = "x";
  
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
        alert(`player ${res} is win`);
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
        alert(`player ${res} is win`);

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
        alert(`player ${res} is win`);

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
        alert(`player ${res} is win`);

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
        alert(`player ${res} is win`);

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
        alert(`player ${res} is win`);

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
        alert(`player ${res} is win`);

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
        alert(`player ${res} is win`);

        setTimeout(function () {
          resetTable();
        }, 1000);
        return;
      }

      if (check === 9) {
        alert("no winners");
        
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

gm();
console.log("welcome winner");
