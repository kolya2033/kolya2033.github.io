import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Table from './components/table/table/Table';
import { Provider } from './context/context';

const App = () => {

    const handleToggle = () => {
        setData(data => ({...data, isActive: !data.isActive }))
    }

    const [data, setData] = useState({
        isActive: false,
        fixedHeader: false,
        handleToggle: handleToggle
    })

    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
        window.removeEventListener("scroll", isSticky);
        };
    })

    const isSticky = () => {
        const scrollTop = window.scrollY;
        setData(data => ({...data, fixedHeader: scrollTop >= 250 ? true : false}))
    };    

    return (
        <Provider value={data}>
            <div className="App">
                <Header/>
                <Main/>
                <Table/>
                <Footer/>
            </div>
        </Provider>
    );
}

export default App;
