document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("switchy").onclick = () => {
      if (!document.getElementById("switchy").checked) {
        var rules = document.styleSheets[0].rules
        for (var i = 0; i < rules.length; i++) {
          if (rules[i].selectorText == "p") {
            rules[i].style.color = "purple"
          } else if (rules[i].selectorText == "h1") {
            rules[i].style.color = "purple"
          } else if (rules[i].selectorText == "body") {
            rules[i].style.backgroundColor = "#f0dc00"
          }
        }
      } else {
        var rules = document.styleSheets[0].rules
        for (var i = 0; i < rules.length; i++) {
          if (rules[i].selectorText == "p") {
            rules[i].style.color = "#f0dc00"
          } else if (rules[i].selectorText == "h1") {
            rules[i].style.color = "#f0dc00"
          } else if (rules[i].selectorText == "body") {
            rules[i].style.backgroundColor = "purple"
          }
        }
      }
    }
}, false);
