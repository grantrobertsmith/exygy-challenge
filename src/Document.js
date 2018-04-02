import React from 'react';
import ReactDOM from 'react-dom';

export class Document extends React.Component {
    render() {
        const document = this.props.document;
        return (
            <div key={document.id} href="#" className={"slat row align-middle collapse  " + document.document_type} data-ref>
                <div className="slat-avatar item-avatar">
                    <span className={"ui-icon i-" + document.document_type + " i-xlarge "}>
                    <svg>
                        <use xlinkHref={"#i-file-" + document.document_type} />
                    </svg>
                    </span></div>
                <div className="slat-body expand columns">
                    <div className="rows"> {/* slat-header */}
                    <div className="columns small-12">
                        <h3 className="slat-header">{document.name}</h3>
                    </div>
                    </div>
                    <div className="row slat-subtitle"> {/* slat-title */}
                    <div className="columns small-12">
                        <p className="slat-title-wrapper">
                        <span className="slat-subtitle-prefix">Title:</span>
                        <span className="slat-subtitle-text">{document.title}</span>
                        </p>
                    </div>
                    </div>
                    <div className="row show-for-medium">
                    <div className="columns small-12 medium-6">
                        <p className="slat-attr-wrapper">
                        <span className="slat-attr-key">Modified By:</span>
                        <span className="slat-attr-value">{document.modified_by}</span>
                        </p>
                        <p className="slat-attr-wrapper">
                        <span className="slat-attr-key">Last Modified:</span>
                        <span className="slat-attr-value">{(document.updated_at)}</span>
                        </p>
                    </div>
                    <div className="columns small-12 medium-6">
                        <p className="slat-attr-wrapper">
                        <span className="slat-attr-key">Status:</span>
                        <span className="slat-attr-value">{document.status}</span>
                        </p>
                        <p className="slat-attr-wrapper">
                        <span className="slat-attr-key">Country:</span>
                        <span className="slat-attr-value">{document.country}</span>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="slat-secondary columns shrink">
                    <span className="ui-icon i-darker-gray i-sm-medium slat-secondary-icon">
                    <svg>
                        <use xlinkHref="#i-star" />
                    </svg>
                    </span>
                    <span className="float-right slat-dropdown">
                    <span className="ui-icon i-darker-gray i-sm-medium slat-secondary-more">
                        <svg>
                        <use xlinkHref="#i-more-vert" />
                        </svg>
                    </span>
                    </span>
                </div>
            </div>
        );
    }
}
