import error from "../constant/error";

class validator{
    carNameValidate(carNameArray){
        const spacePattern = /\s/g
        carNameArray.forEach(element => {
            if(element.match(spacePattern)){
                throw new Error(error.space)
            }
            if(element.length > 5){
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
        if(realTryNumber < 1){
            throw new Error(error.range)
        }
    }
}

export default validator;