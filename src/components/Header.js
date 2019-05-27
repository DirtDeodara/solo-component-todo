import Component from './Component.js';

class Header extends Component {
    renderTemplate() {
        return /*html*/` 
            <h1 id="header">To-Do List</h1>
        `;
    }
}

export default Header;