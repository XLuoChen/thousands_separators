function thousands_separators(num) {
    var numToString = num.toString();
    var splitString = numToString.split('.');
    var separatedNum = ''; 
    
    if(splitString.length === 1){
        separatedNum += splitString[0].replace(/(\d)(?=(?:\d\d\d)+(?!\d))/g,"$1,");
        //separatedNum = splitString;
    }
    else{
        separatedNum += splitString[0].replace(/(\d)(?=(?:\d\d\d)+(?!\d))/g,"$1,");
        separatedNum += '.' + splitString[1];
    }
    
    return separatedNum;
}

module.exports = thousands_separators;
