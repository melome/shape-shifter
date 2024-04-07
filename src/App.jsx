// App.jsx
import React from "react";
import "reactflow/dist/style.css";
import "./App.css";
import ReactFlow, { 
  MiniMap, 
  Controls, 
  Background,
  getConnectedEdges
} from "reactflow";
import { useStore } from './store/reactflowStore'; // Import useStore from store.js

export default function App() {
  const { 
    nodes, 
    edges, 
    defaultEdgeOptions, 
    nodeTypes, 
    onConnect, 
    onNodesChange, 
    onEdgesChange,
    connectedEdges
  } = useStore();

  console.log(connectedEdges)

  return (  
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        defaultEdgeOptions={defaultEdgeOptions}
        nodeTypes={nodeTypes}
        fitView="true"
        snapToGrid={true}
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={30} size={2} />
      </ReactFlow>
    </div>
  );
}