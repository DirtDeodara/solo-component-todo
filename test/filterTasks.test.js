import filterTasks from '../src/filterTasks.js';
const test = QUnit.test;

QUnit.module('filter');

const tasks = [
    {
        task: 'Create a static example of your todo list',
        completed: false
    },
    {
        task: 'tdd your template function',
        completed: false
    },
    {
        task: 'Replace static data with dynamically driven data',
        completed: false
    }
];

test('filters a task name', assert => {
    // arrange
    const filter = {
        text: 'tdd'
    };
    
    // act
    const filtered = filterTasks(tasks, filter);
    
    // assert
    assert.deepEqual(filtered, [{
        task: 'tdd your template function',
        completed: false
    }]);
});

test('test that uppercase gets turned into lower case', assert => {
    // arrange
    const filter = {
        text: 'TDD'
    };

    // act
    const filtered = filterTasks(tasks, filter);

    // assert
    assert.deepEqual(filtered, [{
        task: 'tdd your template function',
        completed: false
    }]);
});

test('no text input returns all tasks', assert => {
   // arrange
    const filter = {
        text: ''
    };
    // act
    const filtered = filterTasks(tasks, filter);

    // assert
    assert.deepEqual(filtered, [{
        task: 'Create a static example of your todo list',
        completed: false
    },
    {
        task: 'tdd your template function',
        completed: false
    },
    {
        task: 'Replace static data with dynamically driven data',
        completed: false
    }]);
});