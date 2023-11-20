import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NodeType } from '../Algorithms/NodeType';

export const LinkedListAddReducer = createSlice({
  name: 'Display Panel',
  initialState: {
    linkedlist: [] as NodeType[][],
    addedNode: false,
    listIndex: 0,
  },
  reducers: {
    setLinkedList: (state, action: PayloadAction<NodeType[][]>) => {
      return {
        ...state,
        linkedlist: action.payload,
      };
    },
    addToLinkedList: (state, action: PayloadAction<NodeType[][]>) => {
      return {
        ...state,
        linkedlist: [...state.linkedlist, ...action.payload],
      };
    },
    setAddedNode: (state) => {
      return {
        ...state,
        addedNode: true,
      };
    },
    setListIndex: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        listIndex: action.payload,
      };
    },
  },
});

export const { setLinkedList, setAddedNode, addToLinkedList, setListIndex } =
  LinkedListAddReducer.actions;
export default LinkedListAddReducer.reducer;
