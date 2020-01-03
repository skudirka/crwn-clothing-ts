import {IUserState} from './user/user.types';
import {ICartState} from './cart/cart.types';
import {IDirectoryState} from './directory/directory.types';
import {IShopState} from './shop/shop.types';

// State type
export interface IRootState {
    user: IUserState;
    cart: ICartState;
    directory: IDirectoryState;
    shop: IShopState;
};