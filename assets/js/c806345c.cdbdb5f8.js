"use strict";(self.webpackChunkstaticdocs_starter=self.webpackChunkstaticdocs_starter||[]).push([[929],{13138:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=i(74848),o=i(28453);const r={sidebar_position:2},a="Creating Your Applications",l={id:"user_guide/creating_your_applications",title:"Creating Your Applications",description:"This page guides you on how to create your own project that depends on the Momentum library.",source:"@site/docs/02_user_guide/02_creating_your_applications.md",sourceDirName:"02_user_guide",slug:"/user_guide/creating_your_applications",permalink:"/momentum/docs/user_guide/creating_your_applications",draft:!1,unlisted:!1,editUrl:"https://github.com/facebookincubator/momentum/edit/main/momentum/website/docs/02_user_guide/02_creating_your_applications.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/momentum/docs/user_guide/getting_started"},next:{title:"Viewers",permalink:"/momentum/docs/examples/viewers"}},s={},c=[{value:"Install Momentum",id:"install-momentum",level:2},{value:"Writing Source Code",id:"writing-source-code",level:2},{value:"Writing CMake Script",id:"writing-cmake-script",level:2},{value:"Building using CMake",id:"building-using-cmake",level:2},{value:"Run the Application",id:"run-the-application",level:2},{value:"Configuring Your Project with Pixi",id:"configuring-your-project-with-pixi",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"creating-your-applications",children:"Creating Your Applications"}),"\n",(0,t.jsx)(n.p,{children:"This page guides you on how to create your own project that depends on the Momentum library."}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["We continue to use Pixi's virtual environment for building your project with Momentum and its dependencies. For alternative setups, please refer to the ",(0,t.jsx)(n.a,{href:"../developer_guide/development_environment",children:"Development Environment"})," page."]})}),"\n",(0,t.jsx)(n.h2,{id:"install-momentum",children:"Install Momentum"}),"\n",(0,t.jsx)(n.p,{children:"First, install Momentum in the virtual environment by running:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"pixi run install\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This command builds (in Release mode) and installs Momentum to ",(0,t.jsx)(n.code,{children:".pixi/envs/default/{include,lib,share}/"})," (Windows may have slightly different path). The necessary environment variables are set so that CMake can find Momentum (and other dependencies) using the environment variables in the virtual environment."]}),"\n",(0,t.jsx)(n.h2,{id:"writing-source-code",children:"Writing Source Code"}),"\n",(0,t.jsxs)(n.p,{children:["Create a new file named ",(0,t.jsx)(n.code,{children:"main.cpp"})," in your project root with the following content:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"#include <momentum/math/mesh.h>\n\nusing namespace momentum;\n\nint main() {\n  auto mesh = Mesh();\n  mesh.updateNormals();\n  return EXIT_SUCCESS;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"writing-cmake-script",children:"Writing CMake Script"}),"\n",(0,t.jsxs)(n.p,{children:["Create a ",(0,t.jsx)(n.code,{children:"CMakeLists.txt"})," file in the same directory as ",(0,t.jsx)(n.code,{children:"main.cpp"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["To add momentum to your CMake project, first find the momentum package using the\n",(0,t.jsx)(n.code,{children:"find_package"})," function and then add the appropriate ",(0,t.jsx)(n.code,{children:"momentum::<target>"})," as a\ndependency to your library or executable. For example, if you want to use the\ncharacter functionality from momentum, you would add ",(0,t.jsx)(n.code,{children:"momentum::character"})," as a\ndependency:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cmake",children:"cmake_minimum_required(VERSION 3.16.3)\n\nproject(momentum)\n\nfind_package(momentum CONFIG REQUIRED)\nadd_executable(hello_world main.cpp)\ntarget_link_libraries(hello_world PRIVATE momentum::math)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Refer to the example project located at ",(0,t.jsx)(n.code,{children:"momentum/examples/hello_world/"})," for the complete source code."]}),"\n",(0,t.jsx)(n.p,{children:"If you are developing a library that depends on Momentum:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cmake",children:"add_library(my_lib SHARED my_lib.hpp my_lib.cpp)  # shared\nadd_library(my_lib STATIC my_lib.hpp my_lib.cpp)  # static\ntarget_link_libraries(my_lib PUBLIC momentum::math)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"building-using-cmake",children:"Building using CMake"}),"\n",(0,t.jsx)(n.p,{children:"Assuming your project directory now contains:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"<root>\n - CMakeLists.txt\n - main.cpp\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For convenience, we assume that your project root is located at ",(0,t.jsx)(n.code,{children:"momentum/examples/hello_world/"})," because this code example is provided in that directory. You can use this working example as a reference, but feel free to adjust the path according to your actual project root."]}),"\n",(0,t.jsx)(n.p,{children:"Here, we assume you are not using Pixi to build your project, but you are still within the Pixi environment for managing dependencies."}),"\n",(0,t.jsx)(n.p,{children:"To run any command in the virtual environment, use:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"pixi run <command>\n"})}),"\n",(0,t.jsx)(n.p,{children:"Run the native CMake commands in the virtual environment as follows:"}),"\n",(0,t.jsx)(n.p,{children:"To configure the application, run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"# Linux and macOS\npixi run cmake -S momentum/examples/hello_world -B momentum/examples/hello_world/build -DCMAKE_BUILD_TYPE=Release\n\n# Windows\npixi run cmake -S momentum/examples/hello_world -B momentum/examples/hello_world/build\n"})}),"\n",(0,t.jsx)(n.p,{children:"To build the application, run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"# Linux and macOS\npixi run cmake --build momentum/examples/hello_world/build\n\n# Windows\npixi run cmake --build momentum/examples/hello_world/build --config Release\n"})}),"\n",(0,t.jsx)(n.h2,{id:"run-the-application",children:"Run the Application"}),"\n",(0,t.jsx)(n.p,{children:"Execute the application with:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"# Linux and macOS\n./momentum/examples/hello_world/build/hello_world\n\n# Windows\nmomentum/examples/hello_world/build/Release/hello_world.exe\n"})}),"\n",(0,t.jsx)(n.h2,{id:"configuring-your-project-with-pixi",children:"Configuring Your Project with Pixi"}),"\n",(0,t.jsxs)(n.p,{children:["If you wish to use Pixi for your project similar to how it's implemented in Momentum, please visit ",(0,t.jsx)(n.a,{href:"https://pixi.sh/latest/basic_usage/",children:"this website"})," for detailed instructions."]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>l});var t=i(96540);const o={},r=t.createContext(o);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);