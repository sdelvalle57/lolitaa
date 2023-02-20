import { PureComponent, ReactNode } from "react";

interface ComprarProperties {
    numero: number
}

class Comprar extends PureComponent<ComprarProperties> {
    render(): ReactNode {
        return <div>Comprar {this.props.numero}</div>
    }
}

class Vender extends PureComponent {
    render(): ReactNode {
        return <div>Vender</div>
    }
}

export {Comprar, Vender}