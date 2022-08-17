function power(a,b){
    return a ** b;
}

function powerFn(b){
    return (a) => a ** b;
}

function credentials(login, password){
    return () => calculateHash(login,password);
}

const power2 = powerFn(2);
const power3 = powerFn(3);

const hash = credentials('admin',`12345`);

console.log(hash);

/*console.log(power(2,2));
console.log(power(2,3));
console.log(power(3,2));
console.log(power(2,3));
*/

/*console.log(power2(2));
console.log(power3(2));
console.log(power2(3));
console.log(power3(3));
*/