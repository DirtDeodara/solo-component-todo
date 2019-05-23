import Component from './Component.js';

class Filter extends Component {
    
    render() {
        const dom = this.renderDOM();
        const input = dom.querySelector('input');
        input.addEventListener('input', () => {
            this.props.onFilter({
                text: input.value
            });
        });
        return dom;
    }
    renderTemplate() {
        return /*html*/ `
        <section class="filter-section">
            <input class="filter" name="task-filter" placeholder="Search for a task">
            <div>
                <input type="radio" class="filter" name="all">
                <label>All Tasks</label>
            </div>
            <div>
                <input type="radio" class="filter" name="completed">
                <label>Completed Tasks</label>
            </div>
            <div>
                <input type="radio" class="filter" name="not-completed">
                <label>Not Completed</label>
            </div>
        </section>
        `;
    }
}

export default Filter;