import filterTasks from '../src/filterTasks.js';
const test = QUnit.test;

QUnit.module('filter');

const tasks = [
    {
        task: 'Create a static example of your todo list',
        completed: false
    },
    {
        task: 'TDD your template function',
        completed: false
    },
    {
        task: 'Create the filter function',
        completed: false
    },
    {
        task: 'TDD the filter function',
        completed: false
    },
    {
        task: 'Build Filter Component',
        completed: false
    },
    {
        task: 'Pass Callback from App to Filter',
        completed: false
    }
];

test('filters a task name', assert => {
    // arrange
    const filter = {
        text: 'tdd',
        completed: ''
    };
    
    // act
    const filtered = filterTasks(tasks, filter);
    console.log(filtered);

    // assert
    assert.deepEqual(filtered, [{
        task: 'TDD your template function',
        completed: false
        
    },
    {
        task: 'TDD the filter function',
        completed: false
       
    }]);
    
});

test('test that uppercase gets turned into lower case', assert => {
    // arrange
    const filter = {
        text: 'TDD',
        completed: ''
    };

    // act
    const filtered = filterTasks(tasks, filter);

    // assert
    assert.deepEqual(filtered, [{
        task: 'TDD your template function',
        completed: false
    },
    {
        task: 'TDD the filter function',
        completed: false
    }]);
});

test('no text input returns all tasks', assert => {
   // arrange
    const filter = {
        text: '',
        completed: 'all'
    };
    // act
    const filtered = filterTasks(tasks, filter);

    // assert
    assert.deepEqual(filtered, [{
        task: 'Create a static example of your todo list',
        completed: false
    },
    {
        task: 'TDD your template function',
        completed: false
    },
    {
        task: 'Create the filter function',
        completed: false
    },
    {
        task: 'TDD the filter function',
        completed: false
    },
    {
        task: 'Build Filter Component',
        completed: false
    },
    {
        task: 'Pass Callback from App to Filter',
        completed: false
    }]);
});