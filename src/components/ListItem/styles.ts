import styled from "styled-components";

type ContainerProps = {
  done: boolean;
};

export const Container = styled.div(
  ({ done }: ContainerProps) =>
    `
    display: flex;
    background-color: #20212c;
    padding: 20px;
    border-radius: 10px;
    align-items: center;
    margin-bottom: 10px;

    input {
        width: 20px;
        height: 20px;
        margin-right: 5px;
    }

    label {
        text-decoration: ${done ? "line-through" : "initial"};
        color: #fff;
    }
`
);
