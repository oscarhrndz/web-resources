
// 01. All Element Selector
  /*
  $(document).ready(function() {
    $("*").css("background", "yellow");
  });
  */


  // 02. #id selector
  /*
  $(document).ready(function() {
    $("#intro").css("background", "pink");
  });
  */


  // 03. .class selector
  /*
  $(document).ready(function() {
    $(".intro").css("background", "blue");
  });
  */


  // 04. :first selector
  /*
  $(document).ready(function() {
    $("p:first").css("background", "red");
  });
  */


  // 05. :last selector
  /*
  $(document).ready(function() {
    $("p:last").css("background", "orange");
  });
  */


  // 06. :event selector
  /*
  $(document).ready(function() {
    $("p:even").css("background", "yellow");
  });
  */


  // 07. :odd selector
  /*
  $(document).ready(function() {
    $("p:odd").css("background", "lime");
  });
  */


  // 08. :first-child selector
  /*
  $(document).ready(function() {
    $("p:first-child").css("background", "aqua");
  });
  */


  // 09. :first-of-type selector
  /*
  $(document).ready(function() {
    $("p:first-of-type").css("background", "blue");
  });
  */


  // 10. :last-child selector
  /*
  $(document).ready(function() {
    $("p:last-child").css("background", "yellow");
  });
  */


  // 11. :last-of-type selector
  /*
  $(document).ready(function() {
    $("p:last-child").css("background", "red");
  });
  */


  // 12. :nth-child(n) selector
  /*
  $(document).ready(function() {
    $("p:nth-child(1)").css("background", "dodgerblue");
  });
  */


  // 13. :nth-last-child(n) selector
  /*
  $(document).ready(function() {
    $("p:nth-last-child(1)").css("background", "orange");
  });
  */


  // 14. :nth-last-of-type(n) selector
  /*
  $(document).ready(function() {
    $("p:nth-last-of-type(1)").css("background", "tomato");
  });
  */


  // 15. :only-child selector
  /*
  $(document).ready(function() {
    $("p:only-child").css("background", "yellow");
  });
  */


  // 16. :only-of-type selector
  /*
  $(document).ready(function() {
    $("p:only-of-type").css("background", "green");
  });
  */


  // 17. parent > child selector
  /*
  $(document).ready(function() {
    $("p:div > p").css("background", "aqua");
  });
  */


  // 18. parent descendant selector
  /*
  $(document).ready(function() {
    $("div p").css("background", "lime");
  });
  */


  // 19. element + next selector
  /*
  $(document).ready(function() {
    $("div + p").css("background", "blue");
  });
  */


  // 20. element ~ siblings selector
  /*
  $(document).ready(function() {
    $("p:only-child").css("background", "yellow");
  });
  */


  // 21. eq selector
  /*
  $(document).ready(function() {
    $("p:eq(2)").css("background", "aqua");
  });
  */


  // 22. gt selector
  /*
  $(document).ready(function() {
    $("p:gt(2)").css("background", "green");
  });
  */


  // 23. lt selector
  /*
  $(document).ready(function() {
    $("p:lt(2)").css("background", "tomato");
  });
  */


  // 24. not selector
  /*
  $(document).ready(function() {
    $("p:not(.parent2)").css("background", "red");
  });
  */


  // 25. header selector
  /*
  $(document).ready(function() {
    $("p:header").css("background", "yellow");
  });
  */


  // 26. animated selector
  /*
  $(document).ready(function) {
    function aniDiv() {
      $("div:eq(0)").animate({width: "50%"}, "slow");
      $("div:eq(0)").animate({width: "100%"}, "slow", aniDiv);
    }
    aniDiv();
    $(".btn1").click(function()) {
      $(":animated").css("background-color", "red");
    });
  });
  */


  // 27. focus selector
  /*
  $(document).ready(function() {
    $("input").focus();
    $(":focus").css("background-color", "yellow");
  });
  */


  // 28. contains selector
  /*
  $(document).ready(function() {
    $("p:conntains(is)").css("background-color", "blue");
  });
  */


  // 29. has selector
  /*
  $(document).ready(function() {
    $("p:has(span)").css("background-color", "aqua");
  });
  */


  // 30. empty selector
  /*
  $(document).ready(function() {
    $(":empty").css("background-color", "red");
  });
  */


  // 31. parent selector
  /*
  $(document).ready(function() {
    $("td:parent").css("background-color", "yellow");
  });
  */


  // 32. hidden selector
  /*
  $(document).ready(function() {
    $("p:hidden").show(3500);
  });
  */


  // 33. visible selector
  /*
  $(document).ready(function() {
    $("p:visible").css("background-color", "dodgerblue");
  });
  */


  // 34. root selector
  /*
  $(document).ready(function() {
    $("p:root").css("background-color", "aqua");
  });
  */


  // 35. language selector
  /*
  $(document).ready(function() {
    $("p:lang(it)").css("background-color", "yellow");
  });
  */


  // 36. atribute selector
  /*
  $(document).ready(function() {
    $("[id]").css("background-color", "green");
  });
  */


  // 37. atribute value selector
  /*
  $(document).ready(function() {
    $("[id]").css("background-color", "red");
  });
  */

  // 38. atribute! value selector
  /*
  $(document).ready(function() {
    $("p[class!='intro']").css("background-color", "orange");
  });
  */


  // 39. atribute$ value selector
  /*
  $(document).ready(function() {
    $("a[href$='.org']").css("background-color", "yellow");
  });
  */


  // 40. atribute| value selector
  /*
  $(document).ready(function() {
    $("p[title|='tomorrow']").css("background-color", "tomato");
  });
  */


  // 41. atribute^ value selector
  /*
  $(document).ready(function() {
    $("input[name^='usa']").css("background-color", "red");
  });
  */


  // 42. atribute~ value selector
  /*
  $(document).ready(function() {
    $("input[name~='usa']").css("background-color", "blue");
  });
  */


  // 43. atribute* value selector
  /*
  $(document).ready(function() {
    $("input[name*='usa']").css("background-color", "green");
  });
  */


  // 44. input selector
  /*
  $(document).ready(function() {
    $(":input").css("background-color", "aqua");
  });
  */


  // 45. text selector
  /*
  $(document).ready(function() {
    $(":text").css("background-color", "lime");
  });
  */


  // 46. password selector
  /*
  $(document).ready(function() {
    $(":password").css("background-color", "blue");
  });
  */


  // 47. radio selector
  /*
  $(document).ready(function() {
    $(":radio").wrap("<span style= 'background-color:orange'>");
  });
  */


  // 48. checkbox selector
  /*
  $(document).ready(function() {
    $(":checkbox").wrap("<span style= 'background-color:black'>");
  });
  */


  // 49. submit selector
  /*
  $(document).ready(function() {
    $(":submit").css("background-color", "lime");
  });
  */


  // 50. reset selector
  /*
  $(document).ready(function() {
    $(":reset").css("background-color", "purple");
  });
  */


  // 51. button selector
  /*
  $(document).ready(function() {
    $(":button").css("background-color", "pink");
  });
  */


  // 52. file selector
  /*
  $(document).ready(function() {
    $(":file").css("background-color", "red");
  });
  */


  // 53. enabled selector
  /*
  $(document).ready(function() {
    $(":enabled").css("background-color", "aqua");
  });
  */


  // 54. disabled selector
  /*
  $(document).ready(function() {
    $(":disabled").css("background-color", "lime");
  });
  */


  // 55. selected selector
  /*
  $(document).ready(function() {
    $(":selected").css("background-color", "tomato");
  });
  */


  // 56. checked selector
  /*
  $(document).ready(function() {
    $(":checked").css("background-color", "dodgerblue");
  });
  */
