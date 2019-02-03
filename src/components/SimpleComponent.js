import React from 'react'

export default class SimpleComponent extends React.Component {

    state = {
      mood: 'happy'
    }
    
    handleCLick = () => {
        this.setState({ mood: 'sad'})
    }


    render() {
      return (
        <div onClick={this.handleCLick}>
          {this.state.mood}
        </div>
      )
    }
}