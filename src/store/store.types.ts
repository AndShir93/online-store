interface Catalog {
  id: number;
  name: string;
}

interface Action {
  type: string;
  payload: State;
}

export interface State {
  catalogs: Catalog[];
  user: string;
}

export type StoreReducer = (state: State, action: Action) => State;
