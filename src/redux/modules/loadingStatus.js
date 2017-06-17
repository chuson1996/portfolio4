const REGISTER_ITEM = 'loadingStatus/REGISTER_ITEM';
const DONE_LOADING = 'loadingStatus/DONE_LOADING';
const DEREGISTER_ITEM = 'loadingStatus/DEREGISTER_ITEM';

const initial = {
  items: {}
};

export default function reducer(state = initial, action) {
  switch (action.type) {
  case REGISTER_ITEM:
    return {
      ...state,
      items: {
        ...state.items,
        [action.item.key]: action.item.loading
      }
    };

  case DEREGISTER_ITEM: {
    const newItems = { ...state.items };
    delete newItems[action.item.key];
    return {
      ...state,
      items: newItems
    };
  }

  case DONE_LOADING:
    return {
      ...state,
      items: {
        ...state.items,
        [action.item.key]: false
      }
    };

  default:
    return state;
  }
}

export function registerItem(key) {
  return {
    type: REGISTER_ITEM,
    item: {
      key,
      loading: true
    }
  };
}

export function doneLoading(key) {
  return {
    type: DONE_LOADING,
    item: {
      key
    }
  };
}

export function deregisterItem(key) {
  return {
    type: DEREGISTER_ITEM,
    item: {
      key
    }
  };
}

export function isLoading(globalState) {
  return Object.values(globalState.loadingStatus.items).some((loading) => loading);
}
