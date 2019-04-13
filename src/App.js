import React, { Component } from 'react';
import './App.css';
import {Coba} from './Coba';

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

  constructor(props){
    super(props)
    this.state = {
      angka: 0,
      message: '',
      items: [{name: 'makan', status: true}, {name: 'tidur', status: false}],
      ketik:'',
      status: false,
    }

    this.tambah = this.tambah.bind(this);
    this.kurang = this.kurang.bind(this);
    this.addition = this.addition.bind(this);
    this.ketikKata = this.ketikKata.bind(this);
    this.nilaiCheckbox = this.nilaiCheckbox.bind(this)

  }
  
  tambah(){
    if(this.state.angka < 10)
    {
      this.setState({angka: this.state.angka+1, message:''})
    }
    else {
      this.setState({message:'harus dibawah 10'})
    }
  }
  kurang() {
    if(this.state.angka > 0)
    {
      this.setState({angka: this.state.angka-1, message:''})

    }
    else {
      this.setState({message:'harus diatas 0'})
      
    }

  }

  ketikKata(event) {
    this.setState({ketik: event.target.value});
    // console.log(event.target.value);
  }

  addition() {
    this.setState({items: this.state.items.concat({name: this.state.ketik, status:this.state.status}), ketik:'', status:false})
  }

  nilaiCheckbox(){
    this.setState({status: !this.state.status}, ()=> {
      console.log(this.state.status)

    })
  }
  render() {
    // const {counter,name, typing} = this.state;
    const {angka, message, items, ketik} = this.state;
    return (
      <div className="App">
        {/* {/* {counter}
        {name}
        
        <input type="text" value={typing} onChange={this.handleOnChange}/>
        <button onClick={this.handleOnClick}>Insert</button> */}
        {/* <div className="container"> */}
          {/*<h1>{angka}</h1> */}
          {/* <Coba text={angka} handleOnTambah={this.tambah} handleOnKurang={this.kurang}/> */}
          {/* <div className="btn-group">
            <button className="btn btn-primary" onClick={this.tambah}>Tambah</button>
            <button className="btn btn-primary" onClick={this.kurang}>Kurang</button>
      </div> */ }
          
          {/* <br/> */}
          {/* {message} */}
        {/* </div> */} 
        
       
        <input type="text" value={ketik} onChange={this.ketikKata}/>
        <input type="checkbox" value={this.state.status} checked={this.state.status} onChange={this.nilaiCheckbox}/>
        <button onClick={this.addition}>Input</button>
         
        { items.map((item,id)=>{
          return (
            <div key={id}>{item.name}{<input type="checkbox" defaultChecked={item.status}/>}
            </div>
            )
        })}
      </div>
    );
  }
}

export default App;
