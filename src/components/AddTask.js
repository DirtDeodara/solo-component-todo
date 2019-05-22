import Component from './Component.js';

class AddTask extends Component {

    render() {
        const form = this.renderDOM();
        const onAdd = this.props.onAdd;

        form.addEventListener('submit', event => {
            event.preventDefault();

            const formData = new FormData(form);

            const newTask = {
                task: formData.get('task'),
            };

            onAdd(newTask);

            form.reset();
            document.activeElement.blur();
        });

        return form;

    }

    renderTemplate() {
        return /*html*/ `
            <form class="add-task">
                <label>Task: <input name="task"></label>
                <button>Add Task</button>
            </form>
        `;
    }


}

export default AddTask;