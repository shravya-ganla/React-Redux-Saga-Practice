import React, { Component } from 'react';
import {connect} from 'react-redux'
import './style.css';
import { loadImages } from '../../actions/index'

const key = '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';

class ImageGrid extends Component {
    state = {
        images: [],
    };

    componentDidMount() {
        this.props.loadImages()
    }

    render() {
        const { images } = this.props;
        return (
            <div className="content">
                <section className="grid">
                    {images.map(image => (
                        <div
                            key={image.id}
                            className={`item item-${Math.ceil(
                                image.height / image.width,
                            )}`}
                        >
                            <img
                                src={image.urls.small}
                                alt={image.user.username}
                            />
                        </div>
                    ))}

                    <button onClick={this.props.loadImages}>Load Images</button>
                </section>
            </div>
        );
    }
}

const mapStateToProps = ({isLoading, images, error}) =>({
    isLoading,
    images,
    error,
})

const mapDispatchToProps = dispatch =>({
   loadImages : () => dispatch(loadImages())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ImageGrid);
