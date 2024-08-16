import { useState } from "react"
import { mnemonicToSeed } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl"


export function SolWallet({ mnemonic }){
    const [currIndex, setCurrIndex] = useState(0);
    const [publicKeys, setPublicKeys] = useState([]);
  
  
    return <div className="flex justify-between">
      <button onClick={function() {
        const seed = mnemonicToSeed(mnemonic);
        const path = `m/44'/501'/${currIndex}'/0'`;
        const derivedSeed = derivePath(path, seed.toString("hex")).key;
        const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
        const keypair = Keypair.generate();
        setCurrIndex(currIndex + 1);
        setPublicKeys([...publicKeys, keypair.publicKey]);
      }}>
        Add SOL Wallet
      </button>
      {publicKeys.map(p => <div>
        {p.toBase58()}
      </div> )}
    </div>
  }