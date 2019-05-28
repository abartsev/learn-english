import React, { Component, Fragment } from 'react'
import './list.css'
import Server from '../../server'

const server = new Server()

class List extends Component {
    state = {
        list:{}
    }
    componentDidMount() {
        server.getList().then(list => {
        this.setState({list})    
        })
    }

    render() {
        const{ list } = this.state;
        return (
            <Fragment>
            <ul className="alphabet">
                { Object.keys(list).map(key=>this.vievList(key, list)) }
            </ul>
            </Fragment>
        )
    }

    vievList = (key, list) => {
       return (
            <li className="alphabet_item" key={key}>
                <p>{key}</p>
                {list[key].map(elem=><p>{elem}</p>)}

            </li>
       )
    }
}

export default List