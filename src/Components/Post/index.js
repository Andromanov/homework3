import React from 'react'
import {Avatar, Card, Image, Tag, Timeline, Typography} from "antd";
import './index.css'

const {Text} = Typography

export const Post = (postInfo) => {
    
    const data = postInfo.postInfo
    const author = data.author

    return (
        <Card title={<a>{data.title}</a>} style={{width: 300}}>
            <div className="card__avatar-box">
                <Avatar src={<Image src={author.avatar} />} className="card__avatar" />
                <Text strong>{author.email}</Text>
            </div>
            <p>{data.text}</p>
            <div className="card__tag-box">
                <span>Tags:</span>
                {data.tags.map((tag, idx) => <Tag key={idx}>{tag}</Tag>)}
            </div>
            <Timeline>
                <Timeline.Item>{data.created_at}</Timeline.Item>
                <Timeline.Item color="green">Last edit: {data.updated_at}</Timeline.Item>
            </Timeline>
        </Card>
    )
}