import { Component } from "react";
import { Audio } from 'react-loader-spinner'
import { Blocks } from "react-loader-spinner";


class Loader extends Component{
    render(){
        return(
            <>
            {/* <Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="three-dots-loading"
  wrapperStyle
  wrapperClass
/> */}

<Blocks
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  visible={true}
  />

            </>
        )
    }
}
export default Loader
