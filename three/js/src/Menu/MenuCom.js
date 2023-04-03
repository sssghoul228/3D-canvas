class MenuCom extends Component {
    addEventListeners() {
        const buttons = document.querySelectorAll('.mainMenuButton');
        buttons.forEach(button =>
            button.addEventListener('click', (event) =>
                this.callbacks.showMenuItem(event.target.dataset.item))
        )
    }
}