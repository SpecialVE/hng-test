import React from "react";

const BottomDetail = (props) => {

    const List = props.list.map((item) => {
        return (
            <div key={item}>{item}</div>
        )
    })

    return (
        <div>
            {List}
        </div>

    )
}

export default BottomDetail