import React from "react";
import {Form, Input, Select, Checkbox, Button, DatePicker, Radio} from 'antd';
import moment from "moment";
import bootstrap from 'bootstrap/dist/css/bootstrap.css'

const {Option} = Select;

class RegistrationForm extends React.Component {
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
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '+7',
        })(
            <Select style={{width: 70}}>
                <Option value="+7">+7</Option>
                <Option value="8">8</Option>
            </Select>,
        );
        const config = {
            rules: [{type: 'object', required: true, message: 'Please select time!'}],
        };

        return (
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item label="Имя">
                        {getFieldDecorator('name', {
                            rules: [{required: true, message: 'Please input your nickname!', whitespace: true}],
                        })(<Input className='InputRegistration'/>)}
                    </Form.Item>
                    <Form.Item label="Фамилия">
                        {getFieldDecorator('surname', {
                            rules: [{required: true, message: 'Please input your nickname!', whitespace: true}],
                        })(<Input className='InputRegistration'/>)}
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
                        })(<Input className='InputRegistration'/>)}
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
                        })(<Input.Password className='InputRegistration'/>)}
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
                        })(<Input.Password onBlur={this.handleConfirmBlur} className='InputRegistration'/>)}
                    </Form.Item>
                    <Form.Item label="Телефон">
                        {getFieldDecorator('phone', {
                            rules: [{required: true, message: 'Please input your phone number!'}],
                        })(<Input addonBefore={prefixSelector} className='InputRegistration'/>)}
                    </Form.Item>
                    <Form.Item label="Дата рождения">
                        {getFieldDecorator('date-picker', config)(<DatePicker className='InputRegistration'
                            defaultPickerValue={moment("1990-11-27", "YYYY-MM-DD")}/>)}
                    </Form.Item>
                    <Form.Item label="Пол">
                        {getFieldDecorator('radio-group')(
                            <Radio.Group>
                                <Radio value="a">Мужской</Radio>
                                <Radio value="b">Женский</Radio>
                            </Radio.Group>,
                        )}
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        {getFieldDecorator('agreement', {
                            valuePropName: 'checked',
                        })(
                            <Checkbox>
                                I have read the <a href="#hhh">agreement</a>
                            </Checkbox>,
                        )}
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit" className='ButtonRegistration'>
                            Зарегистрироваться
                        </Button>
                    </Form.Item>
                </Form>
        );
    }
}

const FormUser = Form.create({name: 'register'})(RegistrationForm);
export default FormUser