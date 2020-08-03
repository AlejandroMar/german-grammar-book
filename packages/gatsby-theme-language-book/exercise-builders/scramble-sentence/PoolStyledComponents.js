import styled, { css } from 'styled-components'
import { Paper } from '@material-ui/core'


const Container = styled.div`
  text-align: center;
  margin: 0.5%;
  border: 2px dashed ${props => props.theme.palette.grey[300]};
  min-height: 10vh;
  border-radius: 2px;
  background-clip: padding-box;
  background-color: white;
  

  ${props => {
  // If its droppable display first

  if ( !props.isDropDisabled ) {
    return css`
        order: 0;
      `
  }
  return css`
      order: 2;
    `
}}

  ${props =>
  props.done &&
  css`
      order: 1;
    `};
`

const PoolPartList = styled.div`
  display: flex;
  min-height: 10vh;
  align-items: center;
  padding: 1%;
  ${props =>
  props.isDraggingOver &&
  css`
      background-color: ${props.theme.palette.info.light};
    `};
  ${props =>
  props.done &&
  css`
      background-color: ${props.theme.palette.success.light};
    `};
`

const PoolPartContainer = styled(Paper)`
  margin: 0.5%;
  padding: 2%;
  background-color: ${props => (props.isDragging ? props.theme.palette.success.light : 'white')};
  &:first-child::first-letter {
    text-transform: capitalize;
  }

  ${props =>
  props.isDragging &&
  css`
      padding: inherit;
    `};
   ${({ theme }) => theme.breakpoints.down('md')}{
    font-size: 15px;
   }
  
`

export { Container, PoolPartContainer, PoolPartList }
