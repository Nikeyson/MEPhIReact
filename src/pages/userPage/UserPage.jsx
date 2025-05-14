import {Menu, Avatar, Typography, Descriptions } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import MovieCard from "../../components/movieCard/MovieCard";
import { moviesMock } from "../../utils/mockData";
import './UserPage.css';

const userInfo = [
    {
        label: "Имя",
        children: "Андрей С.",
    },
    {
        label: "Почта",
        children: "example@mail.ru",
    },
    {
        label: "Роль",
        children: "Критик",
    },
    {
        label: "Любимые жанры",
        children: "драма, боевик, фантастика",
    },

];

const menuItems = [
    {
        label: "Главная",
        key: "main"
    },
    {
        label: "Фильмы",
        key: "movies"
    },
];

const UserPage = () => (
    <div id="movie-page">
        <div className="user-header">
            <div className="user-menu">
                <Menu mode="horizontal" style={{ width: 256 }} items={menuItems}/>
            </div>
            <div className="user-profile">
                <Avatar size={40} icon={<UserOutlined />} />
                <div className="user-profile-info">
                    <Typography.Text className="user-profile-name">
                        Андрей С.
                    </Typography.Text>
                    <Typography.Text className="user-profile-role">
                        Критик
                    </Typography.Text>
                </div>
            </div>
        </div>
        <div className="user-content">
            <div className="user-info">
                <Descriptions title="Обо мне" bordered={true} layout="horizontal" column={1} items={userInfo}></Descriptions> 
            </div>
            <div className="movies-list-title">
              <Typography.Title level={4}>
                  Сохраненные фильмы
              </Typography.Title>
            </div>
            <div className="movies-list">
              {moviesMock.map((item) => (
              <MovieCard item={item} />
            ))}
            </div>
        </div>
    </div>
);

export default UserPage;