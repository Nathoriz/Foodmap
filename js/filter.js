$(document).ready(function() {
  // Elementos
  var $food = $(".img-food");
  var $filterRestaurants = $("#filterRestaurants");  // Input
  // Opciones
  var $mar = $("#mar");
  var $vegetariana = $("#vegetariana");
  var $china = $("#china");
  var $mexicana = $("#mexicana");
  var $criolla = $("#criolla");
  
  
  // Eventos

  // Aparición del nombre del restaurante cuando se haga el evento mouseover
  $food.mouseover(function() {
    var restaurantName = $(this).data("restaurant");
    var addInfo = $("<div class='info container-flex-column'><p>" + restaurantName + "<p><div>");
    $(this).append(addInfo);
  });
    
  });