function repeat(operation, num) {
    if(num!=0){
        operation();
        return repeat(operation,num-1);
    }
        
}

function operation(){
    //console.log("Hello");
}
console.log(repeat(operation, 3));
// Do not remove the line below
module.exports = repeat