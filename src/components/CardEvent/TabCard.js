import React from 'react';
import {Card} from 'antd';
import ButtonEvent from "./ButtonsEvent";
import {withRouter} from "react-router";
import {Link} from 'react-router-dom'

const {Meta} = Card;

class TabCard extends React.Component {
    state = {};

    render() {
        return (
            <Card
                style={{width: 300}}
                cover={
                    <Link to={`/event/${this.props.info}`}>
                        <img
                            className='CardImage'
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        /></Link>
                }
                actions={this.props.user === 'org' ? null : [<ButtonEvent user={this.props.user}/>]}
            >
                <Link to={`/event/${this.props.info}`}><Meta
                    title="Название"
                    description="Время и место"
                /></Link>
            </Card>
        );
    }
}

export default withRouter(TabCard)
