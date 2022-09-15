const cardNumber = document.querySelector('.cardnumber');
const cardName = document.querySelector('.cardname');
const cvc = document.querySelector('.cvctext');
const expireMonth = document.querySelector('.expiremonth');
const expireYear = document.querySelector('.expireyear');
const button = document.querySelector('button');

//Track user input
function actionLister() {
    cardName.addEventListener('keyup', () => {
        document.querySelector('.cardnameshow').textContent = cardName.value;
    })

    cardNumber.addEventListener('keyup', () => {
        document.querySelector('.cardnumbershow').innerHTML = cardNumber.value;
    })

    cvc.addEventListener('keyup', () => {
        document.querySelector('.cvc').innerHTML = cvc.value;
    })

    expireMonth.addEventListener('keyup', () => {
        document.querySelector('.month').innerHTML = expireMonth.value;
    })

    expireYear.addEventListener('keyup', () => {
        document.querySelector('.year').innerHTML = expireYear.value;
    })
} actionLister();


//validate form
function validateForm() {
    const blankFieldMessage = "Fiedl can't be blank";
    //validating card name
    let cardHolderName = cardName.value;

    if (!cardHolderName.trim()) {
        document.querySelector('.nameerr').textContent ||= blankFieldMessage;
    } else {
        const regex = /^[a-zA-Z\s]+$/;
        if (regex.test(cardHolderName) == false) {
            document.querySelector('.nameerr').textContent ||= "Wrong format, alphabets only"
        } else {
            if (cardHolderName.length < 3) {
                document.querySelector('.nameerr').textContent ||= "Field should be at least 3 characters"
            } else {
                nameErr.innerHTML = ""
            }
        }
    }

    //Card number validation
    let cardNumberInfo = cardNumber.value;
    if (!cardNumberInfo.trim()) {
        document.querySelector('.carderr').textContent ||= blankFieldMessage;
    } else {
        const regex = /^\d{12}$/;
        if (regex.test(cardNumberInfo) == false) {
            document.querySelector('.carderr').textContent ||= "Wrong format, 12 digit numbers only"
        } else {
            if (cardName.length < 3) {
                document.querySelector('.carderr').textContent ||= "Field should be at least 3 characters"
            } else {
                cardErr.innerHTML = ""
            }
        }
    }

    //Expire fields validation
    let monthlyExpire = expireMonth.value;
    if (!monthlyExpire.trim()) {
        document.querySelector('.montherr').textContent ||= blankFieldMessage;
    } else {
        const regex = /^[0-9\s]+$/;
        if (regex.test(monthlyExpire) == false) {
            document.querySelector('.montherr').textContent ||= "Wrong format, numbers only"
        } else {
            monthErr.innerHTML = ""
        }
    }

    let yearlyExpire = expireYear.value;
    if (!yearlyExpire.trim()) {
        document.querySelector('.yearerr').textContent ||= blankFieldMessage;
    } else {
        const regex = /^[0-9\s]+$/;
        if (regex.test(yearlyExpire) == false) {
            document.querySelector('.yearerr').textContent ||= "Wrong format, numbers only"
        } else {
            yearErr.innerHTML = ""
        }
    }

    //Cvc field validation
    let cvcExpire = cvc.value;
    if (!cvcExpire.trim()) {
        document.querySelector('.cvcerr').textContent ||= blankFieldMessage;
    } else {
        const regex = /^[0-9\s]+$/;
        if (regex.test(cvcExpire) == false) {
            document.querySelector('.cvcerr').textContent ||= "Wrong format, numbers only"
        } else {
            cvcErr.innerHTML = ""
        }
    }

}



