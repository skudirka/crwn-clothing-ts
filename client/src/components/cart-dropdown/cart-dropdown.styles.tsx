import styled from 'styled-components';
import styledComponentsTS from 'styled-components-ts';
import CustomButton, {CustomButtonProps} from '../custom-button/custom-button.component';

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: none;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;

    &.open {
        display: flex;
    }
`;
CartDropdownContainer.displayName = 'CartDropdownContainer';

export const EmptyMessageContainer = styled.span`
    font-size: 18px;
    margin: 50px auto;
`;
EmptyMessageContainer.displayName = 'EmptyMessageContainer';

export const CartItemsContainer = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`;

export type CheckoutButtonProps = CustomButtonProps & {
    displayName?:string;
};
export const CheckoutButton = styledComponentsTS<CheckoutButtonProps>(styled(CustomButton))`
    margin-top: auto;
`;
CheckoutButton.displayName = 'CheckoutButton';