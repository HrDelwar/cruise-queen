// cruise queen ticket count handler
function handleTicketCount(item, isIncrease) {
    const ticketCount = getStringToNum(item);// store current ticket count
    let ticketNewCount = ticketCount;
    console.log(typeof (ticketCount));
    if (isIncrease) {
        ticketNewCount = ticketCount + 1;
    } else {
        if (ticketNewCount > 0) {
            ticketNewCount = ticketCount - 1;
        }
    }
    getId(item + '-count').value = ticketNewCount;//display how much ticket you want to buy

    calculateAmount(); // calculate all type amount
}

//calculate all type amount
function calculateAmount() {
    const firstClassAmount = getTotalAmount('firstClass');// store total first class amount 
    const economyAmount = getTotalAmount('economy');// store total economy amount

    const subTotalAmount = firstClassAmount + economyAmount;//calculate subtotal amount
    getId('subtotal-amount').innerText = subTotalAmount;// display subtotal amount

    const vatAmount = subTotalAmount * 0.1;// charge for 10% vat
    getId('vat-amount').innerText = vatAmount;//display vet

    const totalAmount = subTotalAmount + vatAmount;//calculate total amount
    getId('total-amount').innerText = totalAmount;// display total amount
}

// get total amount
function getTotalAmount(item) {
    const ticketCount = getStringToNum(item);
    let ticketAmount = 0;
    if (item == 'firstClass') {
        ticketAmount = ticketCount * 150;
    } else {
        ticketAmount = ticketCount * 100;
    }
    return ticketAmount;
}

//get number from string 
function getStringToNum(string) {
    let inputId = getId(string + '-count');

    // set input value 0 when value is empty
    if (inputId.value == "") {
        inputId.value = "0";
    }
    return parseInt(inputId.value);
}

//onload function for clear catch
function clearCatch() {
    getId('firstClass-count').value = "0";
    getId('economy-count').value = "0";
}

function bookNow() {
    // display traveling place
    getId('display-from').innerText = getId('traveling-from').value;
    getId('display-to').innerText = getId('traveling-to').value;

    // display traveling date
    getId('display-departure-date').innerText = getId('departure').value;
    getId('display-return-date').innerText = getId('return').value;

    //display first class information
    getId('firsts-class').innerText = getId('firstClass-count').value
    getId('fist-class-price').innerText = getId('firstClass-count').value * 150;

    // display economy information
    getId('economy-class').innerText = getId('economy-count').value;
    getId('economy-class-price').innerText = getId('economy-count').value * 100;

    // display subtotal information
    getId('subtotal-price').innerText = getId('subtotal-amount').innerText;

    // display vat information
    getId('vat').innerText = getId('vat-amount').innerText;

    // display total information
    getId('total-count').innerText = parseInt(getId('firstClass-count').value) + parseInt(getId('economy-count').value);
    getId('total-price').innerText = getId('total-amount').innerText;
}

// get element id 
function getId(id) {
    return document.getElementById(id);
}