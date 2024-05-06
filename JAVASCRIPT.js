let i = 0;
let ID = "myDropdown";

function myFunction0() {
  if (i == 0) {
    i = 1;
    ID = "myDropdown0";
    document.getElementById(ID).classList.toggle("show");
  } else if (i == 1 && ID == "myDropdown0") {
    i = 0;
    document.getElementById(ID).classList.toggle("show");
  } else {
    i = 0;
    document.getElementById(ID).classList.toggle("show");
    i = 1;
    ID = "myDropdown0";
    document.getElementById(ID).classList.toggle("show");
  }
}

function myFunction1() {
  if (i == 0) {
    i = 1;
    ID = "myDropdown1";
    document.getElementById(ID).classList.toggle("show");
  } else if (i == 1 && ID == "myDropdown1") {
    i = 0;
    document.getElementById(ID).classList.toggle("show");
  } else {
    i = 0;
    document.getElementById(ID).classList.toggle("show");
    i = 1;
    ID = "myDropdown1";
    document.getElementById(ID).classList.toggle("show");
  }
}

function myFunction2() {
  if (i == 0) {
    i = 1;
    ID = "myDropdown2";
    document.getElementById(ID).classList.toggle("show");
  } else if (i == 1 && ID == "myDropdown2") {
    i = 0;
    document.getElementById(ID).classList.toggle("show");
  } else {
    i = 0;
    document.getElementById(ID).classList.toggle("show");
    i = 1;
    ID = "myDropdown2";
    document.getElementById(ID).classList.toggle("show");
  }
}

function myFunction3() {
  if (i == 0) {
    i = 1;
    ID = "myDropdown3";
    document.getElementById(ID).classList.toggle("show");
  } else if (i == 1 && ID == "myDropdown3") {
    i = 0;
    document.getElementById(ID).classList.toggle("show");
  } else {
    i = 0;
    document.getElementById(ID).classList.toggle("show");
    i = 1;
    ID = "myDropdown3";
    document.getElementById(ID).classList.toggle("show");
  }
}
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      let k;
      for (k = 0; k < dropdowns.length; k++) {
        var openDropdown = dropdowns[k];
        if (i == 0) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }