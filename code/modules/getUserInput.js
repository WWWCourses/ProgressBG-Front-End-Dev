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
	var id = function(nodeID){
		var node  = document.getElementById(nodeID);
		return node.value;
	}

	return {id: id};
}();
