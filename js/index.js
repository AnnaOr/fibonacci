var a=1;
var b=1;
var n = Number(prompt ('Введіть порядковий номер в послідовності Фібоначчі '));

function fibonacci(n) {
   if (n < 3) { return 1; }
  for ( var result, i=3; i <=n; i++) { 
    result = a + b; 
    a = b; 
    b = result; 
  }
  return result; 
}
document.write(fibonacci(n));