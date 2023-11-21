import { MissionUtils } from "@woowacourse/mission-utils";
import message from "../constant/message";

const outputView = {
    printResultIntroduce(){
        MissionUtils.Console.print(message.introduce);
    },
    printEveryGame(element,progress){
        MissionUtils.Console.print(`${element} : ${progress}\n`);
    },
    printFinal(finalWinner){
        const stringWinner = finalWinner.join(', ');
        MissionUtils.Console.print(`최종 우승자 : ${stringWinner}`);
    }
}

export default outputView;