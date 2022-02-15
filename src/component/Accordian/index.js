import React, { useState } from "react";
import './index.css';

const Accordian = ({ title, content = [], parentExpanded = false  }) => {
    const [expanded, setExpanded] = useState(false);
    return (
        <div className="container">
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                {content.length ? <p onClick={() => setExpanded(expanded => !expanded)} className="button">{expanded ? "-" : "+"}</p> : null}
                <p>{title}</p>
            </div>
            {expanded && content.length && <div className="content">
                {content.map(({key, title, content}) => {
                    return (
                       <div style={{marginBottom: 10}}>
                            <Accordian key={key} title={title} content={content}  />
                       </div>
                    );
                })}
            </div>}
        </div>
    );
};

export default Accordian;