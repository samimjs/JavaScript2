## Homework Week 2

```
Topics discussed this week:
• Functions
• Creating (nested) elements in the DOM
• Array Manipulations
• Higher-order functions: find
• Arrow functions (a bit)
```

>[Here](/Week3/README.md) you find the readings you have to complete before the third lecture.

## Step 1: Space game: recreating what we saw in class

_Deadline Tuesday_ 

At the end of the lesson, we let the spaceship move using our `keyup` and `keydown` handlers. Your code still has `keypress` handler. Change the code according to [step 2](/Projects/space-game/step02) of the space-game project.

## Step 2: Todo app: Updating items left

_Deadline Thursday_

Our todo app can mark items as completed. In the bottom left corner is a `div` that shows how many items we haven't completed. Let's try filling that in.

**2.1** Look at the [working version](http://todomvc.com/examples/vanillajs/) (this is just to see the functionality, the code is quite different). Note that we only show items that we _haven't_ completed. As soon as we complete an item, the list count decreases. So we have to find a way to _filter_ all todo items based on whether they are done or not. 
**2.1** This functionality should come at the end of the `update` function. 
**2.2** Read up on the [filter function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) and [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
**2.3** If you get stuck, `filter` and arrow functions are also explained in the [JavaScript 30](https://javascript30.com/) "Array Cardio Day 1" video.
**2.4** The correct spelling is "0 item*s*", "1 item", "2 item*s*", ... Could we make a function that takes a word and a count and "pluralizes" it? Note that it doesn't need to know the rules to make the plural of every english word (like mouse --> mice), just item --> items.

## Step 3: Todo app: Deleting items

_Deadline Saturday_

We should be able to push the "destroy" button to delete an item.

**3.1** This is similar to the "toggle todo" functionality. Except that instead of changing an element, we want to remove an element.
**3.2** We can use `filter` on the entire list of `TODOS` to remove items whose id is equal to the one we "bound" to the event listener. (again, look at how we implemented the event listener for toggling todo items).
**3.3** Don't forget to call the `update` function in your `onDeleteItem` function!

## Step 4: (Optional) Todo app: Clearing completed items

Once we completed some items, we can show a button called "clear completed" (invisible by default) to remove all items that we have completed.

**4.1** In our update function, get the list of completed items (hint: use `filter` to filter on items that are `done`). Count the number of items in that list. If it's bigger than zero, show the `.clear-completed` button, otherwise hide it.
**4.2** Add an event listener add the very end of our file on the `.clear-completed` button that reacts to a `click` event. Make it call a function that you create.
**4.3** In that function, use `filter` on the entire list of `TODOS` to remove completed items.
**4.4** Don't forget to call the `update` function at the end of the function!

## Step 5: Read before next lecture

_Deadline Sunday morning_

Go trough the reading material in the [README.md](/Week3/README.md) to prepare for your next class


## How to hand in your homework:

You should have the repo for the todo list app already. Otherwise, see the link on Slack in the `#class1` channel. Just commit your changes and push: we will see them in our dashboard.

Before committing, go over your homework one last time:

- Does every file run without errors in the console?
- Have you used `const` and `let` and avoided `var`?
- Do the variable, function and argument names you created follow the [Naming Conventions](../../../../fundamentals/blob/master/fundamentals/naming_conventions.md)?
- Is your code well-formatted (see [Code Formatting](../../../../fundamentals/blob/master/fundamentals/naming_conventions.md))?
- Have you resolved all issues flagged by ESLint and the spell checker (no wavy red and green underlines in VSCode)?

If the answer is 'yes' you're ready to commit and push!
