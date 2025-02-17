import logo from '../logo192.png'

export default function Header() {
    const now = new Date();

    return (
        <header>
            <img src={logo} alt=""/>
            {/*<h3>REsult School</h3>*/}

            <span>Время сейчас: {now.toLocaleTimeString()} </span>
        </header>
    )
}