import { Link } from "gatsby"
import React from "react"
import {makeStyles, Typography} from '@material-ui/core'
import Fade from 'react-reveal/Fade'

export default function Header () {
  const classes = useStyles()
  return(
  <div className = {classes.root}>
    <div>
    <Fade left duration = {500}>
    <Typography variant="h4" align="center" >Hi, I'm Ariel</Typography>
    </Fade>
    </div>

    <div>
    <Fade delay = {200} duration = {5000}>
    <Typography>Fullstack Software Engineer, Social Media Marketer, and Aspiring Tiny House Owner</Typography>
    </Fade>
    </div>

    <div>
      <Typography>****THIS PAGE IS STILL UNDER CONSTRUCTION!****</Typography>
    </div>
  </div>
  )
}


const useStyles = makeStyles({
  root: {
    backgroundColor:'white',
    display:"flex",
    flexDirection: "column",
    alignItems: "center", 
    // maxHeight: "100%",
    // maxWidth: "100%"
  }
})
