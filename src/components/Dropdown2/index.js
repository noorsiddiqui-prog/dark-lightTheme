import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
export default function SelectLabels({ chains, setCurrencyUnit }) {
  const [chain, setChain] = React.useState("");

  const handleChange = (event) => {
    setChain(event.target.value);
    console.log("chain value : ", event.target.value)
    if(setCurrencyUnit){
      if(event.target.value.toString() === "Polygon".toString()){
        // console.log("currencyUnit : WETH")
        setCurrencyUnit("WETH")
      }
      else{
        // console.log("currencyUnit : ETH")
        setCurrencyUnit("ETH")
      }
    }
    
  };
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120, }}>
        <Select
          value={chain}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          autoWidth={true}
          sx={{
            backgroundColor: "background.default",
            // color: $white
            fontSize: "0.8rem",
            fontWeight: "bold",
            height: "40px",
            borderRadius: "2rem"
          }}
        >
          <MenuItem value="" sx={{
            backgroundColor: "background.default",
            color: "background.fontClr2",
            fontSize: "0.8rem",
            fontWeight: "bold"
          }}>
            {/* <Box>
              <img
                src="./ethereum.png"
                alt="avatar"
                style={{ width: "20px", height: "20px" }}
              />
            </Box> */}
            {/* Ethereum */}
            Select Network
          </MenuItem>
          {chains.map((v, i) => {
            return (
              <MenuItem value={v?.title} key={i}
              sx={{
                // color: ""
                backgroundColor: "background.default",
                color: "background.fontClr2"
              }}
              >
                <Box>
                  <img
                    src={v?.logo}
                    alt="avatar"
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "5px",
                    }}
                  />
                </Box>
                {v?.title}
              </MenuItem>
            );
          })}
          {/* <MenuItem value={20}>
            <Box>
              <img
                src="./ethereum.png"
                alt="avatar"
                style={{ width: "20px", height: "20px" }}
              />
            </Box>
            Ethereum
          </MenuItem>
          <MenuItem value={30}>
            <Box>
              <img
                src="./bsc.png"
                alt="avatar"
                style={{ width: "20px", height: "20px" }}
              />
            </Box>
            Binance Smart Chain
          </MenuItem> */}
        </Select>
      </FormControl>
    </div>
  );
}
