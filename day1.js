// Hoisting Examples

console.log(num);
let num=25;

console.log(num1);
var num1=25;

console.log(num2);
const num2=25;

// scope

{let x=25;
    console.log(x);
}
console.log(x);

{var x=25;
    console.log(x);
}
console.log(x);

{const x=25;
    console.log(x);
}
console.log(x);