import React from 'react'
import { useHistory } from "react-router-dom";

import GradientButtons from 'react-linear-gradient-button';

const GradientButton = (props) => {
  const history = useHistory();
  const buttonClick = () =>{
    history.push(route);
    scrollTop();

  }
  const scrollTop = () =>{
    window.scrollTo({top: 0 });
 };

  const {val, route} = props;
    return (
        <div>
          <GradientButtons onClick={buttonClick}> {val} </GradientButtons>
            
        </div>
    )
}

export default GradientButton
