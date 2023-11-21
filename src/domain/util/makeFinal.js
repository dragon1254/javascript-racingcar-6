class finalResult{
    constructor(carName){
        this.carName = carName
    }
    winner(){
        const winnerCount = Object.values(this.carName);
        const winnerName = Object.keys(this.carName);
        const maxWinCount = Math.max(...winnerCount);
        const winnerArray = [];
        winnerCount.forEach((element,index) => {
            if(element === maxWinCount){
                winnerArray.push(winnerName[index]);
            }
        });
        return winnerArray;
    }
}

export default finalResult;