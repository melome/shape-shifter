import React, { useCallback } from "react";
import "reactflow/dist/style.css";
import "./App.css";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  applyEdgeChanges,
  applyNodeChanges,
  addEdge
} from "reactflow";

//Import customized nodes
import ShapeColor from "./components/CustomNodes/ShapeColor/index.jsx";
import ShapeType from "./components/CustomNodes/ShapeType/index.jsx";
import ZoomLevel from "./components/CustomNodes/ZoomLevel/index.jsx";
import Output from "./components/CustomNodes/Output/index.jsx";
const nodeTypes = {
  shapeColor: ShapeColor,
  shapeType: ShapeType,
  zoomLevel: ZoomLevel,
  output: Output
};

const initialNodes = [
  {
    id: "1",
    type: "shapeColor",
    position: { x: 250, y: 5 },
    data: { label: "Change Shape Color" }
  },
  {
    id: "2",
    type: "shapeType",
    position: { x: 250, y: 100 },
    data: { label: "Change Shape Type" }
  },
  {
    id: "3",
    type: "zoomLevel",
    position: { x: 250, y: 220 },
    data: { label: "Change Zoom Level" }
  },
  {
    id: "4",
    type: "output",
    position: { x: 550, y: 50 },
    data: { label: "Output" }
  }
]

const initialEdges = [
  { id: 'e1-4', source: '1', target: '4', animated: true},
  { id: 'e2-4', source: '2', target: '4', animated: true},
  { id: 'e3-4', source: '3', target: '4', animated: true}
];

export default function App() {
  const [nodes, setNodes] = useNodesState(initialNodes);
  const [edges, setEdges] = useEdgesState(initialEdges);
  const defaultEdgeOptions = { animated: true};

  const onConnect = useCallback(
    (params) => setEdges((edges) => addEdge(params, edges)),
    [setEdges]
  );

  const onNodesChange = useCallback(
    (changes) => setNodes((nodes) => applyNodeChanges(changes, nodes)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((edges) => applyEdgeChanges(changes, edges)),
    [setEdges]
  );

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
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={30} size={2} />
      </ReactFlow>
    </div>
  );
}