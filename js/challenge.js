const counter = document.getElementById('counter')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const likeList = document.querySelector('ul')
const heart = document.getElementById('heart')


let count = 0;
const timer = setInterval(increase, 1000);
function increase() {
    counter.innerText = count;
    count++;
};

minus.addEventListener('click', function(e) {
    count--;
});
plus.addEventListener('click', function(e) {
    count++;
});

heart.addEventListener('click', function(e) {
    let number = count
    let listId = document.getElementById(number)
    if (listId){
        let stringArray = listId.innerText.split(" ");
        let likeCount = parseInt(stringArray[4])
        likeCount ++
        listId.innerText = `${number} has been liked ${likeCount} times`
    }else{
        let newList = document.createElement('li');
        newList.setAttribute("id", `${number}`);
        newList.innerHTML = `${number} has been liked 1 time`
        likeList.appendChild(newList);
    }  
})

