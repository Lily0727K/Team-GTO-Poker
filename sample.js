import React from 'react';

class App extends React.Component {
  render() {
    // 定数nameを定義してください
    const name = "にんじゃわんこ";

    // 定数imgUrlを定義してください
    const imgUrl = "https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/ninjawanko.png"

    return (
      <div>
        {/* 定数nameを用いてにんじゃわんこと表示されるようにしてください */}
        <h1>{name}</h1>

        {/* 定数imgUrlを用いて画像が表示されるようにしてください */}
        <img src={imgUrl}/>

      </div>
    );
  }
}

export default App;
