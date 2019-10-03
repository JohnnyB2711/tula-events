import React from "react";
import {withRouter} from "react-router";
import {Card} from "antd";
import Description from "./Description";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import ButtonEvent from "./ButtonsEvent";

class DetailCard extends React.Component {
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

        if (this.props.mainPage === false && this.props.user === 'org') this.addMenuItem()
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
            //Редактировать
            case 'tab4':
                return;
        }
    };
    addMenuItem = () => {
        this.setState({
            tabList: [...this.state.tabList, {
                key: 'tab3',
                tab: 'Статистика',
            },{key: 'tab4',
                tab: 'Редактировать'}]
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
                    actions={this.state.key === 'tab1' ? ( this.props.user === 'org' ? null : [<ButtonEvent user={this.props.user}/>] ): null}
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

export default withRouter(DetailCard);