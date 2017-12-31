$(document).ready(function() {
  // Elementos
  var $food = $(".img-food"); /*.each(function() {
    for (i = 0; i < $(".img-food").length; i++) {
      $(".img-food")[i];
    }
    });
    */
  var $filterRestaurants = $("#filterRestaurants");  // Input
  var $filterFood = $("#typeOfFood"); //select
  // imagenes
  
  
  // Eventos

  // Aparición del nombre del restaurante cuando se haga el evento mouseover
  $food.mouseover(function() {
    var restaurantName = $(this).data("restaurant");
    var addInfo = $("<div class='info container-flex-column'><p>" + restaurantName + "<p><div>");
    $(this).append(addInfo);
    console.log("hola");
  });

  // Filtro para tipo de comida
  $filterFood.click(function() {
    var value = $(this).val();    
    $food.hide();
    $(".img-food[data-food='"+ value +"']").show();
  });



  /*
  var $filterFood = function() {
    var $foodType = $("#typeOfFood");
    var value = $foodType.val();

    if ($food.data("food") !== value) {
      $(this).hide();
    }
    else if ($food.data("food") === value) {
      $(".img-food[data-food='"+ value +"']").show()
    } 
       
  };
  */

/*
  $filterFood.val("mar").click(function() {
    if ($food.data("food") !== "mar") {
      $("[data-food *= 'china']").hide();
      $("[data-food *= 'mexicana']").hide();
      $("[data-food *= 'criolla']").hide();
      $("[data-food *= 'vegetariana']").hide();
    } 
    else if ($food.data("food") === "mar") {
      $("[data-food *= 'mar']").show();
    }   
  });

  $filterFood.val("china").click(function() {
    if ($food.data("food") !== "china") {
      $("[data-food *= 'mar']").hide();
      $("[data-food *= 'mexicana']").hide();
      $("[data-food *= 'criolla']").hide();
      $("[data-food *= 'vegetariana']").hide();
    } 
    else if ($food.data("food") === "china") {
      $("[data-food *= 'china']").show();
    }   
  });

  $filterFood.val("mexicana").click(function() {
    if ($food.data("food") !== "mexicana") {
      $("[data-food *= 'china']").addClass("display-none");
      $("[data-food *= 'mar']").addClass("display-none");
      $("[data-food *= 'criolla']").addClass("display-none");
      $("[data-food *= 'vegetariana']").addClass("display-none");
    } 
    else if ($food.data("food") === "mexicana") {
      $("[data-food *= 'mexicana']").addClass("display-block");
    }   
  });

  $filterFood.val("criolla").click(function() {
    if ($food.data("food") !== "criolla") {
      $("[data-food *= 'china']").addClass("display-none");
      $("[data-food *= 'mexicana']").addClass("display-none");
      $("[data-food *= 'mar']").addClass("display-none");
      $("[data-food *= 'vegetariana']").addClass("display-none");
    } 
    else if ($food.data("food") === "criolla") {
      $("[data-food *= 'criolla']").addClass("display-block");
    }   
  });

  $filterFood.val("vegetariana").click(function() {
    if ($food.data("food") !== "vegetariana") {
      $("[data-food *= 'china']").addClass("display-none");
      $("[data-food *= 'mexicana']").addClass("display-none");
      $("[data-food *= 'criolla']").addClass("display-none");
      $("[data-food *= 'mar']").addClass("display-none");
    } 
    else if ($food.data("food") === "vegetariana") {
      $("[data-food *= 'vegetariana']").addClass("display-block");
    }   
  });
*/
    
  });