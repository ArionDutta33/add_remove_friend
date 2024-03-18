let isStatus = document.querySelector("h5")
let addFriend = document.querySelector("#add")
let btn = document.querySelector("button")
// let removeFriend = document.querySelector("#remove")







let check = 0;
addFriend.addEventListener("click", function () {
    if (check == 0) {
        isStatus.innerHTML = "Friends"
        isStatus.style.color = "green"
        btn.innerHTML = "Remove Friend"
        check = 1
    }
    else {
        isStatus.innerHTML = "Strangers"
        isStatus.style.color = "red"
        btn.innerHTML = "Add Friend"
        check = 0
    }
})









// removeFriend.addEventListener("click", function () {
//     isStatus.innerHTML = "Stranger"
//     isStatus.style.color = "red"
// }) 