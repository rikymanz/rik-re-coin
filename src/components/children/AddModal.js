import React from 'react';
import { Button } from 'reactstrap';

const AddModal = () => {

  return (
    <div style={style.main}>
      <input type='text' />
      <input type='text' />
      <input type='number' />
      <Button color="danger">Ciao</Button>
    </div>
  );
}

let style = {
  main:{
    height:'100%',
    backgroundColor:'#F2F5FF',
    textAlign:'center',
    overflowY:'scroll'
  },
}

export default AddModal;
