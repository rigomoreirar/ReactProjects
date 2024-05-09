import Header from "./components/Header";
import Section from "./components/Section";

function App() {
    return (
        <>
            <div className="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
                <Header>
                    <Section text="HELLO TAILWIND" />
                </Header>
            </div>
        </>
    );
}

export default App;
