import styled from "styled-components";

export default styled.div `
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        span {
            color: #ffffff;
        }
        input {
            padding: 10px;
            width: 303px;
            height: 45px;
            border: 1px solid #000000;
            border-radius: 5px;
            margin-bottom: 10px;
        }
        input::placeholder {
            font-family: 'Righteous';
        }
        img {
            width: 205px;
            height: 183pxpx;
            margin-bottom: 20px;
        }
        h1 {
            font-size: 25px;
            color: #ffffff;
        }
        button {
            font-family: 'Righteous';
            font-size: 17px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #A328D6;
            border-radius: 5px;
            color: #ffffff;
            width: 303px;
            height: 45px;
            margin-bottom: 10px;
            border: none;
            disabled {
                opacity: 0.1;
            }           
        }
        button:hover {
            cursor: pointer;
            background: purple;
        }
    `;