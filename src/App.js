import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-deco" />
        <div className="App-banner">
          <h1>林芷庭</h1>
          <p>
            信箱: <a href="mailto:chihtinglin03@gmail.com" style={{ color: 'white' }}>chihtinglin03@gmail.com</a><br />
            電話: 0988-550-901<br />
            <a href="https://github.com/ChihTingLin" style={{ color: 'white' }}>GitHub: https://github.com/ChihTingLin</a>
          </p>
        </div>
        <div className="App-wrapper">
          <h2>簡介</h2>
          <p className="App-section">
            2017 年從程式設計班畢業後，因為個人的興趣而選擇網站前端這條路，而不是在課程中學的網站後端。<br />
            儘管因此有更從未接觸過的的技術要學習，因為熱情所在反而在每天的工作中充滿向前的動力。<br />
            <br />
            我本身具備 Java 與網站前端的程式能力，因此幸運的找到了一份同時需要這兩種技能的工作，在工作的期間運用我本身已經具備的能力完成交辦的工作項目，
            同時我也不斷的自我學習，補足自己在網站前端程式設計這一塊不足的地方。<br />
            工作中接手了一個混雜了各種前端框架技術的專案維護工作，一開始我有些埋怨開發專案的人用了太多種技術，
            但也因為這個專案接觸到 ReactJs 從而引起了我的興趣，我運用工作之餘的時間來自學 React，並且在之後參與公司一個使用 React 的手機版網站的開發專案之中。<br />
            在開發的時候遇到的一些困難，例如，因為專案中搭配使用了 Redux，因此在開發中我必須邊進行邊學習 Redux；因為各個產品線陸續開發加入專案中使得專案的複雜程度大幅增加，之後專案中又引入 Redux-saga 又需要花時間來學習新的套件，雖然辛苦但這段時間也是我工作以來成長最多的時候了。
            <br />
            現在，經過一年多網站開發的磨礪，對我來說是時候跳出已經習慣的工作環境，尋求更多的挑戰！
          </p>
          <h2>學經歷</h2>
          <p className="App-section">
            <span className="App-itemTitle">國立臺灣師範大學 圖文傳播學系</span>
            <br />
            2012／09 ～ 2016／06
            <br />
            <br />
            <span className="App-itemTitle">Java & Android 程式設計班</span>
            <br />
            2016 / 10 ~ 2017 / 04
          </p>
          <div className="App-section">
            <span className="App-itemTitle">易遊網股份有限公司 前端工程師</span>
            <br />
            2017 / 05 ~ 至今
            <br />
            <ul>
              <li>使用 Java 開發與維護基於 Play Framework 的專案</li>
              <li>
                參與票券與國內旅遊線別的行動版網站開發，使用 ReactJs, Redux, NextJs 等前端框架<br />
                <a href="https://activity.eztravel.com.tw/taiwan">易遊網 國內票券首頁 |</a>
                <a href="https://activity.eztravel.com.tw/global"> 易遊網 國外票券首頁 |</a>
                <a href="https://trip.eztravel.com.tw"> 易遊網 國內旅遊首頁</a><br />
                使用手機或是以行動裝置模擬器開啟連結就能看到行動版網站
              </li>
              <li>維護行動網站與 App 共用的 NodeJS API</li>
            </ul>
          </div>
          <h2>技能</h2>
          <div className="App-section">
            <ul>
              <li>JavaScript (ES5/ES6/ES7)</li>
              <li>HTML</li>
              <li>CSS (Sass)</li>
              <li>React</li>
              <li>Redux</li>
              <li>Webpack</li>
              <li>Git</li>
              <li>Java</li>
              <li>英語多益測驗 785 分</li>
            </ul>
          </div>
          <h2>練習作品</h2>
          <div className="App-section">
            <a href="https://chihtinglin.github.io/react-desserts-website/">甜點購物網站</a>
          </div>
        </div>
        <div className="App-curve" />
      </div>
    );
  }
}

export default App;
