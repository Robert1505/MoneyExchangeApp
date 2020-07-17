import React from 'react';
import './card.style.scss';

class Card extends React.Component{
    render(){
        return(
            <div>
                {this.props.euro}
                {this.props.dolar} 
                {this.props.canadian}
                {this.props.lira}
                {this.props.rubla}
                {this.props.mdl}
            </div>
        );
    }
}

export default Card;