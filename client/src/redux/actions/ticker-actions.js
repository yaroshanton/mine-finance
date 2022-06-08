export const UPDATE_TICKER = 'UPDATE_TICKER';

export function updateTicker(data) {
  return {
    type: UPDATE_TICKER,
    data,
  };
}
