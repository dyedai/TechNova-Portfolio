import "./App.css";

function App() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="app">
      {/* ヘッダー */}
      <header className="header">
        <div className="header-logo">
          <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="Logo" />
          <h1 className="name">Your Name</h1>
        </div>

        <div>
          <a href="https://github.com/your-profile" className="link">
            <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" />
          </a>
          <a href="https://github.com/your-profile" className="link">
            <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" />
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
            {/* https://devicon.dev/ このサイトからhtml,css,javascriptをそれぞれ検索してコピペ */}

            {/* HTML */}
            <img className="skillicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML5" />

            {/* CSS */}
            <img className="skillicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS3" />

            {/* Javascript */}
            <img className="skillicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" />
          </div>
        </section>

        {/* Works セクション */}
        <section className="section">
          <h2>Works</h2>
          <div className="image-container">
            <div className="work-item">
              <img src="public/noise.gif" alt="Work 1" className="image" />
              <p className="work-title">Work 1</p>
            </div>
            <div className="work-item">
              <img src="public/noise.gif" alt="Work 2" className="image" />
              <p className="work-title">Work 2</p>
            </div>
            <div className="work-item">
              <img src="public/noise.gif" alt="Work 3" className="image" />
              <p className="work-title">Work 3</p>
            </div>
            <div className="work-item">
              <img src="public/noise.gif" alt="Work 4" className="image" />
              <p className="work-title">Work 4</p>
            </div>
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
