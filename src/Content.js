import Home from "./Home"
import Weekly from "./Weekly"
import Monthly from "./Monthly"
import Yearly from "./Yearly"
import { Switch, Route} from "react-router-dom";

function Content(){
    return<>
    <Switch>
        <Route path="/" component={Home} exact={true}/>
        <Route path="/weekly" component={Weekly} exact={true}/>
        <Route path="/monthly" component={Monthly} exact={true}/>
        <Route path="/yearly" component={Yearly} exact={true}/>
    </Switch>
    </>;
}
export default Content;