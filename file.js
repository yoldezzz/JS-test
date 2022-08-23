const buttonsplus = document.querySelectorAll(".plus");
const buttonsminus = document.querySelectorAll(".minus");
const quantityofart = document.querySelectorAll(".x");
const btdelete = document.querySelectorAll(".delete");
const card = document.querySelectorAll(".card");
const price = document.querySelectorAll(".price");
const sum = document.querySelector(".sum");
const likeBtn = document.querySelectorAll(".like__btn");
console.log(likeBtn);
const likeIcon = document.querySelectorAll(".icon");
console.log(likeIcon);

console.log("buttonsminus");
for (let i = 0; i < buttonsplus.length; i++) {
  buttonsplus[i].addEventListener("click", function () {
    quantityofart[i].innerHTML++;
    alert("yala");
    sum.innerHTML = parseInt(sum.innerHTML) + parseInt(price[i].innerHTML);
  });
}
for (let i = 0; i < buttonsminus.length; i++) {
  buttonsminus[i].addEventListener("click", function () {
    if (quantityofart[i].innerHTML > 0 && sum.innerHTML > 0) {
      quantityofart[i].innerHTML--;
      sum.innerHTML = parseInt(sum.innerHTML) - parseInt(price[i].innerHTML);
    }
  });
}
for (let i = 0; i < btdelete.length; i++) {
  btdelete[i].addEventListener("click", function () {
    card[i].remove();
    sum.innerHTML = parseInt(sum.innerHTML) - parseInt(price[i].innerHTML);
  });
}

let clicked = false;
for (let i = 0; i < likeBtn.length; i++) {
  likeBtn[i].addEventListener("click", function () {
    if (!clicked) {
      clicked = true;
      likeIcon[i].innerHTML = `<i class="fas fa-thumbs-up"></i>`;
    } else {
      clicked = false;
      likeIcon[i].innerHTML = `<i class="far fa-thumbs-up"></i>`;
    }
  });
}
