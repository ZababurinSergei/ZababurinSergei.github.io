function pieSlicer() {
  var percentValue = (utilslider.value / 100) * circumference;
		pie.style.strokeDasharray = percentValue + " " + circumference;
			pie.style.stroke = "hsl(0 ," + utilslider.value + "%, 50%)";
			percentDisplay.innerHTML = utilslider.value + "%";
}

var utilslider = document.getElementById("utilslider"),
circle = document.getElementById("pie"),
radius = parseInt(circle.getAttribute('r'), 10),
circumference = 2 * radius * Math.PI,
percentDisplay = document.querySelector("#readout output");
	utilslider.addEventListener("input", 
		function() { pieSlicer(); }
	)
  pieSlicer();