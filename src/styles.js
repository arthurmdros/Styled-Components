import styled from 'styled-components';

export const Title = styled.h1 `
    color: #f00;

    /* Adicionar estilos por meio de propriedades em um componente */
    font-size: ${props => `${props.fontSize}px`};

    /* Referenciar estilos sem a necessidade de criar novo componente */
    span {
        font-size: 12px;
    }
`;

/* Herança de estilos de um componente */

export const SmallTitle = styled(Title)`
    color: #00f;

    font-size: 16px;
`;