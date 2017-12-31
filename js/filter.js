$(document).ready(function() {
  // Elementos
  var $food = $(".img-food");
  var $filterRestaurants = $("#filterRestaurants");  // Input
  var $filterFood = $("#typeOfFood"); //select
  // imagenes
  
  
  // Eventos

  // Aparición del nombre del restaurante cuando se haga el evento mouseover
  $food.mouseover(function() {
    var restaurantName = $(this).data("restaurant");
    var addInfo = $("<div class='info container-flex-column'><p>" + restaurantName + "<p><div>");
    $(this).append(addInfo);
  });
  /*
  $food.mouseout(function() {
    var restaurantName = $(this).data("restaurant");
    $(this).remove("info container-flex-column");
  });
  */

  // Filtro para tipo de comida
  $filterFood.click(function() {
    var value = $(this).val();    
    $food.hide();
    $(".img-food[data-food='"+ value +"']").show();
  });
  
  // Filtro para restaurantes

  // Modal

    
  });