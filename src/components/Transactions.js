import styled from "styled-components";

export default styled.div `
    position: relative;
    padding: 20px 0px 20px 15px;
    background: #fff;
    color: #000;
    font-size: 16px;
    margin-top: 30px;
    height: 60vh;
    border-radius: 8px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    div {
        display: flex;
        justify-content: space-between;
        margin-bottom: 18px;
        p {
            display: flex;
            margin-right: 3px;
        }
    }
    section {
        display: flex;
        justify-content: space-between;
    }
    .date {
        color: gray;
        margin-right: 8px;
    }
    .saldo {
        position: absolute;
        bottom: 20px;
        left: 20px;
    }
    .value {
        position: absolute;
        bottom: 20px;
        right: 28px;
    }
    .icon {
        margin-left: 8px;
    }
    .green {
        color: #0BDA51;
    }
    .red {
        color: red;
    }
`;