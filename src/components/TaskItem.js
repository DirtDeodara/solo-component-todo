import Component from './Component.js';

class TaskItem extends Component {
    render() {
        const taskItem = this.renderDOM();
        const onRemove = this.props.onRemove;
        const onUpdate = this.props.onUpdate;
        const task = this.props.task;
        
        const removeButton = taskItem.querySelector('button');
        const completedButton = taskItem.querySelector('input');

        removeButton.addEventListener('click', () => {
            onRemove(task);
        
        });

        completedButton.addEventListener('click', () => {
            onUpdate(task);
        });

        return taskItem;

    }   

    renderTemplate() {
        let checked = '';

        if(this.props.task.completed) {
            checked = 'checked';
        }
        const task = this.props.task;
        return /*html*/ `
        <li id="list-item">
            <p>${task.task}</p>
            <label id="completedText">Done</label>
            <input  class="checkbox" type="checkbox" name="completed" ${checked}>
            <button class="remove-button">❌</button>
        </li>
        `;
    }
}

export default TaskItem;