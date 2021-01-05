import React from 'react';
import Wallet from './Wallet'
import PropTypes from 'prop-types';

// Coponente filgio con lista wallet
// funcs sono tutte le funzioni definite nel padre per la gestione dei wallet
const Wallets = ({wallets,funcs}) => { 
  return(
    <div style={style.main}>
      {/* For dei wallets */}
      {wallets.map( (wallet,i) =>(
        // Chiamata componente filgio con passaggio informazioni wallet
        <Wallet wallet={wallet} updateFunction={funcs.updateWallet} key={i} />
        ))
      }{/* Fine For */}
      {/* Pulsante di aggiunta nuovo wallet */}
      <div style={style.addWallet} onClick={funcs.addWallet} > Add + </div>
      
    </div>
  )
}

let style = {
  main:{
    margin:'0 auto',
    maxWidth:400,
    height:'100%',
  },
  addWallet:{
    marginTop:10,
    border:'1px solid #4A65D5',
    backgroundColor:'#BDC9FB',
    padding:20,
    borderRadius:15,
    cursor:'pointer'
  },
}

Wallets.propTypes = {
  wallets: PropTypes.array,
  funcs: PropTypes.object
};
export default Wallets;
