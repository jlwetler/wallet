import styled from "styled-components";

export default styled.div `
    display: flex;    
    position: relative;
    padding: 0 0 15px 15px;
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
        margin-bottom: 15px;
        aside {
            display: flex;
            margin-right: 3px;
        }
    }
    section {
        overflow-y: scroll;
        display: inline-block;
        padding-top: 15px;
        max-height: 53vh; 
        width: 100%;
    }
    .date {
        color: gray;
        margin-right: 8px;
    }
    .saldo {
        position: absolute;
        bottom: 15px;
        left: 15px;
    }
    .value {
        position: absolute;
        bottom: 15px;
        right: 25px;
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