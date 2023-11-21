import { MissionUtils } from "@woowacourse/mission-utils";

class makeRace{
    getNumber(){
        const gameNumber = MissionUtils.Random.pickNumberInRange(0, 9);
        return gameNumber;
    }
}
export default makeRace;