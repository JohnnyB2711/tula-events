import React from "react";
import {Form, Input, Button} from 'antd';

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
            <div className='WrapForm container'>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item label="Почта">
                        {getFieldDecorator('email', {
                            rules: [
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                            ],
                        })(<Input/>)}
                    </Form.Item>
                    <Form.Item>
                        <div className='Enter'>
                            <Button type="primary" htmlType="submit" className="login-form-button" onClick={() => {
                                this.props.history.push(`/user/:id/new-password`)
                            }}>
                                Сбросить пароль
                            </Button>
                            <div className='ColumnBlock'>
                                <div className='InLineBlock'>
                                    <span className='Question'>Уже есть аккаунт?</span>
                                    <a onClick={() => {
                                        this.props.history.push(`/authorization`)
                                    }}>Войти</a>
                                </div>
                                <div className='InLineBlock'>
                                    <span className='Question'>У Вас еще нет аккаунта?</span>
                                    <a onClick={() => {
                                        this.props.history.push(`/registration`)
                                    }}>Зарегистрироваться</a>
                                </div>
                            </div>

                        </div>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

const PasswordRecovery = Form.create({name: 'normal_login'})(LoginForm);
export default PasswordRecovery