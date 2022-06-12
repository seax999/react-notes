import React, {Component} from 'react';

class DemoState extends Component {
    state = {
        count: 1
    }
    componentDidMount() {
        console.log(this.state.count,'count didmount start');
        this.setState({count: 22},()=>{
            this.getAndDealCount()
        })
        console.log(this.state.count,'setstate count')
    }
    getAndDealCount = ()=>{
        const { count } = this.state;
        console.log(count,'get and deal count')
    }
    render() {
        return (
            <div>
                {this.state.count}
            </div>
        );
    }
}

export default DemoState;