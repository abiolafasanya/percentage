console.clear()


// document.getElementById("form")
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
            
            evaluate > 79 ? color.classList.add('pass') : color.classList.add('fail')
            let result = document.getElementById('result').innerHTML = `Your percentage grade is <br> <b>${total}</b>`
            console.log(`${evaluate}%`)
        }
        
    })
