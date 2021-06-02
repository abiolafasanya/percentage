console.clear()

    document.addEventListener("submit", (e) => {
        e.preventDefault()
        let actualScore = parseInt(document.getElementById("actual").value)
        
        let obtainableScore = parseInt(document.getElementById("obtainable").value)
        let evaluate = Math.floor((actualScore / obtainableScore) * 100)
        

        if (actualScore > obtainableScore) {
            alert('Your actual socre is higher than Obtainable score please check and retry')
        }

        else{
            const total = `${evaluate}%`
            const color = document.querySelector('.result-container')
            const pass = color.classList.add('pass')
            const fail = color.classList.add('fail')
            let msgs = evaluate > 79 ? "your score is 80% and above" : "Your score is less than 80%"
            evaluate > 79 ? pass : fail
            let result = document.getElementById('result').innerHTML = `Your percentage grade is <br> <b>${total}</b> <p>${msgs}<\p>`
            console.log(`${evaluate}%`)
        }
        
    })
