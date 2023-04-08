import { useState } from 'react'
import FooterView from './FooterView'

const Footer = () => {
    const [design, setDesign] = useState('https://freebiesbug.com/psd-freebies/tajam-psd-website-template-for-agencies/')
    const [github, setGithub] = useState('https://github.com/kolya2033')
    return (
        <FooterView design={design} github={github}/>
    )
}

export default Footer