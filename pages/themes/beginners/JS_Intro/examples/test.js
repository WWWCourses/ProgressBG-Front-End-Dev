var outNode = document.getElementById('colorTest');
outNode.innerHTML = "Hello World";


var nodeUL  = document.createElement('UL');
for (var i = 0; i < 20; i++) {
	var nodeLi  = document.createElement('LI');
	nodeLi.innerHTML = "Item" + i;
	nodeUL.appendChild(nodeLi);
}

document.body.appendChild(nodeUL);