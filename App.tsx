import {StatusBar} from 'expo-status-bar';
import {Router} from "./src/routing";

export default function App() {
    return (<>
            <StatusBar style="auto"/>
            <Router/>
        </>
    );
}
