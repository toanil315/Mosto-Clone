<<<<<<< HEAD

=======
>>>>>>> parent of 3dc89a0... Revert "Mosto-Clone"
var featuresList = document.querySelectorAll('.features-2__item');
var featuresImg = document.querySelectorAll('.features-2__main-img'); 

for(let i = 0; i < featuresList.length; i++) {
    featuresList[i].addEventListener("click", function() {
        addClass(i);
    });
}

function addClass(i) {
    for(var j = 0; j < featuresList.length; j++) {
        if(j === i) {
            featuresList[j].classList.add("active");
            featuresImg[j].classList.add("active-img");
        }
        else {
            featuresList[j].classList.remove("active");
            featuresImg[j].classList.remove("active-img");
        }
    }
}

var input = document.getElementById('input-range');
var inputBack = document.getElementById('input-background');
inputBack.style.width = "50%";
input.addEventListener("input", function() {
    if((input.value === "0") || (input.value === "100")) {
        inputBack.style.width = `calc(${input.value}%)`;
    }
    else {
        inputBack.style.width = `calc(${input.value}% + 5px)`;
    }
<<<<<<< HEAD
})
=======
})
>>>>>>> parent of 3dc89a0... Revert "Mosto-Clone"
