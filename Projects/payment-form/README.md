## Payment Form

This payment form shows you the basics of form processing and DOM manipulation. It includes code to react to user input (key events), and change DOM elements based on the input (in this case, we check if the form elements are valid or not).

![Screenshot](https://raw.githubusercontent.com/HackYourFutureBelgium/JavaScript2/master/Projects/payment-form/screenshot.png)

[Live Demo](https://rawgit.com/HackYourFutureBelgium/JavaScript2/master/Projects/payment-form/index.html)

### Email Format

Validation of email addresses is [notouriously hard](https://hackernoon.com/the-100-correct-way-to-validate-email-addresses-7c4818f24643). Here we just check whether the email address contains a "@" sign.

### Credit Card Format

The formats for credit cards is simplified. We only accept VISA cards, which start with the number 4 and contain 4 blocks of 4 numbers. Users don't need to input spaces, we do that for them.

We use [regular expressions](https://en.wikipedia.org/wiki/Regular_expression) to filter and remove text. Regular expressions are not the scope of these lessons, but you can find more information in the context of JavaScript here: [Regular Expressions · MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions).

On **input** (so whenever the user presses a character) we immediately filter what the user typed. We remove everything that is not a digit. Then we replace every four characters with those four characters and a space.

On **change** (whenever the user is done with the input field) we check the input. We first strip out all the spaces internally, then we test it with the Visa regular expression.

### Valid / Invalid

If the input of a field is not valid we set a class `invalid` on the field's parent (the `form-field` div). To get the parent element, we get the element that triggered the event (`e.target`), then ask for its [`parentElement`](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement).

This allows us to change two things in one go:

- The `border-color` and text `color` of the field itself.
- The visibility (`opacity`) of the `error` span.

We do this by having selectors like `.form-field.invalid input` and `.form-field.invalid .error`.

We use [`innerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) to set the HTML text for the error span.
