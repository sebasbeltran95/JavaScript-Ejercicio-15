function stringRev2(str) {
    let myMessage = "";
    for (let i = str.length - 1; i >= 0; i--) {
        myMessage = myMessage + str.charAt(i);
    }
    return myMessage;
}
console.log(stringRev2("Hola Mundo"));