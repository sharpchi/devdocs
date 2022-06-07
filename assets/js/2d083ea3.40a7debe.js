"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[52597],{16101:function(e,t,i){i.r(t),i.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var o=i(83117),n=i(80102),a=(i(67294),i(3905)),r=i(13904),s=["components"],l={title:"Brute-forcing login",sidebar_position:12,tags:["Coding guidelines","Policies","Security"]},d=void 0,c={unversionedId:"development/policies/security/bruteforcing-login",id:"development/policies/security/bruteforcing-login",title:"Brute-forcing login",description:"This page forms part of the Moodle security guidelines.",source:"@site/general/development/policies/security/bruteforcing-login.md",sourceDirName:"development/policies/security",slug:"/development/policies/security/bruteforcing-login",permalink:"/devdocs/general/development/policies/security/bruteforcing-login",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/development/policies/security/bruteforcing-login.md",tags:[{label:"Coding guidelines",permalink:"/devdocs/general/tags/coding-guidelines"},{label:"Policies",permalink:"/devdocs/general/tags/policies"},{label:"Security",permalink:"/devdocs/general/tags/security"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1654598646,formattedLastUpdatedAt:"07/06/2022",sidebarPosition:12,frontMatter:{title:"Brute-forcing login",sidebar_position:12,tags:["Coding guidelines","Policies","Security"]},sidebar:"coding",previous:{title:"Denial of service",permalink:"/devdocs/general/development/policies/security/dos"},next:{title:"Insecure configuration",permalink:"/devdocs/general/development/policies/security/insecure-config"}},u={},p=[{value:"What is the danger?",id:"what-is-the-danger",level:2},{value:"How Moodle avoids this problem",id:"how-moodle-avoids-this-problem",level:2},{value:"What you need to do in your code",id:"what-you-need-to-do-in-your-code",level:2},{value:"What you need to do as an administrator",id:"what-you-need-to-do-as-an-administrator",level:2},{value:"See also",id:"see-also",level:2}],m={toc:p};function g(e){var t=e.components,i=(0,n.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(r.Z,(0,o.Z)({frontMatter:l},void 0!==c?{metadata:c}:{},{mdxType:"MoodlePageBanner"})),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This page forms part of the ",(0,a.kt)("a",{parentName:"p",href:"../security"},"Moodle security guidelines"),"."))),(0,a.kt)("h2",{id:"what-is-the-danger"},"What is the danger?"),(0,a.kt)("p",null,"Evil Hacker wants to break into your Moodle site by stealing the account of a registered user."),(0,a.kt)("p",null,"They write a script that automatically tries logging in with a range of common passwords, for example, ",(0,a.kt)("inlineCode",{parentName:"p"},"admin / admin"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"admin / apple"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"admin / 1234"),", .... It only takes one user with we weak password that Evil Hacker can guess, and your site is compromised."),(0,a.kt)("h2",{id:"how-moodle-avoids-this-problem"},"How Moodle avoids this problem"),(0,a.kt)("p",null,"A lockout system is present in Moodle 2.5 onwards, you just need to turn it on at ",(0,a.kt)("strong",{parentName:"p"},"Administration > Site administration > Security > Site security settings > Account lockout threshold (",(0,a.kt)("inlineCode",{parentName:"strong"},"$CFG->lockoutthreshold"),")"),"."),(0,a.kt)("p",null,"Moodle also counts failed login attempts, and can alert the administrator by email when there are too many."),(0,a.kt)("p",null,"There are admin settings to enforce a minimum level of complexity for passwords, for example, by insisting on a minimum number of characters."),(0,a.kt)("h2",{id:"what-you-need-to-do-in-your-code"},"What you need to do in your code"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you are writing an authentication plugin, ensure that all failed logins are logged correctly.")),(0,a.kt)("h2",{id:"what-you-need-to-do-as-an-administrator"},"What you need to do as an administrator"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Consider turning on the options for reporting login failures."),(0,a.kt)("li",{parentName:"ul"},"Consider turning on the settings that ensure password complexity.")),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../security"},"Security")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/general/development/policies"},"Coding")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://owasp.org/www-community/attacks/Brute_force_attack"},"Brute force attack in OWASP"))))}g.isMDXComponent=!0}}]);