import React, {useState} from 'react'
import {Space} from "antd";
import {Post} from "../Post";
import {postData} from '../../../post'

import './index.css'

export const PostList = () => {
    const [state, setState] = useState(postData);

    return (
        <div className="postlist">
            {
                state.map((postInfo, idx) => {
                    return (
                        <Post postInfo={postInfo} key={idx}/>
                    )
                })
            }
        </div>
    )
}