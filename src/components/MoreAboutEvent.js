import React from "react";
import {withRouter} from "react-router";
import {Button, Card} from "antd";

class MoreAboutEvent extends React.Component {
    render() {
        const {Meta} = Card;
        return (
            <div className='container CardWrap'>
                <Card
                    style={{width: 700}}
                    extra={<a className='Href' onClick={() => {
                        this.props.history.push(`/about_event`)
                    }}>Подробнее</a>}
                    cover={
                        <img
                            alt="Картинка мероприятия"
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
                        description="Октава       10:00"
                    />
                </Card>
            </div>

        )
    }
}

export default withRouter(MoreAboutEvent);