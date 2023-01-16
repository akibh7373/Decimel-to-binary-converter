// SELECT ALL ELEMNTS
const inputNum = document.querySelector(".inputNumber");
const result = document.querySelector(".showResult");
const submit = document.querySelector(".submit");

submit.addEventListener("click", function (e) {
    e.preventDefault();
    if (inputNum.value == "") {
        result.textContent = "Please input a number!!";
    } else {
        const binaryVal = Number(inputNum.value).toString(2);
        result.textContent = binaryVal;
    }
    // console.log("he");
});
