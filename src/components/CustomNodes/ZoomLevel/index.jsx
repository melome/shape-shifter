import React from 'react';
import { Paper, Slider } from '@mui/material';
import { Handle, Position } from 'reactflow';
import './index.css';

import useShapeStore from '../../../store/shapeStore';

export default function ZoomLevel({ data, isConnectable }) {
    const [value, setZoomLevel] = useShapeStore(state => [state.zoomLevel, state.setZoomLevel]);

    const handleZoomLevel = (event, newValue) => {
        event.stopPropagation();
        setZoomLevel(newValue);
    };

    const stopPropagation = (event) => {
        event.stopPropagation();
    }

    return (
        <Paper elevation={3} 
        onDragStart={(e) => {
        e.stopPropagation();
        }}
        >
            <label htmlFor="zoom-level">zoom level:</label>
            <Slider
                pointerevents="auto"
                value={value}
                size='small'
                aria-label="Zoom Level"
                min={0}
                max={100}
                onChange={handleZoomLevel}
                onMouseDown={stopPropagation}
                onTouchStart={stopPropagation}
            />
            <Handle
                type="source"
                position={Position.Right}
                isConnectable={isConnectable}
            />
        </Paper>
    );
}  