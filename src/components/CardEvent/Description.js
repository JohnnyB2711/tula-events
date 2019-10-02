import React from "react";

class Description extends React.Component {
    state={
        unFold: false,
    };
    moreDetails = (e) => {
        e.preventDefault();
        this.setState({
                unFold: !this.state.unFold
            }
        )
    };
    render() {
        return (
            <div className='CardText'>
                <span>Октава 10:00</span>
                <a className='Href' onClick={(e) => {
                    this.moreDetails(e)
                }}>{
                    this.state.unFold === false ? 'Описание' : 'Скрыть'}</a>
                {
                    this.state.unFold === true ?
                        (<span className='DetailsAboutEvent'>
                                We supply a series of design principles, practical patterns and
                                high quality design resources (Sketch and Axure),
                                to help people create their product prototypes beautifully and efficiently.
                            </span>) : null
                }
            </div>
        )
    }

}
export default Description