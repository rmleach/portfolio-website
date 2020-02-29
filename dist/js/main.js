//Select DOM Items

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
const bioSelectors = document.querySelector('.selectors')
const bio = document.querySelector('.bio')

//Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
bioSelectors.addEventListener('click', switchBio);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    //Reset Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    //Reset Menu State
    showMenu = false;

  }
}

function switchBio(e) {
  if (e.target.id === 'short') {
    document.getElementById('p-short').style.display = "block"
    document.getElementById('p-long').style.display = "none"
    document.getElementById('p-speaker').style.display = "none"
  }
  if (e.target.id === 'long') {
    document.getElementById('p-short').style.display = "none"
    document.getElementById('p-long').style.display = "block"
    document.getElementById('p-speaker').style.display = "none"
  }
  if (e.target.id === 'speaker') {
    document.getElementById('p-short').style.display = "none"
    document.getElementById('p-long').style.display = "none"
    document.getElementById('p-speaker').style.display = "block"
  }
}

  function toggleSelector(e) {
    if (e.target.id === 'short') {
      var p = document.createElement("P");
      var ptext = document.createTextNode(short);
      p.appendChild(ptext);
      console.log(p, ptext)
      bio.appendChild(p);
    } else if (e.target.id === 'long') {
      console.log('long')
    } else if (e.target.id === 'speaker') {
      console.log('speaker')
    }


  }

  toggleMenu()
  toggleSelector()