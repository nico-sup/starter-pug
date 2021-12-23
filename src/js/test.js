function check() {
    var input = document.querySelectorAll(".ifCheck");
    var inputTrac = document.querySelectorAll(".ifCheckTrac");
    var total = 0;
    var totalTrac = 0;
    for (var i = 0; i < input.length && i < inputTrac.length; i++) {
      if (input[i].checked && inputTrac[i].checked) {

        total += parseFloat(input[i].value);
        totalTrac += parseFloat(inputTrac[i].value);

        document.getElementsByClassName("total")[0].value = total;
        document.getElementsByClassName("total")[1].value = total;
        document.getElementsByClassName("total")[2].value = totalTrac;
        document.getElementsByClassName("total")[3].value = totalTrac;
        document.getElementsByClassName("total")[4].value = totalTrac;

        document.getElementsByName("totalTrac").value = totalTrac;
        document.getElementsByName("rangeDay")[0].value = total;
        document.getElementsByName("rangeTrac")[0].value = totalTrac;
        document.getElementsByName("rangeDips")[0].value = totalTrac;
        document.getElementsByName("rangePomp")[0].value = totalTrac;
      }
    }
}
function setInputValue(){ 
  document.getElementsByClassName("total")[0].value = localStorage.getItem('server');
  document.getElementsByClassName("total")[1].value = localStorage.getItem('server1');
  document.getElementsByClassName("total")[2].value = localStorage.getItem('server2');
  document.getElementsByClassName("total")[3].value = localStorage.getItem('server3');
  document.getElementsByClassName("total")[4].value = localStorage.getItem('server4');

  document.getElementsByName("totalTrac").value = localStorage.getItem('trac');
  document.getElementsByName("rangeDay")[0].value = localStorage.getItem('rangeDay');
  document.getElementsByName("rangeTrac")[0].value = localStorage.getItem('rangeTrac');
  document.getElementsByName("rangeDips")[0].value = localStorage.getItem('rangeDips');
  document.getElementsByName("rangePomp")[0].value = localStorage.getItem('rangePomp');
}

function checkReload() {
  let boxes = document.getElementsByClassName('ifCheck').length;
  let trac = document.getElementsByClassName('ifCheckTrac').length;
  function save() {	
    for(let i = 1; i <= boxes && i <= trac; i++){

      var checkbox = document.getElementById(String(i));
      localStorage.setItem("checkbox" + String(i), checkbox.checked);

      var input = document.getElementsByClassName("total")[0].value;
      localStorage.setItem('server', input);
      var input1 = document.getElementsByClassName("total")[1].value;
      localStorage.setItem('server1', input1);
      var input2 = document.getElementsByClassName("total")[2].value;
      localStorage.setItem('server2', input2);
      var input3 = document.getElementsByClassName("total")[3].value;
      localStorage.setItem('server3', input3);
      var input4 = document.getElementsByClassName("total")[4].value;
      localStorage.setItem('server4', input4);


      var inputTrac = document.getElementsByName("totalTrac").value;
      localStorage.setItem('trac', inputTrac);
      var rangeDay = document.getElementsByName("rangeDay")[0].value;
      localStorage.setItem('rangeDay', rangeDay);
      var rangeTrac = document.getElementsByName("rangeTrac")[0].value;
      localStorage.setItem('rangeTrac', rangeTrac);
      var rangeDips = document.getElementsByName("rangeDips")[0].value;
      localStorage.setItem('rangeDips', rangeDips);
      var rangePomp = document.getElementsByName("rangePomp")[0].value;
      localStorage.setItem('rangePomp', rangePomp);
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
