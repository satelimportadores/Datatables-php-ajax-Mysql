<?php 

    include_once('conexion.php');
     //traer pedidos   
          $pedidos = new Conexion;
          $sql03 = "SELECT id,numero_pedido,fecha,cliente FROM intranet_registro_pedido";
          $Rpedidos = $pedidos->query($sql03) or trigger_error($pedidos->error);
  //traer pedidos 
          
          if (!$Rpedidos) {
           Die ('Error');
          }else{
            while ($data = $Rpedidos->fetch_array()) {
              $arreglo['data'][] = array_map('utf8_encode', $data);
            }
            echo json_encode($arreglo);
//            $usuarios->free_result();
            $pedidos->close();
          }


?>