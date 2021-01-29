// deal with locale storage to change colors
let colorStorage = localStorage.getItem('color-option');

let optionBackround = localStorage.getItem("option-background");

// variable for checking if you want random background

let backgroundOption = true;

let backgroundInterval;

if (colorStorage !== null) {

    document.documentElement.style.setProperty("--main-color", colorStorage);

    //check if the color stored is equal the active color
    document.querySelectorAll(".colors-list li").forEach(item => {

        item.classList.remove('active');

        //assign the storage color to class active
        if (item.dataset.color === colorStorage) {
            item.classList.add('active');
        }

    });


}

if (optionBackround !== null) {

    console.log('the console has data');
    document.querySelectorAll('.random-background span').forEach(item => {

        item.classList.remove('active');

        if (item.dataset.background === optionBackround) {

            item.classList.add('active');
            if (item.dataset.background === "yes") {

                backgroundOption = true;
                randomBackground();
                console.log("the console say call the function");
            } else {
                backgroundOption = false;
                clearInterval(backgroundInterval);
                console.log("the console say put the function off");
            }
        }
    });
}


/* Switch color */

const colorList = document.querySelectorAll(".colors-list li");

colorList.forEach(elemntLi => { // [elementLi =>] == [function(elementLi)]

    elemntLi.addEventListener("click", function (e) {

        document.documentElement.style.setProperty("--main-color", e.target.dataset.color);

        // store the color in local storage
        localStorage.setItem("color-option", e.target.dataset.color);

        //Remove the class active from the elments of ul
        e.target.parentElement.querySelectorAll('.active').forEach(item => {
            item.classList.remove('active');
        });

        //add the class active to the element targeting
        e.target.classList.add('active');

    })

});


// Sitch RAndom background option
const randomBack = document.querySelectorAll(".random-background span");


randomBack.forEach(spanItem => {
    spanItem.addEventListener('click', (e) => {

        // you sould write localStorage. not name of localStoarge variable
        localStorage.setItem("option-background", e.target.dataset.background);


        e.target.parentElement.querySelectorAll('.active').forEach(Item => {

            Item.classList.remove('active');
        });

        e.target.classList.add('active');

        if (e.target.dataset.background === 'yes') { //Get the value from the costume data attribute

            // to stop calling the function serval time
            if (backgroundOption !== true) {
                backgroundOption = true;
                randomBackground();
            }

        } else {

            backgroundOption = false;
            clearInterval(backgroundInterval);

        }

    })
});



// the first method that show & hide the settings bow
let Icon = document.querySelector(".icon");

/* Icon.addEventListener('click', function () {

    let box = document.querySelector(".settings-box");
    let sty = window.getComputedStyle(box);
    let variable = sty.getPropertyValue('left');

    if (variable == '0px') {
        box.style.left = "-200px";
    } else {
        box.style.left = "0px";
    }
}) */


// the second methos to show & hide the settings bow

Icon.addEventListener('click', () => {

    //this.classList.toggle('fa-spin'); 
    Icon.classList.toggle("fa-spin");

    document.querySelector('.settings-box').classList.toggle('open');
})

// the third method to show & hide the settings box

/* Icon.onclick = function () {

    //Icon.classList.toggle('fa-spin');
    this.classList.toggle('fa-spin');
    document.querySelector('.settings-box').classList.toggle('open');
}
 */


// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

// Get array of images

let ImgArray = ["beautifulGirl1.jpg", "beautifulGirl2.jpg", "beautifulGirl3.jpg", "beautifulGirl4.jpg", "beautifulGirl5.jpg", "beautifulGirl6.jpg"];

// change the background image

/* landingPage.style.backgroundImage = "url('Images/beautifulGirl5.jpg')"; */


// random number
let RandomNumber = Math.floor(Math.random() * ImgArray.length);


// function that change background each second if the 'YES' button clicked
function randomBackground() {

    if (backgroundOption === true) {

        backgroundInterval = setInterval(function () {

            let RandomNumber = Math.floor(Math.random() * ImgArray.length);

            landingPage.style.backgroundImage = 'url("Images/' + ImgArray[RandomNumber] + '")';

            //console.log(RandomNumber);

        }, 2000)

    }
}









console.log(colorList);