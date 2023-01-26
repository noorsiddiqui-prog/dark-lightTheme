import React,{useState} from 'react'
import styles from './Card2.module.sass'
import Dropdown from '../DropDown'
import Dropdown2 from '../Dropdown2'
import { Typography } from '@mui/material';
export default function Card2({isDisabled,value,send,func,currencyUnit="ETH",setCurrencyUnit}) {
  const [amount, setAmount] = useState(0);
  const chains = [
    {
      logo: './polygon.png',
      title: 'Polygon'
    },
    {
      logo: './ethereum.png',
      title: 'Ethereum'
    },
    // {
    //   logo: './bsc.png',
    //   title: 'Binance Smart Chain'
    // },
  ]
  return (
    <div
     className={styles.background}
    >
      <div className={styles.upper}>
        <p>{send}</p>
        <p>Balance: 0</p>
      </div>
      <div className={styles.lower}
      sx={{
        backgroundColor: "background.default",
      }}>
        <Dropdown2 chains={chains} setCurrencyUnit={setCurrencyUnit}/>
        <div>
        <input value={value} type="number" placeholder='0.00' disabled={isDisabled} onChange={event => {func(event.target.value)} }/>
        <Typography sx={{
          // fontWeight:"600",
          //       fontSize: "1.4rem",
                color: "background.fontClr",
                fontSize: "1rem",
            fontWeight: "bold"
               
        }}>{currencyUnit}</Typography>
        </div>
      </div>
    </div>
  )
}
