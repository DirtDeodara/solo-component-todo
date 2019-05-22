import Component from '../components/Component.js';

class TaskItem extends Component {
    render() {
        const taskItem = this.renderDOM();

        return taskItem;
    }   

    


    renderTemplate() {
        const task = this.props.task;
        return /*html*/ `
        <li>
            <p>${task.task}</p>
            <input class="checkbox" type="checkbox" name="completed" checked>
        </li>
        `;
    }
}

export default TaskItem;