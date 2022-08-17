const number = 4;

const name = `Robert`;

if (number<5){
    if(number % 2 ==1){
        console.log(`Is less than 5 and it is odd`);
    }else {
        console.log(`Is less than 5 and it is pair`);
    }
}
else{
    console.log(`Is greater or equal than 5`);
}

if (name == `Alice`){
    console.log(`Hello Alice, you're allowed`);
} else if(name == `David`){
    console.log(`Hello David, talk to the Admin`);
} else if(name == `Robert`){
    console.log(`Hello Robert, access denied`);
}  else {
    console.log(`I don't know who you are, ${name}`);
}

switch(name){
    case `Alice`: 
        console.log(`Hello Alice, you're allowed`);
        break;
    case `David`: 
        console.log(`Hello David, talk to the Admin`);
        break;
    case `Robert`: 
        console.log(`Hello Robert, access denied`);
        break;
    default:
        console.log(`I don't know who you are, ${name}`);
        break; 
}


console.log(number < 3 ? `Is lower than 3` : `Is greater or equal than 3`);