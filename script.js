document.getElementsByClassName("switchy")[0].onclick = () => {
  if (!document.getElementsByClassName("switchy")[0].checked) {
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
