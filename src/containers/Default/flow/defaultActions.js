import { DEFAULT_SYNC_DEFAULT,DEFAULT_ASYNC_DEFAULT,DEFAULT_CLEAR_DATA } from './constants';

export const getDefault = (params) => {
  return {
    type: DEFAULT_SYNC_DEFAULT,
    payload: {
      data: 'wower'
    }
  }
}

export const getAsyncDefault = (params) => (dispatch) => {
  setTimeout(() => {
    dispatch((() => {
      return {
        type: DEFAULT_ASYNC_DEFAULT,
        payload: {
          data: 'icepy'
        }
      }
    })())
  },2000)
}

export const clearData = () => {
  return {
    type: DEFAULT_CLEAR_DATA
  }
}