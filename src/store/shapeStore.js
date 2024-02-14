import { create } from 'zustand'

const useShapeStore = create((set) => ({
    shapes: ['square', 'circle'],
    shape: 'circle',
    setShape: (shape) => set({ shape }),
    shapeSize: 100,
    setShapeSize: (shapeSize) => set({ shapeSize }),
    shapeColor: '#ff0071',
    setShapeColor: (shapeColor) => set({ shapeColor }),
}));

export default useShapeStore;