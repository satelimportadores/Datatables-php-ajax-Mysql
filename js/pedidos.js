$(document).ready(function(){
	$('.cargando').hide();
    listar();

});


var listar = function(){
$('.cargando').show();
	var table = $('#pedidos').DataTable({
		"destroy":true,
		"ajax":{
			"method":"POST",
			"url": "php/consulta_pedidos.php"
		},
		"columns":[
			{"data":"id"},
			{"data":"numero_pedido"},
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


