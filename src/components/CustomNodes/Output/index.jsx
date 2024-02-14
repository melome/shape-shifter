import React from 'react';
import { Paper } from '@mui/material';
import { Handle, Position } from 'reactflow';
import styles from './index.module.css';

import useShapeStore from '../../../store/shapeStore';

export default function Output({ data, isConnectable }) {
    const { shape, shapeColor, shapeSize } = useShapeStore();

    // Calculate the size based on zoomLevel
    const size = shapeSize * 2 + 50;    // 50 is the minimum size for the output node);

    // Define dynamic styles based on shape and shapeColor
    const dynamicStyles = {
        width: shape === 'square' ? size : size,
        height: shape === 'square' ? size : size,
        borderRadius: shape === 'circle' ? '50%' : '0',
        backgroundColor: shapeColor,
        borderColor: shapeColor,
    };

    return (
        <Paper elevation={3}>
            <label htmlFor="output:">output:</label>
            <div className={styles.output} style={dynamicStyles}>
                <p>  Hello World! </p>
            </div>
            <Handle
                type="target"
                position={Position.Left}
                isConnectable={isConnectable}
            />
        </Paper>
    );
}
