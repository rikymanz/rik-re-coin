import React,{useState} from 'react';
import PropTypes from 'prop-types';

// Coponente filgio - Info singolo wallet
const Wallet = ({wallet,updateFunction}) => { 
  const [valueDollar, setValueDollar] = useState(0); // inizializzazione array in array vuoto
  const [valueEuro, setValueEuro] = useState(0); // inizializzazione array in array vuoto

  // funzione asyncrona chiamata API
  (async() => {
    let data = await( await fetch('https://blockchain.info/ticker')).json()
    // per il momento considera solo il bitcoin
    if( wallet.coin === 'BTC' ) {
      setValueDollar(Number((data.USD.last * wallet.quantity).toFixed(0)))
      setValueEuro(Number((data.EUR.last  * wallet.quantity).toFixed(0)))
    } // fine if controllo bitcoin
    
  })() // fine funzione init autochiamante

  return(
    <div style={styles.wallet} onClick={updateFunction}>
      {/** Proprietario */}
      <div>
        <span style={styles.value}>
          {wallet.owner}
        </span>
      </div>
      {/** Tipo di moneta */}
      <div>
        <span style={styles.title}>
          Coin&nbsp;:&nbsp;
        </span>
        <span style={styles.value}>
          {wallet.coin}
        </span>
      </div>
      {/** Quantità */}
      <div>
        <span style={styles.title}>
          Quantity&nbsp;:&nbsp;
        </span>
        <span style={styles.value}>
          {wallet.quantity}
        </span>
      </div>
      {/** Valore Dollari*/}
      <div>
        <span style={styles.title}>
          Value($)&nbsp;:&nbsp;
        </span>
        <span style={styles.value}>
          {valueDollar === 0 ? '...' : valueDollar }
        </span>
      </div>
      {/** Valore Euro*/}
      <div>
        <span style={styles.title}>
          Value(€)&nbsp;:&nbsp;
        </span>
        <span style={styles.value}>
          {valueEuro === 0 ? '...' : valueEuro }
        </span>
      </div>
    </div>
  )
}

let styles = {
  wallet:{
    marginTop:10,
    border:'1px solid #4A65D5',
    backgroundColor:'#BDC9FB',
    padding:20,
    borderRadius:15,
  },
  title:{
    color:'#4A65D5',
  },
  value:{
    color:'#4A65D5',
    fontWeight:'bold',
  },
}

Wallet.propTypes = {
  wallet: PropTypes.object,
  updateFunction: PropTypes.func
};
export default Wallet;
