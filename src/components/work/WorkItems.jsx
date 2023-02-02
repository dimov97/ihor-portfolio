import React, {memo} from 'react';
import "./work.css"

export const WorkItems = memo(({item}) => {
    return (
        <div className="work__card" key={item.id}>
            <img src={item.image} alt="" className="work__img img"/>
            <h3 className="work__title">{item.title}</h3>
            <a target={"_blank"} href={item.link} className="work__button">
                Demo <i className="bx bx-left-arrow-alt work__button-icon"></i>
            </a>
        </div>
    );
});
