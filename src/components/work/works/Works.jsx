import React, {memo, useEffect, useState} from 'react';
import {projectsData, projectsNav} from "../data/Data";
import {WorkItems} from "../WorkItems";

export const Works = memo(({}) => {
    const [item, setItem] = useState({name: "all"});
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);


    useEffect(() => {
        if (item.name === "all") {
            setProjects(projectsData)
        } else {
            const newProjects = projectsData.filter((prj) => {
                return prj.category.toLowerCase() === item.name;
            })
            setProjects(newProjects);
        }
    }, [item])

    const handleClick = (e, index) => {
        setItem({name: e.currentTarget.textContent.toLowerCase()})
        setActive(index);
    }

    return (
        <div>

            <div className="work__filters">
                {projectsNav.map((item, index) => {
                    return (
                        <span
                            onClick={(e) => {
                                handleClick(e, index);
                            }}
                            className={`${active === index ? "active-work" : ""} work__item`}
                            key={index}>{item.name}</span>
                    )
                })}

            </div>
            <div className="work__container container grid">
                {projects.map((item) => {
                    return <WorkItems item={item} key={item.id}/>
                })}
            </div>

        </div>
    );
});
