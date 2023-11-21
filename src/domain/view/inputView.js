import { MissionUtils } from "@woowacourse/mission-utils";
import validator from "../validate/validate";
import message from "../constant/message";

const inputView = {
    inputName(){
        const getCarName = MissionUtils.Console.readLineAsync(message.carName);
        const carNameArray = getCarName.split(',');
        const checkName  = new validator();
        checkName.carNameValidate(carNameArray);
        return carNameArray;
    },
    inputTry(){
        const getTryNumber = MissionUtils.Console.readLineAsync(message.tryCount);
        const realTryNumber = Number(getTryNumber)
        const checkTryNumber = new validator();
        checkTryNumber.tryNumberValidate(realTryNumber)
        return realTryNumber;
    }
}

export default inputView;