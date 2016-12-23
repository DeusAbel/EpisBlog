var mongoose = require('mongoose');
var tentradas = mongoose.model('Entrada');


var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};


//  console("esto se insertara: "+req.params.Entrada+" "+req.query.email+" "+req.body.password);  

//Insertar Entrada
module.exports.entradasCreate = function(req, res){
    
  tentradas.create(
    {
      autor_id:           req.body.usuario_id,  
      titulo:             req.body.titulo,        
      descripcion:        req.body.descripcion,
      fecha_creacion:     req.body.fecha_hora,

    }, function(err, Entrada){
      if (err){
        sendJSONresponse(res, 400, err);
      } else {
        sendJSONresponse(res, 201, Entrada); 
      }
    }
  )
};


//Leer Entrada
module.exports.entradasRead = function(req, res){
  if (req.params && req.params.entrada_id){
    tentradas
      .findById(req.params.entrada_id)
      .exec(function(err, Entrada){
        if(!Entrada){
          sendJSONresponse(res, 404, {
            "mensaje": "Entrada no encontrado" 
          });
          return;
        } else if (err){
          sendJSONresponse(es, 404, err);
          return;
        }
        sendJSONresponse(res, 200, Entrada);
      });    
  }else{
    sendJSONresponse(res, 404, {
      "Mensaje": "Falta el Id del Entrada en la solicitud"
    });
  }
};

//Modificar Entrada 
module.exports.entradasUpdate = function(req, res){  
  if (!req.params.entrada_id){    
    sendJSONresponse(res404, {
      "Mensaje": "No encontrado, entrada_id requerido"
    });
    return;    
  }      
  tentradas
    .findById(req.params.entrada_id)    
    .select('-usuario -titulo -fecha_hora -ubicacion -direccion -categoria -flag')
    .exec(      
      function(err, Entrada){        
        if (!Entrada){                    
          sendJSONresponse(res, 404, {
            "Mensaje": "Id de Entrada no encontrado"
          });
          return;
        } else if (err){
          sendJSONresponse(res, 404,err);
          return;          
        }

        Entrada.descripcion=  req.body.descripcion;              
        Entrada.save(function(err, Entrada){
          if (err){
            sendJSONresponse (res, 404, err);
          } else {            
            sendJSONresponse(res,200, Entrada);
          }
        });
      }
    );
};

//Eliminar Entrada
module.exports.entradasDelete = function(req, res){
  if (!req.params.entrada_id){
    sendJSONresponse(res404, {
      "Mensaje": "No encontrado, entrada_id requerido"
    });
    return;    
  }
  tentradas
    .findById(req.params.entrada_id)
    .select('-usuario -titulo -descripcion -fecha_hora -ubicacion -direccion -categoria -ranking')
    .exec(
      function(err, Entrada){
        if (!Entrada || Entrada.flag == "E"){
          sendJSONresponse(res, 404, {
            "Mensaje": "Id de Entrada no encontrado"
          });
          return;
        } else if (err){
          sendJSONresponse(res, 404,err);
          return;          
        }
        Entrada.save(function(err, Entrada){
          if (err){            
                        
            sendJSONresponse (res, 404, err);
          } else {
            sendJSONresponse(res,200, Entrada);
          }
        });
      }
    );
};  