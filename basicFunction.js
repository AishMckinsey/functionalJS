function upperCaser(sentence){

    if(Number.isInteger(sentence))
        return "Invalid Input";
        
    sentence = sentence.toUpperCase();
    return sentence;
}

//console.log(upperCaser("Hello this is me"));
module.exports = upperCaser;