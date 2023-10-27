import Home from "./Home"

function AboutUs(props)
{
    return(<center><div><b>Contact us at</b><br/>
    {props.companyName}<br/>
    {props.address}
    <a href="mailto:aboutus@gavstech.com?subject=About us">About us</a>
    </div> </center>)
}
export default AboutUs;