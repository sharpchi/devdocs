"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[3417],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return h}});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(o),h=n,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||r;return o?a.createElement(m,i(i({ref:t},p),{},{components:o})):a.createElement(m,i({ref:t},p))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var d=2;d<r;d++)i[d]=o[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}c.displayName="MDXCreateElement"},9767:function(e,t,o){o.r(t),o.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var a=o(7462),n=o(3366),r=(o(7294),o(3905)),i=["components"],s={title:"Moodle App Overview",sidebar_position:1},l=void 0,d={unversionedId:"guides/moodleapp/overview",id:"guides/moodleapp/overview",title:"Moodle App Overview",description:"The Moodle App is a mobile application that helps users make the best of their Moodle sites on handheld devices. It has some additional features like offline access, and a dedicated interface adapted to mobile. It's focused on student functionality, so you won\u2019t find all the features you have on the web for teachers and admins. You can learn more about the features available in the user documentation.",source:"@site/docs/guides/moodleapp/overview.md",sourceDirName:"guides/moodleapp",slug:"/guides/moodleapp/overview",permalink:"/devdocs/docs/guides/moodleapp/overview",editUrl:"https://github.com/moodle/devdocs/edit/main/docs/guides/moodleapp/overview.md",tags:[],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1650355806,formattedLastUpdatedAt:"19/04/2022",sidebarPosition:1,frontMatter:{title:"Moodle App Overview",sidebar_position:1},sidebar:"docs",previous:{title:"Moodle App",permalink:"/devdocs/docs/guides/moodleapp/"},next:{title:"Moodle App Coding Style",permalink:"/devdocs/docs/guides/moodleapp/coding-style"}},p={},u=[{value:"Basic concepts",id:"basic-concepts",level:2},{value:"How does it work?",id:"how-does-it-work",level:3},{value:"Architecture",id:"architecture",level:3},{value:"Web services and caching",id:"web-services-and-caching",level:3},{value:"Delegates and handlers",id:"delegates-and-handlers",level:3},{value:"Site plugins",id:"site-plugins",level:3},{value:"Platform Support",id:"platform-support",level:2},{value:"Where to go next",id:"where-to-go-next",level:2}],c={toc:u};function h(e){var t=e.components,o=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Moodle App is a mobile application that helps users make the best of their Moodle sites on handheld devices. It has some additional features like offline access, and a dedicated interface adapted to mobile. It's focused on student functionality, so you won\u2019t find all the features you have on the web for teachers and admins. You can learn more about the features available in ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/"},"the user documentation"),"."),(0,r.kt)("p",null,"On a technical level, it's a completely different codebase from the Moodle LMS, and interacts with a Moodle site using ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/web_services"},"web services"),". You can find the source code of the application in github: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/moodlehq/moodleapp"},"github.com/moodlehq/moodleapp"),"."),(0,r.kt)("p",null,"Before embarking into any Moodle-specific documentation, we recommend that you are at least familiar with ",(0,r.kt)("a",{parentName:"p",href:"https://angular.io/"},"Angular")," and ",(0,r.kt)("a",{parentName:"p",href:"https://ionicframework.com/"},"Ionic Framework"),". These are the core technologies used in the application. We'll reference any relevant concepts, but having a basic idea will take you a long way in understanding the Moodle App."),(0,r.kt)("h2",{id:"basic-concepts"},"Basic concepts"),(0,r.kt)("h3",{id:"how-does-it-work"},"How does it work?"),(0,r.kt)("p",null,"When you are accessing a Moodle site on the web, you are only capable of using one site at a time. In contrast to that, the Moodle App can be used with multiple sites at once. However, you will need to switch sessions to interact with each site, so you won\u2019t be able to use multiple sites simultaneously (but you'll continue receiving push notifications and reminders for all the sites connected in the app)."),(0,r.kt)("p",null,"This works because the app is not coupled to any specific Moodle site, it acts as a client that will connect with a site after logging in; using the site url and user credentials. Compared to the Moodle LMS, users can always use the latest version of the app even if the site is running an old version. Some features may be missing or change depending on the version of the site, but it will work the same way for the most part."),(0,r.kt)("p",null,"The app can also be compiled to work with a single site, or a list of approved sites. Which may be desirable for building custom applications. For most people though, ",(0,r.kt)("a",{parentName:"p",href:"https://moodle.com/app/"},"the official app from MoodleHQ")," will be sufficient because it\u2019s not restricted to any site."),(0,r.kt)("p",null,"Keep in mind that the application only works with moodle sites that allow it, and this is disabled by default. If you want to allow users to log into your site using the app, make sure to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/311/en/Moodle_app_guide_for_admins#Enable_mobile_services_on_your_site"},"enable it in the settings"),". If you are not the site owner, reach out to the administrators."),(0,r.kt)("h3",{id:"architecture"},"Architecture"),(0,r.kt)("p",null,"The code of the application follows an ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hexagonal_architecture_(software)"},"hexagonal architecture"),", with core modules that include the main functionality and addon modules that provide additional features."),(0,r.kt)("p",null,"Class names are prefixed by their module, so that you can identify whether you\u2019re working with something in core or an addon. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"CoreCourseProvider")," is a core service implementing course features, while ",(0,r.kt)("inlineCode",{parentName:"p"},"AddonMessagesProvider")," is an addon service related with messaging."),(0,r.kt)("p",null,"These modules are defined as ",(0,r.kt)("a",{parentName:"p",href:"https://angular.io/guide/architecture-modules"},"Angular Modules"),", and they are resolved at runtime using ",(0,r.kt)("a",{parentName:"p",href:"https://angular.io/guide/architecture-services"},"Angular's dependency injection framework"),"."),(0,r.kt)("p",null,"Pages and navigation are defined using ",(0,r.kt)("a",{parentName:"p",href:"https://angular.io/guide/routing-overview"},"Angular Router"),", making heavy use of ",(0,r.kt)("a",{parentName:"p",href:"https://angular.io/guide/lazy-loading-ngmodules"},"lazy loading"),"."),(0,r.kt)("h3",{id:"web-services-and-caching"},"Web services and caching"),(0,r.kt)("p",null,"TODO"),(0,r.kt)("h3",{id:"delegates-and-handlers"},"Delegates and handlers"),(0,r.kt)("p",null,"TODO"),(0,r.kt)("h3",{id:"site-plugins"},"Site plugins"),(0,r.kt)("p",null,"TODO"),(0,r.kt)("h2",{id:"platform-support"},"Platform Support"),(0,r.kt)("p",null,"The Moodle App only works with Moodle sites running version 3.1 or newer."),(0,r.kt)("p",null,"The minimum platforms supported by the application are Android 5.1 (with Webview 61 or higher) and iOS 11."),(0,r.kt)("p",null,"Browsers are not officially supported, but you can use a Chromium-based browser for development if you don\u2019t need any native functionality. However, there are ",(0,r.kt)("a",{parentName:"p",href:"#"},"some caveats")," you should be aware of."),(0,r.kt)("h2",{id:"where-to-go-next"},"Where to go next"),(0,r.kt)("p",null,"Now that you are familiar with the basic concepts, you understand how the application works, and you\u2019ve got your development environment set up; you're ready to embark into the particulars of what you're trying to achieve."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Do you want to contribute to the core? Read the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Moodle_App_Development_Guide"},"Moodle App Development Guide"),""),(0,r.kt)("li",{parentName:"ul"},"Do you want to adapt a plugin to mobile? Read the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Moodle_App_Plugins_Development_Guide"},"Moodle App Plugins Development Guide"),"."),(0,r.kt)("li",{parentName:"ul"},"Do you want to customise your site in the app? Read the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Moodle_App_Customisation"},"Moodle App Customisation")," page."),(0,r.kt)("li",{parentName:"ul"},"Do you want to make a custom app? Read the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Custom_Moodle_Apps"},"Custom Moodle Apps")," page.")),(0,r.kt)("p",null,"If you have any further questions, check out the ",(0,r.kt)("a",{parentName:"p",href:"#"},"FAQ"),". If there's anything you want to share, you can do it in ",(0,r.kt)("a",{parentName:"p",href:"https://moodle.org/mod/forum/view.php?id=7798"},"the forum")," or ",(0,r.kt)("a",{parentName:"p",href:"#"},"the Telegram developer room"),". You can also report any bugs that you find in ",(0,r.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MOBILE"},"the tracker"),"."))}h.isMDXComponent=!0}}]);