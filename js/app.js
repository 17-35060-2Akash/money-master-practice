function getPin() {
    const pin = genaratePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

function genaratePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
    console.log(pin);
});

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typedNumbersField = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number === 'C') {
            typedNumbersField.value = '';
        }
        else if (number === '<') {
            const currentString = typedNumbersField.value;
            let a = currentString.split('');
            a.pop();
            a = a.join('');
            typedNumbersField.value = a;
        }

    }
    else {

        typedNumbersField.value += number;
    }
});

document.getElementById('btn-submit').addEventListener('click', function () {
    const pinSuccessMessage = document.getElementById('pin-success');
    const pinUnSuccessMessage = document.getElementById('pin-unsuccess');
    if (document.getElementById('display-pin').value === document.getElementById('typed-numbers').value) {
        pinSuccessMessage.style.display = 'block';
        pinUnSuccessMessage.style.display = 'none';

    }
    else {
        pinSuccessMessage.style.display = 'none';
        pinUnSuccessMessage.style.display = 'block';

    }
});