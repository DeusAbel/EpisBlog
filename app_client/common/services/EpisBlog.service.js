(function() {

  angular
    .module('EpisBlog')
    .service('EpisBlog', EpisBlog);

  EpisBlog.$inject = ['$http'];
  function EpisBlog ($http) {
    var ObtenerInfo = function (correo) {
      return $http.get('/api/usuarios/'+correo);
    };
    return {
      Correo : ObtenerInfo;
    };
  }

})();