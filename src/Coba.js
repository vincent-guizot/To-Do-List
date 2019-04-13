import React, { Component } from 'react';

// export default class Coba extends Component{
//     render() {
//         const {text} = this.props
//         console.log(this.props)
//         return (<div>{this.props.text}</div>)
//     }
// }

export function Coba(props) {
  const {text} = props

    return (
        <div>
            <div>{text}</div>
            <div className="btn-group">
                <button className="btn btn-primary" onClick={props.handleOnTambah}>Tambah</button>
                <button className="btn btn-primary" onClick={props.handleOnKurang}>Kurang</button>

            </div>
        </div>
        
    )
}

// export const Coba = (props) => (
//     <div>{props.text}</div>
// )

// export function Coba(props) 

// export function Hello(props) {
//     return (
//         <div>hello</div>
//     )
// }

// export const Coba = (props) => {
//     return(
//         <div></div>{props.text}
//     )
// }

