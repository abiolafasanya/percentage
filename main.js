console.clear()


// document.getElementById("form")
    document.addEventListener("submit", (e) => {
        e.preventDefault()
        let actualScore = parseInt(document.getElementById("actual").value)
        
        let obtainableScore = parseInt(document.getElementById("obtainable").value)
        let evaluate = Math.floor((actualScore / obtainableScore) * 100)

        const total = `${evaluate}%`
        console.log(`${evaluate}%`)
        let result = document.getElementById('result').innerHTML = `Your percentage grade is <br> <b>${total}</b>`
        
    })
