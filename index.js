let express = require('express');       // require는 java의 import와 같다고 생각하면 됩니다.
let app = express();                    // 다만 자바처럼 class파일을 import하는게 아니라 express라는 함수를
                                        // 임포트한 것이기 때문에 app = express()와 같은 형태를 지닙니다.

app.get('/', function(req, res) {
  res.send('Hi I am DongKyoo!');
});

app.listen(3000, function() {
  console.log("DongKyoo's server is starting!");
});