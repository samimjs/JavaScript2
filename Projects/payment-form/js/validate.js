const VISA_REG_EX = /^(4[0-9]{15})$/;

function onChangeEmailField(e) {
    const $field = e.target;
    const $parent = $field.parentElement;
    const $error = $parent.querySelector('.error');
    const value = $field.value;
    const isValid = value.includes('@');
    if (isValid) {
        $parent.classList.remove('invalid');
        $error.innerHTML = '';
    } else {
        $parent.classList.add('invalid');
        $error.innerHTML = 'Email address is not valid.';
    }
}

function onChangeCardField(e) {
    const $field = e.target;
    const $parent = $field.parentElement;
    const $error = $parent.querySelector('.error');
    let value = $field.value;
    value = value.replace(/\s/g, '');
    const isValid = VISA_REG_EX.test(value);
    if (isValid) {
        $parent.classList.remove('invalid');
        $error.innerHTML = '';
    } else {
        $parent.classList.add('invalid');
        $error.innerHTML = 'Your card number is invalid.';
    }
}

function onInputCardField(e) {
    const $field = e.target;
    let value = $field.value;
    value = value.replace(/[^0-9]+/g, '');
    value = value.replace(/(.{4})/g, '$1 ');
    value = value.trim();
    $field.value = value;
}

document.querySelector('#email-field').addEventListener('change', onChangeEmailField);
document.querySelector('#card-field').addEventListener('change', onChangeCardField);
document.querySelector('#card-field').addEventListener('input', onInputCardField);
