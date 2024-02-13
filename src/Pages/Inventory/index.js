import { FastBackwardFilled } from '@ant-design/icons'
import { Typography, Space, Table, Avatar, Rate, Card } from 'antd'
import React, { useState, useEffect } from 'react'
import { getInventory } from '../../API'

const Inventory = () => {
    const [loading, setLoading] = useState(false)
    const [dataSource, setDataSource] = useState([])

    useEffect(() => {
        setLoading(true)
        getInventory().then(res => {
            setDataSource(res.products)
        })
    }, [])

    return (
        <Card style={{ width: 1000, height: 600, boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)", marginTop: 20 }}>
            <Space size={20} direction='vertical'>
                <Typography.Title level={4} style={{ marginTop: 30, fontWeight: "bold" }}>Inventory</Typography.Title>
                <Table
                    columns={[
                        {
                            title: "Thumbnail",
                            dataIndex: "thumbnail",
                            render: link => <Avatar src={link} />
                        },
                        {
                            title: "Title",
                            dataIndex: "title"
                        },
                        {
                            title: "Price",
                            dataIndex: "price",
                            render: (value) => <span>${value}</span>
                        },
                        {
                            title: "Rating",
                            dataIndex: "rating",
                            render: (rating) => <Rate value={rating} allowHalf />
                        },

                        {
                            title: "Brand",
                            dataIndex: "brand"
                        },
                        {
                            title: "Category",
                            dataIndex: "category"
                        },
                        {
                            title: "Stock",
                            dataIndex: "stock"
                        }
                    ]}
                    dataSource={dataSource}
                    pagination={{
                        pageSize: 5,
                    }}
                >
                </Table>
            </Space >
        </Card>
    )
}

export default Inventory