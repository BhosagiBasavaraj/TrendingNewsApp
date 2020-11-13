import React from 'react';
import { connect } from "react-redux";
import { loadParticularProduct } from '../redux/actions/load_particular_products_action/LoadParticularProductsAction';
import { addProductToCart } from '../redux/actions/add_to_cart_action/ProductsInCartAction';
import { DefaultLoading } from '../components/DefaultLoading';
import { Card } from 'antd';
import '../assets/mainLayout.css';
import { Row, Col } from 'antd';


function NewsTemplate(props) {

    React.useEffect(() => {
        const idToLoad = props.match.params.slug;
        props.loadParticularProduct(idToLoad);
    }, []);

    const { isLoadingProducts, product } = props;

    if (isLoadingProducts) {
        return (
            <DefaultLoading />
        )
    };
}


function mapStateToProps(state) {
    return {
        isLoadingProducts: state.LoadParticularProductsReducer.isLoading,
        product: state.LoadParticularProductsReducer.data
    }
}

const mapDispatchToProps = {
    loadParticularProduct,
    addProductToCart
}
export default connect(mapStateToProps, mapDispatchToProps)(NewsTemplate);

