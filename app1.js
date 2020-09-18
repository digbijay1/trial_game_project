let sWords = ["javascript", "python", "c++", "php"] //create correct array
//the below function gives the random value that it may bejavascipr,pytohn etc..
let newWords = ""
let randwords = ""

//sramble word creation 
const createNewWords = () => {
    let ranNum = Math.floor(Math.random() * sWords.length)
    //console.log(ranNum)
    let newTempSwords = sWords[ranNum]
    //console.log(newTempSwords.split(""))
    return newTempSwords
}
const scrambleWords = (arr) => {
    for (var i = arr.length - 1; i >= 0; i--) {
        let temp = arr[i]
        //console.log(temp)   
        let j = Math.floor(Math.random() * (i + 1))
        //console.log(i)
        //console.log(j)
        arr[i] = arr[j]
        arr[j] = temp
    }
    return arr
}
let play = false
var count1 = 1

const myFunction = () => {
    if (count1 <= 1) {
        var timeleft = 10;
        var downloadTimer = true
        var downloadTimer = setInterval(function () {
            if (timeleft < 0) {
                clearInterval(downloadTimer);
                // document.getElementById("countdown").innerHTML = "Finished";
                alert("TIME OVER- SORRY TRY AGAIN")

                window.location.href = 'index.html';
            } else {

                document.getElementById("countdown").innerHTML = "your time starts now :" + "     " + timeleft + "  " + "  seconds remaining";

            }
            timeleft -= 1;
        }, 1000);
    }
    if (!play) {
        newWords = createNewWords()
        ranWords = scrambleWords(newWords.split(""))
        console.log(ranWords.join())
        const msg = document.querySelector('.msg')
        msg.innerHTML = `${count1}Arrange The Given Letter :${ranWords.join("")}`
    }


}
let sum1 = 3
const myFunction1 = () => {
    //TIMER LOGIC START

    // console.log("hii")
    var btn = document.getElementById("myId").value;
    console.log(btn)
    if (btn == newWords) {
        // console.log("correct")
        $('#myId').removeAttr('value');

        myNewFunction()
        //alert("you guessed right")
        //window.location.href = 'index.html';



    } else {
        console.log("not corrrect")
        const digu = document.querySelector('.digu')

        digu.innerHTML = `SORRY BOSS.ITS NOT CORRECT :${ranWords. join("")}`

    }
}

function myNewFunction() {
    count1++
    if (count1 == sum1) {
        alert("level2 complete")
        window.location.href = 'index.html'
    }
    myFunction()

}