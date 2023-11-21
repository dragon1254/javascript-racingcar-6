import error from "../constant/error";
import number from "../constant/number";

class validator{
    carNameValidate(carNameArray){
        const spacePattern = /\s/g
        carNameArray.forEach(element => {
            if(element.match(spacePattern)){
                throw new Error(error.space)
            }
            if(element.length > number.maxLength){
                throw new Error(error.five)
            }
        });
    }
    tryNumberValidate(realTryNumber){
        if(isNaN(realTryNumber)){
            throw new Error(error.string)
        }
        if(!Number.isInteger(realTryNumber)){
            throw new Error(error.integer)
        }
        if(realTryNumber < number.minCount){
            throw new Error(error.range)
        }
    }
}

export default validator;