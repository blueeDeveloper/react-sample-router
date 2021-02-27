import { Switch, Route } from "react-router-dom";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Home from "./Home";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
