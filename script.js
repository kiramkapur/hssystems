



// SIDEBAR FUNCTIONALITY

const openButton = document.getElementById('open-sidebar-button')
const navbar = document.getElementById('navbar')

const media = window.matchMedia("(width < 800px)")

media.addEventListener('change', (e) => updateNavbar(e))

function updateNavbar(e){
    const isMobile = e.matches
    if(isMobile){
        navbar.removeAttribute('inert', '')
    }
    else{
        //desktop device
        navbar.removeAttribute('inert', '')
    }
}

function openSidebar(){
    navbar.classList.add('show')
    openButton.removeAttribute('aria-expanded', 'true')
    navbar.removeAttribute('inert', '')
}

function closeSidebar(){
    navbar.classList.remove('show')
    openButton.setAttribute('aria-expanded', 'false')
    navbar.removeAttribute('inert', '')
}

updateNavbar(media)