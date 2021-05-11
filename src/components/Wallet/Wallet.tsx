import React, { useEffect, useMemo, useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Wallet from 'lib/wallet/Wallet';

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    }
}));

export default function Header() {
    const classes = useStyles();
    const [wallet, setWallet] = useState(new Wallet());
    useEffect(()=> {}, [wallet.isConnected])

    async function connect() {
        let wallet = new Wallet();

        await wallet.connect();
        setWallet(wallet);
    }

    return (
        <div>
            {wallet && wallet.isConnected ? (
                <div>
                    <p>Wallet address: {wallet.publicKey.toBase58()}</p>
                    <Button color="inherit" variant="outlined" className={classes.menuButton} onClick={()=>wallet.sendTransaction()}>Send Transaction</Button>
                    <Button color="inherit" variant="outlined" className={classes.menuButton} onClick={()=>wallet.signMessage()}>Sign Message</Button>
                    <Button color="inherit" variant="outlined" className={classes.menuButton} onClick={()=>wallet.disconnect()}>Disconnect</Button>
                </div>
            ) : (
                <div>
                    <Button color="inherit" variant="outlined" className={classes.menuButton} onClick={connect}>Connect Sollet</Button>
                    {/* <button onClick={() => setSelectedWallet(injectedWallet)}>Connect to Injected Wallet</button> */}
                </div>
            )}
        </div>
    );
}



