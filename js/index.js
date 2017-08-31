function clickbtn(write){
	document.getElementById("write").innerHTML = document.getElementById("write").innerHTML + write;
	
}
function deletee(){
	var str = document.getElementById("write").innerHTML;
	var leng = document.getElementById("write").innerHTML.length;
	document.getElementById("write").innerHTML = str.substr(0,leng - 1);
}

function enterr(){
	document.getElementById("write").innerHTML = document.getElementById("write").innerHTML + "\n";
}

function cl(){
	document.getElementById("write").innerHTML = ""
}