import React from "react";
import {Button} from "antd";
import {withRouter} from "react-router";
import {Link} from 'react-router-dom'

class EventCardFooter extends React.Component {
    render() {
        return (
            this.props.pastPage ?  <span>Мероприятие завершилось!Вы присутствовали на нем</span> :
                <div className='CardFooter'>
                    <div className='FooterButton'>
                        <Button disabled={this.props.user !== 'user'}>Пойду</Button>
                        <Button disabled={this.props.user !== 'user'}>Возможно</Button>
                        <Button disabled={this.props.user !== 'user'}>Не пойду</Button>
                    </div>
                    {this.props.user === 'user' ? null : <div className="FooterText">Чтобы подтвердить свое учаcтие,необходимо <Link class="Href" to={"/authorization"}>авторизироваться</Link></div>}
                </div>
        )
    }
}

export default withRouter(EventCardFooter)