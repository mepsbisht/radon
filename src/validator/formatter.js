    let text="      functionUp     ";
    let result=text.trim()
    let trim=function trim(){
        console.log(result)
    }

    let data="fOrmAtTInG";
    let changeToLowerCase=function lowerCase(){
        console.log(data.toLowerCase());
    }
    let changeToUpperCase=function upperCase(){
        console.log(data.toUpperCase());
    }    


    module.exports.trim=trim;
    module.exports.changeToLowerCase=changeToLowerCase;
    module.exports.changeToUpperCase=changeToUpperCase;
