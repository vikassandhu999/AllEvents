import React from "react";
import Select from 'react-select';
import {Row} from "./index";

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

export const XSelect = () => {
    return (
        <Row full={true}>
            <Select
                // defaultValue={flavourOptions[2]}
                label="Single select"
                defaultValue={options[2]}
                options={options}
                // options={flavourOptions}
                theme={theme => ({
                    ...theme,
                    width:"100%",
                    borderRadius: 0,
                    colors: {
                        ...theme.colors,
                    },
                })}
            />
        </Row>
    );
}