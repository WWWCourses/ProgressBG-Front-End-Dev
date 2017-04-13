var getUserInput = function(){
	console.log("getUserInput starts!");

	// get elements:
	// var unameNode = document.getElementById("uname");
	// var uageNode = document.getElementById("uage");
	// var submitNode = document.getElementById("submit");

	// atach events
	// submitNode.addEventListener("click", function(){

	// })

	// actions
	var name = function(nodeID){
		var node  = document.getElementById(nodeID);
		return node.value;
	}

	return {name: name};
}();

var say = function(){
	var welcome = function(msg){
		alert("Здравейте " + msg + " !" );
	}

	var goodby = function(msg){
		alert("Довиждане " + msg + " !" );
	}

	return {welcome: welcome};
}();