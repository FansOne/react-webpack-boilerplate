import React, { Component } from 'react'
export default class About extends Component {
    constructor(props) {
        super(props)
        this.state = {
            routeParams: props.match.params
        }
    }
    UNSAFE_componentWillMount(){
        this.$axios.get('test')
    }
    render() {
        // console.log(this.state.routeParams)
        return (
            <div>
                <div>年龄：{this.state.routeParams.age}</div>
                <div>身高：{this.state.routeParams.height}</div>
            </div>
        )
    }
}
