import React, { Component } from 'react';
import axios from 'axios';
import TopBar from '../Components/TopBar/TopBar'

export default class MainPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: []
        }
    }

    componentDidMount = () => {
        axios.get('/api/data')
            .then(res => {
                const data = res.data;
                this.setState({
                    data
                })
            })
    }

    render() {
        return ( 
        <div>
            <TopBar />
        </div>
        )
    }
}