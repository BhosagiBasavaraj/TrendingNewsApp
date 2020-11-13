import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Button } from '../components/CommonComponents'
import { loadInitialCountry } from '../redux/actions/load_products_action/LoadProductsAction';
import { DefaultLoading } from '../components/DefaultLoading';
import { Card } from 'antd';
import Item from 'antd/lib/list/Item';
import '../assets/mainLayout.css';
import { Row, Col } from 'antd';
const { Meta } = Card;


function HomePage(props) {

    React.useEffect(() => {
        props.loadInitialCountry();
    }, []);


    const { isLoadingProducts } = props;

    if (isLoadingProducts) {
        return (
            <DefaultLoading />
        )
    };

    const homePageCardItems = props.homePageItems.sources && props.homePageItems.sources.map((item, id) => (

        <Col span={24} key={id}>
            <div className='news-article'>
                <p><b><i>Publisher: {item.name ? item.name : 'No Data'}</i></b></p>
                <p>Description: {item.description}</p>
                <p>Category: {item.category}</p>
                <p><a href={item.url} target='_blank'>Read more</a></p>
            </div>
        </Col>
    ))
    return (
        <React.Fragment>
            <Row justify="center">
                {homePageCardItems}
            </Row>
        </React.Fragment>
    );
}

function mapStateToProps(state) {
    return {
        isLoadingProducts: state.load_products_reducer.isLoading,
        homePageItems: state.load_products_reducer
    }
}

const mapDispatchToProps = {
    loadInitialCountry
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
