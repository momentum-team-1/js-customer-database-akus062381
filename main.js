function showPicture () {
    let targetEl = document.querySelector(".container-customers")

    for (let customer of customers) {
        let pictureEl = document.createElement("div")
        pictureEl.innerHTML = createImageElement(customer.picture.large)
        pictureEl.appendChild(createTitleElement(customer.name.first + " " + customer.name.last))
        pictureEl.appendChild(createEmailElement(customer.email))
        pictureEl.appendChild(createStreet(customer.location.street))
        pictureEl.appendChild(createCityStateZip(customer.location.city + " " + customer.location.state + " " + customer.location.postcode))
        pictureEl.appendChild(createBirthday("DOB: " + customer.dob))
        pictureEl.appendChild(createRegistered("Customer since: " + customer.registered))
        targetEl.appendChild(pictureEl)
    }
}

function createImageElement (url) {
    return `<img src=${url}>`
}

function createTitleElement (title) {
    let titleEl = document.createElement("h3")
    titleEl.innerText = `${title}`
    return titleEl
}

function createEmailElement (email) {
    let emailEl = document.createElement("h6")
    emailEl.innerText = `${email}`
    return emailEl
}

function createStreet (street) {
    let streetEl = document.createElement("h5")
    streetEl.innerText = `${street}`
    return streetEl
}

function createCityStateZip (city) {
    let cityEl = document.createElement("h5")
    cityEl.innerText = `${city}`
    return cityEl
}

function createBirthday (birthday) {
    let birthdayEl = document.createElement("h6")
    birthdayEl.innerText = `${birthday}`
    return birthdayEl
}

function createRegistered (registered) {
    let dateRegistered = document.createElement("h6")
    dateRegistered.innerText = `${registered}`
    return dateRegistered
}
 
showPicture()