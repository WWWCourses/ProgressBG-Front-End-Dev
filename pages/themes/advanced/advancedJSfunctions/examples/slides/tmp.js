let x = 1, y=1; // x and y in global scope

function foo(){
  let x = 2, y=2;  // x and y in foo scope

  function bar(){
    let y = 3;  // y in bar scope
    x = 3;     // uses x in foo scope
    console.log(`x,y in bar: ${x}, ${y}`);
  }

  bar();
  console.log(`x,y in foo: ${x}, ${y}`);
}

foo();
console.log(`x,y in gloabl: ${x}, ${y}`);
