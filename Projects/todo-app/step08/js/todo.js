let TODOS = [
];
let FILTER = 'all';
let EDITING_ID = null;

function makePlural(word, count) {
    if (count === 1) {
        return word;
    } else {
        return word + 's';
    }
}

function update() {
    const $todoList = document.querySelector('.todo-list');
    $todoList.innerHTML = '';
    let filteredTodos;
    if (FILTER === 'all') {
        filteredTodos = TODOS;
    } else if (FILTER === 'active') {
        filteredTodos = TODOS.filter(todo => !todo.done);
    } else if (FILTER === 'completed') {
        filteredTodos = TODOS.filter(todo => todo.done);
    }
    filteredTodos.forEach(({id, title, done}) => {
        const $li = document.createElement('li');
        $li.dataset.id = id;
        $li.addEventListener('dblclick', onStartEditing.bind(null, id));
        if (EDITING_ID === id) {
            $li.classList.add('editing');
        }
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
        $button.addEventListener('click', onDeleteTodo.bind(null, id));
        $li.appendChild($button);

        // Input field
        if (EDITING_ID === id) {
            const $input = document.createElement('input');
            $input.setAttribute('class', 'edit');
            $input.addEventListener('change', onCommitEditing.bind(null, id));
            $input.addEventListener('blur', onCancelEditing.bind(null, id));
            $li.appendChild($input);
            $input.value = title;
            $input.focus();
        }
    });

    if (TODOS.length === 0) {
        document.querySelector('.main').style.display = 'none';
    } else {
        document.querySelector('.main').style.display = 'block';
    }
    const activeTodos = TODOS.filter(todo => !todo.done);
    document.querySelector('.todo-count').innerHTML = `${activeTodos.length} ${makePlural('item', activeTodos.length)} left`
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

function onDeleteTodo(id) {
    TODOS = TODOS.filter(todo => todo.id !== id);
    update();
}

function onClearCompleted() {
    TODOS = TODOS.filter(todo => !todo.done);
    update();
}

function onChangeFilter(filter, e) {
    e.preventDefault();
    Array.from(document.querySelectorAll('.filters a')).forEach(el => el.classList.remove('selected'));
    FILTER = filter;
    const filterIndex = ['all', 'active', 'completed'].indexOf(FILTER);
    document.querySelectorAll('.filters a')[filterIndex].classList.add('selected');
    update();
}

function onStartEditing(id) {
    EDITING_ID = id;
    update();
}

function onCommitEditing(id, e) {
    const item = TODOS.find(todo => todo.id === id);
    item.title = e.target.value.trim();
    EDITING_ID = null;
    update();
}

function onCancelEditing(id) {
    EDITING_ID = null;
    update();
}

const $newTodo = document.querySelector('.new-todo');
$newTodo.addEventListener('change', onNewTodo);
const $clearCompleted = document.querySelector('.clear-completed');
$clearCompleted.addEventListener('click', onClearCompleted);
const $filterAll = document.querySelectorAll('.filters a')[0];
const $filterActive = document.querySelectorAll('.filters a')[1];
const $filterCompleted = document.querySelectorAll('.filters a')[2];
$filterAll.addEventListener('click', onChangeFilter.bind(null, 'all'));
$filterActive.addEventListener('click', onChangeFilter.bind(null, 'active'));
$filterCompleted.addEventListener('click', onChangeFilter.bind(null, 'completed'));
update();
