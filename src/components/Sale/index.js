import React from 'react'
import './style.css'

const Sale = () => {
    return (
        <div className="sale">
                <div className="row">
                    <div className="sale__content">
                        <div className="sale__item">
                            <img src="https://res.cloudinary.com/dkzpakm7v/image/upload/v1620633369/samples/anh/img/service3_z3xh8t.jpg" alt="" />
                            <div className="sale__item__border"></div>
                        </div>
                    </div>
                    <div className="sale__content">
                        <div className="sale__item">
                            <img src="https://res.cloudinary.com/dkzpakm7v/image/upload/v1620633369/samples/anh/img/service2_hmfgph.jpg" alt="" />
                            <div className="sale__item__border"></div>
                        </div>
                    </div>
                    <div className="sale__content">
                        <div className="sale__item">
                            <img src="https://res.cloudinary.com/dkzpakm7v/image/upload/v1620633369/samples/anh/img/service1_r0zlum.jpg" alt="" />
                            <div className="sale__item__border"></div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Sale