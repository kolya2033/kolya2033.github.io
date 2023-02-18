import { Component } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Table from './components/table/Table';

class App extends Component {

    state = {
        isActive: false,
        fixedHeader: false,
    };

    componentDidMount() {
        window.addEventListener("scroll", this.isSticky);
        return () => {
        window.removeEventListener("scroll", this.isSticky);
        };
    }

    isSticky = () => {
        const scrollTop = window.scrollY;
        this.setState({fixedHeader: scrollTop >= 250 ? true : false})
    };    

    handleToggle = () => {
        this.setState({ isActive: !this.state.isActive });
    };

    render() {
        const {fixedHeader, isActive} = this.state
        return (
        <div className="App">
            <Header/>
            <Main fixedHeader={fixedHeader} isActive={isActive} handleToggle={this.handleToggle}/>
            <Table/>
            <Footer/>
        </div>
    );
  }
}

export default App;
