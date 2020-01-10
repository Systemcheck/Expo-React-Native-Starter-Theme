
export const listData = [
  {
    id: 1,
    brand: 'BTWIN',
    title: 'BTW Limited',
    subtitle: 'Limited Edition',
    price: '$10029.99',
    badge: 'NEW',
    badgeColor: '#3cd39f',
    image:
      'https://media.defense.gov/2019/Sep/24/2002186216/780/780/0/190921-F-XN197-0063.JPG',
  },
  {
    id: 2,
    brand: 'Adidas',
    title: 'Adidas Wish',
    subtitle: 'special adidas jacket',
    price: '$999.99',
    priceFrom: true,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxIHU0AO2YINpD0Uhb1wFWwjE_rmuU3iXunE6s2_BstYRBDBWYwg&s',
  },
  {
    id: 3,
    brand: 'Show Me',
    title: 'Glass limited',
    subtitle: 'Office, prom or special parties is all dressed up',
    price: '$529.99',
    priceFrom: true,
    badge: 'SALE',
    badgeColor: '#ee1f78',
    image: 'https://images.pexels.com/photos/1194775/pexels-photo-1194775.jpeg',
  },
  {
    id: 4,
    brand: 'Citizen',
    title: 'CITIZEN ECO-DRIVE',
    subtitle: 'Limited Edition',
    price: '$129.99',
    badge: 'NEW',
    badgeColor: 'green',
    image: 'https://reactnativestarter.com/demo/images/pexels-photo-37839.jpg',
  },
  {
    id: 5,
    brand: 'Weeknight',
    title: 'NEXT-LEVEL WEAR',
    subtitle: 'Office, prom or special parties is all dressed up',
    price: '$29.99',
    priceFrom: true,
    image: 'https://reactnativestarter.com/demo/images/pexels-photo-69212.jpg',
  },
  {
    id: 6,
    brand: 'Mad Perry',
    title: 'CITIZEN ECO-DRIVE',
    subtitle: 'Office, prom or special parties is all dressed up',
    price: '$29.99',
    priceFrom: true,
    badge: 'SALE',
    badgeColor: 'red',
    image: 'https://reactnativestarter.com/demo/images/pexels-photo-108061.jpg',
  },
  {
    id: 7,
    brand: 'Citizen',
    title: 'CITIZEN ECO-DRIVE',
    subtitle: 'Limited Edition',
    price: '$129.99',
    badge: 'NEW',
    badgeColor: '#3cd39f',
    image: 'https://reactnativestarter.com/demo/images/pexels-photo-126371.jpg',
  },
  {
    id: 8,
    brand: 'Weeknight',
    title: 'NEXT-LEVEL WEAR',
    subtitle: 'Office, prom or special parties is all dressed up',
    price: '$29.99',
    priceFrom: true,
    image: 'https://reactnativestarter.com/demo/images/pexels-photo-165888.jpg',
  },
  {
    id: 9,
    brand: 'Mad Perry',
    title: 'CITIZEN ECO-DRIVE',
    subtitle: 'Office, prom or special parties is all dressed up',
    price: '$29.99',
    priceFrom: true,
    badge: 'SALE',
    badgeColor: '#ee1f78',
    image: 'https://reactnativestarter.com/demo/images/pexels-photo-167854.jpg',
  },
  {
    id: 10,
    brand: 'Citizen',
    title: 'CITIZEN ECO-DRIVE',
    subtitle: 'Limited Edition',
    price: '$129.99',
    badge: 'NEW',
    badgeColor: 'green',
    image: 'https://reactnativestarter.com/demo/images/pexels-photo-173427.jpg',
  },
  {
    id: 11,
    brand: 'Weeknight',
    title: 'NEXT-LEVEL WEAR',
    subtitle: 'Office, prom or special parties is all dressed up',
    price: '$29.99',
    priceFrom: true,
    image: 'https://reactnativestarter.com/demo/images/pexels-photo-175696.jpg',
  },
  {
    id: 12,
    brand: 'Mad Perry',
    title: 'CITIZEN ECO-DRIVE',
    subtitle: 'Office, prom or special parties is all dressed up',
    price: '$29.99',
    priceFrom: true,
    badge: 'SALE',
    badgeColor: 'red',
    image: 'https://reactnativestarter.com/demo/images/pexels-photo-175733.jpg',
  },
];

const ITEMS_LOADED = 'GridState/ITEMS_LOADED';

function itemsLoaded(items) {
  return {
    type: ITEMS_LOADED,
    items,
  };
}


export function loadItems() {
  // Do items loading here
  return (dispatch, getState) => {
    if (getState().grid.items.length > 0) return;

    const items = {};
    console.log(getState().grid.items);
    const newItems = listData;
    Object.keys(items).forEach(key => {
      newItems[key] = items[key];
    });

//console.log(newItems);
    dispatch(itemsLoaded(newItems));
  };
}

const defaultState = {
  items: [],
  isLoading: false,
};

export default function GridStateReducer(state = defaultState, action) {
  switch (action.type) {
    case ITEMS_LOADED:
      console.log('items loaded griddata.js')
      return Object.assign({}, state, {
        isLoading: true,
        items: action.items,
      });
    default:
      return state;
  }
}
