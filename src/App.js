import DirectoryList from "ui/components/DirectoryList";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={DirectoryList} />
            </Switch>
        </BrowserRouter>
    );
}
