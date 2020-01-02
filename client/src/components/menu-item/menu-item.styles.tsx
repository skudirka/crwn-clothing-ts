import styled from 'styled-components';

export const MenuItemContainer = styled.div`
    min-width: 30%;
    height: ${({size}) => (size ? '380px' : '240px')};
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    overflow: hidden;

    &:hover {
        cursor: pointer;

        & .background-image {
            transform: scale(1.1);
            transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }

        & .content {
            opacity: 0.9;
        }
    }

    &:first-child {
        margin-right: 7.5px;
    }

    &:last-child {
        margin-left: 7.5px;
    }

    @media screen and (max-width: 800px) {
        height: 200px;
    }


    .background-image {
        width: 100%;
        height: 100%;
        background-position: center;
        background-size: cover;
    }

    .content {
        height: 90px;
        padding: 0 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 1px solid black;
        background-color: #fff;
        opacity: .7;
        position: absolute;

        .title {
            font-weight: bold;
            margin-bottom: 6px;
            font-size: 22px;
            color: #4a4a4a;
        }

        .subtitle {
            font-weight: lighter;
            font-size: 16px;
        }
    }
`;