let bool=true;
console.log(bool);
bool = false;
console.log(bool);

bool=true;
if(bool==true){
    console.log('Is true');
}else{
    console.log('Is false');
}

let a = false;
let b = false;
//let result = a && b;
let result = a || b;
console.log(result);


// AND
// a        b       result
// false    false   false
// false    true    false
// true     false   false
// true     true    true

// OR
// a        b       result
// false    false   false
// false    true    true
// true     false   true
// true     true    true
