import React from "react";
import { Header } from "./components/Header";
import {Layout} from "antd";
import {PostList} from "./Components/PostList";
import {Footer} from "./Components/Footer";

export const App = () =>{
    return (
        <>
            {}
            <Layout>
                <div className="wrap">
                    <Header/>
                    <PostList />
                </div>
                    <Footer />
            </Layout>
        </>
    )
}