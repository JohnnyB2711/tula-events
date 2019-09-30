import React from "react";
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import {withRouter} from "react-router";

class LoginForm extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    Enter = (e) => {
        e.preventDefault();
        this.props.history.push(`/personal_page/planned_events`)
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div className='WrapEnterForm container'>
                <Form onSubmit={this.handleSubmit} className="col-md-6 login-form">
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{required: true, message: 'Введите свое имя!'}],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                placeholder="Логин"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{required: true, message: 'Введите пароль!'}],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                type="password"
                                placeholder="Пароль"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        <div className='LoginConfirmation'>
                            <div className='InLineBlock'>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(<Checkbox>Запомнить меня</Checkbox>)}
                                <a className="Href login-form-forgot" onClick={() => {
                                    this.props.history.push(`/passwordrecovery`)
                                }}>
                                    Забыли пароль?
                                </a>
                            </div>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="ButtonEnter login-form-button"
                                onClick={(e) => {
                                    this.Enter(e)
                                }}>
                                Войти
                            </Button>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

const Enter = Form.create({name: 'normal_login'})(LoginForm);
export default withRouter(Enter)