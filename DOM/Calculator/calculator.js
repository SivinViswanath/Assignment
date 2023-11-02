function Solve(val) {
    var v = document.getElementById('res');
    v.value += val;
  }

  function calculateExpression(expression) {
    return Function('"use strict";return (' + expression + ')')();
  }

  function Result() {
    var num1 = document.getElementById('res').value;
    try {
      var num2 = calculateExpression(num1);
      document.getElementById('res').value = num2;
    } catch (error) {
      document.getElementById('res').value = 'Error';
    }
  }

  function Clear() {
    var inp = document.getElementById('res');
    inp.value = '';
  }

  function Back() {
    var ev = document.getElementById('res');
    ev.value = ev.value.slice(0, -1);
  }
