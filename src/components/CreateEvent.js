import React from "react";
import ChoiceDate from './Filter/ChoiceDate'
import {Form, Input, Button, Cascader, Radio} from 'antd';
import UpLoadAvatar from "../components/UpLoadAvatar";
import MenuOrg from "./Menu/MenuOrg";

class NewEvent extends React.Component {
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

    render() {
        const {TextArea} = Input;
        const {getFieldDecorator} = this.props.form;
        const genreEvents = [
            {
                value: 'zhejiang',
                label: 'Zhejiang'
            },
        ];
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
        return (
            <div className='container col-12 WrapForm'>
                <MenuOrg mode='horizontal'/>
                <div className='Avatar'>
                    <UpLoadAvatar/>
                </div>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item>
                        {getFieldDecorator(`title`, {
                            rules: [
                                {
                                    required: false,
                                    message: 'Заполните поля для фильтра!',
                                },
                            ],
                        })(<Input className='Input' placeholder="Название"/>)}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator(`place`, {
                            rules: [
                                {
                                    required: false,
                                    message: 'Заполните поля для фильтра!',
                                },
                            ],
                        })(<Input className='Input' placeholder="Место"/>)}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator(`genre`, {
                            rules: [
                                {
                                    required: false,
                                    message: 'Input something!',
                                },
                            ]
                        })(<Cascader
                            fieldNames={{label: 'label', value: 'value'}}
                            className='Input'
                            genreEvents={genreEvents}
                            placeholder="Жанр мероприятия"/>,)}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator(`date`, {
                            rules: [
                                {
                                    required: false,
                                    message: 'Input something!',
                                },
                            ],
                        })(<ChoiceDate/>)}
                    </Form.Item>

                    <Form.Item>
                        {getFieldDecorator(`about`, {
                            rules: [
                                {
                                    required: false,
                                    message: 'Заполните поля для фильтра!',
                                },
                            ],
                        })(<TextArea className='Input' rows={4}/>)}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator(`radioButton`, {
                            rules: [
                                {
                                    required: false,
                                    message: 'Заполните поля для фильтра!',
                                },
                            ],
                        })(<Radio>Только авторизированным пользователям</Radio>)}
                    </Form.Item>

                    <Button type="primary" htmlType="submit" className='Button'>
                        Создать
                    </Button>
                </Form>
            </div>
        );
    }
}

const CreateEvent = Form.create({name: 'register'})(NewEvent);
export default CreateEvent