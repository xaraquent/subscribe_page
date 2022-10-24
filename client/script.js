const emailInput = document.getElementById("email-input")
const subscribe = document.getElementById("subscribe")
const form = document.querySelector("form")

const postData = async (data) => {
    const response = await fetch("http://localhost:3000/subscribe", {
        method: "POST",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(data)
    })
    return console.log(response)
}

form.addEventListener("submit", (event) => {
    // event.preventDefault();
    console.log(emailInput.value)
    const data = { email: emailInput.value }
    postData(data)

})

