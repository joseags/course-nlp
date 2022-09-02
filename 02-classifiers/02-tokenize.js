const natural = require(`natural`);
const { TokenizerEn } = require(`@nlpjs/lang-en`);
const input = "I didn't finish the task. I can not end today. I'll end tomorrow";

function tokenize(text){
  //return text.split(/\W+/g);  
  return text.split(/[\s,.!?;:([\]'"¿¡)/]+/);  
  
}

function tokenizeAggressive(text){
   const tokenizer = new natural.AggressiveTokenizer();
   return tokenizer.tokenize(text);
}

function tokenizeTreebank(text){
  const tokenizer = new natural.TreebankWordTokenizer();
  return tokenizer.tokenize(text);
}

function tokenizeNlpjs(text){
  const tokenizer = new TokenizerEn();
  return tokenizer.tokenize(text, false);
}

console.log(tokenize(input));
console.log(tokenizeAggressive(input));
console.log(tokenizeTreebank(input));
console.log(tokenizeNlpjs(input));
//console.log(tokenize(`Día`));
