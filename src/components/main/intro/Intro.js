import { useState } from 'react'
import IntroView from './IntroView';
import { dataContext } from '../../../context/context';
import { useContext } from 'react';

const Intro = () => {

    const [nav, setNav] = useState(['Home', 'About', 'Expertise', 'Teams', 'Works', 'People say', 'Contact'])

    const context = useContext(dataContext)
    
    const imgLoaded = () =>  console.log('successful upload')

    const imgLoadingError = () => console.log('loading error')

    return (
        
        <IntroView 
            fixedHeader={context.fixedHeader} 
            isActive={context.isActive} 
            handleToggle={context.handleToggle} 
            nav={nav}
            imgLoaded={imgLoaded}
            imgLoadingError={imgLoadingError}
            />
    )
}

export default  Intro