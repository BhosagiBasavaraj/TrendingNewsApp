import React from 'react';
import { connect } from "react-redux";
import { loadInitialCountry } from '../redux/actions/load_products_action/LoadProductsAction';
import { DefaultLoading } from '../components/DefaultLoading';

function CountryNews(props) {
    React.useEffect(() => {
        const country = props.match.params.slug;
        props.loadInitialCountry(country)
    }, [])
    if (props.isLoadingProducts) {
        return (
            <DefaultLoading />
        )
    }
    return (
        props.homePageItems.sources && props.homePageItems.sources.map((item, index) => {
            return (
                <div key={index}>
                    <p><b><i>Publisher: {item.name ? item.name : 'No Data'}</i></b></p>
                    <p>Description: {item.description}</p>
                    <p>Category: {item.category}</p>
                    <p><a href={item.url} target='_blank'>Read more</a></p>
                </div>
            )
        })
    )
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
export default connect(mapStateToProps, mapDispatchToProps)(CountryNews);