import Component from './Component.js';
import TaskItem from './TaskItem.js';

class ToDoList extends Component {

    render() {
        const list = this.renderDOM();
        const tasks = this.props.tasks;
        const onRemove = this.props.onRemove;

        tasks.forEach(task => {
            const taskItem = new TaskItem({ task, onRemove });
            const taskItemDOM = taskItem.render();
            list.appendChild(taskItemDOM);
        });
        return list;
    }

    renderTemplate() {
        return /*html*/ `
            <ul id="tasks"></ul>
        `;
    }

}

export default ToDoList;