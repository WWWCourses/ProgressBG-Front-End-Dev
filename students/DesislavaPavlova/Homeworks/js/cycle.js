var sum = 0;

for ( var x = 1; x <= 100 ; x+=1 ) {
	console.log("x = " + x);
	if( x%2 == 0){
		sum = sum + x ;
	}
};

console.log("sum= " + sum);