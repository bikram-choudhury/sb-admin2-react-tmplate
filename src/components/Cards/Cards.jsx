import React, { Fragment } from 'react';
import { CardBoxData, CardWithContent } from './_card';
import Card from '../Card/Card';
import CardBox from '../CardBox/CardBox';

const Cards = _ => {
    return (
        <Fragment>

            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Cards</h1>
            </div>

            <div className="row">
                {
                    CardBoxData.map(card => {
                        return (
                            <div className="col-xl-3 col-md-6 mb-4" key={card.type}>
                                <CardBox {...card} />
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
                                <Card {...card}>
                                    <div dangerouslySetInnerHTML={{ __html: card.content }}></div>
                                </Card>
                            </div>
                        )
                    })
                }
            </div>

        </Fragment >
    );
}

export default Cards;