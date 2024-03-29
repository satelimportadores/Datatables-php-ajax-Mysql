$(document).ready(function(){
	$('.cargando').hide();
    listar();

});


var listar = function(){
$('.cargando').show();
	var table = $('#pedidos').DataTable({
		"destroy":true,
		"pageLength": 40,
		"lengthMenu": [[40, 80, 100, -1], [40, 80, 100, "All"]],
		"language": {
        "decimal": "",
        "emptyTable": "No hay información",
        "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
        "infoEmpty": "Mostrando 0 to 0 of 0 Entradas",
        "infoFiltered": "(Filtrado de _MAX_ total entradas)",
        "infoPostFix": "",
        "thousands": ",",
        "lengthMenu": "Mostrar _MENU_ Entradas",
        "loadingRecords": "Cargando...",
        "processing": "Procesando...",
        "search": "Buscar:",
        "zeroRecords": "Sin resultados encontrados",
        "paginate": {
            "first": "Primero",
            "last": "Ultimo",
            "next": "Siguiente",
            "previous": "Anterior"
        }
    },
		"ajax":{
			"method":"POST",
			"url": "php/consulta_pedidos.php"
		},
		"columns":[
			{"data":"id"},
			{"data":"numero_pedido",render: $.fn.dataTable.render.number( ',', '.', 3, '#pedido ' )},
			{"data":"fecha"},
			{"data":"cliente"},
			{"defaultContent":"<button type='button' class='editar btn btn-primary'><i class='fa fa-edit'></i></button>"},
			{"defaultContent":"<button type='button' class='eliminar btn btn-danger'><i class='fa fa-remove'</i></button>"},

		]
	});
	$('.cargando').hide();
	data_editar("#pedidos tbody", table);
	data_eliminar("#pedidos tbody", table);
}

var data_editar = function(tbody, table){
	$(tbody).on("click", "button.editar",function(){
		var data = table.row($(this).parents("tr")).data();
		console.log(data);
		cliente = (data.cliente);
		alert(cliente);
	});
}

var data_eliminar = function(tbody, table){
	$(tbody).on("click", "button.eliminar",function(){
		var data = table.row($(this).parents("tr")).data();
		console.log(data);
		id = data.id;
		alert(id);
	});
}


