var div = document.getElementById("data");
var exampleAttr = div.getAttribute("id");
console.log(exampleAttr)
div.setAttribute("name", "john")
console.log(div.getAttribute("name"))