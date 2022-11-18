var btn = document.getElementById('btnCrear');
btn.addEventListener('click', function (e) {
    e.preventDefault();
    crearCarpeta();
});

function crearCarpeta() {
    var form = document.getElementById('formCarpeta');
    var formData = new FormData(form);
    var datos = {};

    for (var key of formData.keys()) {
        if(formData.get(key).trim().length > 0){
            datos[key] = formData.get(key);
        } else {
            alert('El campo ' + key + ' no puede estar vacío');
            return;
        }
    }

    fetch('/api/carpetas/crear', {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(function (response) {
        alert('Carpeta creada');
        return response.json();
    })
}