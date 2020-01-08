import React from 'react';
import {Comment, Icon, Tooltip, Avatar} from 'antd';
import moment from 'moment';
import {withRouter} from "react-router";

class EventComments extends React.Component {
    state = {
        likes: 0,
        dislikes: 0,
        action: null,
        comments: ['1', '2', '3']
    };

    like = () => {
        this.setState({
            likes: 1,
            dislikes: 0,
            action: 'liked',
        });
    };

    dislike = () => {
        this.setState({
            likes: 0,
            dislikes: 1,
            action: 'disliked',
        });
    };

    render() {
        const {likes, dislikes, action} = this.state;

        const actions = [
            <span key="comment-basic-like">
        <Tooltip title="Like">
          <Icon
              type="like"
              theme={action === 'liked' ? 'filled' : 'outlined'}
              onClick={this.like}
          />
        </Tooltip>
        <span style={{paddingLeft: 8, cursor: 'auto'}}>{likes}</span>
      </span>,
            <span key=' key="comment-basic-dislike"'>
        <Tooltip title="Dislike">
          <Icon
              type="dislike"
              theme={action === 'disliked' ? 'filled' : 'outlined'}
              onClick={this.dislike}
          />
        </Tooltip>
        <span style={{paddingLeft: 8, cursor: 'auto'}}>{dislikes}</span>
      </span>
        ];

        return (
            <div className='container-fluid'>
                {
                    this.props.pastPage ?
                        (this.state.comments.map((comment) => {
                            return <Comment
                                actions={actions}
                                author={<a>Han Solo</a>}
                                avatar={
                                    <Avatar
                                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                        alt="Han Solo"
                                    />
                                }
                                content={
                                    <p>
                                        We supply a series of design principles, practical patterns and high quality
                                        design
                                        resources (Sketch and Axure), to help people create their product prototypes
                                        beautifully
                                        and efficiently.
                                    </p>
                                }
                                datetime={
                                    <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                                        <span>{moment().fromNow()}</span>
                                    </Tooltip>
                                }
                            />
                        })) :
                        <div>
                            <span>Отзывы будут доступны по завершению мероприятия</span>
                            {
                                this.props.user === 'un' ? (<span>,чтобы оставить отзыв наобходимо <a className='Href' onClick={() => {
                                this.props.history.push(`/authorization`)
                            }}>авторизироваться</a></span> ): null
                            }
                        </div>
                }
            </div>
        );
    }
}

export default withRouter(EventComments)