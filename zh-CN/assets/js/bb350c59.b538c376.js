"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[4517],{84261:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=i(43010),t=i(90887);const r={slug:"/plugins"},l="Using Plugins",o={id:"guides/plugins",title:"Using Plugins",description:"When we need to do some extensions to Answer's functionality, for example, OAuth login, we design a way to use plugins to implement these functions.",source:"@site/docs/guides/plugins.md",sourceDirName:"guides",slug:"/plugins",permalink:"/zh-CN/docs/plugins",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/answer-website/zh-CN",tags:[],version:"current",lastUpdatedBy:"codesee-maps[bot]",lastUpdatedAt:1705310606,formattedLastUpdatedAt:"2024\u5e741\u670815\u65e5",frontMatter:{slug:"/plugins"},sidebar:"docs",previous:{title:"\u58f0\u671b",permalink:"/zh-CN/docs/reputation"},next:{title:"Database",permalink:"/zh-CN/docs/database"}},a={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Official plugins",id:"official-plugins",level:3},{value:"Plugin type",id:"plugin-type",level:3},{value:"Build",id:"build",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Command",id:"command",level:3},{value:"Third-party plugin",id:"third-party-plugin",level:2},{value:"Usage",id:"usage",level:2},{value:"Upgrade",id:"upgrade",level:2},{value:"Develop and contributing",id:"develop-and-contributing",level:2},{value:"Design &amp; principle",id:"design--principle",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"using-plugins",children:"Using Plugins"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"When we need to do some extensions to Answer's functionality, for example, OAuth login, we design a way to use plugins to implement these functions."})}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(n.h3,{id:"official-plugins",children:"Official plugins"}),"\n",(0,s.jsxs)(n.p,{children:["You can find a list of officially supported plugins for Answer ",(0,s.jsx)(n.a,{href:"https://github.com/apache/incubator-answer-plugins",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"plugin-type",children:"Plugin type"}),"\n",(0,s.jsx)(n.p,{children:"We classify plugins into different types. Different types of plugins have different functions. Plugins of the same type have the same effect, but are implemented differently."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Connector"}),": The Connector plugin helps us to implement third-party login functionality. e.g. ",(0,s.jsx)(n.code,{children:"GitHub OAuth Login"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Storage"}),": The Storage plugin helps us to upload files to third-party storage. (preview)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Cache"}),": Support for using different caching middleware. e.g. ",(0,s.jsx)(n.code,{children:"Redis"})," (preview)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Filter"}),": Filter out illegal questions or answers. (coming soon)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Render"}),": Parsers for different content formats. (coming soon)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Finder"}),": Support for using search engines to speed up the search for question answers. (coming soon)"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"build",children:"Build"}),"\n",(0,s.jsx)(n.p,{children:"Answer binary supports packaging different required plugins into the binary."}),"\n",(0,s.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Original Answer binary"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://go.dev/",children:"Golang"})," ",(0,s.jsx)(n.code,{children:">=1.18"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://nodejs.org/",children:"Node.js"})," ",(0,s.jsx)(n.code,{children:">=16.17"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://pnpm.io/",children:"pnpm"})," ",(0,s.jsx)(n.code,{children:">=7"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"command",children:"Command"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["We use the ",(0,s.jsx)(n.code,{children:"build"})," command provided with the Answer binary to rebuild a version of Answer with the plugin."]})}),"\n",(0,s.jsx)(n.p,{children:"For example, let's see how to build an Answer binary that includes the github third-party login plugin."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"# answer build --with [plugin@plugin_version=[replacement]] --output [file]\n$ ./answer build --with github.com/apache/incubator-answer-plugins/connector-github\n\n# build a new answer with github login plugin then output to ./new_answer.\n$ ./answer build --with github.com/apache/incubator-answer-plugins/connector-github@1.0.0 --output ./new_answer\n\n# with multiple plugins\n$ ./answer build \\\n--with github.com/apache/incubator-answer-plugins/connector-github \\\n--with github.com/apache/incubator-answer-plugins/connector-google\n\n# with local plugins\n$ ./answer build --with github.com/apache/incubator-answer-plugins/connector-github@1.0.0=/my-local-space\n\n# cross compilation. Build a linux-amd64 binary in macos\n$ CGO_ENABLED=0 GOOS=linux GOARCH=amd64 ./answer build --with github.com/apache/incubator-answer-plugins/connector-github\n\n# specify the answer version using ANSWER_MODULE environment variable\n$ ANSWER_MODULE=github.com/apache/incubator-answer@v1.2.0-RC1 ./answer build --with github.com/apache/incubator-answer-plugins/connector-github\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["You can use the ",(0,s.jsx)(n.code,{children:"plugin"})," command to list the current binary containing plugins."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ ./new_answer plugin\n\n# output\n# github connector[0.0.1] made by answerdev\n# google connector[0.0.1] made by answerdev\n"})}),"\n",(0,s.jsx)(n.h2,{id:"third-party-plugin",children:"Third-party plugin"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["We recommend the use of ",(0,s.jsx)(n.a,{href:"https://github.com/apache/incubator-answer-plugins",children:"official plugins"}),", if you want to use third-party plugins, refer to the following."]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If the third-party plugin is publicly available, you can build with it like official plugins."}),"\n",(0,s.jsx)(n.li,{children:"If the third-party plugin is private, you need to download it then build with."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.p,{children:"The Answer with the plugin version is used in the same way as before. You can find the plugin's configuration in the admin page."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"plugin-config-admin-page",src:i(65832).Z+"",width:"2688",height:"980"})}),"\n",(0,s.jsx)(n.h2,{id:"upgrade",children:"Upgrade"}),"\n",(0,s.jsx)(n.p,{children:"You need build a new Answer binary with the new plugin version, then replace the old Answer binary with the new one."}),"\n",(0,s.jsx)(n.h2,{id:"develop-and-contributing",children:"Develop and contributing"}),"\n",(0,s.jsxs)(n.p,{children:["Please refer to ",(0,s.jsx)(n.a,{href:"/community/plugins",children:"the documentation"})," for details."]}),"\n",(0,s.jsx)(n.h2,{id:"design--principle",children:"Design & principle"}),"\n",(0,s.jsxs)(n.p,{children:["Since Golang is a static language, there is no friendly plugin mechanism. So instead of a dynamic approach, we use recompilation for deployment. Please refer to ",(0,s.jsx)(n.a,{href:"/blog/2023/07/22/why-the-answer-plugin-system-was-designed-this-way",children:"the blog"})," for details."]})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},65832:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/plugin-config-admin-page-e343b33766f45a10093fc621e741c811.png"},90887:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>l});var s=i(85170);const t={},r=s.createContext(t);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);