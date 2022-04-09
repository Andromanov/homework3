import React from "react"
import {PageHeader} from "antd";
import './index.css'
import {ButtonCreate} from "../Button";

export const Header = () => {

    const routes = [
        {
            path: ' ',
            breadcrumbName: 'Home',
        },
        {
            path: ' ',
            breadcrumbName: 'Posts',
        },
    ];

    return (
        <>
            <PageHeader
                className="site-page-header"
                title="Posts"
                breadcrumb={{ routes }}
            />
            <div className="header-button">
                <ButtonCreate />
            </div>
        </>
    )
}