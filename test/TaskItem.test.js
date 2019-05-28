import TaskItem from '../src/components/TaskItem.js';

const test = QUnit.test;

QUnit.module('Task Test');

test('Task html is correct', assert => {
    // arrange
    const task = {
        task: 'Create a static example of your todo list',
        completed: true
    };
    let checked = '';

    if(task.completed) {
        checked = 'checked';
    }
    const expected = /*html*/ `
    <li id="list-item">
        <p>${task.task}</p>
        <label id="completedText">Done</label>
        <input class="checkbox" type="checkbox" name="completed" ${checked}>
        <button class="remove-button">⊗</button>
    </li>
    `;
    
    // act
    const taskItem = new TaskItem({ task });
    const html = taskItem.renderTemplate();
    // assert
    assert.htmlEqual(html, expected);
});