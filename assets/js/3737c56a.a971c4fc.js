"use strict";(self.webpackChunkstaticdocs_starter=self.webpackChunkstaticdocs_starter||[]).push([[396],{60478:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var t=i(74848),o=i(28453);const s={sidebar_position:1},r="Development Environment",d={id:"developer_guide/development_environment",title:"Development Environment",description:"Supported Environments",source:"@site/docs/04_developer_guide/01_development_environment.md",sourceDirName:"04_developer_guide",slug:"/developer_guide/development_environment",permalink:"/momentum/docs/developer_guide/development_environment",draft:!1,unlisted:!1,editUrl:"https://github.com/facebookincubator/momentum/edit/main/momentum/website/docs/04_developer_guide/01_development_environment.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Process Markers",permalink:"/momentum/docs/examples/process_markers"},next:{title:"Style Guide",permalink:"/momentum/docs/developer_guide/style_guide"}},l={},a=[{value:"Supported Environments",id:"supported-environments",level:2},{value:"Package Manager",id:"package-manager",level:2},{value:"Running Custom Commands in Shell",id:"running-custom-commands-in-shell",level:2},{value:"Developing with Microsoft Visual Studio (Windows Only)",id:"developing-with-microsoft-visual-studio-windows-only",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"development-environment",children:"Development Environment"}),"\n",(0,t.jsx)(n.h2,{id:"supported-environments",children:"Supported Environments"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"OS"}),": Windows, Linux, macOS"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"package-manager",children:"Package Manager"}),"\n",(0,t.jsxs)(n.p,{children:["Before developing Momentum, it is necessary to install various dependencies. This process can be platform-dependent and tedious. To simplify this, Momentum utilizes ",(0,t.jsx)(n.a,{href:"https://prefix.dev/",children:"Pixi"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Pixi facilitates building Momentum in a virtual environment across different platforms (Windows, macOS ARM, Linux) using consistent command lines."}),"\n",(0,t.jsxs)(n.p,{children:["For those interested, you can examine the ",(0,t.jsx)(n.code,{children:"pixi.toml"})," file to see how dependencies are specified and to explore the available Pixi tasks for Momentum."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["If you choose not to use Pixi, you will need to manually install all dependencies using platform-specific package managers. These typically install dependencies into the system directory. Ensure you have the appropriate package managers installed for your OS: ",(0,t.jsx)(n.a,{href:"https://brew.sh/",children:"Homebrew"})," for macOS, ",(0,t.jsx)(n.a,{href:"https://vcpkg.io/en/",children:"Vcpkg"})," for Windows, and apt for Ubuntu/Debian. After installation, refer to ",(0,t.jsx)(n.code,{children:"pixi.toml"})," for guidance on what and how to install."]})}),"\n",(0,t.jsx)(n.h2,{id:"running-custom-commands-in-shell",children:"Running Custom Commands in Shell"}),"\n",(0,t.jsxs)(n.p,{children:["To execute additional commands in the virtual environment other than the predefined tasks (to see the full tasks: ",(0,t.jsx)(n.code,{children:"pixi task list"}),"), such as using CMake directly or running an executable, activate the virtual environment with:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"pixi shell\n"})}),"\n",(0,t.jsx)(n.p,{children:"To exit the virtual environment, simply run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"exit\n"})}),"\n",(0,t.jsx)(n.h3,{id:"developing-with-microsoft-visual-studio-windows-only",children:"Developing with Microsoft Visual Studio (Windows Only)"}),"\n",(0,t.jsx)(n.p,{children:"To open the project in Visual Studio 2022, use the command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"pixi run open_vs\n"})})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>d});var t=i(96540);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);