import React from 'react';
import { Breadcrumb, BreadcrumbItem} from 'reactstrap';


function Home() {
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>Home</BreadcrumbItem>
                </Breadcrumb>
            </div>
        <div className="row ">
            <div className="col-12 col-md-6 mt-5">
                <img src="assets/images/ray.gif" alt="gif"/>
            </div>
            <div className="col-12 col-md-6 mt-5">
                <p class="sz">/r</p>
            </div>
        </div>
    </div>

    );
}

export default Home;