import Header from "./components/Header";
import Entry from "./components/Entry"
import data from "/data"

export default function App() {
    return (
        <>
            <Header />
            <main className="container">
                {data.map((item) => (
                    <Entry
                        key={item.id}
                        {...item}
                    />
                ))}
            </main>
        </>
    )
}