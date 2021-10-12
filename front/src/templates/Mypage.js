import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Myreview from '../components/Myreview';
import Favorites from '../components/Favorites';

function Mypage() {
    return (
        <Tabs
            defaultActiveKey="home"
            transition={false}
            id="noanim-tab-example"
            className="mb-3"
>
        <Tab eventKey="home" title="Home">
            <Favorites />
        </Tab>
    <Tab eventKey="profile" title="Profile">
        <Myreview />
    </Tab>

</Tabs>


    );
}

export default Mypage;

