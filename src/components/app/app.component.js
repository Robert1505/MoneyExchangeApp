import React from 'react';
import './app.style.scss';
import Title from '../title/title.component';
import Card from '../card/card.component';

class App extends React.Component{
    render(){
        return(
            <div className = "moneyApp">
                <div className = "title">
                    <Title value = "Money Exchange"/>
                </div>
                <div className = "euros">
                    <Card euro = "1 RON = 0.21 EUROS"/>
                </div>
                <div className = "dolars">
                    <Card dolar = "1 RON = 0.24 AMERICAN DOLARS"/>
                </div>
                <div className = "canadiandolars">
                    <Card canadian = "1 RON = 0.32 CANADIAN DOLARS"/>
                </div>
                <div className = "lira">
                    <Card lira = "1 RON = 0.19 GBP"/>
                </div>
                <div className = "rubla">
                    <Card rubla = "1 RON = 16.92 RUB"/>
                </div>     
                <div className = "mdl">
                    <Card mdl = "1 RON = 4.03 MDL"/>
                </div>
            </div>
        );
    }
}

export default App;