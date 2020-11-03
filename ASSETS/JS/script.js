document.getElementById('Calculer').onclick = showAlert;

function showAlert(){
    var dividende = document.getElementById('Dividende').value;
    var diviseur = document.getElementById('Diviseur').value;
    var result = (dividende%diviseur)

    alert('Reste de la fuckin division : ' + result)
}