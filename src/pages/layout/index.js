import React from 'react';
import { Calendar } from 'antd';

export default class Layout extends React.Component {
    // --- Mounting ---
    constructor(props) {
        super(props)
    }

    UNSAFE_componentWillMount() { }

    render() {  // 🌳
        return (

            <div style={{ width: '100%',display: 'flex',justifyContent:'center',marginTop:'30px'}}>
                <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
                    <Calendar fullscreen={false} onPanelChange={this.onPanelChange} />
                </div>
            </div>

        )
    }

    componentDidMount() { }

    // --- Updating ---

    UNSAFE_componentWillReceiveProps(nexProps) { }

    shouldComponentUpdate(nextProps, nextState) { return true }

    UNSAFE_componentWillUpdate(nextProps, nextState) { }

    // render() {} 🌳 此处组件根据数据更新 内部进行二次render 生成新的虚拟DOM树 存入内存中，然后进行diff算法逐层比对两次绘制的DOM树节点，将新旧节点进行替换完成页面DOM更新

    componentDidUpdate(prevProps, prevState) { }
    // --- Unmounting ---
    componentWillUnmount() { }

    // handle
    onPanelChange(value, mode) {
        console.log(value, mode);
    }
}