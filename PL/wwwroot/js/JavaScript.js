
$(document).ready(function () { //click
    GetAll();
});


function GetAll() {
    $.ajax({
        type: 'GET',
        url: 'https://randomuser.me/api',
        success: function (result) { //200 OK 
            $('#tblPersonas tbody');
            $.each(result.results, function (i, persona) {
                var filas =
                    '<tr>'
                    + "<td class='text-center'>" + persona.id.value + "</td>"
                    + "<td class='text-center'>" + persona.name.first + "</td>"
                    + "<td class='text-center'>" + persona.email + "</td>"
                    + "<td class='text-center'>" + persona.gender + "</td>"
                    + "<td class='text-center'>" + persona.location.country + "</td>"
                    + "<td class='text-center'>" + "<img src=" + persona.picture.medium + ">" + "</td>"
            + "</tr>";
            $("#tblPersonas tbody").append(filas);
        });
},
error: function (result) {
    alert('Error en la consulta.' + result.responseJSON.ErrorMessage);
}
    });
};

function Limpiar() {
    $('#tblPersonas tbody').empty();
}
