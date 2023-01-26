import React, { useState } from "react";
import styles from "./Exchange.module.sass";
import Card2 from "../../components/Card2";
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";
import { IoMdWallet } from "react-icons/io";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import { ColorModeContext } from "../../styles/ColorMode/color-context";
import { Box, Button, Typography } from "@mui/material";
import { ThemeModeButton } from "../../components/ThemeModeButton/ThemeModeButton";

// import EthereumApi from '../../Components/EthereumApi';
// import PolygonApi from '../../Components/PolygonApi';

export default function Exchange() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  const [outputValue, setOutputValue] = useState("");
  const [showInputContiner, setShowInputContiner] = useState(false);
  const [currencyUnitForL1, setCurrencyUnitForL1] = useState("ETH");
  const [currencyUnitForL2, setCurrencyUnitForL2] = useState("ETH");
  const [account, setAccount] = useState(true);

  function pull_val(val) {
    setOutputValue(val);
  }

  const walletConnectionHandler = () => {
    alert("walletConnectionHandler");
  };

  //  const connectWallet = async () => {
  //   const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
  //   const account = accounts[0]
  //   console.log("account on connectWallet => ", account? account : "no account ")
  //   setAccount(account)
  // }

  // console.log("currencyUnitForL1 value => ", currencyUnitForL1)
  return (
    <div
      className={styles.background}
      sx={{
        // bgcolor: "background.default",

           bgcolor: 'background.navbrclr',
           color: 'text.primary',
           boxShadow: '0 4px 10px -2px gray',
      }}
    >
      <div className={styles.navbar}>
        <Typography variant="h6"
          sx={{
            // color: "background.fontClr",
            color: "text.primary",
            textAlign: "center",
            fontWeight: "600",
            // fontSize: "3rem",
            textTransform: "capitalize",
            
            // fontFamily: "Bebas Neue",

            // letterSpacing: "5px",
          }}
        >
          Exchange Name
        </Typography>
        <Box sx={{display: "flex", flexDirection: {lg: "row", md: "row", sm: "row", xs: "column-reverse"}, mt: {lg: "0px", md: "0px", sm: "20px", xs: "20px"}}}>
        <Box mr="30px" sx={{mt: {lg: "0px", md: "0px", sm: "20px", xs: "20px"}}}>
          <ThemeModeButton/>
        </Box>
        <Button
          // sx={{
          //   backgroundColor: "background.fontClr",
          //   textTransform: "capitalize",
          //   // boxShadow: "background.paper",
          //   // boxShadow: "0px 3px 1px -2px red,0px 2px 2px 0px rgba(100,0,0,0.9),0px 1px 5px 0px rgba(0,0,0,0.12)",
          //   boxShadow: "10px 10px 10px 10px background.fontClrs",
          //   // width: "300px",
          //   // height: "64px",
          //   fontSize: "18px",
          //   fontWeight: "600",
          //   ":hover": {
          //     backgroundColor: "background.fontClr",
          //   },
          // }}
          sx={{
            backgroundColor: "background.fontClr",
            textTransform: "capitalize",
       
            boxShadow: "10px 10px 10px 10px background.fontClrs",
            width: "180px",
            // height: "64px",
            fontSize: "16px",
            color: "#fff",
            fontWeight: "600",
            borderRadius: "3rem",
            ":hover": {
              backgroundColor: "background.fontClr",
            },
          }}
            className={styles.activeBtn}
          onClick={walletConnectionHandler}
        >
          Connect Wallet <IoMdWallet style={{ marginLeft: "10px" }} />
        </Button>
        </Box>
      </div>

      <Card2
        func={pull_val}
        send="From"
        currencyUnit={currencyUnitForL1}
        setCurrencyUnit={setCurrencyUnitForL1}
      />
      <br />
      <Card2
        send="To (estimated)"
        isDisabled={true}
        value={outputValue}
        currencyUnit={currencyUnitForL2}
        setCurrencyUnit={setCurrencyUnitForL2}
      />

      <div className={styles.optionContainer}>
        <p onClick={() => setShowInputContiner(!showInputContiner)}>
          Options
          {showInputContiner ? <IoMdArrowDropdown /> : <IoMdArrowDropright />}
        </p>
        {showInputContiner && (
          <>
            <div className={styles.inputContainer}>
              <Typography>Custom recipient</Typography>
              <input type="text" placeholder="Enter addres (e.g. 0x123...)" />
            </div>
          </>
        )}
      </div>



      <div
       className={styles.feesContainer}>
        <div className={styles.upper}>
          <Typography
           sx={{
            fontWeight:"600",
            fontSize: "1.4rem",
            color: "background.fontClr2",
                 
          }}
          >Fees</Typography>

          <Box sx={{ display: "flex"}}>
          <Typography
          sx={{
            fontWeight:"600",
            fontSize: "1.4rem",
            color: "background.fontClr2",
                 
          }}
          >
          0.00
          </Typography>
          <Typography
          sx={{
            fontWeight:"600",
            fontSize: "1rem",
            color: "background.fontClr",
            ml: "8px"
          }}
          >{currencyUnitForL2}</Typography>
          </Box>
        </div>
        
        <div className={styles.lower}>
          <Typography 
           sx={{
            fontWeight:"600",
            fontSize: "1rem",
            color: "background.fontClr2",
                 
          }}
          className={styles.estimate}>Estimated Recieved</Typography>
          
          <Box sx={{display: "flex"}}>
          <Typography
          className={styles.estimate}
          sx={{
            fontWeight:"600",
            fontSize: "1.4rem",
            color: "background.fontClr2",
                 
          }}
          >{outputValue ? outputValue : "0.00"} </Typography>
          <Typography
          sx={{
            fontWeight:"600",
            fontSize: "1.4rem",
            color: "background.fontClr",
            ml: "8px"
                 
          }}
          className={styles.estimate}
          >
            {currencyUnitForL2}
          </Typography>
          </Box>
        </div>
      </div>
      <div 
      className={styles.buttonContainer}
      >
        {account && outputValue > 0 ? (
          <>
            <Button 
            sx={{
              backgroundColor: "background.fontClr",
              textTransform: "capitalize",
         
              boxShadow: "10px 10px 10px 10px background.fontClrs",
              // width: "200px",
              // height: "64px",
              fontSize: "16px",
              color: "#fff",
              fontWeight: "600",
              ":hover": {
                backgroundColor: "background.fontClr",
              },
            }}
              className={styles.activeBtn}
              disabled={false}
              onClick={() => console.log("click approved")}
            >
              Approve
            </Button>
            <Button
            
            sx={{
            
              backgroundColor: "background.fontClr",
              textTransform: "capitalize",
         
              boxShadow: "10px 10px 10px 10px background.fontClrs",
              // width: "200px",
              // height: "64px",
              fontSize: "16px",
              color: "#fff",
              fontWeight: "600",
              ":hover": {
                backgroundColor: "background.fontClr",
              },
            }}
              className={styles.activeBtn}
              disabled={false}
              onClick={() => console.log("click send")}
            >
              Send
            </Button>
          </>
        ) : (
          <>
            <Button
             className={styles.activeBtn}
            sx={{
              backgroundColor: "background.fontClr",
              textTransform: "capitalize",
         
              boxShadow: "10px 10px 10px 10px background.fontClrs",
              // width: "200px",
              // height: "64px",
              fontSize: "14px",
              color: "#fff",
              fontWeight: "500",
              ":hover": {
                backgroundColor: "background.fontClr",
              },
            }}
              // disabled={true}
              onClick={() => console.log("click disabled approved")}
            >
              Approve
            </Button>
            <Button
            sx={{
              backgroundColor: "background.fontClr",
              textTransform: "capitalize",
              // boxShadow: "background.paper",
              // boxShadow: "0px 3px 1px -2px red,0px 2px 2px 0px rgba(100,0,0,0.9),0px 1px 5px 0px rgba(0,0,0,0.12)",
              boxShadow: "10px 10px 10px 10px background.fontClrs",
              // width: "200px",
              // height: "64px",
              color: "#fff",
              fontSize: "14px",
              fontWeight: "500",
              ":hover": {
                backgroundColor: "background.fontClr",
              },
            }}
              // disabled={true}
              onClick={() => console.log("click disabled send")}
            >
              Send
            </Button>
           
          </>
        )}
      </div>

      {/* <div className="box">
          <div>
            <button onClick={connectWallet}>Connect</button>
          </div>
          <div>
            <PolygonApi address = {account}/>
              <EthereumApi account = {account}/>
            <PolygonApi></PolygonApi>
          </div>
        </div> */}
    </div>
  );
}
