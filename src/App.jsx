import "./App.css";

function App() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="app">
      {/* ヘッダー */}
      <header className="header">
        <div className="header-name">
          <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
          <h1 className="name">Your Name</h1>
        </div>

        <div className="header-lmg">
          <a href="https://github.com/your-profile" className="link">
            <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
          </a>
          <a href="https://github.com/your-profile" className="link">
            <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
          </a>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="main">
        {/* AboutMe セクション */}
        <section className="section">
          <h2>About Me</h2>
          <div className="card-container">
            <div className="card">
              <div>名前: Takata Soma</div>
              <div>学年: 学部3年</div>
              <div>学部・学科: システム理工学部・電子情報システム学科</div>
              <div>出身: 富山県</div>
              <div>TechNova代表、高田ソウマです!頑張ります!</div>
            </div>
            <div className="card">
              <div className="card-title">趣味</div>
              <li>ダンス</li>
              <li>プログラミング</li>
              <li>ダンス</li>
            </div>
          </div>
        </section>

        {/* Skills セクション */}
        <section className="section">
          <h2>Skills</h2>
          <div className="image-container">
            {/* https://devicon.dev/ このサイトからhtml,css,javascriptをそれぞれ検索してコピペ*/}

            {/* HTML */}
            <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />

            {/* CSS */}
            <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />

            {/* Javascript */}

            <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
          </div>
        </section>

        {/* Works セクション */}
        <section className="section">
          <h2>Works</h2>
          <div className="image-container">
            <img src="work1.png" alt="Work 1" className="image" />
            <img src="work2.png" alt="Work 2" className="image" />
            <img src="work3.png" alt="Work 3" className="image" />
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="footer">
        <button onClick={scrollToTop} className="button">
          ページトップに戻る
        </button>
      </footer>
    </div>
  );
}

export default App;
