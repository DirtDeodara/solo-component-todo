import TaskItem from '../src/components/TaskItem.js';

const test = QUnit.test;

QUnit.module('Task Test');

test('Task html is correct', assert => {
    // arrange
    const task = {
        task: 'Create a static example of your todo list',
        completed: true
    };
    const expected = /*html*/ `
    <li>
        <p>${task.task}</p>
        <input class="checkbox" type="checkbox" name="completed" checked>
    </li>
    `;
    
    // act
    const taskItem = new TaskItem({ task });
    const html = taskItem.renderTemplate();
    // assert
    assert.htmlEqual(html, expected);
});