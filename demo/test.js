$(document).ready(function(){
	var image = new Array ();
	image[0] = "/demo/image/1.jpg";
	image[1] = "/demo/image/2.jpg";
	image[2] = "/demo/image/3.jpg";
	image[3] = "/demo/image/4.jpg";
	var size = image.length
	var x = Math.floor(size*Math.random())

	$('#randomImages').attr('src',image[x]);
});