let TODOS = [
];

function update() {
    const $todoList = document.querySelector('.todo-list');
    $todoList.innerHTML = '';
    TODOS.forEach(({id, title, done}) => {
        const $li = document.createElement('li');
        $li.dataset.id = id;
        $todoList.appendChild($li);

        // Toggle button
        const $toggle = document.createElement('input');
        $toggle.setAttribute('class', 'toggle');
        $toggle.setAttribute('type', 'checkbox');
        if (done) {
            $toggle.setAttribute('checked', 'checked');
        }
        $toggle.addEventListener('change', onToggleTodo.bind(null, id));
        $li.appendChild($toggle);

        // Label
        const $label = document.createElement('label');
        $label.innerHTML = title;
        $li.appendChild($label);

        // Delete button
        const $button = document.createElement('button');
        $button.setAttribute('class', 'destroy');
        $li.appendChild($button);
    });

    if (TODOS.length === 0) {
        document.querySelector('.main').style.display = 'none';
    } else {
        document.querySelector('.main').style.display = 'block';
    }
}

function onNewTodo(e) {
    const title = e.target.value.trim();
    TODOS.push({id: Date.now(), title, done: false});
    update();
    e.target.value = '';
}

function onToggleTodo(id) {
    const item = TODOS.find(todo => todo.id === id);
    item.done = !item.done;
    update();
}

const $newTodo = document.querySelector('.new-todo');
$newTodo.addEventListener('change', onNewTodo);
update();
