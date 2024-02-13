import { DollarCircleOutlined, EyeOutlined, ShoppingCartOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons';
// import { Container, Row, Col } from 'react-bootstrap';
import { Typography, Space, Card, Statistic, Table, Modal, Spin, Row, Col, } from 'antd';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { getOrders, getRevenue } from '../../API';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


const { Title: AntdTitle, Text } = Typography;


const Dashboard = () => {
    return (
        <>
            <Typography.Title level={4}>Dashboard</Typography.Title>
            <Row gutter={[16, 16]} justify="start">
                <Space >
                    <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                        <DashboardCard icon={<ShoppingCartOutlined style={{ color: "green", backgroundColor: "rgba(0,255,0,0.25)", borderRadius: 20, fontSize: 24, padding: 8 }} />} title={"Orders"} value={2435} />
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                        <DashboardCard icon={<ShoppingOutlined style={{ color: "purple", backgroundColor: "rgba(0,255,255,0.25)", borderRadius: 20, fontSize: 24, padding: 8 }} />} title={"Inventory"} value={6345} />
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                        <DashboardCard icon={<UserOutlined style={{ color: "red", backgroundColor: "rgba(255,0,0,0.25)", borderRadius: 20, fontSize: 24, padding: 8 }} />} title={"Customers"} value={8145} />
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                        <DashboardCard icon={<DollarCircleOutlined style={{ color: "blue", backgroundColor: "rgba(0,0,255,0.25)", borderRadius: 20, fontSize: 24, padding: 8 }} />} title={"Revenue"} value={9845} />
                    </Col>
                </Space>
            </Row>

            <Row gutter={[16, 16]} justify="start">
                <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                    <RecentOrders />
                </Col>
                <Col xs={20} sm={12} md={16} lg={18} xl={18}>
                    <DashboardChart />
                </Col>
            </Row >


        </>

    );
}

function DashboardCard({ title, value, icon }) {
    return (
        <Card style={{ width: 300, height: 130, boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)", marginRight: 10 }}>
            <Space direction='horizontal'>
                {icon}
                <Statistic title={<span style={{ fontSize: 16, fontWeight: 'bold', color: 'black', paddingBottom: 5 }}>{title}</span>} value={`$${value}`} />
            </Space>
        </Card>
    );
}

function RecentOrders() {
    const [dataSource, setDataSource] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [pokemonDetails, setPokemonDetails] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        setLoading(true);
        getOrders().then(res => {
            setDataSource(res.results.map((pokemon, index) => ({
                key: index,
                name: pokemon.name,
                url: pokemon.url
            })));
            setLoading(false);
        })
            .catch(error => {
                console.error('Error fetching Pokemon data:', error);
                setLoading(false);
            });
    }, []);

    const showModal = async (record) => {
        setSelectedPokemon(record);
        setModalVisible(true);

        try {
            const response = await axios.get(record.url);
            setPokemonDetails(response.data);
        } catch (error) {
            console.error('Error fetching Pokemon details:', error);
        }
    };

    const closeModal = () => {
        setModalVisible(false);
        setPokemonDetails(null);
    };

    return (
        <>
            <Card style={{ width: 400, height: 500, boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)", marginTop: 20 }}>
                <AntdTitle level={3}>Pokemon Details</AntdTitle >
                <Table
                    style={{ fontSize: '20px', width: '500px' }}
                    columns={[
                        { title: 'Name', dataIndex: 'name' },
                        {
                            title: 'Details',
                            dataIndex: 'url',
                            render: (text, record) => <a onClick={() => showModal(record)}><EyeOutlined style={{ fontSize: '20px' }} /></a>
                        }

                    ]}
                    loading={loading}
                    dataSource={dataSource}
                    pagination={{ total: 20, pageSize: 5 }}
                />
                <PokemonDetailsModal pokemon={pokemonDetails} visible={modalVisible} onClose={closeModal} />
            </Card >
        </>
    );
}

function PokemonDetailsModal({ pokemon, visible, onClose }) {
    if (!visible || !pokemon) return null;

    return (
        <Modal
            title={<AntdTitle level={3}>{pokemon.name}</AntdTitle>}
            visible={visible}
            onCancel={onClose}
            footer={null}
        >
            <Spin spinning={!pokemon}>
                <div style={{ textAlign: 'center' }}>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} style={{ maxWidth: '100%', height: 'auto', maxHeight: '700px', marginBottom: '2px' }} />
                    <AntdTitle level={4}>Details</AntdTitle>
                    <Text strong>Name: </Text><Text>{pokemon.name}</Text><br />
                    <Text strong>Abilities: </Text><Text>{pokemon.abilities.map(ability => ability.ability.name).join(', ')}</Text><br />
                    <Text strong>Species: </Text><Text>{pokemon.species.name}</Text><br />
                </div>
            </Spin>
        </Modal>
    );
}

function DashboardChart() {

    const [revenueData, setRevenueData] = useState({
        labels: [],
        datasets: []
    })

    useEffect(() => {
        getRevenue()
            .then(res => {
                console.log(res.carts);
                const labels = res.carts.map(cart => `User-${cart.userId}`);
                const data = res.carts.map(cart => cart.discountedTotal);
                const dataSource = {
                    labels,
                    datasets: [
                        {
                            label: 'Revenue',
                            data,
                            backgroundColor: 'rgba(255, 0, 0, 1)',
                        }
                    ],
                };
                setRevenueData(dataSource);
            })
            .catch(error => {
                console.error('Error fetching revenue data:', error);
            });
    }, []);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom'
            },
            title: {
                display: true,
                text: 'Order Revenue',
            },
        },
    };

    return (
        <Card style={{ width: 800, height: 500, boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)", marginRight: 10, marginLeft: 140, marginTop: 22 }}>
            < Bar options={options} data={revenueData} />
        </Card >
    )

}

export default Dashboard;