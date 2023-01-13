$(document).ready(function () {
const form = document.getElementById("telefone-book");
let lines = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    const name = document.getElementById('name');
    const cellphone = document.getElementById('cellphone');

    let line = '<tr>';
    line += `<td>${name.value}</td>`;
    line += `<td>${cellphone.value}</td>`;
    line += `</tr>`

    lines += line;

    const tableBody = document.querySelector('tbody');

    tableBody.innerHTML = lines;

})



});

function mask(o, f) {
    setTimeout(function() {
      var v = mphone(o.value);
      if (v != o.value) {
        o.value = v;
      }
    }, 1);
  }
  
  function mphone(v) {
    var r = v.replace(/\D/g, "");
    r = r.replace(/^0/, "");
    if (r.length > 10) {
      r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (r.length > 5) {
      r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (r.length > 2) {
      r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
      r = r.replace(/^(\d*)/, "($1");
    }
    return r;
  }

