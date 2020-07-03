import { BrowserRouter, Switch, Route } from "react-router-dom";
import DirectoryList from "ui/components/DirectoryList";
import AboutUs from "ui/components/AboutUs";

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={DirectoryList} />
                <Route exact path="/us" component={AboutUs} />
            </Switch>
        </BrowserRouter>
    );
}
