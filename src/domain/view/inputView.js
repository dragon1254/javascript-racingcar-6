import { MissionUtils } from "@woowacourse/mission-utils";
import validator from "../validate/validate";
import message from "../constant/message";

const inputView = {
    async inputName(){
        const getCarName = await MissionUtils.Console.readLineAsync(message.carName);
        const carNameArray = getCarName.split(',');
        const checkName  = new validator();
        checkName.carNameValidate(carNameArray);
        return carNameArray;
    },
    async inputTry(){
        const getTryNumber = await MissionUtils.Console.readLineAsync(message.tryCount);
        const realTryNumber = Number(getTryNumber)
        const checkTryNumber = new validator();
        checkTryNumber.tryNumberValidate(realTryNumber)
        return realTryNumber;
    }
}

export default inputView;