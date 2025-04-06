document.addEventListener('DOMContentLoaded', function() {
  try {
    document.getElementById("switchy").onclick = () => {
      if (!document.getElementById("switchy").checked) {
        var rules = document.styleSheets[0].rules
        console.log(rules)
        console.log(document.styleSheets[0])
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
  } catch (error) {
    console.log("BAD")
    console.log(error)
  }
}, false);
