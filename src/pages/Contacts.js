



const Contacts = () => {
    return (
        <main className="section">
            <div className="container">
                    <h1 className="title-1">Contacts</h1>

                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Location</h2>
                            <p>Stavanger, Norway</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Telegram</h2>
                            <p><a href="https://t.me/dima_dkt">+47 486 14 957</a></p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Email</h2>
                            <p><a href="mailto:webdev@protonmail.com">dimakohanskyi@gmail.com</a></p>
                        </li>
                    </ul>

            </div>
        </main>
    )
}


export default Contacts;