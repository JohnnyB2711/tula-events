import React from "react";
import {Typography} from 'antd';

const {Paragraph} = Typography;

class EventDescription extends React.Component {
    state = {
        unFold: false,
        title: 'Название',
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team.'

    };
    moreDetails = (e) => {
        e.preventDefault();
        this.setState({
                unFold: !this.state.unFold
            }
        )
    };
    onChangeTitle = title => {
        this.setState({title});
    };
    onChangeDescription = description => {
        this.setState({description});
    };

    render() {
        return (
            <div className='CardText'>
                {this.props.user === 'org' ?
                    <Paragraph className='Title'
                               editable={{onChange: this.onChangeTitle}}>{this.state.title}</Paragraph>
                    :
                    <span className='Title'>{this.state.title}</span>}
                <h5>Октава 10:00</h5>

                {
                    this.props.user === 'org' ? <Paragraph className='InfoAboutEvent' editable={{onChange: this.onChangeDescription}}>{this.state.description}</Paragraph>
                        :
                        <Paragraph ellipsis={{rows: 3, expandable: true}}>
                            this.state.description
                        </Paragraph>}

            </div>
        )
    }

}

export default EventDescription