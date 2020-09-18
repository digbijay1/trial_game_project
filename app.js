let play = false
let sWords = ['ORANGE','JACKFRUIT']
let newWords = ""
let ranWords = ""
const createNewWords = () => {
    let ranNum = Math.floor(Math.random() * sWords.length)
    //console.log(ranNum)
    let newTempSwords = sWords[ranNum]
    // console.log(newTempSwords.split(""))
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
var count = 1
var sum = 3

function myFunction() {
    if (!play) {
        
        const draw= document.querySelector('.kaju')
        draw.innerHTML="Level 1"


        play = true;

        var btn = document.getElementById("myBtn");
        btn.innerHTML = "guess";
        let guess = document.querySelector('input')

        guess.classList.toggle('hidden')
        newWords = createNewWords()
        ranWords = scrambleWords(newWords.split(""))
        console.log(ranWords)

        const msg = document.querySelector('.msg')
        msg.innerHTML = `${count}.Arrange The Letters Into To A Meaningfull Manner:-"${ranWords.join("")}"`

        //this is below timer logic mam
        if (count == 1) {
            console.log("if count "+count);
            var timeleft = 40;
            //   var downloadTimer=true
            var downloadTimer = setInterval(function () {
                if (timeleft < 0) {
                    clearInterval(downloadTimer);
                    //document.getElementById("countdown").innerHTML = "Finished";
                   alert("TIME OVER- SORRY TRY AGAIN")
                   

                    window.location.href = 'index.html';
                } else {

                    document.getElementById("countdown").innerHTML = "YOUR TIME STARTS NOW :" + "     " + timeleft + "  " + "  SECONDS REMAINING";

                }
                timeleft -= 1;
            }, 1000);

        }
    }
    //end of timer logic
    else {
        let guess = document.querySelector('input')
        const msg = document.querySelector('.msg')
        var btn = document.getElementById("myBtn");
        console.log("else count "+count++);

        let tempword = guess.value;

        console.log(tempword)

        if (tempword == newWords) {

            //here only mam i have checke if the answer is right or wrong
            //console.log("correct")
            play = false
            //stop the timer logic
            myfunction2(count)
            // alert("CONGRATULATION FOLKS.YOU GUESSED  RIGHT")

            // window.location.href = 'index1.html';

            //downloadTimer=false;
            //msg.innerHTML = `boom it's correct .it is ${newWords}`
            //btn.innerHTML = "start again"
            guess.classList.toggle('hidden')
            guess.value = ""

            //document.getElementById("countdown").innerHTML = "ZERO"


        } else {
            console.log("incorret")
            msg.innerHTML = `Sorry Folks.Its Not Correct.Pls Try Once Again:- "${ranWords.join("")}"`
        }
    }


}

function myfunction2(count) {
   
    myFunction()
  console.log("count "+ count)
    if (sum == count) {
        window.location.href = 'index1.html';

    }
 
    

}