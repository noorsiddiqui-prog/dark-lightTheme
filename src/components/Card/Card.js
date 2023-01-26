import React from "react";
import styles from "./Card.module.sass";
import { Box, Typography } from "@mui/material";
import { FaEthereum } from "react-icons/fa";
import DropDown from "../DropDown";
// import TextField from "../TextFeild";
import TextField from "@mui/material/TextField";
import { height } from "@mui/system";
import Modal from "../Modal";
export default function Card() {
  const [input, setinput] = React.useState(0);
  const handleInput = (e) => {
    setinput(e.target.value);
  };
  console.log(input);
  return (
    <>
      <Box
        sx={{
          backgroundColor: "white",
          width: "60%",
          minHeight: "400px",
          padding: "1rem 2rem",
          margin: "0rem auto",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontWeight: "600",
            }}
          >
            From
          </Typography>
          <Box
            sx={{
              // margin: "2rem 0rem",
              marginBottom: "2rem",
              display: "flex",
              justifyContent: "space-between",
              border: "1px solid #d6d6d6",
              borderRadius: "10px",
              padding: "1rem",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "600",
              }}
            >
              {" "}
              <img
                src="./ethereum.png"
                alt="Ethereum Icon"
                className={styles.image}
              />
              Ethereum Chain{" "}
            </Typography>
            <Typography>
              Balance: <span style={{ fontWeight: "bold" }}>0 ETH</span>
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Modal chain="Ethereum" logo="./ethereum.png" />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid #d6d6d6",
                borderRadius: "10px",
                padding: "1rem",
                width: "100%",
              }}
            >
              <input
                type="text"
                placeholder="0.00"
                onChange={handleInput}
                style={{
                  border: "none",
                  outline: "none",
                  fontSize: "1.3rem",
                  width: "100%",
                  backgroundColor: "transparent",
                }}
              />
              <Typography
                sx={{
                  color: "purple",
                }}
              >
                MAX
              </Typography>
            </Box>
          </Box>

          <Typography
            sx={{
              textAlign: "center",
              fontSize: "1.3rem",
              fontWeight: "600",
              marginTop: "20px",
            }}
          >
            {input}
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontWeight: "600",
            }}
          >
            To
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              border: "1px solid #d6d6d6",
              borderRadius: "10px",
              padding: "1rem",
            }}
          >
            <Modal chain="Polygon" logo="./polygon.png" />
            <Box>
              <Typography>
                Balance: <span style={{ fontWeight: "bold" }}> 0 ETH</span>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
