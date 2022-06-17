//for clicking and making the like feature
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const glyph = document.getElementById("like-glyph")

function clickHeart(e) {
    const heart = e.target;
    miimicServerCall('http: //localhost:3000')
        .then(function() {
            if (heart.innerText === EMPTY_HEART) {
                heart.innerHTML = FULL_HEART;
                heart.className = "heart-activated"
            } else {
                heart.innerHTML = FULL_HEART;
                heart.className = '';
            }
        })
        .catch(() => {
            const modal = document.getElementById('modal');
            modal.className = "";
            modal.innerText = "There is an error";
            setTimeout(() => modal.className = "hidden", 1000);
        });

}
for (const glyph of articleHearts) {
    glyph.addEventListener("click", clickHeart);
};


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//----------------------------------------------------------------------
function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            let isRandomFailure = Math.random() < .2
            if (isRandomFailure) {
                reject("Random server error. Try again.");
            } else {
                resolve("Pretend remote server notified of action!");
            }
        }, 300);
    });
}