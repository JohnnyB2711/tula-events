import React from 'react';
import {Card} from 'antd';
import AddComment from "./AddComment";
import CommentsList from "./CommentsList";
import Description from "./Description";
import ButtonEvent from "./ButtonsEvent";

class TabCard extends React.Component {
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

        if (!this.props.mainPage && this.props.user === 'org') this.addMenuItem()
    }

    onTabChange = (key, type) => {
        this.setState({[type]: key});
    };
    returnContent = (prop) => {
        switch (prop) {
            //Описание
            case 'tab1':
                return <Description/>;
            //Комментарии
            case 'tab2':
                return <div className='container-fluid'>
                    <CommentsList mainPage={this.props.mainPage} user={this.props.user}/>
                    <AddComment mainPage={this.props.mainPage} user={this.props.user}/>
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
                    style={{width: 350}}
                    cover={
                        this.state.key === 'tab1' ? (<img
                            alt="Картинка мероприятия"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />) : null
                    }
                    title="Название"
                    extra={<a href="#">Подробнее</a>}
                    actions={this.state.key === 'tab1' ? [<ButtonEvent user={this.props.user}/>] : null}
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

export default TabCard
