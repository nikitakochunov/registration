const firstPage = document.querySelector('.first-page')
const secondPage = document.querySelector('.second-page')

// Sign Up Event===========================================================

//todo check and errors

let firstNameValue
let lastNameValue
let loginValue
let passwordValue

document.querySelector('.sign-up__button').addEventListener('click', function (event) {
    event.preventDefault()
    firstNameValue = document.querySelector('.sign-up__input--first-name').value
    document.querySelector('.sign-up__input--first-name').value = ''
    console.log('First Name: ', firstNameValue)

    lastNameValue = document.querySelector('.sign-up__input--last-name').value
    document.querySelector('.sign-up__input--last-name').value = ''
    console.log('Last Name: ', lastNameValue)

    translatePages('first click')
})

document.querySelector('.signing-up__button').addEventListener('click', function (event) {

    event.preventDefault()

    loginValue = document.querySelector('.signing-up__input--login').value
    document.querySelector('.signing-up__input--login').value = ''
    console.log('Login: ', loginValue)

    passwordValue = document.querySelector('.signing-up__input--password').value
    document.querySelector('.signing-up__input--password').value = ''
    console.log('Password: ', passwordValue)

    let personObject = {
        firstName: firstNameValue,
        lastName: lastNameValue,
        login: loginValue,
        password: passwordValue
    }

    console.log('This user has signed up: ', personObject)

    if (localStorage.length === 0) {
        let users = []
        users.push(personObject)
        localStorage.setItem('personInfo', JSON.stringify(users))
    } else {
        let users = JSON.parse(localStorage.getItem('personInfo'))
        users.push(personObject)
        localStorage.setItem('personInfo', JSON.stringify(users))
    }


    translatePages('second click')
})

// =============================================================================


// Sign In Event===========================================================

//todo check and errors

document.querySelector('.sign-in__button').addEventListener('click', function (event) {
    event.preventDefault()

    let signInLogin = document.querySelector('.sign-in__input--login').value
    document.querySelector('.sign-in__input--login').value = ''

    let signInPassword = document.querySelector('.sign-in__input--password').value
    document.querySelector('.sign-in__input--password').value = ''

    let users = JSON.parse(localStorage.getItem('personInfo'))

    console.log('The list of the signed up users: ', users)

    let currentUser = users.find(function (i) {
        return ((i.login === signInLogin) && (i.password === signInPassword))
    })

    if (currentUser) {
        console.log('This user is signing in: ', currentUser)
    } else {
        console.log('There is no such user')
    }

})

// =============================================================================




function translatePages(situation) {
    if (situation === 'first click') {
        firstPage.style.transform = 'translateY(-200vh)'
        secondPage.style.transform = 'translateY(-100vh)'
    } else if (situation === 'second click') {
        firstPage.style.transform = 'translateY(0vh)'
        secondPage.style.transform = 'translateY(0vh)'
    }


}