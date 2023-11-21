import { MissionUtils } from "@woowacourse/mission-utils";
import message from "../constant/message";

const outputView = {
    printResultIntroduce(){
        MissionUtils.Console.print(message.introduce)
    },
}

export default outputView;