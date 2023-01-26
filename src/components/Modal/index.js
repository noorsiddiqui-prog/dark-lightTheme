import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styles from "./Modal.module.sass";
import { IoIosArrowDown } from "react-icons/io";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function BasicModal({ chain, logo }) {
  const chains = [
    {
      chain: "Ethereum",
      logo: "./ethereum.png",
    },
    {
      chain: "Polygon",
      logo: "./polygon.png",
    },
    {
      chain: "BSC",
      logo: "./bsc.png",
    },
  ];
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectChain, setSelectChain] = React.useState("");
  const [selectLogo, setSelectLogo] = React.useState("");
  console.log(selectChain);
  console.log(selectLogo);
  return (
    <div>
      <Button onClick={handleOpen}>
        <img
          src={selectLogo ? selectLogo : logo}
          alt="logo"
          style={{ height: "25px", width: "25px", marginRight: "0.5rem" }}
        />
        {selectChain ? selectChain : chain}
        <IoIosArrowDown />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {chains.map((v, i) => {
            const handleSelect = () => {
              setSelectChain(v.chain);
              setSelectLogo(v.logo);
              setOpen(false);
            };
            return (
              <Box
                sx={{
                  margin: "0.5rem 0rem",
                }}
                onClick={handleSelect}
              >
                <Box
                  sx={{
                    display: "flex",
                    cursor: "pointer",
                  }}
                >
                  <img src={v.logo} alt="Logo" className={styles.logo} />
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontSize: "1.3rem",
                      marginLeft: "1rem",
                    }}
                  >
                    {v.chain}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Modal>
    </div>
  );
}
