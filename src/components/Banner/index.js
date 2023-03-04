import React from 'react'
import './style.css'
import { Carousel } from 'antd'

const Banner = () => {
    return (
        <Carousel >
            <div className="banner">
                <div className="container">
                    <div className="banner__content">
                        <div className="banner__left">
                            <div className="banner__left__list">
                                <p className="banner__title">Cảm hứng mới 2021</p>
                                <h1 className="banner__name">ĐIỆN THOẠI THÔNG MINH ĐỜI MỚI</h1>
                                <p className="banner__title">Xu hướng từ bộ sưu tập điện thoại</p>
                                <div className="banner__left__button">
                                    <button className="button__item">Cửa hàng</button>
                                </div>
                            </div>
                        </div>
                        <div className="banner__right">
                            <div className="banner__right__bg">
                                <img src="https://res.cloudinary.com/dkcjgqwya/image/upload/v1677916552/samples/img/1_k42req.png?fbclid=IwAR3Zt1vj_bXpJAslHo_mVXpCs_jonxPwqtHuKBqnfTPdF_DX9zn7Bsv61-I" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner">
                <div className="container">
                    <div className="banner__content">
                        <div className="banner__left">
                            <div className="banner__left__list">
                                <p className="banner__title">Cảm hứng mới 2021</p>
                                <h1 className="banner__name">THIẾT BỊ THÔNG MINH CẦM TAY</h1>
                                <p className="banner__title">Xu hướng từ bộ sưu tập phong cách sang trọng</p>
                                <div className="banner__left__button">
                                    <button className="button__item">Cửa hàng</button>
                                </div>
                            </div>
                        </div>
                        <div className="banner__right">
                            <div className="banner__right__bg">
                                <img src="https://res.cloudinary.com/dkcjgqwya/image/upload/v1677916553/samples/img/2_yl8qfz.png?fbclid=IwAR3nfoREFZTe6QSd0qb66UKvYZrXrxx2z2uM107LPv4Dn6wU8bIh0K5cYZA" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner">
                <div className="container">
                    <div className="banner__content">
                        <div className="banner__left">
                            <div className="banner__left__list">
                                <p className="banner__title">Cảm hứng mới 2023</p>
                                <h1 className="banner__name">ĐIỆN THOẠI THÔNG MINH ĐỜI MỚI</h1>
                                <p className="banner__title">công nghệ đột phá</p>
                                <div className="banner__left__button">
                                    <button className="button__item">Cửa hàng</button>
                                </div>
                            </div>
                        </div>
                        <div className="banner__right">
                            <div className="banner__right__bg">
                                <img src="https://res.cloudinary.com/dkcjgqwya/image/upload/v1677916553/samples/img/3_tb8hb7.png?fbclid=IwAR25gtAAMCaH7tqMbdbwdz37F6gThIypS0I0sEPsPW9Pfqine4uOhLQXJqQ" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Carousel>

    )
}

export default Banner
