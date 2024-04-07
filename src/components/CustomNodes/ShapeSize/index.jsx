import React from 'react';
import { Paper, Slider } from '@mui/material';
import { Handle, Position } from 'reactflow';

import useShapeStore from '../../../store/shapeStore';
import { useStore } from '../../../store/reactflowStore';

export default function ShapeSize({ data, isConnectable }) {
    const { shapeSize, setShapeSize } = useShapeStore();
    const {nodes, connectedEdges} = useStore();

    // Filter nodes with type "shapeSize"
    const shapeColorNode = nodes.find((node) => {
        if (node.type === "shapeSize") {
            console.log(node);
            return node;
        }
    });

    const outputNodeId = "4";

    const isConnected = connectedEdges.find((connection) => {
        if (connection.source === shapeColorNode.id && connection.target === outputNodeId) {
            return true;
        }
    })


    const handleShapeSize = (event, newValue) => {
        if (isConnected){
            setShapeSize(newValue);
        }
    };

    return (
        <Paper elevation={3} >
            <label htmlFor="zoom-level">shape size:</label>
            <Slider
                className='nodrag'
                pointerEvents="auto"
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