
const is_equel = (num1, num2) => {
    if (num1 == num2 ) {
        return true
    }
    return false
}

const is_bigger = (num1, num2) => {
    if (num1 > num2 ) {
        return true
    }
    return false
}

module.exports = {
    
    is_equel, is_bigger
   
}