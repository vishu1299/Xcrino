import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Shop from '../../components/Shop'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const ShopPage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Shop'} pagesub={'Shop'}/> 
            <Shop/>
            <Footer footerClass={'wpo-ne-footer-2'}/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ShopPage;
