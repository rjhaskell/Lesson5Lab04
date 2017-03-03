let sentence = "The quick brown fox jumps over the lazy dog";

let display: HTMLElement = document.getElementById('display');

//Button assignment for Split string
//Not used
let splitWordBtn: HTMLButtonElement = <HTMLButtonElement>document.getElementById('split');

//Function for Split string
function splitWords(input: string): string[] {
    let output: string[] = input.split(' ');

    return output;
}

//Event listener for split words button
splitWordBtn.addEventListener('click', () => {
    let result: string[] = splitWords(sentence);
    
    display.innerText = result.join('\n');
});


//Button assignment for Sort by Words
let sortByWordBtn: HTMLButtonElement = <HTMLButtonElement>document.getElementById('word');

//Function for Sort by words
function sortWords(input: string): string[] {
    let output: string[] = input.split(' ');

    return output.sort();
}
//Event listener for Sort by Words
sortByWordBtn.addEventListener('click', () => {
    let result: string[] = sortWords(sentence);
    
    display.innerText = result.join('\n');
});

//Button assignment for Sort by length
let sortByLengthBtn: HTMLButtonElement = <HTMLButtonElement>document.getElementById('length');

//Function for Sort by Length of word
function lengthWords(input: string): string[] {
    //split up into an array
    let putout: string[] = input.split(' ');

    //sort by length
    putout.sort(function(a, b){
    return b.length - a.length;
    });

    return putout;
}
//Event listener for Sort by Length of Words
sortByLengthBtn.addEventListener('click', () => {
    let result: string[] = lengthWords(sentence);
    
    display.innerText = result.join('\n');
});

//Button assignment for Reverse Each Word
let reverseEachWordBtn: HTMLButtonElement = <HTMLButtonElement>document.getElementById('reverse');

//Function for reverse each word

function reverseWords(putin: string){
 
    let getOut = function(){
        return putin.split("").reverse().join("").split(" ").reverse().join("\n");     
    };
    let innerResult = getOut();

    return innerResult;
};

//Event listener for reverseEachWordBtn button
reverseEachWordBtn.addEventListener('click', () => {
    let result= reverseWords(sentence);
    
    display.innerText = result;
});