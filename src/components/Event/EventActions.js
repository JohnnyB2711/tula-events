import React from "react";
import {Button} from "antd";
import {withRouter} from "react-router";

class EventActions extends React.Component {
    render() {
        return (
            this.props.pastPage ?  <span>Мероприятие завершилось!Вы присутствовали на нем</span> :
                <div className='ButtonsWrap'>
                    <div className='ButtonsEvent'>
                        <Button disabled={this.props.user !== 'user'}>Пойду</Button>
                        <Button disabled={this.props.user !== 'user'}>Возможно</Button>
                        <Button disabled={this.props.user !== 'user'}>Не пойду</Button>
                    </div>
                    {this.props.user === 'user' ? null : <div className='Warning'>Чтобы подтвердить свое учатие,необходимо<a className='Href' onClick={() => {this.props.history.push(`/authorization`)}}>авторизоваться</a></div>}
                </div>
        )
    }
}

export default withRouter(EventActions)