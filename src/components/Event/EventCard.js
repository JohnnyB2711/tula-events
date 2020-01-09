import React from 'react';
import {Card} from 'antd';
import CardFooter from "./EventCardFooter";
import {withRouter} from "react-router";
import {Link} from 'react-router-dom'

const {Meta} = Card;

class EventCard extends React.Component {
    state = {};

    render() {
        return (
            <Card
                extra={<Link class="Href" to={`/event/${this.props.info}`}>Подробнее</Link>}
                cover={
                    <img
                        className='CardImage'
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }
            >
                <Meta
                    title="Название"
                    description="Время и место"
                />
                {this.props.user === 'org' ? null : [<CardFooter user={this.props.user}/>]}
            </Card>
        );
    }
}

export default withRouter(EventCard)
