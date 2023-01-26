import React, { useState, useContext } from "react";
import styles from "./Home2.module.sass";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
// import { ColorModeContext } from '../../styles/ColorMode/color-context';
import { useTheme } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";
import { ThemeModeButton } from "../../components/ThemeModeButton/ThemeModeButton";

export default function Home2() {
  // const {theme} = useContext(ColorModeContext)
  let navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/exchange");
  };

  const theme = useTheme();

  return (
    <div
      className={styles.background}
      // className={`${styles.background} ${styles[theme]}`}
      // className={styles.container}
    >
      <Box mb="80px">
        <ThemeModeButton/>
      </Box>
      <Typography
        variant="h3"
        sx={{
          //  color: "text.primary", 
        // textAlign: "center", 
        // fontWeight: "600"
        color: "text.primary",
            textAlign: "center",
            fontWeight: "600",
            fontSize: "2rem",
            fontWeight: "700",
            textTransform: "capitalize",
            // fontFamily: "Bebas Neue",

            letterSpacing: "2px",
       }}
      >
        Exchange Name
      </Typography>
      <Box mt="80px">
        <Button
        endIcon={<IoIosArrowForward />}
          onClick={handleNavigate}
          className={styles.btnGrad}
          sx={{
            backgroundColor: "background.fontClr",
            color: "white",
            textTransform: "capitalize", 
            // boxShadow: "background.paper",
            // backgroundImage: "linear-gradient(to right, #9D50BB 0%, #6E48AA 51%, #9D50BB 100%)",
            // boxShadow: "0px 3px 1px -2px red,0px 2px 2px 0px rgba(100,0,0,0.9),0px 1px 5px 0px rgba(0,0,0,0.12)",
            boxShadow: "10px 10px 10px 10px background.fontClrs",
            width: "160px",
            height: "64px",
            fontSize: "14px",
            fontWeight: "600",
            borderRadius: "3rem",
            paddingLeft: "15px",
            ":hover": {
              backgroundColor: "background.fontClr",
            
         
            },
          }}
        >
          Use Exchange 
        </Button>
      </Box>
    </div>
  );
}
