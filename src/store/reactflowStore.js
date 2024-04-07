// store.js
import { create } from "zustand";

import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  getConnectedEdges
} from "reactflow";

import ShapeColor from "../components/CustomNodes/ShapeColor/index.jsx";
import ShapeType from "../components/CustomNodes/ShapeType/index.jsx";
import ShapeSize from "../components/CustomNodes/ShapeSize/index.jsx";
import Output from "../components/CustomNodes/Output/index.jsx";

const nodeTypes = {
  shapeColor: ShapeColor,
  shapeType: ShapeType,
  shapeSize: ShapeSize,
  output: Output,
};

const initialNodes = [
  {
    id: "1",
    type: "shapeColor",
    position: { x: 250, y: 5 },
    data: { label: "Change Shape Color" },
  },
  {
    id: "2",
    type: "shapeType",
    position: { x: 250, y: 100 },
    data: { label: "Change Shape Type" },
  },
  {
    id: "3",
    type: "shapeSize",
    position: { x: 250, y: 220 },
    data: { label: "Change Zoom Level" },
  },
  {
    id: "4",
    type: "output",
    position: { x: 550, y: 50 },
    data: { label: "Output" },
  },
];

const initialEdges = [
  { id: "e1-4", source: "1", target: "4", animated: true },
  { id: "e2-4", source: "2", target: "4", animated: true },
  { id: "e3-4", source: "3", target: "4", animated: true },
];

const initialConnectedEdges = getConnectedEdges(initialNodes, initialEdges);

export const useStore = create((set, get) => ({
  nodes: initialNodes,
  edges: initialEdges,
  connectedEdges: initialConnectedEdges,

  defaultEdgeOptions: { animated: true },
  nodeTypes,
  onConnect: (params) => {
    console.log("onConnect", params); 
    set((state) => ({
      edges: addEdge(params, state.edges),
    }));

    set((state) => ({
      connectedEdges: getConnectedEdges(state.nodes, state.edges),
    }))

  },
  onNodesChange: (changes) => {
    console.log("onNodesChange", changes);
    set((state) => ({
      nodes: applyNodeChanges(changes, state.nodes),
    }));

  },
  onEdgesChange: (changes) => {
    console.log("onEdgesChange", changes);
    set((state) => ({
      edges: applyEdgeChanges(changes, state.edges),
    }));

    set((state) => ({
      connectedEdges: getConnectedEdges(state.nodes, state.edges),
    }))

  }
}));