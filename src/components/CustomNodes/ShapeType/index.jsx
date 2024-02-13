import React from 'react';
import { Paper, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { Handle, Position } from 'reactflow';
import styles from './index.module.css';

import useShapeStore from '../../../store/shapeStore';

export default function ShapeType({ data, isConnectable }) {
    const shapes = useShapeStore(state => state.shapes);
    const [value, setShape] = useShapeStore(state => [state.shape, state.setShape]);

    const handleShapeChange = (event) => {
        setShape(event.target.value);
    };

    return (
        <Paper elevation={3}>
            <label htmlFor="shape-color">shape type:</label>
            <RadioGroup
                aria-labelledby="shapes"
                value={value}
                name="shapes"
                className={styles.radiogroup}
                onChange={handleShapeChange}
            >
                {shapes.map(shape => (
                    <FormControlLabel
                        className={styles.formcontrol}
                        key={shape}
                        value={shape}
                        control={<Radio className={styles.radio} />}
                        label={shape}
                    />
                ))}
            </RadioGroup>
            <Handle
                type="source"
                position={Position.Right}
                isConnectable={isConnectable}
            />
        </Paper>
    );
}
