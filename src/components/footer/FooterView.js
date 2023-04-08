const FooterView = ({design, github}) =>  {
    return (
        <footer className="project_footer">
            <p className="author">
                Игнатенко Николай <br></br>
                ссылка на оригинал дизайна: {design} <br></br>
                ссылка на github аккаунт: {github}
            </p>
        </footer>
    )
}

export default FooterView