import React from "react";
import {Form, Icon, Input, Button, Checkbox, Row, Col} from 'antd';
import {withRouter} from "react-router";
import {Link} from 'react-router-dom'
import {email, password} from "../../helpers/validations";

class LoginForm extends React.Component {
    state = {
        form: {
            email: "",
            password: "",
            remember: false
        }
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
   /* onChange = ({target}) => {
        const {value, name} = target;
        this.setState(prevState => ({
            form: {
                ...prevState.form,
                [name]: value
            }
        }));
    };*/

    render() {
        console.log(this.props.form);
        const {getFieldDecorator} = this.props.form;
        return (
            <Row type="flex" align="middle" justify="center">
                <Col xs={12} md={8}>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Item>
                            {getFieldDecorator('email', email)(
                                <Input
                                    prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    placeholder="E-mail"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', password)(
                                <Input
                                    prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    type="password"
                                    placeholder="Пароль"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            <div className="d-flex justify-content-between">
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(<Checkbox>Запомнить меня</Checkbox>)}

                                <Link className="Href login-form-forgot" to={"/recovery-password"}>
                                    Забыли пароль?
                                </Link>
                            </div>

                            <div className="d-flex flex-column">
                                <Button
                                    className="login-form-button"
                                    type="primary"
                                    htmlType="submit">
                                    Войти
                                </Button>
                                <Link className="Href text-center" to={"/registration"}>
                                    Зарегистрироваться
                                </Link>
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