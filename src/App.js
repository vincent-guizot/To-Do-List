import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // state = {
  //   counter: 0,
  //   name: 'Vincent',
  //   typing: 'oke'
  // }
  // handleOnChange = (event) => {
  //   this.setState({typing: event.target.value});
  //   console.log(event.target.value);
  // }
  // handleOnClick = () => {
  //   this.setState({name: this.state.typing, typing: ''}, () => {
  //     console.log(this.state.name)
  //   });
  // }
  state = {
    angka : 0,
    message: ''
  }
  tambah = () => {
    if(this.state.angka < 10)
    {
      this.setState({angka: this.state.angka+1, message:''})
    }
    else {
      this.setState({message:'harus dibawah 10'})
    }
  }
  kurang = () => {
    if(this.state.angka > 0)
    {
      this.setState({angka: this.state.angka-1, message:''})

    }
    else {
      this.setState({message:'harus diatas 0'})
      
    }

  }

 
  render() {
    // const {counter,name, typing} = this.state;
    const {angka, message} = this.state;
    return (
      <div className="App">
        {/* {counter}
        {name}

        <input type="text" value={typing} onChange={this.handleOnChange}/>
        <button onClick={this.handleOnClick}>Insert</button> */}
        <div className="container">
          <h1>{angka}</h1>
          <div className="btn-group">
            <button className="btn btn-primary" onClick={this.tambah}>Tambah</button>
            <button className="btn btn-primary" onClick={this.kurang}>Kurang</button>
          </div>
          
          <br/>
          {message}
        </div>
      </div>
    );
  }
}

export default App;
