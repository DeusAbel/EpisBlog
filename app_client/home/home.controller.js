(function () {

  angular
    .module('EpisBlog')
    .controller('homeCtrl', homeCtrl);

  homeCtrl.$inject = ['$scope', 'EpisBlog', 'geolocation'];
  function homeCtrl ($scope, loc8rData, geolocation) {
    var vm = this;
    vm.pageHeader = {
      title: 'EpisBlog',
      strapline: 'Blog de EPISUNSA'
    };
    vm.sidebar = {
      content: "Espacio para compartir información de los estudiantos de EPISUNSA"
    };   

    vm.getData = function (usuario) {
      var Nombre = usuario.nombre
          Correo = usuario.correo
      vm.message = "Obteniendo Datos del usuario";
      EpisBlog.ObtenerInfo(usuario.correo)
        .success(function(data) {
          vm.message = data.length > 0 ? "" : "Usuario no Existe";        
        })
        .error(function (e) {
          vm.message = "Intente nuevamente";
        });
    };

    vm.showError = function (error) {
      $scope.$apply(function() {
        vm.message = error.message;
      });
    };
  }

})();