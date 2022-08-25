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
    //validating card name
    let cardHolderName = cardName.value;
    const nameErr = document.querySelector('.nameerr');

    if (cardHolderName.trim() == null || cardHolderName.trim() == "" || cardHolderName.trim() == " ") {
        nameErr.innerHTML = "Field can't be blank"
    } else {
        const regex = /^[a-zA-Z\s]+$/;
        if (regex.test(cardHolderName) == false) {
            nameErr.innerHTML = "Wrong format, alphabets only"
        } else {
            if (cardHolderName.length < 3) {
                nameErr.innerHTML = "Field should be at least 3 characters"
            } else {
                nameErr.innerHTML = ""
            }
        }
    }

    //Card number validation
    let cardNumberInfo = cardNumber.value;
    let cardErr = document.querySelector('.carderr');
    if (cardNumberInfo.trim() == null || cardNumberInfo.trim() == "" || cardNumberInfo.trim() == " ") {
        cardErr.innerHTML = "Field can't be blank"
    } else {
        const regex = /^\d{12}$/;
        if (regex.test(cardNumberInfo) == false) {
            cardErr.innerHTML = "Wrong format, 12 digit numbers only"
        } else {
            if (cardName.length < 3) {
                cardErr.innerHTML = "Field should be at least 3 characters"
            } else {
                cardErr.innerHTML = ""
            }
        }
    }

    //Expire fields validation
    let monthlyExpire = expireMonth.value;
    let monthErr = document.querySelector('.montherr');
    if (monthlyExpire.trim() == null || monthlyExpire.trim() == "" || monthlyExpire.trim() == " ") {
        monthErr.innerHTML = "Field can't be blank"
    } else {
        const regex = /^[0-9\s]+$/;
        if (regex.test(monthlyExpire) == false) {
            monthErr.innerHTML = "Wrong format, numbers only"
        } else {
            monthErr.innerHTML = ""
        }
    }

    let yearlyExpire = expireYear.value;
    let yearErr = document.querySelector('.yearerr');
    if (yearlyExpire.trim() == null || yearlyExpire.trim() == "" || yearlyExpire.trim() == " ") {
        yearErr.innerHTML = "Field can't be blank"
    } else {
        const regex = /^[0-9\s]+$/;
        if (regex.test(yearlyExpire) == false) {
            yearErr.innerHTML = "Wrong format, numbers only"
        } else {
            yearErr.innerHTML = ""
        }
    }

    //Cvc field validation
    let cvcExpire = cvc.value;
    let cvcErr = document.querySelector('.cvcerr');
    if (cvcExpire.trim() == null || cvcExpire.trim() == "" || cvcExpire.trim() == " ") {
        cvcErr.innerHTML = "Field can't be blank"
    } else {
        const regex = /^[0-9\s]+$/;
        if (regex.test(cvcExpire) == false) {
            cvcErr.innerHTML = "Wrong format, numbers only"
        } else {
            cvcErr.innerHTML = ""
        }
    }

}



