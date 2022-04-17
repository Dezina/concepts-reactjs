import React, {useState} from "react"
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const React1 = (props) => {
console.log("props", props)
const [cart, setCart] = useState([])

function addItemToCart(e) {
    const item = e.target.value;
    console.log(item);
    setCart([...cart, item]);
  }

return (
    <React.Fragment>
    <section>
    <div className="container">
    <div className="row">
    <div className="col-md-12 text-center">
        <div className="mx-auto">
        <Grid spacing={12}>
        <h3 className="text-white">Holidays</h3>  
        </Grid>
        <Container>
        <Grid className="text-white" spacing={12}>
        <button value="MacBook Pro" onClick={addItemToCart}> MacBook Pro</button>
        <button value="Dell" onClick={addItemToCart}>Dell</button>
        <button value="Acer" onClick={addItemToCart}>Acer</button>
        <button value="Hp" onClick={addItemToCart}>Hp</button>
        Cart
        <ul>
          {cart.map(item => <li key={item}>{item}</li>)}
        </ul>
        </Grid>
        </Container>
       
        </div>
        </div>
       
    </div>
    </div>
    </section>

</React.Fragment>
    )
}

export default React1