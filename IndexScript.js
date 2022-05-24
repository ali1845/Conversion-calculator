// JavaScript source code

//disable inappropriate buttons:
function onBinary(){
	document.getElementById("bin").enabled = true;
	document.getElementById("hex").disabled = true;
	document.getElementById("oct").disabled = true;
	document.getElementById("dec").disabled = true;
	document.getElementById("9").disabled = true;
	document.getElementById("8").disabled = true;
	document.getElementById("7").disabled = true;
	document.getElementById("6").disabled = true;
	document.getElementById("5").disabled = true;
	document.getElementById("4").disabled = true;
	document.getElementById("3").disabled = true;
	document.getElementById("2").disabled = true;
	document.getElementById("A").disabled = true;
	document.getElementById("B").disabled = true;
	document.getElementById("C").disabled = true;
	document.getElementById("D").disabled = true;
	document.getElementById("E").disabled = true;
	document.getElementById("F").disabled = true;
	}

function onOctal(){
	document.getElementById("oct").enabled = true;
	document.getElementById("hex").disabled = true;
	document.getElementById("bin").disabled = true;
	document.getElementById("dec").disabled = true;
	document.getElementById("A").disabled = true;
	document.getElementById("B").disabled = true;
	document.getElementById("C").disabled = true;
	document.getElementById("D").disabled = true;
	document.getElementById("E").disabled = true;
	document.getElementById("F").disabled = true;

	}

function onHexadecimal(){
	document.getElementById("hex").enabled = true;
	document.getElementById("bin").disabled = true;
	document.getElementById("oct").disabled = true;
	document.getElementById("dec").disabled = true;
	}

function onDecimal(){
	document.getElementById("dec").enabled = true;
	document.getElementById("hex").disabled = true;
	document.getElementById("oct").disabled = true;
	document.getElementById("bin").disabled = true;
	document.getElementById("A").disabled = true;
	document.getElementById("B").disabled = true;
	document.getElementById("C").disabled = true;
	document.getElementById("D").disabled = true;
	document.getElementById("E").disabled = true;
	document.getElementById("F").disabled = true;

	}

//Delete and clear the data:
function del(){
	if(document.getElementById("bin").enabled == true){
		input.Binary.value = '';
		}
	if(document.getElementById("hex").enabled == true){
		input.Hexadecimal.value = '';
		}
	if(document.getElementById("oct").enabled == true){
		input.Octal.value = '';
		}
	if(document.getElementById("dec").enabled == true){
		input.Decimal.value = '';
		}
	}

//Give input values:
function values(x){
	if(document.getElementById("bin").enabled == true){
		input.Binary.value += x;
		}
	if(document.getElementById("hex").enabled == true){
		input.Hexadecimal.value += x;
		}
	if(document.getElementById("oct").enabled == true){
		input.Octal.value += x;
		}
	if(document.getElementById("dec").enabled == true){
		input.Decimal.value += x;
		}
	}
	

//Act fo Binary:
function actBTD(x){
	s = parseInt(x, 2).toString(10);
	input.Decimal.value += s;
	}
function actBTH(x){
	s = parseInt(x, 2).toString(16);
	input.Hexadecimal.value += s;
	}
function actBTO(x){
	s = parseInt(x, 2).toString(8);
	input.Octal.value += s;
	}

//Act for Hexadecimal:
function actHTD(x){
	s = parseInt(x, 16).toString(10);
	input.Decimal.value += s;
	}
function actHTO(x){
	s = parseInt(x, 16).toString(8);
	input.Octal.value += s;
	}
function actHTB(x){
	s = parseInt(x, 16).toString(2);
	input.Binary.value += s;
	}

//Act for Octal:
function actOTD(x){
	s = parseInt(x, 8).toString(10);
	input.Decimal.value += s;
	}
function actOTH(x){
	s = parseInt(x, 8).toString(16);
	input.Hexadecimal.value += s;
	}
function actOTB(x){
	s = parseInt(x, 8).toString(2);
	input.Binary.value += s;
	}

//Act for Decimal:
function actDTB(x){
	s = parseInt(x, 10).toString(2);
	input.Binary.value += s;
	}
function actDTH(x){
	s = parseInt(x, 10).toString(16);
	input.Hexadecimal.value += s;
	}
function actDTO(x){
	s = parseInt(x, 10).toString(8);
	input.Octal.value += s;
	}


//Evaluate the numbers:	
function equal(){
	document.getElementById("del").disabled = true;
	if(document.getElementById("bin").enabled == true){
		var n = document.getElementById("binNum").value;
		actBTD(n);
		actBTH(n);
		actBTO(n);
		}
	if(document.getElementById("hex").enabled == true){
		var n = document.getElementById("hexNum").value;
		actHTO(n);
		actHTB(n);
		actHTD(n);
		}
	if(document.getElementById("oct").enabled == true){
		var n = document.getElementById("octNum").value;		
		actOTB(n);
		actOTH(n);
		actOTD(n);
		}
	if(document.getElementById("dec").enabled == true){
		var n = document.getElementById("decNum").value;
		actDTB(n);
		actDTH(n);
		actDTO(n);
		}
	}