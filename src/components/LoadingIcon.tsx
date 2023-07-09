import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons'

const LoadingSmallDiv = styled.div`
  text-align: center;
  padding-top: 2rem;
  display: inline-block;
  width: 100%;
`

export const LoadingGifSmall = ({color}: any) => {
  const animatedIcon = <FontAwesomeIcon icon={faCircleNotch} spin/>
  return(
    <LoadingSmallDiv style={{'color': color}}>
      {animatedIcon}
    </LoadingSmallDiv>
    )
}