// Tworzymy funkcje

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(7, 10);
var triangle3Area = getTriangleArea(2, 8);


function getTriangleArea (a, h) {
	if ((a > 0) && (h > 0)) {  
		return a*h/2 ;
	}
	else {return "Nieprawidłowe dane"}  
}

console.log(getTriangleArea(10, 6));
document.write (triangle2Area);