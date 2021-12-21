function check() {
    var input = document.querySelectorAll(".ifCheck");
    var total = 0;
    for (var i = 0; i < input.length; i++) {
      if (input[i].checked) {
        total += parseFloat(input[i].value);
      }
    }
    // document.getElementsByName("total")[0].value = total.toFixed(2);
    // document.getElementById("helo").value = total.toFixed(2);
}

function checkReload() {
  let boxes = document.getElementsByClassName('ifCheck').length;
  function save() {	
    for(let i = 1; i <= boxes; i++){
      var checkbox = document.getElementById(String(i));
      localStorage.setItem("checkbox" + String(i), checkbox.checked);	
    }
  }

  //for loading
  for(let i = 1; i <= boxes; i++){
    if(localStorage.length > 0){
      var checked = JSON.parse(localStorage.getItem("checkbox" + String(i)));
      document.getElementById(String(i)).checked = checked;
    }
  }

  window.addEventListener('change', save);
}



