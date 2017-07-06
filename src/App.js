import React, { Component } from 'react'

import './App.css'
import Main from './Main'

class App extends Component {
  constructor() {
    super()

    this.state = {
      notes: {
        'note-1': {
          id: 'note-1',
          title: 'My fancy note from App',
          body: 'This note is so fancy!',
        },
        'note-2': {
          id: 'note-2',
          title: 'Another one from App',
          body: 'Also very fancy',
        },
      },
      currentNote: {
        id: null,
        title: '',
        body: '',
      },
    }
  }

  render() {
    return (
      <div className="App">
        <Main 
        notes={this.state.notes} 
        currentNote={this.state.currentNote}
        setCurrentNote={this.setCurrentNote}/>
      </div>
    );
  }

   setCurrentNote = (note) => {
    this.setState({ currentNote: note })
  }
}

export default App