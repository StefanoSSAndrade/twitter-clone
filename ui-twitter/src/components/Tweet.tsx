import styles from './Tweet.module.css'

export const Tweet = () => {
    return (
        <a href="#" className="tweet">
            <img src="https://github.com/stefanossandrade.png" alt="Stefano Andrade" />

            <div className="tweet-content">
                <div className="tweet-content-header">
                    <strong>Estevão Safadão</strong>
                    <span>@stefanossandrade</span>
                </div>

                <p>
                    Acabei de migrar um projeto React GIGANTE de create-react-app para Vite e os resultados foram:
                    <br />
                    ✅ npm start: De 32s para 400ms (sim, demorava 30s)
                    <br />
                    ✅ npm build: De 120s para 22s
                    <br />
                    Além disso, troquei do Yarn para o PNPM e o install das deps mudou de 24s para 8s 🔥
                </p>
            </div>
        </a>
    )
}
