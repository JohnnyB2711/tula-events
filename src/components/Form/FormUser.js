import React from "react";
import moment from "moment";
import UpLoadAvatar from "../UpLoadAvatar";
import {compareToFirstPassword} from "../../helpers/compareToFirstPassword";
/*class RegistrationForm extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    handleConfirmBlur = e => {
        const {value} = e.target;
        this.setState({confirmDirty: this.state.confirmDirty || !!value});
    };

    compareToFirstPassword = (rule, value, callback) => {
        const {form} = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const {form} = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], {force: true});
        }
        callback();
    };

    handleWebsiteChange = value => {
        let autoCompleteResult;
        if (!value) {
            autoCompleteResult = [];
        } else {
            autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
        }
        this.setState({autoCompleteResult});
    };

    render() {
        const {getFieldDecorator} = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 8},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 16},
            },
        };
/!*        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };*!/
        const config = {
            rules: [{type: 'object', required: true, message: 'Please select time!'}],
        };

        return (
            <Row type="flex" justify="center" align="middle">
                <Col xs={12} md={8}>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item>
                        <UpLoadAvatar/>
                    </Form.Item>
                    <Form.Item label="Имя">
                        {getFieldDecorator('name', {
                            rules: [{required: true, message: 'Please input your nickname!', whitespace: true}],
                        })(<Input className='Input'/>)}
                    </Form.Item>
                    <Form.Item label="Фамилия">
                        {getFieldDecorator('surname', {
                            rules: [{required: true, message: 'Please input your nickname!', whitespace: true}],
                        })(<Input className='Input'/>)}
                    </Form.Item>
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
                        })(<Input className='Input'/>)}
                    </Form.Item>
                    <Form.Item label="Пароль" hasFeedback>
                        {getFieldDecorator('password', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                                {
                                    validator: this.validateToNextPassword,
                                },
                            ],
                        })(<Input.Password className='Input'/>)}
                    </Form.Item>
                    <Form.Item label="Повторный пароль" hasFeedback>
                        {getFieldDecorator('confirm', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                {
                                    validator: this.compareToFirstPassword,
                                },
                            ],
                        })(<Input.Password onBlur={this.handleConfirmBlur} className='Input'/>)}
                    </Form.Item>
                    <Form.Item label="Телефон">
                        {getFieldDecorator('phone', {
                            rules: [{required: true, message: 'Please input your phone number!'}],
                        })(<Input className='Input'/>)}
                    </Form.Item>
                    <Form.Item label="Дата рождения">
                        {getFieldDecorator('date-picker', config)(<DatePicker className='Input'
                                                                              defaultPickerValue={moment("1990-11-27", "YYYY-MM-DD")}/>)}
                    </Form.Item>
                    <Form.Item className='col-12' label="Пол">
                        {getFieldDecorator('radio-group')(
                            <Radio.Group>
                                <Radio value="a">Мужской</Radio>
                                <Radio value="b">Женский</Radio>
                            </Radio.Group>,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('agreement', {
                            valuePropName: 'checked',
                        })(
                            <Checkbox>
                                Я ознакомился с <a href="#hhh">соглашением</a>
                            </Checkbox>,
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className='Button'>
                            Зарегистрироваться
                        </Button>
                    </Form.Item>
                </Form>
                </Col>
            </Row>
        );
    }
}

const FormUser = Form.create({name: 'register'})(RegistrationForm);
export default FormUser*/
import {
    Form,
    Input,
    Checkbox,
    Button,
    DatePicker,
    Radio
} from 'antd';
import {
    birthdate,
    confirmPassword,
    email,
    middleName,
    name,
    password,
    phone,
    sex,
    surname
} from "../../helpers/validations";

class RegistrationForm extends React.Component {
    state = {
        confirmDirty: false
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    handleConfirmBlur = e => {
        const {value} = e.target;
        this.setState({confirmDirty: this.state.confirmDirty || !!value});
    };
    render() {
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 8},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 16},
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item>
                    <UpLoadAvatar/>
                </Form.Item>
                <Form.Item label="Имя"  hasFeedback>
                    {getFieldDecorator('name', name)(<Input/>)}
                </Form.Item>
                <Form.Item label="Фамилия"  hasFeedback>
                    {getFieldDecorator('surname', surname)(<Input/>)}
                </Form.Item>
                <Form.Item label="Отчество"  hasFeedback>
                    {getFieldDecorator('middleName', middleName)(<Input/>)}
                </Form.Item>
                <Form.Item label="E-mail"  hasFeedback>
                    {getFieldDecorator('email', email)(<Input/>)}
                </Form.Item>
                <Form.Item label="Пароль" hasFeedback>
                    {getFieldDecorator('password', password)(<Input.Password/>)}
                </Form.Item>
                <Form.Item label="Подтверждение пароля" hasFeedback>
                    {getFieldDecorator('confirmPassword',{rules: [...confirmPassword.rules, {validator: compareToFirstPassword.bind(this,this.props.form)}]}
                    )(<Input.Password/>)}
                </Form.Item>
                <Form.Item label="Номер телефона"  hasFeedback>
                    {getFieldDecorator('phone', phone)(<Input style={{width: '100%'}}/>)}
                </Form.Item>
                <Form.Item label="Дата рождения"  hasFeedback>
                    {getFieldDecorator('birthdate', birthdate)(
                        <DatePicker className='Input'
                                    defaultPickerValue={moment("1990-11-27", "YYYY-MM-DD")}/>)}
                </Form.Item>
                <Form.Item label="Пол">
                    {getFieldDecorator('sex' , sex)(
                        <Radio.Group>
                            <Radio value="1">Мужской</Radio>
                            <Radio value="0">Женский</Radio>
                        </Radio.Group>,
                    )}
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    {getFieldDecorator('agreement', {
                        valuePropName: 'checked',
                    })(
                        <Checkbox>
                            I have read the <a href="">agreement</a>
                        </Checkbox>,
                    )}
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Регистрация
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}
const WrappedRegistrationForm = Form.create({name: 'register'})(RegistrationForm);
export default WrappedRegistrationForm