# Homework Week 1

```
Topics discussed in class this week:
• Capturing user input
• Events
• Basic DOM manipulations (img src, innerHTML)
• Code debugging using the browser
• Code commenting
• Structuring code files
• Code formatting
• Handing in homework via PR
```

>[Here](/Week2/README.md) you find the readings you have to complete before the second lecture.

## Step 0: Make a small dance
Give yourself (or your neighbor) a little tap on the shoulder, you've made it to JS2! :muscle:


## Step 1: Implement feedback

_Deadline Monday_

Your fellow students and teachers have provided you with feedback on your last JavaScript1 homework in Trello.

- Implement both feedback from Trello and Github.
- Check on one of your fellow students code and issues and see if her or she implemented their feedback correctly. If there are some things that can be improved make an issue suggesting further improvements. If you think that the feedback has been implemented correctly create a issue saying something like: "nice work you can clear your issues".

## Step 2: Custom IMDB scraper

_Deadline Saturday_

> **Preparation**: Open this link and accept the assignment: <https://classroom.github.com/a/_Ei0SDeE>. This will create your own repo where you can commit in.

Your goal is to parse the page `index.html` and print the name of each actor and their role in the console. Because there is a lot of noise in the console from scripts that fail to load, we will only print the names [on key press](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent).

**2.1** Review the code for the [web scraper](https://github.com/HackYourFutureBelgium/JavaScript2/tree/master/Projects/web-scraper). Note that we first select the correct `table` element. Then, for each row in the table, we extract the actor and their character role. Then we print both to the console.

**2.2** Now it's up to you! Clone your custom repository to your local computer:

    git clone https://github.com/HackYourFutureBelgium/javascript-2-scraper-YOUR_NAME_HERE.git

Replace `YOUR_NAME_HERE` with your GitHub username.

**2.3** Open `index.html` in your browser and edit `scrape.js`. First, try a simple `console.log('hello')` to check if everything's working. Then, start adapting the code from the scraper we built in class. Print out the result of `document.querySelector` to check if you've selected the table correctly.

**2.4** If you get stuck, refer to the original code.


## Step 3: (Optional) Custom DOM manipulation challenge :mortar_board:

_This is an optional assignment that will set you up for next week! If you still feel unsure about the DOM, this is an excellent introduction._

> **Preparation**: Fork this repository and use the [Homework Pull Request Workflow](../../../../fundamentals/blob/master/fundamentals/homework_pr.md) to hand in your homework.

Modify the (mostly empty) files in the `Week1/homework` folder for this step.

**3.1** Open the `apps.js` and start by declaring an array that contains 10 strings. These strings should be of book titles you have read (or made up) and be lowercase without spaces so that you can use these later as HTML `id` attributes. (Example: _Harry Potter's - The Chamber of Secrets_ -> `harry_potter_chamber_secrets`). Add a console.log statement to output this array to console. (This is for debugging and making sure everything is in order. Delete it later when you're done :))

**3.2** Open the empty `index.html` and add the required HTML to load the `app.js` file. Open `index.html` in the browser and confirm that the `console.log` statement shows the array. (Open the Chrome Developer Tools and inspect the console.)

**3.3** Remove the temporary `console.log` from step 3.1. Make a function (or functions) that generate a `ul` with `li` elements for each book ID in the array using a `for` loop. Make sure that the function names you choose are an accurate reflection of what they do. As a reminder, here are the recommended [Naming Conventions](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/naming_conventions.md).

**3.4** Make an object (_not an array!_) containing information for each book. Each property of this object should be another (i.e., nested) object with the book ID you thought up in step 3.1 as a key, and at least the following properties: `title`, `language` and `author`.

**3.5** Now change the function from step 3.3 that you used to display the book ID's in a list to take the actual information about the book from the object and display that. Make sure you choose the correct HTML elements for each piece of info, for instance, a heading for the title.

**3.6** Beautify your html page with css (use the `style.css` file for that), add sources and alts to each of the images.

**3.7** Find and download book covers for each book and construct a new object which has as keys the book IDs again, and as value the path to the image source (e.g. `{ harry_potter_blabla: './img/harry_potter_blabla.jpg', ... }`).

Loop over these entries (_hint: `Object.keys(objectName)` gives you an array containing the keys_). Then write a function which places an image at the corresponding `li` element. Remember that objects are not ordered, so you cannot guarantee that the first key is the first `li` element. (_Hint: you could give each `li` item an `id` tag by modifying the function you made before._)


### How to hand in your homework:

Go over your homework one last time:

- Does every file run without errors and with the correct results when you run them with Node?
- Does every file start with `'use strict';`?
- Have you used `const` and `let` and avoided `var`?
- Do the variable, function and argument names you created follow the [Naming Conventions](../../../../fundamentals/blob/master/fundamentals/naming_conventions.md)?
- Is your code well-formatted (see [Code Formatting](../../../../fundamentals/blob/master/fundamentals/naming_conventions.md))?
- Have you resolved all issues flagged by ESLint and the spell checker (no wavy red and green underlines in VSCode)?

If the answer is 'yes' to all preceding questions you are ready to commit and push your repo. This is a GitHub classroom assignment so we will automatically see your changes if you push them to your repo.

## Step 4: Read before next lecture

_Deadline Sunday morning_

Make sure you have read [The Document Object Model](http://eloquentjavascript.net/14_dom.html) and [Handling Events](http://eloquentjavascript.net/15_event.html) from Eloquent JavaScript!

Go trough the reading material in the [README.md](/Week2/README.md) to prepare for your next class.

## :boom: Bonus homework — JavaScript Drum kit :boom:
the Bonus homework for this week (for those of you want an extra challenge) do the following:

- Sign up for Wes Bos's excellent [JavaScript 30](https://javascript30.com/) website — a video course where he creates 30 projects using JavaScript. This is a great place to continue rehearsing what you learned!
- Enter your email address on the website. You should get an invitation link.
- Once you're in, download the [starter files](https://github.com/wesbos/JavaScript30).
- Watch and complete the "Getting Setup" and "JavaScript Drum Kit" videos.

Have fun!
