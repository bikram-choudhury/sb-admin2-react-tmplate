import React, { Fragment } from 'react';
import { CardBox, CardWithContent } from './_card';
import Card from '../Card/Card';

const Cards = _ => {
    return (
        <Fragment>

            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Cards</h1>
            </div>

            <div className="row">
                {
                    CardBox.map(card => {
                        return (
                            <div className="col-xl-3 col-md-6 mb-4" key={card.type}>
                                <div className={`card border-left-${card.type} shadow h-100 py-2`}>
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className={
                                                    `text-xs font-weight-bold 
                                                text-${card.type} text-uppercase mb-1`
                                                }>{card.heading}</div>
                                                {
                                                    card.progress ? (
                                                        <div className={
                                                            `row no-gutters align-items-center`
                                                        }>
                                                            <div className="col-auto">
                                                                <div className={
                                                                    `h5 mb-0 mr-3 font-weight-bold 
                                                                    text-gray-800`
                                                                }>{card.title} </div>
                                                            </div>
                                                            <div className="col">
                                                                <div className={
                                                                    "progress progress-sm mr-2"
                                                                }>
                                                                    <div
                                                                        className={
                                                                            "progress-bar bg-info"
                                                                        }
                                                                        role="progressbar"
                                                                        style={{
                                                                            width: card.title
                                                                        }}
                                                                        aria-valuenow={
                                                                            card.progress
                                                                        }
                                                                        aria-valuemin="0"
                                                                        aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    ) : (
                                                            <div className={
                                                                `h5 mb-0 font-weight-bold 
                                                                text-gray-800`
                                                            }> {card.title} </div>
                                                        )
                                                }

                                            </div>
                                            <div className="col-auto">
                                                <i className={
                                                    `fas ${card.icon} fa-2x text-gray-300`
                                                }></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className="row">
                {
                    CardWithContent.map(card => {
                        return (
                            <div className="col-lg-6" key={card.heading}>
                                <Card {...card} />
                            </div>
                        )
                    })
                }
            </div>

        </Fragment >
    );
}

export default Cards;