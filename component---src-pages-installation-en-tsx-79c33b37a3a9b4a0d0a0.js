(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"+hQf":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a("9Dj+"),l=a("H8eV"),o=(a("OG14"),a("9VmF"),a("91GP"),a("68so")),c=a("lfct"),i=a("7XWO"),s=a("G3ap"),m=a.n(s),u=a("Lhx/"),p=a.n(u),d=a("KlYJ");n.Fragment;function g(e){e.homeRef;var t,a=e.defaultLang,r=n.useState(!0),l=(r[0],r[1],Object(i.c)().state.language),s=Object(i.c)().state,u=(l&&l.currentLanguage?l:{currentLanguage:a}).currentLanguage,g=(null==s||null===(t=s.setting)||void 0===t||t.lightMode,d.a[u]);return n.createElement(n.Fragment,null,n.createElement(o.AnimateGroup,{play:!0},n.createElement("header",{className:p.a.head,id:"main"},n.createElement(o.Animate,{sequenceIndex:0,duration:.2,start:{transform:"translateY(20px)",opacity:0},end:{transform:"translateY(0)"},easeType:"ease-in",render:function(e){var t=e.style;return n.createElement("h1",{className:m.a.heading+" "+p.a.logoHeading,style:t},g.installation)}}),n.createElement(o.Animate,{sequenceIndex:1,start:{transform:"translateY(20px)",opacity:0},end:{transform:"translateY(0)"},easeType:"ease-in",render:function(e){var t=e.style;return n.createElement("p",{className:m.a.subHeading,style:Object.assign({marginBottom:0,maxWidth:660},t)},c.a.slogan[u])}}))))}var h=a("b2pr"),E=a("BHVN"),f=a("z4hI"),y=a.n(f),b=a("vA4O"),v=n.useState,w=n.useRef,k=n.useEffect,x={rootMargin:"0px 0px",threshold:[1]};var L=n.memo((function(e){var t=e.location,a=e.defaultLang,r=v(!1),l=r[0],o=r[1],c=w(null),s=v(!1),m=s[0],u=s[1],p=v(!1),d=p[0],f=p[1],L=v(!1),N=L[0],C=L[1],F=v(!1),I=F[0],R=(F[1],v(!1)),T=R[0],H=R[1],O=v(!1),S=(O[0],O[1]),j=Object(i.c)().state.language,q=(j&&j.currentLanguage?j:{currentLanguage:a}).currentLanguage;return k((function(){t.search.startsWith("?goToDemo")&&setTimeout((function(){c.current.scrollIntoView({behavior:"smooth"}),t.search.startsWith("?goToDemo&updated=true")&&S(!0)}),100),IntersectionObserver||(u(!0),f(!0));var e=document.querySelector("#featureLast"),a=document.querySelector("#codeComparison"),n=document.querySelector("#rendering"),r=document.querySelector("#isolate"),l=(document.querySelector("#card"),new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting&&(t.target!==e||m||u(!0),t.target!==a||d||f(!0),t.target!==n||T||H(!0),t.target!==r||N||C(!0))}))}),x));return function(){return l.disconnect()}}),[]),n.createElement("div",{className:y.a.root},l&&n.createElement(E.a,{showBuilder:!0,toggleBuilder:o,HomeRef:c,defaultLang:a}),n.createElement(g,{isCardPlay:I,homeRef:c,defaultLang:a}),n.createElement(b.a,{isPlayCodeCompare:d,currentLanguage:q}),n.createElement("div",{ref:c}),n.createElement(h.a,{currentLanguage:q}))})),N="Install Create Next App";t.default=function(e){var t=e.location;return n.createElement(r.a,{location:t,defaultLang:"en"},n.createElement(l.a,{title:N,location:t}),n.createElement(L,{location:t,defaultLang:"en"}))}},KlYJ:function(e,t,a){"use strict";var n=a("q1tI"),r=a("YwZP"),l=a("HBbU"),o=a("mLYZ"),c=a("Vhwb"),i=a("G3ap"),s=a.n(i),m={title:"Get Started with Templates",installation:"Install Create Next App",header:{title:"Get Started with Templates",description:"Set up a Next.js app by running one command."},video:{title:"Video Tutorial",description:"This video tutorial illustrates the basic usage and concepts of React Hook Form."},install:{linkTitle:"Create a Next App in Seconds",title:"Create a Next App in Seconds",description1:"You can create an app using any of the templates:",description2:"Run command to create an app:"},example:{title:"Example",description:"The following code excerpt demonstrates a basic usage example:"},register:{title:"Register fields",description:n.createElement(n.Fragment,null,n.createElement("p",null,"One of the key concepts in React Hook Form is to"," ",n.createElement("strong",null,n.createElement("code",null,"register"))," ","your uncontrolled component into the Hook. This will make its value available for both the form validation and submission."),n.createElement("p",null,n.createElement("b",{className:s.a.note},"Note:")," Each field is"," ",n.createElement("strong",null,"required")," to have a unique ",n.createElement("code",null,"name")," as a key for the registration process."),n.createElement("p",null,n.createElement("b",{className:s.a.note},"Note: "),"React Native will require you to either use a manual register command:"," ",n.createElement("code",null,"register({ name: 'test' }, { required: true })")," or a"," ",n.createElement(r.Link,{to:"/api#Controller"},"Controller")," to wrap and register your component automatically. Learn more in the dedicated section for"," ",n.createElement(r.Link,{to:"/api/#ReactNative"},"React Native"),"."))},applyValidation:{title:"Apply validation",description:function(e){return n.createElement(n.Fragment,null,n.createElement("p",null,"React Hook Form makes form validation easy by aligning with the existing"," ",n.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation",target:"_blank",rel:"noopener noreferrer"},"HTML standard for form validation"),"."),n.createElement("p",null,"List of validation rules supported:"),n.createElement("ul",null,n.createElement("li",null,"required"),n.createElement("li",null,"min"),n.createElement("li",null,"max"),n.createElement("li",null,"minLength"),n.createElement("li",null,"maxLength"),n.createElement("li",null,"pattern"),n.createElement("li",null,"validate")),n.createElement("p",null,"You can read more detail on each rule in the"," ",n.createElement(r.Link,{to:Object(l.a)("api#register",e)},"register section"),"."))}},adapting:{title:"Adapting existing form",description:n.createElement(n.Fragment,null,"Working on an existing form is simple. The important step is to apply"," ",n.createElement("code",null,"register")," into existing component's ",n.createElement("code",null,"ref"),".")},controlledInput:{title:"Controlled Input",description:n.createElement(n.Fragment,null,n.createElement("p",null,"React Hook Form embrace uncontrolled components and native HTML inputs, however it's hard to avoid working with external controlled component such as"," ",n.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/JedWatson/react-select"},"React-Select"),","," ",n.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/ant-design/ant-design"},"AntD")," ","and"," ",n.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://material-ui.com/"},"Material-UI"),", hence we have built a wrapper component:"," ",n.createElement(r.Link,{to:"/api#Controller"},"Controller")," to streamline the integration process while still giving you the freedom to use custom register with your needs."),n.createElement("p",null,"Read more about the ",n.createElement(r.Link,{to:"/api#Controller"},"Controller")," ","component."))},workWithUI:{title:"Work with UI library",description:function(e){return n.createElement(n.Fragment,null,n.createElement("p",null,"React Hook Form has made it easy to integrate with external UI component libraries. You can check out"," ",n.createElement("a",{href:"https://www.youtube.com/watch?v=0nDGeQKLFjo",target:"_blank",rel:"noopener noreferrer"},"this video tutorial")," ","on how to work with MUI."),n.createElement("p",null,n.createElement("b",{className:s.a.note},"Option 1:")," The best way is to check if the component you wish to use exposes an"," ",n.createElement("code",null,"innerRef")," or ",n.createElement("code",null,"ref")," that can be used to"," ",n.createElement("code",null,n.createElement(r.Link,{to:Object(l.a)("api#register",e)},"register")),". For example: Material-UI's ",n.createElement("code",null,"TextField")," accepts"," ",n.createElement("code",null,"inputRef")," as one of its props. You can simply pass"," ",n.createElement("code",null,"register")," to it."),n.createElement("p",null,n.createElement("code",null,'<TextField inputRef={register} label="First name" name="FirstName"/>')),n.createElement("p",null,n.createElement("b",{className:s.a.note},"Option 2:")," Sometimes components don't expose a prop to register, for example"," ",n.createElement("code",null,"react-select")," or ",n.createElement("code",null,"react-datepicker"),"."),n.createElement("p",null,"The second easiest way is to use the"," ",n.createElement(r.Link,{to:"/api#Controller"},"Controller")," wrapper component, which will take care of the registration process for you."),n.createElement(o.a,{rawData:c.a}),n.createElement("p",null,n.createElement("b",{className:s.a.note},"Option 3:")," Lastly we can set up a custom register using the"," ",n.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://reactjs.org/docs/hooks-effect.html"},"useEffect")," ","Hook and update the value via"," ",n.createElement("code",null,n.createElement(r.Link,{to:Object(l.a)("api#setValue",e)},"setValue")),"."))}},globalState:{title:"Integrate global state",description:"React Hook Form doesn't require you to rely on a state management library such as Redux to store your data, but you can easily integrate with it:"},reactNative:{title:"React Native",description:n.createElement("p",null,"You will get the same performance enhancement from an Uncontrolled Component. However, there are certain APIs which are not compatible with React Native (due to the API differences between web and native). You will have to use a ",n.createElement("b",null,"manual register")," as shown in the following example.")},typeScript:{title:"TypeScript",description:n.createElement("p",null,"React Hook Form is built with ",n.createElement("code",null,"Typescript"),", so you can define a ",n.createElement("code",null,"FormData")," type to support form values.")},errors:{title:"Handle errors",description:n.createElement(n.Fragment,null,"React Hook Form provides an ",n.createElement("code",null,"errors")," object to show you the errors in the form.")}},u=a("vLFi"),p=a("FfAg"),d=a("uJd3"),g=a("vcQ2"),h=a("tmCj"),E=a("/GVn");t.a={en:m,es:u.a,pt:p.a,kr:h.a,jp:g.a,zh:d.a,ru:E.a}},vA4O:function(e,t,a){"use strict";var n=a("q1tI"),r=a("68so"),l=a("lfct"),o=a("G3ap"),c=a.n(o),i=a("9QH1"),s=a.n(i),m=a("r4yl"),u=a.n(m),p=a("7XWO"),d=a("TjPv"),g=a("Kzm3"),h=a("Kcv2"),E=a.n(h);t.a=n.memo((function(e){var t,a=e.isPlayCodeCompare,o=e.currentLanguage,i=n.useState(!1),m=(i[0],i[1],Object(p.c)().state),h=null==m||null===(t=m.setting)||void 0===t?void 0:t.lightMode;return n.createElement(r.AnimateGroup,{play:a},n.createElement("div",{style:{marginBottom:40}},n.createElement("div",{className:s.a.centerContent,id:"installation"},n.createElement("h1",{className:c.a.h1},l.a.usage[o].title),l.a.usage[o].description1,n.createElement("p",{id:"codeComparison",className:u.a.codeComparison},n.createElement("span",{className:u.a.installCode+" "+(h?u.a.lightInstallCode:"")},"npm install --global @create-next-app/core",n.createElement("button",{className:u.a.copyButton,onClick:function(){Object(d.a)("npm install --global @create-next-app/core"),alert(g.a.copied[o])}},n.createElement("span",{className:E.a.copyIcon},n.createElement("span",null))," ",g.a.copy[o]))),n.createElement("div",{style:{marginTop:30}},l.a.usage[o].description2,n.createElement("p",{id:"codeComparison",className:u.a.codeComparison},n.createElement("span",{className:u.a.installCode+" "+(h?u.a.lightInstallCode:"")},"yarn global add @create-next-app/core",n.createElement("button",{className:u.a.copyButton,onClick:function(){Object(d.a)("yarn global add @create-next-app/core"),alert(g.a.copied[o])}},n.createElement("span",{className:E.a.copyIcon},n.createElement("span",null))," ",g.a.copy[o])))))))}))}}]);
//# sourceMappingURL=component---src-pages-installation-en-tsx-79c33b37a3a9b4a0d0a0.js.map