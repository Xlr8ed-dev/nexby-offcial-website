import{j as a,q as e,$ as n}from"./index-Dks9Upqq.js";const d=()=>{const[t,s]=a.useState(!1),[r,i]=a.useState(!1);return a.useEffect(()=>(window.innerWidth<640&&t?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[t]),e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:()=>s(l=>!l),"aria-label":"Toggle chatbot",className:`
          fixed bottom-5 right-5 z-[70]
          w-14 h-14 sm:w-16 sm:h-16
          bg-gradient-to-br from-blue-500 to-purple-600
          text-white rounded-full shadow-2xl
          flex items-center justify-center
          transition-all duration-300 hover:scale-110
        `,children:[t?e.jsx(n,{className:"w-6 h-6 sm:w-7 sm:h-7 transition"}):e.jsx("img",{src:"/images/robot.png",alt:"Chat",className:"w-7 h-7 sm:w-8 sm:h-8"}),!t&&e.jsx("span",{className:"absolute inset-0 rounded-full bg-blue-500 opacity-75 animate-ping"})]}),e.jsx("div",{onClick:()=>s(!1),className:`
          fixed inset-0 z-[50]
          bg-black/40 backdrop-blur-sm
          transition-opacity duration-300
          ${t?"opacity-100":"opacity-0 pointer-events-none"}
          sm:hidden
        `}),e.jsx("div",{className:`
          fixed z-[60] transition-all duration-300
          ${t?"opacity-100 scale-100":"opacity-0 scale-95 pointer-events-none"}

          /* Mobile */
          top-16 bottom-4 left-3 right-3
          h-[calc(100dvh-5rem)]

          /* Desktop */
          sm:top-24 sm:right-6 sm:left-auto sm:bottom-auto
          sm:w-[420px] sm:h-[650px]
          max-h-[calc(100vh-6rem)]
        `,children:e.jsxs("div",{className:`
            relative w-full h-full
            bg-white dark:bg-gray-900
            border border-gray-200 dark:border-gray-700
            shadow-2xl overflow-hidden
            rounded-2xl
          `,children:[e.jsxs("div",{className:`
              absolute top-0 left-0 right-0
              h-14 sm:h-12
              bg-gradient-to-r from-blue-500 to-purple-600
              flex items-center justify-between px-4
              z-[80]
            `,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-green-400 animate-pulse"}),e.jsx("span",{className:"text-white font-medium text-sm",children:"AI Assistant"})]}),e.jsx("button",{onClick:()=>s(!1),className:"text-white hover:bg-white/20 rounded-full p-2",children:e.jsx(n,{className:"w-5 h-5"})})]}),e.jsxs("div",{className:"relative w-full h-full pt-14 sm:pt-12 z-[10]",children:[!r&&e.jsx("div",{className:"absolute inset-0 z-[20] flex items-center justify-center bg-white dark:bg-gray-900",children:e.jsxs("div",{className:"flex flex-col items-center gap-3",children:[e.jsx("div",{className:"w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"}),e.jsx("span",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Loading chat..."})]})}),e.jsx("iframe",{src:"https://chat.nexby.ai/?ref=0db1de74-b348-4fe4-a433-39df61932990",title:"Nexby Chat",className:"w-full h-full bg-white dark:bg-gray-900 relative z-[5]",allow:"microphone",loading:"eager",onLoad:()=>i(!0)})]})]})})]})};export{d as default};
