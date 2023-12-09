const rateBtn = document.querySelector('.rate-btn')
const nextBtn = document.querySelector('.next-btn')
const stars = document.querySelectorAll('.star')


nextBtn.addEventListener('click', () => {
    this.location.reload();
})

const showRating = (event,i) => {
    let starValue = i+1;
    if(event === 'click'){
        rateBtn.innerHTML = `You rated this ${starValue} ${starValue > 1 ? "stars" : "star"}`
    }
    stars.forEach((star, index) => {
        if(event === 'click'){
            if(index < starValue){
                star.classList.add('orange');
                star.classList.remove('yellow')
            }else{
                star.classList.remove('orange');
            }
        }
        if(event === 'mouseover'){
            if(index < starValue){
                star.classList.add('yellow')
            }else{
                star.classList.remove('yellow')
            }
        }
        if(event === 'mouseout'){
            star.classList.remove('yellow')
        }
    })
}
//stars will be an array of list items
for(let i = 0; i < stars.length; i++){
    ["click", "mouseover", "mouseout"].forEach((event) => {
        stars[i].addEventListener(event , function() {
            showRating(event,i)
        })
    })
}

