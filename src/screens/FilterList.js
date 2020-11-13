import React from 'react';
import { connect } from "react-redux";
import { loadFilteredResults } from '../redux/actions/load_products_action/LoadProductsAction';
import { DefaultLoading } from '../components/DefaultLoading';

function FilterList(props) {
    //console.log('XXX', props.searchResults && props.searchResults)
    if (props.isLoading) {
        return (
            <DefaultLoading />
        )
    }

    return (
        props.searchResults && props.searchResults.map((item, index) => (

            <div key={index}>
                <p><b><i>Author: {item.author ? item.author : 'No Data'}</i></b></p>
                <p>{item.content}</p>
            </div>

        ))
    )
}


function mapStateToProps(state) {
    return {
        filterOptions: state.filterRawData,
        searchResults: state.loadFilterData.articles,
        isLoading: state.loadFilterData.isLoading

    }
}
const mapDispatchToProps = {
    loadFilteredResults
}
export default connect(mapStateToProps, mapDispatchToProps)(FilterList);