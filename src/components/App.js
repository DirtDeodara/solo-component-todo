import Component from './Component.js';
import Header from './Header.js';
import ToDoList from './ToDoList.js';
import tasks from '../../data/tasks.js';
import AddTask from '../components/AddTask.js';


class App extends Component {

    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const addTask = new AddTask ({
            onAdd: (newTask) => {
                tasks.unshift(newTask);
                toDoList.update({ tasks });
            }
        });
        const addTaskDOM = addTask.render();
        main.appendChild(addTaskDOM);
        
        const toDoList = new ToDoList({ 
            tasks,
            onRemove: (taskToRemove) => {
                const index = tasks.indexOf(taskToRemove);
                tasks.splice(index, 1);

                toDoList.update({ tasks });
            }
        });

        
        const toDoListDOM = toDoList.render();
        main.appendChild(toDoListDOM);

        return dom;
    }



    renderTemplate() {
        return /*html*/`
            <div>
                <main>
                  
                </main>
            </div>
        `;
    }
}

export default App;