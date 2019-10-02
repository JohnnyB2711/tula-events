import React from "react";
import {Button} from "antd";
import {withRouter} from "react-router";

class ButtonsEvent extends React.Component {
    render() {
        return (
            this.props.user === 'org' ? null :
                <div className='ButtonsWrap'>
                    <div className='ButtonsEvent'>
                        <Button disabled={this.props.user !== 'user'}>Пойду</Button>
                        <Button disabled={this.props.user !== 'user'}>Возможно</Button>
                        <Button disabled={this.props.user !== 'user'}>Не пойду</Button>
                    </div>
                    {this.props.user === 'user' ? null : <div>Необходимо<a className='Href' onClick={() => {this.props.history.push(`/enter`)}}>авторизироваться</a></div>}
                </div>
        )
    }
}

export default withRouter(ButtonsEvent)