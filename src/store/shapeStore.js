import { create } from 'zustand'

const useShapeStore = create((set) => ({
    shapes: ['square', 'circle'],
    shape: 'circle',
    setShape: (shape) => set({ shape }),
    zoomLevel: 20,
    setZoomLevel: (zoomLevel) => set({ zoomLevel }),
    shapeColor: '#ff0071',
    setShapeColor: (shapeColor) => set({ shapeColor }),
}));

export default useShapeStore;