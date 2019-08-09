<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Data Tables v02</title>
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/jquery.dataTables.min.css">
	<link rel="stylesheet" href="css/font-awesome.min.css">
	<script src="js/jquery.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/jquery.dataTables.min.js"></script>
	<script src="js/pedidos.js"></script>
</head>


<body>
	<h1>Pedidos</h1>
	<div class="cargando"><i class="fa fa-spinner fa-spin fa-3x fa-fw"></i></div>
	<table class="table table-hover table-bordered table-inverse" id="pedidos">
		<thead class="thead-inverse">
			<tr>
				<th>ID</th>
				<th>Numero Pedido</th>
				<th>fecha</th>
				<th>cliente</th>
				<th>Editar</th>
				<th>Eliminar</th>				
			</tr>
		</thead>
	</table>

</body>
</html>