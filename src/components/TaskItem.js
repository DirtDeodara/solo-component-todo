import Component from './Component.js';

class TaskItem extends Component {
    render() {
        const taskItem = this.renderDOM();
        const onRemove = this.props.onRemove;
        const task = this.props.task;
        const removeButton = taskItem.querySelector('button');

        removeButton.addEventListener('click', () => {
            onRemove(task);
        });

        return taskItem;

    }   

    renderTemplate() {
        const task = this.props.task;
        return /*html*/ `
        <li>
            <p>${task.task}</p>
            <input class="checkbox" type="checkbox" name="completed">
            <button class="remove-button"><img src="../../assets/remove.png" alt=""></button>
        </li>
        `;
    }
}

export default TaskItem;