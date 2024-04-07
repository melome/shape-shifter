import React from 'react';
import { Paper, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { Handle, Position } from 'reactflow';
import styles from './index.module.css';

import useShapeStore from '../../../store/shapeStore';
import { useStore } from '../../../store/reactflowStore';


export default function ShapeType({ data, isConnectable }) {
    const {shapes, shape, setShape} = useShapeStore();
    const {nodes, connectedEdges} = useStore();

    // Filter nodes with type "shapeType"
    const shapeColorNode = nodes.find((node) => {
        if (node.type === "shapeType") {
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

    
    const handleShapeChange = (event) => {
        if (isConnected){
            setShape(event.target.value);
        }
    };

    return (
        <Paper elevation={3}>
            <label htmlFor="shape-color">shape type:</label>
            <RadioGroup
                aria-labelledby="shapes"
                value={shape}
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
