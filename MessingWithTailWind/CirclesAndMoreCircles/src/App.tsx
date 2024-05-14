import BigCircle from "./components/BigCircle";
import EvenSmallerCircle from "./components/EvenSmallerCircle";
import SmallCircle from "./components/SmallCircle";

function App() {
    return (
        <>
            <body className="min-h-screen place-items-center grid radial-blue">
                <BigCircle>
                    <SmallCircle>
                        <EvenSmallerCircle />
                    </SmallCircle>
                </BigCircle>
            </body>
        </>
    );
}

export default App;
