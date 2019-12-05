import React from 'react';

export default class Layout extends React.Component {
    // --- Mounting ---
    constructor(props) {
        super(props)
    }

    UNSAFE_componentWillMount() { }

    render() {  // 🌳
        return (
            <div>Hello React!</div>
        )
    }

    componentDidMount() { }

    // --- Updating ---

    UNSAFE_componentWillReceiveProps(nexProps){}

    shouldComponentUpdate(nextProps,nextState) { return true }

    UNSAFE_componentWillUpdate(nextProps, nextState) { }

    // render() {} 🌳 此处组件根据数据更新 内部进行二次render 生成新的虚拟DOM树 存入内存中，然后进行diff算法逐层比对两次绘制的DOM树节点，将新旧节点进行替换完成页面DOM更新

    componentDidUpdate(prevProps,prevState) { }
    // --- Unmounting ---
    componentWillUnmount() { }
}