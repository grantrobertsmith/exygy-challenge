import React from 'react';
import ReactDOM from 'react-dom';

export class Document extends React.Component {
    render() {
        return (
            <nav className="top-bar nav-bar is-fixed">
                <div className="top-bar-title nav-logo">
                    <a href="/pages/home.html">
                        <span className="nav-bar-logo">
                            <span className="ui-icon i-white i-base ">
                                <svg>
                                    <use xlinkHref="#i-ls-logo" />
                                </svg>
                            </span>
                        </span>
                        Life Sciences
                    </a>
                </div>
                <div className="top-bar-left">
                    <nav className="main-navigation">
                    <ul className="menu">
                        <li id="nav-item-browse" className={this.props.activeItem === 'browse' ? "active" : ""}>
                        <a href="/browse">
                            <span>Browse</span>
                        </a>
                        </li>    </ul>
                    </nav>
                </div>
                <div className="top-bar-right">
                    <nav className="secondary-navigation">
                    <ul className="menu">
                        <li>
                        <a href="#" className="nav-bar-icon">
                            <span className="ui-icon i-primary i-base ">
                            <svg>
                                <use xlinkHref="#i-help" />
                            </svg>
                            </span>        </a>
                        </li>
                        <li>
                        <a href="#" className="nav-bar-avatar">
                            <span className="avatar-initials ">
                            <span className="avatar-initials-text">
                                AK
                            </span>
                            </span>        </a>
                        </li>
                        <li>
                        <a className="nav-mobile-toggler">
                            <span className="ui-icon i-primary i-medium icon-open">
                            <svg>
                                <use xlinkHref="#i-menu" />
                            </svg>
                            </span>            <span className="ui-icon i-primary i-medium icon-close">
                            <svg>
                                <use xlinkHref="#i-close" />
                            </svg>
                            </span>        </a>
                        </li>
                    </ul>
                    </nav>
                </div>
            </nav>
        );
    }
}
