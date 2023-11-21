import inputView from "../view/inputView";
import outputView from "../view/outputView";

class constroller {
#carName

#count
    constructor(){}

    run(){
        this.getData();
        this.processData();
        this.printData();
    }

    getData(){
        const getName = inputView.inputName()
        this.#carName = getName;
        const getCount = inputView.inputTry()
        this.#count = getCount;
        
        const resultIntroduce = outputView.printResultIntroduce()
        // 입력사항
    }

    processData(){
        // 처리사항
        // 1번 처리 후 출력이 필요하니 둘을 연결 시킨 후 count 에 따라서 반복할 수 있게 (if문 후에 this.processData() 하던지 해서.)하는 방법도 괜찮을듯. 최종 우승자 결정은 그 다음 출력으로 하고.
    }

    printData(){
        // 출력사항
    }

}

export default constroller;