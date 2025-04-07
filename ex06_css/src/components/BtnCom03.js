import styled, {css} from "styled-components";

export default styled.button`
    width : 300px;
    height : 50px;
    background-color : blue;
    color : white;
    border : none;
    border-radius : 5px;
    cursor : pointer;

    // // props에 width라는 값이 존재하면 css를 적용해라
    // ${props => props.width && css`
    //         width : ${props.width};
    // `};
    // ${props => props.background && css`
    //         background-color : rgba(${props.background[0]}, ${props.background[1]});
    // `};

        ${props => css`
        ${props.width && `width : ${props.width};` }
        ${props.background && `background-color : 
                            rgba(${props.background[0]}, ${props.background[1]});`}
    `};

    &:hover {
        background-color : darkblue;
        ${props => props.background && css`
        background-color : rgba(${props.background[0]}, ${props.background[1]+0.4})
    `};
    }
`;