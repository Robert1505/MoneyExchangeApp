import React from 'react';
import './app.style.scss';
import Title from '../title/title.component';
import Card from '../card/card.component';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dataIsLoaded : false,
            loadedData : null
        };
    }
    getData = () =>{
        fetch('http://data.fixer.io/api/latest?access_key=3a8158fa2c01f7eb14936d85590a28e2')
        .then((response) => response.json())
        .then((data) => this.setState({dataIsLoaded : true, loadedData : data}));
    }
    componentDidMount = () => {
        this.getData();
    }

    render(){
        let ron;
        let mdl;
        let usd;
        let gbp;
        let rub;
        let cad;
        if(this.state.dataIsLoaded){
            ron = this.state.loadedData.rates.RON;
            mdl = this.state.loadedData.rates.MDL;
            usd = this.state.loadedData.rates.USD;
            gbp = this.state.loadedData.rates.GBP;
            rub = this.state.loadedData.rates.RUB;
            cad = this.state.loadedData.rates.CAD;
        }
        return(
            <div className = "moneyApp">
                <div className = "title">
                    <Title value = "Money Exchange"/>
                </div>
                <div className = "euros">
                    <Card text = "1 EURO = " euro = {ron} moneda = " RON" />
                </div>
                <div className = "dolars">
                    <Card text = "1 EURO = " dolar = {mdl} moneda = " MDL"/>
                </div>
                <div className = "canadiandolars">
                    <Card text = "1 EURO = " canadian = {usd} moneda = " USD" />
                </div>
                <div className = "lira">
                    <Card text = "1 EURO = " lira = {gbp} moneda = " GBP" />
                </div>
                <div className = "rubla">
                    <Card text = "1 EURO = " rubla = {rub} moneda = " RUB" />
                </div>     
                <div className = "mdl">
                    <Card text = "1 EURO = " mdl = {cad} moneda = " CAD" />
                </div>
            </div>
        );
    }
}

export default App;