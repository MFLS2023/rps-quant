import{u as Q,r as m,J as U,j as e}from"./live-row-quotes-DbzrTzhE.js";import{c as Z}from"./stockNav-CQ6MHHLs.js";import{c as ee,u as te,q as ae,L as re,H as le,o as ne,R as se,b as oe}from"./index-DzPXCYgc.js";import{C as ie}from"./chevron-right-_kTsbzG8.js";const ce=[10,20,30,50],k=108,f=108,D=["#F5222D","#1677FF","#FAAD14","#52C41A","#A855F7","#13C2C2"],de={1:"①",2:"②",3:"③",4:"④",5:"⑤",6:"⑥",7:"⑦",8:"⑧",9:"⑨",10:"⑩"};function xe(a){if(a==null)return null;const n=typeof a=="object"&&"value"in a?a.value:a,r=Number(n);return Number.isFinite(r)?r>10?10.5:r:null}function pe(a){const n=Number(a);return Number.isFinite(n)?n>10?"无":de[Math.round(n)]||String(n):""}function he(a){var r;if(!((r=a==null?void 0:a.date)!=null&&r.length))return[];const n=Object.values(a.name||{}).slice(0,6);return a.date.map((d,x)=>{const p={date:d};return n.forEach((u,h)=>{const j=a[String(h+1)];p[u]=xe(j==null?void 0:j[x])}),p})}function me(a){var n,r;return(r=(n=a==null?void 0:a.day_chart)==null?void 0:n.date)!=null&&r.length?a.day_chart.date.map((d,x)=>{var p,u;return{date:d,strength:Number(((p=a.day_chart.series1)==null?void 0:p[x])??0),amount:Number(((u=a.day_chart.series2)==null?void 0:u[x])??0)}}):[]}function R(a,n,r,d,x){return r===n?(d+x)/2:x-(a-n)/(r-n)*(x-d)}function ue(a,n=!1){const r=a.filter(u=>Number.isFinite(u));if(!r.length)return{min:n?0:-1,max:1};let d=Math.min(...r),x=Math.max(...r);n&&(d=Math.min(d,0),x=Math.max(x,0)),d===x&&(d-=1,x+=1);const p=(x-d)*.12;return{min:d-p,max:x+p}}function be({data:a,width:n,height:r=178}){const p=a.map(o=>o.strength),{min:u,max:h}=ue(p,!0),j=a.map((o,s)=>({...o,x:f+s*k+k/2,y:R(o.strength,u,h,16,r-28)})),l=R(0,u,h,16,r-28);return e.jsxs("svg",{width:n,height:r,className:"aligned-chart",children:[e.jsx("line",{x1:f,x2:f,y1:0,y2:r,className:"chart-rank-separator"}),a.map((o,s)=>{const N=f+s*k;return e.jsxs("g",{children:[e.jsx("line",{x1:N,x2:N,y1:0,y2:r-28+4,className:"chart-grid-line"}),e.jsx("text",{x:N+k/2,y:r-8,textAnchor:"middle",className:"chart-date-label",children:o.date})]},o.date)}),e.jsx("line",{x1:f,x2:n,y1:l,y2:l,className:"chart-zero-line"}),e.jsx("polyline",{points:j.map(o=>`${o.x},${o.y}`).join(" "),fill:"none",stroke:"#F5222D",strokeWidth:2.5}),j.map(o=>e.jsx("circle",{cx:o.x,cy:o.y,r:3.5,fill:"#F5222D",children:e.jsx("title",{children:`${o.date} 强度 ${o.strength}`})},o.date))]})}function ge({data:a,width:n,height:r=150}){const p=Math.max(1,...a.map(h=>h.amount)),u=k*.56;return e.jsxs("svg",{width:n,height:r,className:"aligned-chart",children:[e.jsx("line",{x1:f,x2:f,y1:0,y2:r,className:"chart-rank-separator"}),a.map((h,j)=>{const l=f+j*k,o=l+k/2,s=R(h.amount,0,p,24,r-28);return e.jsxs("g",{children:[e.jsx("line",{x1:l,x2:l,y1:0,y2:r-28+4,className:"chart-grid-line"}),e.jsx("rect",{x:o-u/2,y:s,width:u,height:r-28-s,rx:3,fill:"#1677FF",children:e.jsx("title",{children:`${h.date} 量能 ${h.amount}`})}),e.jsx("text",{x:o,y:Math.max(11,s-4),textAnchor:"middle",className:"chart-value-label",children:h.amount}),e.jsx("text",{x:o,y:r-8,textAnchor:"middle",className:"chart-date-label",children:h.date})]},h.date)})]})}function fe({data:a,names:n,width:r,height:d=330}){const p=d-38,u=p-10,h=p-26,j=l=>R(l,10.5,1,34,h);return e.jsxs("svg",{width:r,height:d,className:"aligned-chart",children:[e.jsx("line",{x1:f,x2:f,y1:0,y2:d,className:"chart-rank-separator"}),a.map((l,o)=>{const s=String(l.date),N=f+o*k;return e.jsxs("g",{children:[e.jsx("line",{x1:N,x2:N,y1:0,y2:h+4,className:"chart-grid-line"}),e.jsx("text",{x:N+k/2,y:u,textAnchor:"middle",className:"chart-date-label",children:s})]},s)}),[1,3,5,7,9,10.5].map(l=>e.jsx("line",{x1:f,x2:r,y1:j(l),y2:j(l),className:"chart-grid-line horizontal"},l)),n.map((l,o)=>{const s=D[o%D.length],N=a.map((c,F)=>{const y=Number(c[l]);return Number.isFinite(y)?{x:f+F*k+k/2,y:j(y),value:y,date:String(c.date)}:null}).filter(Boolean);return e.jsxs("g",{children:[e.jsx("polyline",{points:N.map(c=>`${c.x},${c.y}`).join(" "),fill:"none",stroke:s,strokeWidth:2}),N.map(c=>e.jsxs("g",{transform:`translate(${c.x}, ${c.y})`,children:[c.value>10?e.jsxs(e.Fragment,{children:[e.jsx("circle",{r:8,fill:"#101827",stroke:s,strokeWidth:1.5}),e.jsx("text",{y:3.5,textAnchor:"middle",fill:s,fontSize:9,fontWeight:700,children:"无"})]}):e.jsx("text",{y:-8,textAnchor:"middle",fill:s,fontSize:14,fontWeight:700,children:pe(c.value)}),e.jsx("title",{children:`${l} ${c.date} ${c.value>10?"未上榜":`第${c.value}名`}`})]},`${l}-${c.date}`))]},l)}),e.jsx("line",{x1:f,x2:r,y1:p-20,y2:p-20,className:"chart-legend-separator"}),e.jsx("g",{transform:`translate(${f+8}, ${p})`,children:n.map((l,o)=>e.jsxs("g",{transform:`translate(${o*142}, 0)`,children:[e.jsx("circle",{r:4,fill:D[o%D.length]}),e.jsx("text",{x:8,y:4,className:"chart-legend-label",children:l})]},l))})]})}function je(a,n){for(const r of(a==null?void 0:a.rows)||[]){const d=r.cells.find(x=>(x==null?void 0:x.code)===n);if(d)return d}return null}function ve(){var H,Y,I;const{user:a}=Q(),n=ee(a),r=te(),d=ae(),x=`${d.pathname}${d.search}`,[p,u]=m.useState("kaipan"),[h,j]=m.useState(20),[l,o]=m.useState(null),[s,N]=m.useState(null),[c,F]=m.useState(null),[y,z]=m.useState(null),[M,E]=m.useState(!1),[q,O]=m.useState(!1),C=m.useRef([]),W=m.useRef(!1),T=m.useMemo(()=>he((l==null?void 0:l.chart)??null),[l]),K=m.useMemo(()=>{var t;return(((t=l==null?void 0:l.chart)==null?void 0:t.legend)||[]).slice(0,6)},[(H=l==null?void 0:l.chart)==null?void 0:H.legend]),$=m.useMemo(()=>me(s),[s]),V=((Y=s==null?void 0:s.day_chart)==null?void 0:Y.date)||[],X=(l==null?void 0:l.days)??(V.length||h),v=Math.max(960,(X+1)*k),g=l==null?void 0:l.ranking,S=m.useMemo(()=>{var t;return((t=s==null?void 0:s.leaders)==null?void 0:t.columns)||[]},[s]),_=m.useMemo(()=>Array.from(new Set(S.flatMap(t=>t.items.map(i=>i.code)))),[S]),L=m.useCallback(()=>{E(!0),U.getOverview({source:p,days:h}).then(t=>{o(t);const i=t.first,b=i?je(t.ranking,i):null;b&&F({code:b.code,name:b.name})}).catch(console.error).finally(()=>E(!1))},[p,h]),B=m.useCallback(t=>{t!=null&&t.code&&(O(!0),U.getPlate({platecode:t.code,days:h}).then(N).catch(console.error).finally(()=>O(!1)))},[h]);m.useEffect(()=>{L()},[L]),m.useEffect(()=>{B(c)},[c,B]);const J=t=>{r(`/stock/${t}`,{state:Z(t,_.length?_:[t],x,"板块轮动-领涨股")})},G=(t,i)=>{t.stopPropagation();const b=t.currentTarget.getBoundingClientRect();z(w=>(w==null?void 0:w.code)===i.code?null:{code:i.code,name:i.name,x:Math.min(b.left,window.innerWidth-190),y:b.bottom+8})},P=t=>{if(!(y!=null&&y.code))return;const i=new URLSearchParams;i.set("name",y.name),i.set("tab",t),r(`/plate/${y.code}?${i.toString()}`),z(null)},A=m.useCallback(t=>{if(W.current)return;W.current=!0;const{scrollLeft:i}=t;C.current.forEach(b=>{b&&b!==t&&(b.scrollLeft=i)}),requestAnimationFrame(()=>{W.current=!1})},[]);return e.jsxs("div",{className:"p-4 animate-fade-in",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-4",children:[e.jsxs("h2",{className:"text-[15px] font-medium text-text-primary flex items-center gap-2 mr-2",children:[e.jsx(re,{size:16,className:"text-accent-blue"}),"板块轮动",e.jsx(le,{topic:"plateRotation"})]}),e.jsxs("div",{className:"flex gap-1",children:[e.jsx("button",{onClick:()=>u("kaipan"),className:`px-3 py-1.5 rounded-md text-[12px] border cursor-pointer transition-all ${p==="kaipan"?"bg-accent-blue text-white border-accent-blue":"bg-bg-card text-text-secondary border-white/10 hover:text-text-primary"}`,children:"热门题材"}),e.jsx("button",{onClick:()=>u("ths"),className:`px-3 py-1.5 rounded-md text-[12px] border cursor-pointer transition-all ${p==="ths"?"bg-accent-blue text-white border-accent-blue":"bg-bg-card text-text-secondary border-white/10 hover:text-text-primary"}`,children:"概念板块"})]}),e.jsx("div",{className:"flex gap-1",children:ce.map(t=>e.jsxs("button",{onClick:()=>{if(!n&&t>20){a?window.alert("请先完成邮箱验证后查看20个交易日以外的数据。"):ne("register");return}j(t)},className:`px-2.5 py-1.5 rounded-md text-[12px] border cursor-pointer transition-all ${h===t?"bg-warn/20 text-warn border-warn/30":"bg-bg-card text-text-secondary border-white/10 hover:text-text-primary"}`,children:["近",t,"日",!n&&t>20?" · 注册":""]},t))}),e.jsxs("button",{onClick:L,disabled:M,className:"ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[12px] border border-white/10 text-text-secondary hover:text-text-primary hover:bg-white/5 cursor-pointer disabled:opacity-40",children:[e.jsx(se,{size:13,className:M?"animate-spin":""}),"刷新"]})]}),e.jsxs("div",{className:"space-y-4",children:[y&&e.jsxs("div",{className:"fixed z-[80] w-[178px] rounded-xl border border-white/10 bg-[#101827] shadow-2xl shadow-black/40 p-1",style:{left:y.x,top:y.y},children:[e.jsx("div",{className:"px-3 py-2 text-[11px] text-text-muted border-b border-white/10 truncate",children:y.name}),e.jsx("button",{type:"button",onClick:()=>P("all"),className:"w-full text-left px-3 py-2 rounded-lg text-[12px] text-text-secondary hover:text-text-primary hover:bg-white/10",children:"查看活跃成分"}),e.jsx("button",{type:"button",onClick:()=>P("triple"),className:"w-full text-left px-3 py-2 rounded-lg text-[12px] text-text-secondary hover:text-text-primary hover:bg-white/10",children:"查看活跃三线红"})]}),e.jsx("div",{className:"plate-board",children:e.jsxs("div",{className:"plate-row",children:[e.jsx("div",{className:"plate-label",children:"排名"}),e.jsxs("div",{className:"plate-content",children:[e.jsxs("div",{className:"sm:hidden flex items-center gap-1 px-3 py-1.5 border-b border-white/5 text-[10px] text-text-muted bg-white/[0.02]",children:[e.jsx(oe,{size:10}),e.jsx(ie,{size:10}),e.jsx("span",{children:"左右滑动查看完整日期"})]}),e.jsxs("div",{ref:t=>{C.current[0]=t},className:"overflow-x-auto plate-rotation-table",style:{WebkitOverflowScrolling:"touch"},onScroll:t=>A(t.currentTarget),children:[e.jsx("table",{className:"w-full text-center text-[12px]",style:{minWidth:v},children:e.jsxs("tbody",{children:[g!=null&&g.dates.length?e.jsxs("tr",{children:[e.jsx("td",{children:"排名"}),g.dates.map((t,i)=>e.jsx("td",{children:t||"--"},`${t}-${i}`))]}):null,g==null?void 0:g.rows.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("span",{className:"rank",children:t.rank})}),t.cells.map((i,b)=>e.jsx("td",{className:i?`plate plate${i.code}`:void 0,children:i?e.jsxs(e.Fragment,{children:[e.jsxs("button",{type:"button",className:"plate-name-button",onClick:()=>{z(null),F({code:i.code,name:i.name})},children:[e.jsx("span",{className:"plate-name-text",children:i.name}),i.score&&e.jsx("span",{className:"plate-score",children:i.score})]}),e.jsx("button",{type:"button",className:"plate-action",onClick:w=>G(w,i),children:"查看"})]}):null},`${t.rank}-${g.dates[b]||b}`))]},t.rank)),g!=null&&g.dates.length&&S.length?e.jsxs("tr",{className:"plate-leader-row",children:[e.jsx("td",{children:e.jsx("b",{children:"领涨"})}),g.dates.map((t,i)=>{var b;return e.jsx("td",{children:(((b=S[i])==null?void 0:b.items)||[]).map(w=>e.jsxs("button",{type:"button",className:"kline",onClick:()=>J(w.code),children:[e.jsx("span",{children:w.label}),w.name]},`${w.code}-${w.label}`))},`leaders-${t}-${i}`)})]}):null]})}),!M&&!(g!=null&&g.rows.length)&&e.jsx("div",{className:"py-12 text-center text-text-muted text-[13px]",children:"暂无板块轮动数据"})]})]})]})}),e.jsxs("div",{className:"plate-board",children:[e.jsxs("div",{className:"plate-row",children:[e.jsx("div",{className:"plate-label",children:"板块"}),e.jsxs("div",{className:"plate-content plate-title-row",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-text-primary font-medium",children:(c==null?void 0:c.name)||((I=s==null?void 0:s.day_chart)==null?void 0:I.legend)||"板块详情"}),e.jsx("span",{className:"ml-2 text-text-muted text-[11px]",children:(c==null?void 0:c.code)||(s==null?void 0:s.platecode)||"--"}),e.jsx("span",{className:"ml-3 text-text-muted text-[11px]",children:"日期按复盘顺序展示"})]}),q&&e.jsx("div",{className:"w-4 h-4 border-2 border-warn border-t-transparent rounded-full animate-spin"})]})]}),e.jsxs("div",{className:"plate-row",children:[e.jsx("div",{className:"plate-label",children:"强度"}),e.jsx("div",{ref:t=>{C.current[1]=t},className:"plate-content overflow-x-auto",style:{WebkitOverflowScrolling:"touch"},onScroll:t=>A(t.currentTarget),children:e.jsx("div",{className:"plate-chart-strip",style:{minWidth:v},children:$.length===0?e.jsx("div",{className:"h-full flex items-center justify-center text-text-muted text-[13px]",children:"点击下方板块查看强度"}):e.jsx(be,{data:$,width:v})})})]}),e.jsxs("div",{className:"plate-row",children:[e.jsx("div",{className:"plate-label",children:"量能"}),e.jsx("div",{ref:t=>{C.current[2]=t},className:"plate-content overflow-x-auto",style:{WebkitOverflowScrolling:"touch"},onScroll:t=>A(t.currentTarget),children:e.jsx("div",{className:"plate-chart-strip plate-volume-strip",style:{minWidth:v},children:$.length===0?e.jsx("div",{className:"h-full flex items-center justify-center text-text-muted text-[13px]",children:"点击下方板块查看量能"}):e.jsx(ge,{data:$,width:v})})})]})]}),e.jsx("div",{className:"plate-board",children:e.jsxs("div",{className:"plate-row",children:[e.jsx("div",{className:"plate-label",children:"榜单趋势"}),e.jsx("div",{ref:t=>{C.current[3]=t},className:"plate-content overflow-x-auto",style:{WebkitOverflowScrolling:"touch"},onScroll:t=>A(t.currentTarget),children:e.jsx("div",{className:"plate-rank-chart",style:{minWidth:v},children:T.length===0?e.jsx("div",{className:"h-full flex items-center justify-center text-text-muted text-[13px]",children:"暂无排名曲线"}):e.jsx(fe,{data:T,names:K,width:v})})})]})})]}),e.jsx("style",{children:`
        .plate-board {
          overflow: hidden;
          border: 1px solid rgba(122,151,190,0.20);
          border-radius: 12px;
          background: #182235;
        }
        .plate-row {
          display: grid;
          grid-template-columns: 72px minmax(0, 1fr);
          border-bottom: 1px solid rgba(122,151,190,0.18);
        }
        .plate-row:last-child {
          border-bottom: 0;
        }
        .plate-label {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 54px;
          padding: 8px 6px;
          color: #F3F6FA;
          font-size: 13px;
          font-weight: 700;
          background: rgba(22,119,255,.18);
          border-right: 1px solid rgba(122,151,190,0.22);
          letter-spacing: .08em;
        }
        .plate-content {
          min-width: 0;
          background: rgba(236,244,255,0.035);
        }
        .plate-title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          min-height: 54px;
          padding: 0 14px;
        }
        .plate-chart-strip {
          height: 178px;
          padding: 0;
        }
        .plate-volume-strip {
          height: 150px;
        }
        .plate-rank-chart {
          height: 330px;
          padding: 0;
        }
        .plate-rotation-table table,
        .plate-rotation-leaders table {
          border-collapse: collapse;
          table-layout: fixed;
        }
        .plate-rotation-table td,
        .plate-rotation-leaders td {
          border: 1px solid rgba(122,151,190,0.18);
          padding: 7px 6px;
          color: #D9E4F4;
          background-color: rgba(236,244,255,0.045);
          vertical-align: middle;
        }
        .plate-rotation-table .rank {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 22px;
          height: 22px;
          border-radius: 7px;
          background: rgba(255,255,255,0.08);
        }
        .plate-rotation-table td:first-child {
          width: 108px !important;
          min-width: 108px !important;
          max-width: 108px !important;
        }
        .plate-rotation-table .plate-leader-row td:not(:first-child) {
          width: 108px;
          min-width: 108px;
          max-width: 108px;
          text-align: left;
          vertical-align: top;
        }
        .plate-rotation-table .plate-leader-row td:first-child {
          text-align: center;
          color: #F3F6FA;
          background: rgba(22,119,255,.18);
        }
        .plate-rotation-table .plate {
          position: relative;
          cursor: pointer;
          background: rgba(36,49,72,.78) !important;
          color: #D9E4F4 !important;
          transition: transform .12s ease, box-shadow .12s ease, border-color .12s ease;
        }
        .plate-rotation-table .plate span {
          color: inherit;
        }
        .plate-rotation-table .plate-name-button {
          display: flex;
          width: 100%;
          min-width: 0;
          flex-direction: column;
          align-items: center;
          border: 0;
          background: transparent;
          padding: 3px 24px 2px 2px;
          color: inherit;
          font: inherit;
          cursor: pointer;
        }
        .plate-rotation-table .plate-name-text {
          display: block;
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          min-width: 0;
        }
        .plate-rotation-table .plate-score {
          margin-top: 3px;
          color: #ff4d4f !important;
          font-size: 12px;
        }
        .plate-rotation-table .plate-action {
          position: absolute;
          right: 3px;
          top: 3px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 1px 4px;
          border: 1px solid rgba(22,119,255,.34);
          border-radius: 5px;
          background: rgba(22,119,255,.13);
          color: #7DB5FF;
          font-size: 10px;
          line-height: 1.35;
          cursor: pointer;
        }
        .plate-rotation-table .plate-action:hover {
          background: rgba(22,119,255,.28);
          color: #FFFFFF;
        }
        .plate-rotation-table .plate:hover {
          transform: translateY(-1px);
          box-shadow: inset 0 0 0 1px rgba(22,119,255,.55), 0 8px 20px rgba(0,0,0,.18);
        }
        .plate-rotation-table .plate${(c==null?void 0:c.code)||""} {
          box-shadow: inset 0 0 0 2px rgba(250,173,20,.85);
        }
        .aligned-chart {
          display: block;
          background: rgba(255,255,255,0.01);
        }
        .chart-grid-line {
          stroke: rgba(122,151,190,0.18);
          stroke-width: 1;
          stroke-dasharray: 3 3;
        }
        .chart-grid-line.horizontal {
          stroke: rgba(122,151,190,0.12);
        }
        .chart-rank-separator {
          stroke: rgba(122,151,190,0.26);
          stroke-width: 1;
        }
        .chart-zero-line {
          stroke: rgba(255,255,255,0.46);
          stroke-width: 1;
          stroke-dasharray: 4 4;
        }
        .chart-legend-separator {
          stroke: rgba(122,151,190,0.18);
          stroke-width: 1;
        }
        .chart-date-label {
          fill: #8EA0B8;
          font-size: 11px;
        }
        .chart-value-label {
          fill: #D9E4F4;
          font-size: 10px;
          font-weight: 700;
        }
        .chart-legend-label {
          fill: #AAB8CC;
          font-size: 11px;
        }
        .plate-rotation-leaders td {
          vertical-align: top;
          padding: 6px 8px;
          width: 108px;
          min-width: 108px;
          max-width: 108px;
          color: #A0AEC0;
        }
        .plate-rotation-leaders .kline {
          cursor: pointer;
          margin: 5px 0;
          color: #D8E2F0;
          white-space: nowrap;
        }
        .plate-rotation-table .kline {
          display: block;
          width: 100%;
          border: 0;
          background: transparent;
          padding: 0;
          text-align: left;
          font: inherit;
          cursor: pointer;
          margin: 5px 0;
          color: #D8E2F0;
          white-space: nowrap;
        }
        .plate-rotation-leaders .kline:hover,
        .plate-rotation-table .kline:hover {
          color: #1677FF;
        }
        .plate-rotation-leaders .kline span,
        .plate-rotation-table .kline span {
          display: inline-block;
          margin-right: 5px;
          padding: 1px 4px;
          border-radius: 4px;
          background: rgba(245,34,45,.18);
          color: #ff7777;
          font-size: 10px;
        }
        .theme-light .plate-board {
          border-color: #bcc7d2;
          background: #e4eaf0;
        }
        .theme-light .plate-row {
          border-bottom-color: #c5ced8;
        }
        .theme-light .plate-label {
          color: #1e3a5f;
          background: #d8e3ee;
          border-right-color: #bcc7d2;
        }
        .theme-light .plate-content {
          background: #edf1f5;
        }
        .theme-light .plate-rotation-table td,
        .theme-light .plate-rotation-leaders td {
          border-color: #c5ced8;
          color: #475569;
          background-color: #eef2f5;
        }
        .theme-light .plate-rotation-table .rank {
          background: #dbe2e9;
          color: #334155;
        }
        .theme-light .plate-rotation-table .plate-leader-row td:first-child {
          color: #1e3a5f;
          background: #d8e3ee;
        }
        .theme-light .plate-rotation-table .plate {
          background: #e2e8ee !important;
          color: #334155 !important;
        }
        .theme-light .plate-rotation-table .plate-action {
          background: #dbeafe;
          color: #1d4ed8;
          border-color: #93b4df;
        }
        .theme-light .plate-rotation-table .plate-action:hover {
          background: #c7dcf6;
          color: #1e3a8a;
        }
        .theme-light .aligned-chart {
          background: #edf1f5;
        }
        .theme-light .chart-grid-line {
          stroke: rgba(71,85,105,.22);
        }
        .theme-light .chart-grid-line.horizontal {
          stroke: rgba(71,85,105,.14);
        }
        .theme-light .chart-rank-separator,
        .theme-light .chart-legend-separator {
          stroke: rgba(71,85,105,.28);
        }
        .theme-light .chart-zero-line {
          stroke: rgba(51,65,85,.48);
        }
        .theme-light .chart-date-label,
        .theme-light .chart-legend-label {
          fill: #64748b;
        }
        .theme-light .chart-value-label {
          fill: #334155;
        }
        .theme-light .plate-rank-chart circle[fill="#101827"],
        .theme-light .plate-chart-strip circle[fill="#101827"] {
          fill: #edf1f5;
        }
        .theme-light .plate-rotation-leaders td {
          color: #64748b;
        }
        .theme-light .plate-rotation-leaders .kline,
        .theme-light .plate-rotation-table .kline {
          color: #334155;
        }
      `})]})}export{ve as default};
