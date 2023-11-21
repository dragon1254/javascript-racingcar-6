import inputView from "../view/inputView";

class constroller {
#carName

#Count
    constructor(){}

    run(){

    }

    getData(){
        const getName = inputView.inputName()
        this.#carName = getName;
        const getCount = inputView.inputTry()
        this.#Count = getCount;
        // 입력사항
    }

    processData(){
        // 처리사항
    }

    printData(){
        // 출력사항
    }

}

export default constroller;