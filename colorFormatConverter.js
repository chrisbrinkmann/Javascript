/*Question3
  Write a function that converts HEX to RGB.
  Then Make that function auto-dect the formats so that if you enter HEX color format
  it returns RGB and if you enter RGB color format it returns HEX.*/

/*param: a string containing hex color value
* return: a string containing rgb color value
* does not validate arg format */ 
function convertHextoRgb(color){
	let r
	let g
	let b

	if(color.length == 7){ // if its a 6 digit hex color
			r = parseInt(color[1], 16)*16 + parseInt(color[2], 16) //convert hex to dec
			g = parseInt(color[3], 16)*16 + parseInt(color[4], 16)
			b = parseInt(color[5], 16)*16 + parseInt(color[6], 16)

	} else { // if its a 3 digit hex color
			r = parseInt(color[1], 16)*17  //convert hex to dec
			g = parseInt(color[2], 16)*17
			b = parseInt(color[3], 16)*17
	}

	return `rgb(${r}, ${g}, ${b})`
}

/*param: a string containing rgb color value
  return: a string containing hex color value 
  does not validate rgb format*/
function convertRgbtoHex(color) {
	let rgbValRegEx = /\d{1,3}/g // individual rgb value regex
	let rgb = color.match(rgbValRegEx) // extract the each of values into an array 
	let r = parseInt(rgb[0], 10) // convert to number type and cache
	let g = parseInt(rgb[1], 10)
	let b = parseInt(rgb[2], 10)

	if (r > 255 || r < 0 || g > 255 || g < 0 || b > 255 || b < 0){ // validate rgb range
		return "RGB value out of Range (0-255)"
	} else {

			/* convert decimal values to hex string */
			r = r.toString(16) 
			g = g.toString(16)
			b = b.toString(16)

			/* pad hex color values with 0 if they are only 1 digit */
			if (r.length === 1){ 
				r = "0" + r
			}

			if (g.length === 1){
				g = "0" + g
			}

			if (b.length === 1){
				b = "0" + b
			}

			return `#${r}${g}${b}`
	}	
}

/*param: a string containing rgb or hex color
  return: a string of equivalent value in the other format 
  validates arg format*/
function convertColorFormat(color) {
	let hexRegEx = /^#([0-9a-f]{6}|[0-9a-f]{3})$/i // hex color regex
	let rgbRegEx = /^rgb\s*\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*\)$/ // rgb color regex
	let result

	/* arg matches hex color regex; convert to rgb */
	if (hexRegEx.test(color)){

		result = convertHextoRgb(color)

	/* arg matches the rgb color regex; convert to hex */
	} else if (rgbRegEx.test(color)){

		result = convertRgbtoHex(color)

	/* arg didnt match either hex or rgb format */
	} else { 
		result = "Invalid color format"
	}

	return result
}