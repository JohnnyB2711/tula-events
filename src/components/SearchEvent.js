import React from "react";
import {Form, Row, Col, Input, Button, Icon, DatePicker, Cascader, Radio} from 'antd';

class Search extends React.Component {
    state = {
        expand: false,
    };
    handleSearch = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log('Received values of form: ', values);
        });
    };

    handleReset = () => {
        this.props.form.resetFields();
    };

    toggle = () => {
        const {expand} = this.state;
        this.setState({expand: !expand});
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        const options = [
            {
                value: 'zhejiang',
                label: 'Zhejiang'
            },
        ];
        return (
            <div className='SearchEvent container'>
                <Form className="SearchField ant-advanced-search-form" onSubmit={this.handleSearch}>
                    <Form.Item>
                        {getFieldDecorator(`place`, {
                            rules: [
                                {
                                    required: true,
                                    message: 'Input something!',
                                },
                            ],
                        })(<Cascader options={options} placeholder="Жанр мероприятия"/>,)}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator(`place`, {
                            rules: [
                                {
                                    required: true,
                                    message: 'Input something!',
                                },
                            ],
                        })(<DatePicker placeholder='Выберите дату'/>)}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator(`place`, {
                            rules: [
                                {
                                    required: true,
                                    message: 'Заполните поля для фильтра!',
                                },
                            ],
                        })(<Input placeholder="Введите место"/>)}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator(`place`, {
                            rules: [
                                {
                                    required: true,
                                    message: 'Заполните поля для фильтра!',
                                },
                            ],
                        })(<Radio>Рядом со мной</Radio>)}
                    </Form.Item>
                    <Row>
                        <Col span={24} style={{textAlign: 'right'}}>
                            <Button type="primary" htmlType="submit">
                                Search
                            </Button>
                            <Button style={{marginLeft: 8}} onClick={this.handleReset}>
                                Clear
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        );
    }
}

const SearchEvent = Form.create({name: 'advanced_search'})(Search);
export default SearchEvent;