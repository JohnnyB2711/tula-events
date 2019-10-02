import React from "react";
import {Form, Row, Col, Input, Button, DatePicker, Cascader, Radio, Collapse} from 'antd';

class Search extends React.Component {
    state = {
        expand: false,
        searchValue: [{
            genre: {},
            date: {},
            radioButton: {},
            place: {},
        }]
    };
    handleSearch = async (e) => {
        e.preventDefault();
        console.log(this.props.form);
    }
    handleReset = () => {
        this.props.form.resetFields();
    };

    render() {
        const {Panel} = Collapse;
        const {getFieldDecorator} = this.props.form;
        const options = [
            {
                value: 'zhejiang',
                label: 'Zhejiang'
            },
        ];
        return (
            <Collapse>
                <Panel header="Фильтры">
                    <Form className="SearchField ant-advanced-search-form" onSubmit={this.handleSearch}>
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
                                className='InputSearch'
                                options={options}
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
                            })(<DatePicker className='InputSearch' placeholder='Выберите дату'/>)}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator(`place`, {
                                rules: [
                                    {
                                        required: false,
                                        message: 'Заполните поля для фильтра!',
                                    },
                                ],
                            })(<Input className='InputSearch' placeholder="Введите место"/>)}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator(`radioButton`, {
                                rules: [
                                    {
                                        required: false,
                                        message: 'Заполните поля для фильтра!',
                                    },
                                ],
                            })(<Radio>Рядом со мной</Radio>)}
                        </Form.Item>
                        <Row>
                            <Col span={24} style={{textAlign: 'right'}}>
                                <Button type="primary" htmlType="submit">
                                    Поиск
                                </Button>
                                <Button style={{marginLeft: 8}} onClick={this.handleReset}>
                                    Очистить
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Panel>
            </Collapse>
        );
    }
}

const SearchEvent = Form.create({name: 'advanced_search'})(Search);
export default SearchEvent;