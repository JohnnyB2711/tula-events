import React from "react";
import {Card, Button} from 'antd'
import {withRouter} from "react-router";

class EventCard extends React.Component {
    state = {
        unFold: false,
        status: 'user'
    }
    moreDetails = (e) => {
        e.preventDefault();
        this.setState({
                unFold: !this.state.unFold
            }
        )
    }

    render() {
        const {Meta} = Card;
        return (
            <Card className='Card'
                  style={{width: 350}}
                  cover={
                      <img
                          alt="Картинка мероприятия"
                          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      />
                  }
                  extra={this.state.status == 'org' ? (<a href="#">Статистика</a>) : (null)}
                  actions={[
                      this.state.status == 'user' ?
                          (<div className='ButtonEvent'>
                              <Button>Пойду</Button>,
                              <Button>Возможно</Button>,
                              <Button>Не пойду</Button>
                          </div>) : (null)]}
            >
                <Meta
                    title="Название"
                    description={
                        <div className='CardText'>
                            <span>Октава 10:00</span>
                            <a className='Href' onClick={(e) => {
                                this.moreDetails(e)
                            }}>{
                                this.state.unFold == false ? 'Подробнее' : 'Скрыть'}</a>
                            {
                                this.state.unFold == true ?
                                    (<span className='DetailsAboutEvent'>
                                We supply a series of design principles, practical patterns and
                                high quality design resources (Sketch and Axure),
                                to help people create their product prototypes beautifully and efficiently.
                            </span>) : null
                            }
                        </div>
                    }

                />
            </Card>

        )
    }
}

export default withRouter(EventCard)