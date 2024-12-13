// No1
const selectText = document.querySelector(".text")
const newText = document.createElement("ul")

newText.innerHTML = `
    <li>Order</li>
    <li>Lacak Pesanan</li>
    <li>Customer Service</li> `

selectText.append(newText)

// No2
const addedText = newText
const listService = addedText.querySelectorAll("li")
listService.forEach(service => {
    service.textContent = `Layanan tidak tersedia`
})

// No3
const bgText = document.querySelector(".text")
bgText.style.color = `#555`

// No4
const selectFAQ = document.querySelector(".faq")
const newFAQ = document.createElement("ul")

for (let i=0; i<10; i++) {
    const listFAQ = document.createElement("li")
    listFAQ.textContent = `Question ${i+1}`
    newFAQ.appendChild(listFAQ)
}
selectFAQ.append(newFAQ)

