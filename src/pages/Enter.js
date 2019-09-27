import React from "react";
import {Form, Icon, Input, Button, Checkbox} from 'antd';

class LoginForm extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div className='WrapEnterForm container'>
                <Form onSubmit={this.handleSubmit} className="col-6 login-form">
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{required: true, message: 'Please input your username!'}],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                placeholder="Username"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{required: true, message: 'Please input your Password!'}],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                type="password"
                                placeholder="Password"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        <div className='LoginConfirmation'>
                            <div className='InLineBlock'>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(<Checkbox>Remember me</Checkbox>)}
                                <a className="login-form-forgot" onClick={() => {
                                    this.props.history.push(`/passwordrecovery`)
                                }}>
                                    Забыли пароль?
                                </a>
                            </div>
                            <Button type="primary" htmlType="submit" className="ButtonEnter login-form-button">
                                Войти
                            </Button>
                            <a onClick={() => {
                                this.props.history.push(`/registration`)
                            }}>Зарегистрироваться</a>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

const Enter = Form.create({name: 'normal_login'})(LoginForm);
export default Enter