
function calcTip(bill) {
    if (bill >= 50 || bill <= 300) {
        return (0.15 * bill);
    } else {
        return (0.20 * bill);
    }
}

console.log(calcTip(56));
