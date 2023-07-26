
// 01. blur event
  /*
  $(document).ready(function() {
    $("input").blur(function() {
      alert("This input field has lost its focus");
    });
  });
  */


// 02. change event
  /*
  $(document).ready(function() {
    $("input").blur(function() {
      alert("The text has been changed");
    });
  });
  */


// 03. click event
  /*
  $(document).ready(function() {
    $("p").click(function() {
      alert("The paragraph was clicked");
    });
  });
  */


// 04. double click event
  /*
  $(document).ready(function() {
    $("p").dblclick(function() {
      alert("The paragraph was double-clicked");
    });
  });
  */


// 05. focus event
  /*
  $(document).ready(function() {
    $("input").focus(function() {
      $("span").css("display", "inline").fadeOut(2000);
    });
  });
  */


// 06. focusin event
  /*
  $(document).ready(function() {
    $("div").focusin(function() {
      $(this).css("backgroung-color", "aqua");
    });
    $("div").focusout(function() {
      $(this).css("background-color". "green");
    });
  });
  */


// 07. focusout event
  /*
  $(document).ready(function() {
    $("div").focusin(function() {
      $(this).css("backgroung-color", "tomato");
    });
    $("div").focusout(function() {
      $(this).css("background-color". "yellow");
    });
  });
  */


// 08. hover event
  /*
  $(document).ready(function() {
    $("p").hover(function() {
      $(this).css("backgroung-color", "pink");
    }, function() {
      $(this).css("background-color". "lime");
    });
  });
  */


// 09. keydown event
  /*
  $(document).ready(function() {
    $("input").keydown(function() {
      $("input").css("backgroung-color", "aqua");
    });
    $("input").keyup(function() {
      $("input").css("background-color". "orange");
    });
  });
  */


// 10. keypress event
  /*
  i = 0;
  $(document).ready(function() {
    $("input").keypress(function() {
      $("span").text(i += 1);
    });
  });
  */


// 11. keyup event
  /*
  $(document).ready(function() {
    $("input").keydown(function() {
      $("input").css("background-color", "dodgerblue");
    });
    $("input").keyup(function() {
      $("input").css("background-color", "lime");
    });
  });
  */


// 12. mousedown event
  /*
  $(document).ready(function() {
    $("div").mouseup(function() {
      $(this).css("<p style='color:green;'>Mouse button released</p>");
    });
    $("div").mousedown(function() {
      $(this).after("<p style='color:purple;'>Mouse button pressed down</p>");
    });
  });
  */


// 13. mouseenter event
  /*
  $(document).ready(function() {
    $("p").mouseup(function() {
      $("p").css("background-color", "aqua");
    });
    $("p").mouseleave(function() {
      $("p").css("background-color", "lime");
    });
  });
  */


// 14. mouseleave event
  /*
  $(document).ready(function() {
    $("p").mouseup(function() {
      $("p").css("background-color", "orange");
    });
    $("p").mouseleave(function() {
      $("p").css("background-color", "red");
    });
  });
  */


// 15. mousemove event
  /*
  $(document).ready(function() {
    $(document).mousemove(function(event) {
      $("span").text(event.pageX + ", " + event.pageY);
    });
  */


// 16. mouseout event
  /*
  $(document).ready(function() {
    $("p").mouseover(function() {
      $("p").css("background-color", "aqua");
    });
    $("p").mouseout(function() {
      $("p").css("background-color", "lime");
    });
  });
  */


// 17. mouseover event
  /*
  $(document).ready(function() {
    $("p").mouseover(function() {
      $("p").css("background-color", "red");
    });
    $("p").mouseout(function() {
      $("p").css("background-color", "yellow");
    });
  });
  */


// 18. mouseup event
  /*
  $(document).ready(function() {
    $("div").mouseup(function() {
      $(this).after("<p style ='color:purple'>Mouse button released</p>");
    });
    $("div").mousedown(function() {
      $(this).after("<p style ='color:green'>Mouse button pressed down</p>");
    });
  });
  */


// 19. off event
  /*
  $(document).ready(function() {
    $("p").on("click", function() {
      $(this).css("background-color", "pink");
    });
    $("button").click(function() {
      $("p").off("click");
    });
  });
  */


// 20. on event
  /*
  $(document).ready(function() {
    $("p").on("click", function() {
      alert("The paragraph was clicked");
    });
  });
  */
