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
        <li>
            <p>${task.task}</p>
            <input id="checkbox" class="checkbox" type="checkbox" name="completed" ${checked}>
            <button class="remove-button"><img src="../../assets/remove.png" alt=""></button>
        </li>
        `;
    }
}

export default TaskItem;