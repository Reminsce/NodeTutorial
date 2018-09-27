# NodeTutorial

## Node.js란?
Node.js는 서버를 만들 때 쓰이는 자바스크립트 프레임워크입니다.
Node.js에 대해서 깊게 공부하려면 관련 서적이나 레퍼런스를 참조하십시오. 본문에서는 Node.js의 간단한 사용법과 방향성에 대해서 기술합니다.

## 용어정리
- npm : Node Package Manager(혹은 Node Package Modules)의 약자로 node.js 개발 시 필요한 패키지들을 편리하게 다운로드 받을 수 있도록 도와줍니다. 노드를 하다보면 왜 npm이 필요한지에 대해서 깨닫기까지는 오랜시간이 걸리지 않습니다.

## 노드 설치
윈도우 : [링크](http://blog.work6.kr/146)를 참조하세요.

## 프로젝트 생성

우선 노드 서버 프로젝트를 만들 디렉토리를 생성합니다.
터미널에 다음 명령어를 입력합니다.
```
mkdir first-tutorial-server
cd first-tutorial-server
npm init

Press ^C at any time to quit.
package name: (first-tutorial-server)   // 우린 이게 아직 뭔지 모르기 때문에 그냥 다 엔터치고 넘어갑니다.
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to /home/cabox/workspace/first-tutorial-server/package.json:

{
  "name": "first-tutorial-server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this ok? (yes) yes
```

## 노드 서버 개설
index.js 파일을 만듭니다. (index.js 파일은 노드 서버의 entry point입니다. C로 따지자면 main함수급 파일이 되겠지요. 즉 파일명이 index.js가 아니라면 노드는 시작점을 찾지 못해 서버를 개설하지 못합니다.)

index.js에 다음 코드를 작성합니다.
```
let express = require('express');       // require는 java의 import와 같다고 생각하면 됩니다.
let app = express();                    // 다만 자바처럼 class파일을 import하는게 아니라 express라는 함수를
                                        // 임포트한 것이기 때문에 app = express()와 같은 형태를 지닙니다.

app.get('/', function(req, res) {
  res.send('Hi I am DongKyoo!');
});

app.listen(3000, function() {
  console.log("DongKyoo's server is starting!");
});
```

그리고 터미널에서 다음 명령어를 입력합니다.
`node index.js`

그럼 다음과 같은 에러메세지가 뜹니다.
```
Error: Cannot find module 'express'
    at Function.Module._resolveFilename (module.js:489:15)
    at Function.Module._load (module.js:439:25)
    at Module.require (module.js:517:17)
    at require (internal/module.js:11:18)
    at Object.<anonymous> (/home/cabox/workspace/first-tutorial-server/index.js:1:77)
    at Module._compile (module.js:573:30)
    at Object.Module._extensions..js (module.js:584:10)
    at Module.load (module.js:507:32)
    at tryModuleLoad (module.js:470:12)
    at Function.Module._load (module.js:462:3)
```

'express' 모듈이 설치되지 않았을 때 나타나는 메세지 입니다.
터미널에 아래 명령어를 입력합니다.
`npm install express`

그리고 다시 `node index.js` 명령어를 입력하면

```
DongKyoo's server is starting!
```
라는 메세지와 함께 서버가 개설된 것을 확인 할 수 있습니다.
더불어 크롬 주소창에 `localhost:3000`를 입력하면 Hi I am DongKyoo! 라고 뜨는 것을 확인할 수 있습니다.

기뻐하세요! 고작 10줄짜리 코드로 여러분은 이미 노드 서버를 개설한 것입니다.
