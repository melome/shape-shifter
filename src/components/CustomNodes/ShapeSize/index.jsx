import React from 'react';
import { Paper, Slider } from '@mui/material';
import { Handle, Position } from 'reactflow';

import useShapeStore from '../../../store/shapeStore';

export default function ShapeSize({ data, isConnectable }) {
    const { shapeSize, setShapeSize } = useShapeStore();

    const handleShapeSize = (event, newValue) => {
        setShapeSize(newValue);
    };

    return (
        <Paper elevation={3} >
            <label htmlFor="zoom-level">shape size:</label>
            <Slider
                className='nodrag'
                pointerevents="auto"
                value={shapeSize}
                size='small'
                aria-label="Zoom Level"
                min={0}
                max={100}
                onChange={handleShapeSize}
            />
            <Handle
                type="source"
                position={Position.Right}
                isConnectable={isConnectable}
            />
        </Paper>
    );
}  