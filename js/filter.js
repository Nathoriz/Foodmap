$(document).ready(function() {
  // Elementos
  var $food = $(".img-food");
  var $filterRestaurants = $("#filterRestaurants");  // Input
  var $filterFood = $("#typeOfFood"); //select
  var $closeModal = $("button.close");
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
  $food.click(function() {
    $food.removeAttr("data-toggle");
    $food.removeAttr("data-target");
    $food.attr("data-toggle","modal");
    $food.attr("data-target","#myModal");

    var restaurantName = $(this).data("restaurant");
    var message = $(this).data("message");
    var address = $(this).data("address");
    var price = $(this).data("price");
    var stars = $(this).data("star"); // Mejorar

    $(".restaurant").text('');
    $(".restaurant").text(restaurantName);
    $(".message").text('');
    $(".message").text(message);
    $(".address").text('');
    $(".address").text(address);
    $(".price").text('');
    $(".price").text(price);
    $(".stars").text('');
    $(".stars").text(stars);
  });

  $closeModal.click(function() {
    $filterRestaurants.val('');
    $filterFood.val("");
    $food.show();
  });


    
  });