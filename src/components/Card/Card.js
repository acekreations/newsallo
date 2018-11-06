import React, { Component } from "react";
import Moment from "react-moment";

class Card extends Component {
    render() {
        return (
            <div>
                {this.props.news.map((article, index) => (
                    <div className="card animated fadeIn" key={index}>
                        <div
                            className="cardImg"
                            style={{
                                backgroundImage: `url(${article.urlToImage})`
                            }}
                            alt=""
                        >
                            <div className="cardImgOverlay" />
                        </div>
                        <h1 className="cardTitle">
                            <a
                                href={article.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {article.title}{" "}
                                <i className="cardExtLink fas fa-external-link-alt" />
                            </a>
                        </h1>
                        <hr />
                        <p>{article.description}</p>
                        <hr />
                        <div className="cardMeta">
                            <p>{article.sourceName}</p>
                            <p>
                                <Moment format="MMM DD, YYYY">
                                    {article.publishedAt}
                                </Moment>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Card;
