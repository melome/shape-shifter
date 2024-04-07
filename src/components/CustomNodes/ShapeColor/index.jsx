import React from 'react';
import { Paper, TextField } from '@mui/material';
import { Handle, Position } from 'reactflow';
import styles from './index.module.css';


import useShapeStore from '../../../store/shapeStore';
import { useStore } from '../../../store/reactflowStore';

export default function ShapeColor({ data, isConnectable }) {
    const {shapeColor, setShapeColor} = useShapeStore();
    const {nodes, connectedEdges} = useStore();

    // Filter nodes with type "shapeColor"
    const shapeColorNode = nodes.find((node) => {
        if (node.type === "shapeColor") {
            console.log(node);
            return node;
        }
    });

    const outputNodeId = "4";

    const isConnected = connectedEdges.find((connection) => {
        if (connection.source === shapeColorNode.id && connection.target === outputNodeId) {
            console.log("connection exist")
            return true;
        }
    })

    const handleColorChange = (event) => {
        if (isConnected){
            setShapeColor(event.target.value);
        }
    }

    return (
        <Paper elevation={3} >
            <label htmlFor="Shape Color">shape color:</label>
            <div className={styles.container}>
                <input
                    type='color'
                    value={shapeColor}
                    onChange={handleColorChange}
                    className={styles.colorPicker}
                />
                <input
                    value={shapeColor}
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