import React from 'react';
import { Paper, TextField } from '@mui/material';
import { MuiColorInput } from 'mui-color-input';
import { Handle, Position } from 'reactflow';
import styles from './index.module.css';


import useShapeStore from '../../../store/shapeStore';
import { Container } from '@mui/system';

export default function ShapeColor({ data, isConnectable }) {
    const [value, setColor] = useShapeStore(state => [state.shapeColor, state.setShapeColor]);

    const handleColorChange = (event) => {
        setColor(event.target.value);
    }

    return (
        <Paper elevation={3} >
            <label htmlFor="Shape Color">shape color:</label>
            <div className={styles.container}>
                <input
                    type='color'
                    value={value}
                    onChange={handleColorChange}
                    className={styles.colorPicker}
                />
                <input
                    value={value}
                    onChange={handleColorChange}
                    className={styles.colorInput}
                />
            </div>

            <Handle
                type="source"
                position={Position.Right}
                isConnectable={isConnectable}
            />
        </Paper>
    );
}