for (var y = 0; y < 2; y++) {
	var x = 1
	// IF statement 1
	if( x ){
		console.log('if 1 y=' + y);
		if( y ){
			console.log('if 1/2  y=' +y);
		}
	};
// IF statement 2
	if( x ){
		console.log(' if 2 y=' + y);
	} else if( y ){
		console.log('if 2  else y=' + y);
	};

}
console.log("cycle 2 x = false")
for (var y = 0; y < 2; y++) {
	var x = 0
	// IF statement 1
	if( x ){
		console.log('if 1  y=' + y);
		if( y ){
			console.log('if 1/2 y=' + y);
		}
	};
// IF statement 2
	if( x ){
		console.log(' if 2 y=' + y);
	} else if( y ){
		console.log('if 2 else y=' + y);
	};

}
