(this["webpackJsonpreact-weather-app"]=this["webpackJsonpreact-weather-app"]||[]).push([[0],{16:function(e,a,t){e.exports=t(27)},26:function(e,a,t){},27:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(14),l=t.n(c),d=function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"react-weather-app"))},o=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",null,"Made with luv by ",r.a.createElement("a",{href:"https://github.com/milkndcoffee/"},"milkndcoffee")),r.a.createElement("p",null,"Hosted on Github pages"),r.a.createElement("a",{href:"https://github.com/milkndcoffee/react-weather-app"},"Source Code"))},i=function(e){var a,t=e.dayNum,n=e.weekdayArr,c=new Date,l=""===t?{day:n[c.getDay()].day,highLow:n[c.getDay()].highLow,condition:n[c.getDay()].condition}:{day:n[a=t].day,highLow:n[a].highLow,condition:n[a].condition};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"cardContainer"},r.a.createElement("div",null,r.a.createElement("h2",null,l.day)),r.a.createElement("img",{alt:"weather-img",className:"imgPlaceholder"}),r.a.createElement("p",{className:"condition"},l.condition),r.a.createElement("div",null,r.a.createElement("h2",null,l.highLow[0],"/",l.highLow[1]))))},m=t(8),u=function(e){var a=e.days,t=e.selectDay,n=new Date;t=""===t?a[n.getDay()].day:a[t].day;return r.a.createElement("div",{className:"gridContainer"},a.map((function(e,n){return r.a.createElement("div",{className:e.day===t?"outlineThis":""},r.a.createElement(m.b,{to:function(){return function(e){return"/"+e}(e.day)}},r.a.createElement("button",null,r.a.createElement(i,{dayNum:n,weekdayArr:a}))))})))},y=function(e){var a=e.dataArr,t=e.selectDay;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i,{dayNum:t,weekdayArr:a}),r.a.createElement(u,{days:a,selectDay:t}))},h=t(1);t(26);var s=function(){var e=[{day:"Sunday",highLow:[71,59],condition:"Cloudy"},{day:"Monday",highLow:[80,62],condition:"Cloudy"},{day:"Tuesday",highLow:[86,70],condition:"Sunny"},{day:"Wednesday",highLow:[88,69],condition:"Sunny"},{day:"Thursday",highLow:[79,63],condition:"Cloudy"},{day:"Friday",highLow:[63,55],condition:"Showers"},{day:"Saturday",highLow:[72,60],condition:"Cloudy"}];return r.a.createElement(m.a,null,r.a.createElement("div",{className:"container"},r.a.createElement(d,null),r.a.createElement("main",null,r.a.createElement(h.a,{exact:!0,path:"/"},r.a.createElement(y,{dataArr:e,selectDay:""})),r.a.createElement(h.a,{exact:!0,path:"/sunday"},r.a.createElement(y,{dataArr:e,selectDay:0})),r.a.createElement(h.a,{exact:!0,path:"/monday"},r.a.createElement(y,{dataArr:e,selectDay:1})),r.a.createElement(h.a,{exact:!0,path:"/tuesday"},r.a.createElement(y,{dataArr:e,selectDay:2})),r.a.createElement(h.a,{exact:!0,path:"/wednesday"},r.a.createElement(y,{dataArr:e,selectDay:3})),r.a.createElement(h.a,{exact:!0,path:"/thursday"},r.a.createElement(y,{dataArr:e,selectDay:4})),r.a.createElement(h.a,{exact:!0,path:"/friday"},r.a.createElement(y,{dataArr:e,selectDay:5})),r.a.createElement(h.a,{exact:!0,path:"/saturday"},r.a.createElement(y,{dataArr:e,selectDay:6}))),r.a.createElement(o,null)))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e8346dcf.chunk.js.map