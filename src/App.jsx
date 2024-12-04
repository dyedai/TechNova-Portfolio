import "./App.css";

function App() {
  const scrollToTop = () => {
    console.log("上に行くよ！");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="">
      {/* ヘッダー */}
      <div className="header">
        <div className="header-name">
          <img
            className="icon"
            // 自分のアイコンをいれる
            src="https://pbs.twimg.com/profile_images/1607995544168980480/p-qNwFQV_400x400.png"
          />
          <h1 className="name">Your Name</h1>
        </div>

        <div className="header-lmg">
          {/* 自分のgithubのリンクを入れる */}
          <a href="https://www.shibaura-it.ac.jp/" className="link">
            <img
              className="icon"
              // githubのアイコンをいれる
              src="https://illust-dayori.com/wp-content/uploads/2023/01/dog-akita-kuro.png"
              alt="GitHub"
            />
          </a>

          {/* Xのリンク */}
          <a href="https://github.com/your-profile" className="link">
            <img
              className="icon"
              // Xのアイコンをいれる"
              src="https://image.biccamera.com/img/00000003200052_A01.jpg?sr.dw=600&sr.jqh=60&sr.dh=600&sr.mat=1"
            />
          </a>
        </div>
      </div>

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
              {/* 任意の場所で改行する */}
              <div>
                TechNova代表、高田ソウマです!頑張ります!TechNova代表、高田ソウマです!頑張ります!TechNova代表、高田ソウマです!頑張ります!TechNova代表、高田ソウマです!頑張ります!TechNova代表、高田ソウマです!頑張ります!TechNova代表、高田ソウマです!頑張ります!
              </div>
            </div>
            <div className="card">
              <div className="card-title">趣味</div>
              {/* 箇条書きのタグに変更する */}
              <>
                <div>ダンス</div>
                <div>プログラミング</div>
                <div>ダンス</div>
              </>
            </div>
          </div>
        </section>

        {/* Skills セクション */}
        <section className="section">
          <h2>Skills</h2>
          <div className="image-container">
            {/* https://devicon.dev/ このサイトからhtml,css,javascriptをそれぞれ検索してコピペしている（github, xのアイコンも同様） */}

            {/* HTML */}
            <img
              className="skillicon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
              alt="HTML5"
            />

            {/* CSS */}
            <img
              className="skillicon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
              alt="CSS3"
            />

            {/* Javascript */}
            <img
              className="skillicon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
              alt="JavaScript"
            />
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
      <div className="footer">
        <h1 className="name">Your Name</h1>
        <div className="footer-left">
          <img
            className="icon-white"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
          />
          <img
            className="icon-white"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg"
          />
          <button onClick={scrollToTop} className="button">
            <img
              className="icon-black"
              src="https://sato-icons.com/wp/wp-content/uploads/2020/10/%E4%B8%8A%E5%90%91%E3%81%8D%E7%9F%A2%E5%8D%B0%E3%81%AE%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
