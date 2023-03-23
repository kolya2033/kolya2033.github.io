import React from "react"


const withEsc = (Component) => {
    return class extends React.Component {
        
        componentDidMount() {
            window.addEventListener('keydown', this.onkeyDown)
            return () => {
                window.removeEventListener('keydown', this.onkeyDown)
            }
        }

        onkeyDown = (e) => {
            const {onEsc} = this.props
            if (e.keyCode === 27) {
                onEsc()
            }
        } 

        render() {
            return <Component {...this.props} />
        }
    }
}

export default withEsc;