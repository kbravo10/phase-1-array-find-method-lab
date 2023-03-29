// code your solution here

function superbowlWin(arrObj){
    if(arrObj.find(winnner) === undefined){
        return undefined;
    }
    else{
        return arrObj.find(winnner)['year'];
    }
}

function winnner(element, index, array){
    return(element["result"] === "W")
}