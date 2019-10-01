import React from 'react';
import {Button, Card} from 'antd';
import AddComment from "./AddComment";
import CommentsList from "../CommentsList";

/*const tabList = [
    {
        key: 'tab1',
        tab: 'Информация',
    },
    {
        key: 'tab2',
        tab: 'Отзывы',
    }
];

const contentList = {
    tab1: <div className='CardText'>
        <span>Октава 10:00</span>
        {/!*<a className='Href' onClick={(e) => {
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
        }*!/}
    </div>,

    tab2: <div className='container-fluid'>
        <CommentsList/>
        <AddComment/>
    </div>
};*/

class TabCard extends React.Component {
    state = {
        key: 'tab1',
        noTitleKey: 'app',
        status: 'user',
        unFold: false,
    };
    moreDetails = (e) => {
        e.preventDefault();
        this.setState({
                unFold: !this.state.unFold
            }
        )
    };

    onTabChange = (key, type) => {
        this.setState({[type]: key});
    };
    returnContent = (prop) => {
        switch (prop) {
            case 'tab1':
                return <div className='CardText'>
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
                </div>;
            case 'tab2':
                return <div className='container-fluid'>
                    <CommentsList/>
                    <AddComment/>
                </div>;
            case 'tab3':
                return;
        }
    };

    render() {
        return (
            <div>
                <Card
                    style={{width: 350}}
                    cover={
                        this.state.key == 'tab1' ? (<img
                            alt="Картинка мероприятия"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />) : null
                    }
                    title="Название"
                    /*extra={this.state.status == 'org' ? (<a href="#">Статистика</a>) : (null)}*/
                    actions={[
                        this.state.status == 'user' ?
                            (<div className='ButtonEvent'>
                                <Button>Пойду</Button>,
                                <Button>Возможно</Button>,
                                <Button>Не пойду</Button>
                            </div>) : (null)]}
                    tabList={
                        [{
                            key: 'tab1',
                            tab: 'Информация',
                        },
                            {
                                key: 'tab2',
                                tab: 'Отзывы',
                            },
                            this.state.status == 'org' ? ({key: 'tab3', tab: 'Статистика'}) : ({key: null, tab: null})
                        ]
                    }
                    activeTabKey={this.state.key}
                    onTabChange={key => {
                        this.onTabChange(key, 'key');
                    }}
                >
                    {/*{contentList[this.state.key]}*/}
                    {this.returnContent(this.state.key)}
                </Card>
            </div>
        );
    }
}

export default TabCard
