// Header Burger================================================================

function burger(burgerSelector, menuSelector) {
    const headerBurger = document.querySelector(burgerSelector)
    const headerMenu = document.querySelector(menuSelector)
    const body = document.querySelector('body')

    headerBurger.addEventListener('click', function (event) {
        headerBurger.classList.toggle('active')
        headerMenu.classList.toggle('active')
        body.classList.toggle('lock')
    })
}