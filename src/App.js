import { Suspense, useCallback, useEffect, useMemo, useState } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Table from './components/table/table/Table';
import { Provider } from './context/context';
import i18n from './i18n';

const App = () => {

    const handleToggle = useCallback(() => {
        setIsActive(prevIsActive => !prevIsActive )
    }, [])

    const [isActive, setIsActive] = useState(false)
    const [fixedHeader, setFixedHeader] = useState(false)

    const data = useMemo(() => ({isActive, fixedHeader, handleToggle}), 
    [isActive, fixedHeader, handleToggle])

    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
        window.removeEventListener("scroll", isSticky);
        };
    })

    const isSticky = () => {
        const scrollTop = window.scrollY;
        setFixedHeader(scrollTop >= 250 ? true : false)
    };    

    return (
        <Provider value={data}>
            <Suspense fallback={i18n}>
                <div className="App">
                    <Header/>
                    <Main/>
                    <Table/>
                    <Footer/>
                </div>
            </Suspense>
        </Provider>
    );
}

export default App;
