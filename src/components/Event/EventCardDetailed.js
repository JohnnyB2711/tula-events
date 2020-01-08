import React from "react";
import {withRouter} from "react-router";
import {Card} from "antd";
import EventDescription from "./EventDescription";
import CommentsList from "./EventComments";
import CommentAdd from "./EventCommentAdd";
import Buttons from "./EventActions";

class EventCardDetailed extends React.Component {
    state = {
        key: 'tab1',
        noTitleKey: 'app',
        status: 'org',
        tabList:
            [{
                key: 'tab1',
                tab: 'Информация',
            },
                {
                    key: 'tab2',
                    tab: 'Отзывы',
                }
            ]
    };

    componentDidMount() {

        if (this.props.pastPage && this.props.user === 'org') this.addMenuItem()
    }

    onTabChange = (key, type) => {
        this.setState({[type]: key});
    };
    returnContent = (prop) => {
        switch (prop) {
            //Описание
            case 'tab1':
                return <EventDescription user={this.props.user}/>;
            //Комментарии
            case 'tab2':
                return <div className='container-fluid'>
                    <CommentsList pastPage={this.props.pastPage}  user={this.props.user}/>
                    <CommentAdd pastPage={this.props.pastPage} user={this.props.user}/>
                </div>;
            //Статистика
            case 'tab3':
                return;
        }
    };
    addMenuItem = () => {
        this.setState({
            tabList: [...this.state.tabList, {
                key: 'tab3',
                tab: 'Статистика',
            }]
        })
    };

    render() {
        return (
            <div>
                <Card
                    className='DetailCard'
                    cover={
                        this.state.key === 'tab1' ? (<img
                            className='CardImage'
                            alt="Картинка мероприятия"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />) : null
                    }
                    actions={this.state.key === 'tab1' ? ( this.props.user === 'org' ? null : [<Buttons user={this.props.user} pastPage={this.props.pastPage}/>]): null}
                    description="Время и место"
                    tabList={this.state.tabList}
                    activeTabKey={this.state.key}
                    onTabChange={key => {
                        this.onTabChange(key, 'key');
                    }}
                >
                    {this.returnContent(this.state.key)}
                </Card>
            </div>
        );
    }
}

export default withRouter(EventCardDetailed);