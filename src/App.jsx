import { useState } from 'react'
import './App.css'
import { generateMnemonic } from "bip39"
import { SolWallet } from './SolWallet';
import { EthWallet } from './EthWallet';


function App() {
  const [mnemonic, setMnemonic] = useState("");

  return (
    <>
      <input className='pt-4 mt-4' type="text" value={mnemonic}></input>
      <button onClick={async function() {
        const mn = await generateMnemonic();
        // console.log('Generated Mnemonic:', mnemonic);
        setMnemonic(mn);
      }}>
        Create Seed Phase
      </button>
      
      <SolWallet />
      <EthWallet />

    </>
  )
}


export default App
