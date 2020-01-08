import React from "react";
import {Form, Icon, Input, Button, Checkbox, Row, Col} from 'antd';
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
        const formItemLayout = {
            labelCol: {
                md: {span: 24},
                sm: {span: 24},
            },
            wrapperCol: {
                md: {span: 24},
                sm: {span: 24},
            },
        };
        return (
            <Row type="flex" align="middle" justify="center">
                <Col xs={12} md={8}>
                    <Form onSubmit={this.handleSubmit}>
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
                            <div className="d-flex flex-column align-items-center">
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(<Checkbox>Запомнить меня</Checkbox>)}

                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    onClick={(e) => {
                                        this.Enter(e)
                                    }}>
                                    Войти
                                </Button>
                                <a className="Href" onClick={() => {
                                    this.props.history.push(`/registration`)
                                }}>
                                    Зарегистрировать
                                </a>
                                <a className="Href" onClick={() => {
                                    this.props.history.push(`/recovery-password`)
                                }}>
                                    Забыли пароль?
                                </a>
                            </div>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>

        );
    }
}

const Authorization = Form.create({name: 'normal_login'})(LoginForm);
export default withRouter(Authorization)