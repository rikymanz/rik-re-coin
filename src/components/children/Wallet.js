import React from 'react';
import PropTypes from 'prop-types';

// Coponente filgio - Info singolo wallet
const Wallet = ({wallet}) => { 
  return(
    <div style={styles.main}>
      <div>
        ID:{wallet.wallet_id}
      </div>
      <div>
        Owner:{wallet.owner}
      </div>
    </div>
  )
}

let styles = {
  main:{
    
  }
}

Wallet.propTypes = {
  wallet: PropTypes.object
};
export default Wallet;
