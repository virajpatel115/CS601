const form = document.getElementById('form');

//addEventListener used to listen to form submit.
form.addEventListener('submit', validateInputs);

function validateInputs(event) {
    event.preventDefault();

    const firstValue = form.first.value.trim();
    const lastValue = form.last.value.trim();
    const emailValue = form.email.value.trim();
    const packageValue = form.package.value.trim();

    let formValid = true;

    if(firstValue === ''){
        error(first, 'First Name cannot be blank!');
        formValid = false;
    }else if(!isValid(firstValue)){
        error(first, 'Provide valid first name! (min 2 alpha characters)');
        formValid = false;
    }else{
        success(first);
    }

    if(lastValue === ''){
        error(last, 'Last Name is required!');
        formValid = false;
    }else if(!isValid(lastValue)){
        error(last, 'Provide valid last name! (min 2 alpha characters)');
        formValid = false;
    }else{
        success(last);
    }

    if(emailValue == ''){
        error(email, 'Email is required!');
        formValid = false;
    }else {
        success(email);
    }

    if(packageValue === "Option") {
        error(package, 'Please select a package option from the dropdown!');
        formValid = false;
    }else{
        success(package);
    }

    if(!checkbox.checked) {
        error(checkbox, 'Checkbox must be checked to proceed!');
        formValid = false;
    }else{
        success(checkbox);
    }

    //If all validation passes, success message.
    if (formValid) {
        document.getElementById('header').style.display = 'none';
        document.getElementById('form').style.display = 'none';

        const success = document.getElementById('success');
        success.innerHTML = `"Thank you, ${firstValue} ${lastValue}, for subscribing!
        Your email ${emailValue} is registered with our ${packageValue} package.`;
        success.style.display = 'block';
    }
    
};

//Method to represent errors in validation. Written to DOM in real-time using innerHTML to change the text content of the element.
const error = (field, message) => {
    const input = field.parentElement;
    const send = input.querySelector(".message");

    input.className = 'row error';
    send.innerHTML = message;
}

//Method to represent no errors in validation.
const success = (field) => {
    const input = field.parentElement;
    input.className = 'row success';
}

//Validation method for first and last name being two alpha characters (using RegEx).
const isValid = (name) => {
    const letters = /^[a-zA-Z]{2,}$/;
    return letters.test(name);
}