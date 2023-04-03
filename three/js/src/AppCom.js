class AppCom extends Component {
    constructor (params){
        super(params);
        this.menu = new MenuCom({
            id: 'menu',
            parent: this.id,
            template: template.Menu
        });

        this.graph3D = new Graph3DCom({
            id: 'graph3D',
            parent: this.id,
            template: template.Graph3D,
        })
    }
}
