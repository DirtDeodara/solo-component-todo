import Component from './Component.js';

class Filter extends Component {
    
    render() {
        const dom = this.renderDOM();
        const form = dom.querySelector('form');
        const input = dom.querySelector('#text');
        form.addEventListener('input', () => {
            const completed = form.elements['radio'].value;
            this.props.onFilter({
                text: input.value,
                completed: completed
            });
        });
        return dom;
    }

    renderTemplate() {
        return /*html*/ `
        <section>
            <form id="form" class="filter-form">

                <input id="text" type="text" class="filter" name="task-filter" placeholder="Search for a task">

                <div>
                    <input type="radio" class="filter" name="radio" value="all" checked>
                    <label>All Tasks</label>
                </div>
                <div>
                    <input type="radio" class="filter" name="radio" value="true" >
                    <label>Completed Tasks</label>
                </div>
                <div>
                    <input type="radio" class="filter" name="radio" value="false" >
                    <label>Not Completed</label>
                </div>
            </form>
        </section>
        `;
    }
}

export default Filter;