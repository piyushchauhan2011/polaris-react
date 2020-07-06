import React from 'react';

import type {SelectionType, SELECT_ALL_ITEMS} from './types';

export interface IndexContextType {
  loading?: boolean;
  bulkSelectState?: boolean | 'indeterminate';
  resourceName: {
    singular: string;
    plural: string;
  };
  selectedItemsCount: typeof SELECT_ALL_ITEMS | number;
  bulkActionsAccessibilityLabel?: string;
  selectMode: boolean;
  paginatedSelectAllText?: string;
  itemCount: number;
  selectable?: boolean;
  hasMoreItems?: boolean;
}

export const IndexContext = React.createContext<IndexContextType | undefined>(
  undefined,
);

export const IndexSelectionChangeContext = React.createContext<
  | ((
      selectionType: SelectionType,
      toggleType: boolean,
      selection?: string | Range,
      position?: number,
    ) => void)
  | undefined
>(undefined);

export interface IndexRowContextType {
  selectMode: boolean;
}

export const IndexRowContext = React.createContext<
  IndexRowContextType | undefined
>(undefined);
