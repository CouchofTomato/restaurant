var home = function home() {
    let text = '<div class="row">\
    <div class="col-12">\
        <div class="position">\
            <h1>Rhys\' Pieces</h1>\
        </div>\
    </div>\
</div>\
<div class="row">\
    <div class="col-4">\
        <div class="position">\
            <img class="main-image" src="images/rhys.jpg">\
        </div>\
    </div>\
    <div class="col-8">\
        <div class="position">\
            <h2>Authentic Australian Cuisine</h2>\
        </div>\
        <div class="position">\
            <p>Join us down under for the best Australian food this side of the hemisphere.</p>\
        </div>\
    </div>\
</div>\
<div class="row">\
    <div class="col-12 review">\ '
<<<<<<< HEAD
        + reviews(reviewList) +
=======
         + reviews(reviewList) +
>>>>>>> 1342c50e94789c8101b8fc5cc8d6035090f9592a
    '</div>\
</div>\
<div class="row">\
    <div class="col-12">\
        <div class="position">\
            <p>Days since last food poisoning incident: <div class="incident position">1</div><div class="incident position">0</div></p>\
        </div>\
    </div>\
</div>';
return text;
}

var menu = function menu() {
    var menuText = '<div class="row menu">\
                    <div class="col-3">\
                        <img src="images/barbie-small.jpeg">\
                    </div>\
                    <div class="col-9">\
                        <p>Shrimp on the Barbie - Small - $100</p>\
                    </div>\
                </div>\
                <div class="row menu">\
                    <div class="col-3">\
                        <img src="images/barbie-medium.png">\
                    </div>\
                    <div class="col-9">\
                        <p>Shrimp on the Barbie - Medium - $200</p>\
                    </div>\
                </div>\
                <div class="row menu">\
                    <div class="col-3">\
                        <img src="images/barbie.jpg">\
                    </div>\
                    <div class="col-9">\
                        <p>Shrimp on the Barbie - Large - $300</p>\
                    </div>\
                </div>';
    return menuText;
}

var contact = function contact() {
    var contactText = '<div class="row">\
                    <div class="col-12">\
                        <div class="position">\
                            <h1>Don\'t contact me</h1>\
                        </div>\
                    </div>\
                </div>';
    return contactText;
}

const reviewList = [
    { 
        "review": "WOULDN\'T RECOMMEND THIS PLACE TO MY WORST ENEMY!!",
        "by": "Mike & Jill",
        "from": "Sydney"
    },
    {
        "review": "I\'d rather eat my beloved pet hamster Steve than frequent this shithole again.",
        "by": "Kevin",
        "from": "Glasgow"
    },
    {
        "review": "Turned up and our table had been taken so they set us up a temporary one in the toilet. Half way through my meal someone taking a shit was out of toilet paper so they took my napkin to wipe their arse. I was only comped an ice cream for this level of fuckery!",
        "by": "Benny & Lisa",
        "from": "Topeka"
    }
];

const reviews = (db) => {
    let text = "";
    
    db.forEach(item => {
        text+= `<div class="position">\
            <h4>“${item.review}”<span class="tagline">- ${item.by} - ${item.from}</span></h4>\
        </div>\ `;
    });
    
    return text;
};

var remove = function remove() {
    let el = document.getElementById('content');
    el.innerHTML = '';
}

var addListeners = function addListeners(listItems) {
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].addEventListener("click", function(event) {
            var inner = event.target.innerHTML;
            let el = document.getElementById('content');
            switch (inner) {
                case 'Home':
                    remove();
                    el.innerHTML = home();
                    break;
                case 'Menu':
                    remove();
                    el.innerHTML = menu();
                    break;
                case 'Contact':
                    remove();
                    el.innerHTML = contact();
                    break;
            }
        });
    }
}


document.addEventListener("DOMContentLoaded", function() {
    let el = document.getElementById('content');
    el.innerHTML = home();
    let listItems = document.getElementsByTagName('li');
    addListeners(listItems);
});
