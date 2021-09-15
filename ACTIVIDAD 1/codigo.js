

var btn = document.getElementById("btn")

btn.addEventListener("click",function(){
    var n1 = parseInt(document.getElementById('n1').value)  ;
    var n2 = parseInt(document.getElementById('n2').value) ;
    
    var resultado = Math.floor(Math.random() * (n2-n1)) + n1
    document.getElementById("resultado").innerHTML = "Random:"+resultado;

})