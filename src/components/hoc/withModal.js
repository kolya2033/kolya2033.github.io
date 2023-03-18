import React from "react";


const withModal = (Component) => {
    return class extends React.Component {

        componentDidMount() {
            window.addEventListener('keydown', this.onkeyDown)
            return () => {
                window.removeEventListener('keydown', this.onkeyDown)
            }
        }

        onkeyDown = (e) => {
            if (e.keyCode === 27) {
                this.props.onModalChange(false)
            }
        } 

        render() {
            return <Component {...this.props}/>
        }
    }
}

export default withModal