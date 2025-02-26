import Header from "./components/Header";
import WayToTeach from "./components/WayToTeach";
import Button from "./components/Button/Button";
import {ways} from './data';


export default function App() {
    return (
        <div>
            <Header/>
            <main>
                <section>
                    <h3>Подход к обучению</h3>

                    <ul>
                        <WayToTeach title={ways[0].title} description={ways[0].description} />
                        <WayToTeach {...ways[1]} />
                    </ul>
                </section>

                <section>
                    <h3>swdd</h3>
                    <Button>Поdewdwдход</Button>
                    <Button>Теdwdмп</Button>
                </section>
            </main>
        </div>
    )
}

