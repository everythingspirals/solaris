import React, { useEffect, useMemo, useState } from 'react';
import Button from '@material-ui/core/Button';
import Wallet from 'lib/wallet/Wallet';

export default function Header() {
    const [wallet, setWallet] = useState<Wallet | null>();
    
    // useEffect(() => {
    //     console.log('wallet changed');
    // }, [wallet, wallet.isConnected])

    async function connect() {
        let wallet = new Wallet();
        wallet.onChange = (wallet) => setWallet(wallet);

        await wallet.connect();
        setWallet(wallet);
    }

    return (
        <div>
            {wallet && wallet.isConnected ? (
                <div>
                    <p>Wallet address: {wallet.publicKey.toBase58()} {wallet && wallet.isConnected ? "true" : "false"}</p>
                    <Button color="inherit" variant="outlined" onClick={() => wallet.sendTransaction()}>Send Transaction</Button>
                    <Button color="inherit" variant="outlined" onClick={() => wallet.signMessage()}>Sign Message</Button>
                    <Button color="inherit" variant="outlined" onClick={() => wallet.disconnect()}>Disconnect</Button>
                </div>
            ) : (
                <div>
                    <Button color="inherit" variant="outlined" onClick={connect}>Connect Sollet</Button>
                    {/* <button onClick={() => setSelectedWallet(injectedWallet)}>Connect to Injected Wallet</button> */}
                </div>
            )}
        </div>
    );
}



