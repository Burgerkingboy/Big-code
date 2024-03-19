const textfield = document.getElementById("textfield")

function checkPalindrome() {
    const value = textfield.value;
    const reverse = reverseString(value);

    if (value === reverse){
        alert("Thats a palindrome lil buddy")
    }else{
        alert("uh oh lil buddy thats not a palindrome oil up👿")

    }
}

function reverseString (String){
    return String.split("").reverse().join("");
}