import "./App.css";

function App() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="app">
      {/* ヘッダー */}
      <header className="header">
        <h1 className="name">Your Name</h1>
        <a href="https://github.com/your-profile" className="link">
          GitHub
        </a>
      </header>

      {/* メインコンテンツ */}
      <main className="main">
        {/* AboutMe セクション */}
        <section className="section">
          <h2>About Me</h2>
          <div className="card-container">
            <div className="card">About Me Card 1</div>
            <div className="card">About Me Card 2</div>
          </div>
        </section>

        {/* Skills セクション */}
        <section className="section">
          <h2>Skills</h2>
          <div className="image-container">
            <img src="skill1.png" alt="Skill 1" className="image" />
            <img src="skill2.png" alt="Skill 2" className="image" />
            <img src="skill3.png" alt="Skill 3" className="image" />
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
        <h1 className="name">Your Name</h1>
        <div className="footer-left">
          <img className="icon-white" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
          <img className="icon-white" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg" />
          <button onClick={scrollToTop} className="button">
            <img className="icon-black" src="https://sato-icons.com/wp/wp-content/uploads/2020/10/%E4%B8%8A%E5%90%91%E3%81%8D%E7%9F%A2%E5%8D%B0%E3%81%AE%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3.svg" />
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;
