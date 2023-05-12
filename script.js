// Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.

function multiple_of(num){
    if (num % 100 == 0){
        return true
    }
    else{
        return false
    }
}

console.log(multiple_of(124))