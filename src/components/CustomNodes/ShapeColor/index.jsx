import React from 'react';
import { Paper } from '@mui/material';
import { MuiColorInput } from 'mui-color-input';
import { Handle, Position } from 'reactflow';
import styles from './index.module.css';


import useShapeStore from '../../../store/shapeStore';

export default function ShapeColor({ data, isConnectable }) {
    const [value, setColor] = useShapeStore(state => [state.shapeColor, state.setShapeColor]);

    const handleColorChange = (newColor) => {
        setColor(newColor)
    }

    return (
        <Paper elevation={3} className={styles.paper}>
            <label htmlFor="Shape Color">shape color:</label>
            <MuiColorInput
                format='hex'
                value={value}
                onChange={handleColorChange}
                className={styles.MuiColorInput}
            />
            <Handle
                type="source"
                position={Position.Right}
                isConnectable={isConnectable}
            />
        </Paper>
    );
}