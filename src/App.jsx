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
                        image={item.img.src}
                        alt={item.img.alt}
                        country={item.country}
                        title={item.title}
                        dates={item.dates}
                        text={item.text}
                    />
                ))}
            </main>
        </>
    )
}