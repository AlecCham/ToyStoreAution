const currentLocation = window.location.href;
const menuItem = document.querySelectorAll('a.nav-link');
for (let i = 0; i < menuItem.length; i++) {
    if(menuItem[i].href === currentLocation) {
        menuItem[i].className += " active";
    }
}

