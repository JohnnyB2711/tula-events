import React from "react";
import {Card, Button} from 'antd'
class EventCard extends React.Component{
    render() {
        const { Meta } = Card;
        return(
            <Card
                style={{ width: 300 }}
                extra={<a href="#">Подробнее</a>}
                cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }
                actions={[
                    <Button>Пойду</Button>,
                    <Button>Возможно</Button>,
                    <Button>Не пойду</Button>
                ]}
            >
                <Meta
                    title="Название"
                    description="This is the description"
                />
            </Card>

        )
    }
}
export default EventCard