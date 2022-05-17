setInterval(function () {
    var b = Math.floor((Math.random() * 100) + 1);
    var d = ["flowOne", "flowTwo", "flowThree"];
    var a = ["colOne", "colTwo", "colThree", "colFour", "colFive", "colSix"];
    var c = (Math.random() * (1.6 - 1.2) + 1.2).toFixed(1);
    $('<div class="heart part-' + b + " " + a[Math.floor((Math.random() * 6))] + '" style="font-size:' + Math.floor(Math.random() * (50 - 22) + 22) + 'px;"><img src="heart.png" width="30"></div>').appendTo(".hearts").css({
        animation: "" + d[Math.floor((Math.random() * 3))] + " " + c + "s linear"
    });
    $(".part-" + b).show();
    setTimeout(function () {
        $(".part-" + b).remove()
    }, c * 900)
}, 100);

let inBtn = document.querySelector('.in'),
    body = document.querySelector('body'),
    counter = 0,
    imageNight = document.querySelector('.night_mode'),
    imageLight = document.querySelector('.light_mode');

inBtn.addEventListener('click', function() {
    counter++;
    if (counter % 2 !== 0) {
        inBtn.style.left = '60%';
        body.style.backgroundImage = 'linear-gradient(110deg, #333, #6d47d9)';


        imageLight.style.transform = 'rotate(1turn)';
        imageLight.style.opacity = '0';

        imageNight.style.transform = 'rotate(1turn)';
        imageNight.style.opacity = '1';

        inBtn.title = 'Night mode';
    } else {
        inBtn.style.left = '8%';
        body.style.backgroundImage = 'linear-gradient(110deg, #f93d66, #6d47d9)';

        imageNight.style.transform = 'rotate(-1turn)';
        imageNight.style.opacity = '0';

        imageLight.style.transform = 'rotate(-1turn)';
        imageLight.style.opacity = '1';

        inBtn.title = 'Light mode';

    }
    
});

// Below the info animation

let onBtn = document.querySelector('.infoBtn'),
    offBtn = document.querySelector('.closeBtn'),
    one = document.querySelector('.container'),
    two = document.querySelector('.container2');

onBtn.addEventListener('click', function () {

    onBtn.style.bottom = '-40px';


    setTimeout(function () {
        one.style.left = '38%';
        two.style.display = 'flex';
    }, 700)


    setTimeout(function () {
        two.style.opacity = '1';
        two.style.left = '62%';
    }, 1300)


    setTimeout(function () {
        offBtn.style.display = 'flex';
    }, 1800)


    setTimeout(function () {
        offBtn.style.bottom = '0';
    }, 1900)
})

offBtn.addEventListener('click', function () {

    offBtn.style.bottom = '-40px';
    
    
    setTimeout(function () {
        offBtn.style.display = 'none';
        two.style.opacity = '0';
        two.style.left = '50%';
    }, 600)


    setTimeout(function () {
        one.style.left = '50%';
        two.style.display = 'none';
        onBtn.style.display = 'flex';
    }, 1300)


    setTimeout(function () {
        onBtn.style.bottom = '0';
    }, 1700)
})