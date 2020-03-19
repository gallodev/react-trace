import React, {Component} from 'react';

function PureComponent() {        
    return (
        <div>
            Teste pure component
        </div>
    )
}

const ConstComponent = props => <div> Teste const component </div>;

class ClassComponent extends Component {
    render() {
        return (
            <div>
                Teste class component
            </div>
        )
    }
}

export {
    PureComponent,
    ConstComponent,
    ClassComponent
};