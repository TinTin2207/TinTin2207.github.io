window.onload = function() {
    const transition = document.querySelector('.transition');
    transition.classList.add("slide");
    
    setTimeout(() =>  {
        transition.classList.remove("slide");
    }, 900)
}
