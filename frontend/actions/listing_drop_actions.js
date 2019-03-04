export const OPEN_LISTING_DROP = 'OPEN_LISTING_DROP';
export const CLOSE_LISTING_DROP = 'CLOSE_LISTING_DROP';
export const OPEN_CAR_DROP = 'OPEN_CAR_DROP';
export const CLOSE_CAR_DROP = 'CLOSE_CAR_DROP';


export const openListingDrop = () => {
  return ({
    type: OPEN_LISTING_DROP
  });
};

export const closeListingDrop = () => {
  return ({
    type: CLOSE_LISTING_DROP
  });
};

export const openCarDrop = () => {
  return ({
    type: OPEN_CAR_DROP
  });
};

export const closeCarDrop = () => {
  return ({
    type: CLOSE_CAR_DROP
  });
};
