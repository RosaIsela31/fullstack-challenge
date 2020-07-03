import { BrowserRouter, Switch, Route } from "react-router-dom";
import DirectoryList from "ui/components/DirectoryList";
import AboutUs from "ui/components/AboutUs";
import SuccessStories from "ui/components/SuccessStories";

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={DirectoryList} />
                <Route exact path="/us" component={AboutUs} />
                <Route exact path="/success" component={SuccessStories} />
            </Switch>
        </BrowserRouter>
    );
}
