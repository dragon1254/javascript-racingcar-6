import { MissionUtils } from "@woowacourse/mission-utils";
import inputView from "../view/inputView";
import outputView from "../view/outputView";
import makeRace from "../util/makeRace";
import finalResult from "../util/makeFinal";
import number from "../constant/number";

class constroller {
#carName = {};

#count

#gamenumber = 0;
    constructor(){}

    async run(){
        await this.getData();
        this.processData();
    }

    async getData(){
        const getName = await inputView.inputName();
        getName.forEach(element => {
            this.#carName[element] = 0;
        });
        const getCount = await inputView.inputTry();
        this.#count = getCount;
        
        outputView.printResultIntroduce();
    }

    processData(){
        this.#gamenumber++
        const winNumberArray = Object.keys(this.#carName)
        winNumberArray.forEach(element => {
            let oneGame = new makeRace()
            const oneGameNumber = oneGame.getNumber()
            if(oneGameNumber >= number.win){
                this.#carName[element]++
            }
        });
        this.printData(winNumberArray)
    }

    printData(winNumberArray){
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
        const getFinalWinner = new finalResult(this.#carName);
        const finalWinner = getFinalWinner.winner();
        outputView.printFinal(finalWinner);
    }
}

export default constroller;