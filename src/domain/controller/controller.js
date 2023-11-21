import { MissionUtils } from "@woowacourse/mission-utils";
import inputView from "../view/inputView";
import outputView from "../view/outputView";
import makeRace from "../util/makeRace";
import finalResult from "../util/makeFinal";

class constroller {
#carName = {};

#count

#gamenumber = 0;
    constructor(){}

    async run(){
        await this.getData();
        this.processData();
        this.printData();
    }

    async getData(){
        const getName = await inputView.inputName();
        getName.forEach(element => {
            this.#carName[element] = 0;
        });
        const getCount = await inputView.inputTry();
        this.#count = getCount;
        
        outputView.printResultIntroduce();
        // 입력사항
    }

    processData(){
        this.#gamenumber++
        const winNumberArray = Object.keys(this.#carName)
        winNumberArray.forEach(element => {
            let oneGame = new makeRace()
            const oneGameNumber = oneGame.getNumber()
            if(oneGameNumber >= 4){
                this.#carName[element]++
            }
        });
        // 이름에 대해서 각각을 key로 갖는 오브젝트 생성. 각 이름에 대해서 MissionUtils.Random.pickNumberInRange(0, 9); 하여 4 이상이면 +1, 3이하이면 +0
        // 처리사항
        // 1번 처리 후 출력이 필요하니 둘을 연결 시킨 후 count 에 따라서 반복할 수 있게 (if문 후에 this.processData() 하던지 해서.)하는 방법도 괜찮을듯. 최종 우승자 결정은 그 다음 출력으로 하고.
        this.printData(winNumberArray)
    }

    printData(winNumberArray){
        // 출력사항
        winNumberArray.forEach(element => {
            let progress = ''
            for(let i = 0; i < this.#carName[element]; i++){
                progress = progress + '-'
            }
            outputView.printEveryGame(element,progress);
        });
        if(this.#gamenumber !== this.#count){
            this.processData();
        }
        // 최종우승자 출력
        const getFinalWinner = new finalResult(this.#carName);
        const finalWinner = getFinalWinner.winner();
        outputView.printFinal(finalWinner);
    }

}

export default constroller;