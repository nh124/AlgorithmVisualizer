import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NodeType } from '../Algorithms/NodeType';

export const LinkedListAddReducer = createSlice({
  name: 'Display Panel',
  initialState: {
    linkedlist: [] as NodeType[],
    addedNode: false,
  },
  reducers: {
    setLinkedList: (state, action: PayloadAction<NodeType>) => {
      return {
        ...state,
        linkedlist: [...state.linkedlist, action.payload],
      };
    },
    setAddedNode: (state) => {
      return {
        ...state,
        addedNode: true,
      };
    },
  },
});

export const { setLinkedList, setAddedNode } = LinkedListAddReducer.actions;
export default LinkedListAddReducer.reducer;
