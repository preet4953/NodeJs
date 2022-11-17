// This program changes the color of active links
const currentlocation = location.href
const menuItem=document.querySelectorAll('.nav-link');
const menuLength = menuItem.length;
for(let i=0; i<menuLength; i++){
    if(menuItem[i].href === currentlocation){
        menuItem[i].className='nav-link active'
}
}
