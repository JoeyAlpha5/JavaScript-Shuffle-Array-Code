//declare an empty array for temporary use
var tempArray = [];

//call the function to shuffle your array, pass your array as a parameter and will
//be returned as a reshuffled array e.g var array = shuffleArray(["1", "2", "3", "4"]);
function shuffleArray(array) {
    while (tempArray.length != array.length) {
        for (let i = 0; i < array.length; i++) {
            var randomNo = Math.floor(Math.random() * (array.length));
            console.log("random number is " + randomNo);
            var arrayText = array[randomNo];
            if (tempArray.includes(arrayText)) {
            }else{
                tempArray.push(arrayText);
            }
        }

        console.log(tempArray);
    }

    return tempArray;
}
