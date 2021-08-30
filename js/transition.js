const links = document.getElementById('links')
const transition = document.querySelector('.transition');

links.addEventListener('click', (e) => {
    e.preventDefault()
    transition.classList.add("slide");
        
    setTimeout(() =>  {
        const path = e.path[1].attributes[0].nodeValue
        window.location = path
    }, 900)
})
