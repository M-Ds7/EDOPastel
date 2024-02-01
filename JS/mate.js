document.getElementById("myform").addEventListener("submit", function (event) {
    event.preventDefault();
    calcularValorc();
  });

  function calcularValorc() {
    var t1 = parseFloat(document.getElementById("inputti1").value);
    var T0 = parseFloat(document.getElementById("inputt0").value);
    var T1 = parseFloat(document.getElementById("inputt1").value);
    var T2 = parseFloat(document.getElementById("inputt2").value);
    var Ta = parseFloat(document.getElementById("inputta").value);

    var c = T0 - Ta; 

    var k =(Math.log((T1-Ta)/c))/-t1
    
    var t = (Math.log((T2-Ta)/c))/-k


    document.getElementById("inputC").value = c;
    document.getElementById("inputK").value = k.toFixed(4); 
    document.getElementById("inputT").value = t.toFixed(4); 
  }