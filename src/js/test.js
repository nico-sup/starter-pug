function check() {
    var input = document.querySelectorAll(".ifCheck");
    var inputTrac = document.querySelectorAll(".ifCheckTrac");
    var total = 0;
    var totalTrac = 0;
    for (var i = 0; i < input.length && i < inputTrac.length; i++) {
      if (input[i].checked && inputTrac[i].checked) {
        total += parseFloat(input[i].value);
        document.getElementsByName("total")[0].value = total;
        totalTrac += parseFloat(inputTrac[i].value);
        document.getElementsByName("totalTrac").value = totalTrac;
        document.getElementsByName("rangeDay")[0].value = total;
        document.getElementsByName("rangeTrac")[0].value = totalTrac;
      }
    }
}
function setInputValue(){ 
  document.getElementsByName("total")[0].value = localStorage.getItem('server');
  document.getElementsByName("totalTrac").value = localStorage.getItem('trac');
  document.getElementsByName("rangeDay")[0].value = localStorage.getItem('rangeDay');
  document.getElementsByName("rangeTrac")[0].value = localStorage.getItem('rangeTrac');
}

function checkReload() {
  let boxes = document.getElementsByClassName('ifCheck').length;
  let trac = document.getElementsByClassName('ifCheckTrac').length;
  function save() {	
    for(let i = 1; i <= boxes && i <= trac; i++){
      var checkbox = document.getElementById(String(i));
      localStorage.setItem("checkbox" + String(i), checkbox.checked);	
      var input = document.getElementsByName("total")[0].value;
      localStorage.setItem('server', input);
      var inputTrac = document.getElementsByName("totalTrac").value;
      localStorage.setItem('trac', inputTrac);
      var rangeDay = document.getElementsByName("rangeDay")[0].value;
      localStorage.setItem('rangeDay', rangeDay);
      var rangeTrac = document.getElementsByName("rangeTrac")[0].value;
      localStorage.setItem('rangeTrac', rangeTrac);
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
