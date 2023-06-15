var body = document.querySelector('body');

body.style.cssText = "margin: 0; padding: 0; font-family: Poppins"

let navContents = "Home"
let nav = document.createElement('nav');
let section = document.createElement('section');


function createNav(items) {
    nav.textContent = items;
    nav.className = "nav-bar"
    body.appendChild(nav);

    var sticky = nav.offsetTop;

    window.addEventListener('scroll', function() {
        if (window.pageYOffset >= sticky) {
            nav.classList.add("sticky")
        } else {
            nav.classList.remove("sticky");
        }
    })

    console.log(nav.offsetTop)

}

let myLinks = ["Alynn", "Home", "About", "Contact"]

function createLink() {
    myLinks.map(myLink => {
        let a = document.createElement('a');
        a.textContent = myLink;
        a.className = "link";
        nav.appendChild(a)
    })

    //for Link creation

    let myA = document.querySelectorAll('.link')
    for (i = 0; i < myA.length; i++) {
        myA[0].href = "#";
        myA[1].href = "#";
        myA[2].href = "#";
        myA[3].href = "#";
    }
    myA[0].className += " title";

}

createNav()
createLink()

//section Create
section.className = 'my-section'
body.appendChild(section)

function createShowCase() {
    let div = document.createElement('div');
    div.className = 'home-show-case';
    section.append(div)
}

createShowCase()

let showCaseArrays = ["Lifetime music Creation", "Follow me for more information"]
function createShowCaseText() {
    showCaseArrays.map(showCaseArray => {
        let showCase = document.querySelector('.home-show-case');
        let p = document.createElement('p');
        p.textContent = showCaseArray;
        p.className = 's-c-t';
        showCase.appendChild(p)
    })

    // add class for first text
    let myText = document.querySelectorAll('.s-c-t')
    myText[0].className += ' s_h';
}

createShowCaseText();

function createBtn() {
    let showCase = document.querySelector('.home-show-case');
    let button = document.createElement('button');
    button.className = 'default-btn';
    button.textContent = "Follow me";
    showCase.append(button)
}

createBtn();


















//pure action


console.log("Rakkha's page Extractor JS ver: 2.0")
console.log("Copyright (C) Rakkha's Design 2023")
console.log("Watch out our latest Release")
