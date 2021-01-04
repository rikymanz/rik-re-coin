import React from 'react';
import Wallet from './Wallet'
import PropTypes from 'prop-types';

// Coponente filgio con lista wallet
const Wallets = ({wallets}) => { 
  return(
    <div style={styles.main}>
      {/* For dei wallets */}
      {wallets.map( (wallet,i) =>(
        // Chiamata componente filgio con passaggio informazioni wallet
        <Wallet wallet={wallet} key={i} />
        ))
      }
      {/* Fine For */}
    </div>
  )
}

let styles = {
  main:{
    
  }
}

Wallets.propTypes = {
  wallets: PropTypes.array
};
export default Wallets;
