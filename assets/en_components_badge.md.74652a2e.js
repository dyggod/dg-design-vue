import{_ as c,r as e,o as D,c as r,a as p,b as s,w as a,d as l,e as t}from"./app.dfc2d51f.js";const N=JSON.parse('{"title":"Badge 徽标","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]},{"level":2,"title":"使用 max 定义最大值，超过最大值显示 max+，默认为 99","slug":"使用-max-定义最大值-超过最大值显示-max-默认为-99","link":"#使用-max-定义最大值-超过最大值显示-max-默认为-99","children":[]},{"level":2,"title":"使用 value 自定义徽标内容","slug":"使用-value-自定义徽标内容","link":"#使用-value-自定义徽标内容","children":[]},{"level":2,"title":"使用 isDot 展示为小圆点，是个布尔值","slug":"使用-isdot-展示为小圆点-是个布尔值","link":"#使用-isdot-展示为小圆点-是个布尔值","children":[]},{"level":2,"title":"Badge API","slug":"badge-api","link":"#badge-api","children":[]},{"level":2,"title":"Badge 属性","slug":"badge-属性","link":"#badge-属性","children":[]}],"relativePath":"en/components/badge.md","lastUpdated":1675213012000}'),F={name:"en/components/badge.md"},y=p("h1",{id:"badge-徽标",tabindex:"-1"},[l("Badge 徽标 "),p("a",{class:"header-anchor",href:"#badge-徽标","aria-hidden":"true"},"#")],-1),d=p("h2",{id:"基础用法",tabindex:"-1"},[l("基础用法 "),p("a",{class:"header-anchor",href:"#基础用法","aria-hidden":"true"},"#")],-1),i={class:"example"},g={style:{display:"flex","flex-direction":"column"}},u=t(`<details class="details custom-block"><summary>显示代码</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">display: flex;flex-direction: column;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dg-badge</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;</span><span style="color:#F07178;">dg-button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">badge</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dg-button</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">dg-badge</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dg-badge</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">success</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;</span><span style="color:#F07178;">dg-button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">badge</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dg-button</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">dg-badge</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dg-badge</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">warning</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;</span><span style="color:#F07178;">dg-button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">badge</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dg-button</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">dg-badge</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dg-badge</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">danger</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;</span><span style="color:#F07178;">dg-button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">badge</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dg-button</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">dg-badge</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dg-badge</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">info</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">5</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;</span><span style="color:#F07178;">dg-button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">badge</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dg-button</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">dg-badge</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h2 id="使用-max-定义最大值-超过最大值显示-max-默认为-99" tabindex="-1">使用 <code>max</code> 定义最大值，超过最大值显示 <code>max+</code>，默认为 <code>99</code> <a class="header-anchor" href="#使用-max-定义最大值-超过最大值显示-max-默认为-99" aria-hidden="true">#</a></h2>`,2),C={class:"example"},A={style:{display:"flex"}},b=t(`<details class="details custom-block"><summary>显示代码</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dg-badge</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">100</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:max</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">10</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dg-button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">badge</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dg-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dg-badge</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dg-badge</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">success</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">100</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dg-button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">badge</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dg-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dg-badge</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h2 id="使用-value-自定义徽标内容" tabindex="-1">使用 <code>value</code> 自定义徽标内容 <a class="header-anchor" href="#使用-value-自定义徽标内容" aria-hidden="true">#</a></h2>`,2),_={class:"example"},h=t(`<details class="details custom-block"><summary>显示代码</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dg-badge</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">new</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dg-button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">badge</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dg-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dg-badge</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dg-badge</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">我是你</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dg-button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">badge</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dg-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dg-badge</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h2 id="使用-isdot-展示为小圆点-是个布尔值" tabindex="-1">使用 <code>isDot</code> 展示为小圆点，是个布尔值 <a class="header-anchor" href="#使用-isdot-展示为小圆点-是个布尔值" aria-hidden="true">#</a></h2>`,2),m={class:"example"},v=t(`<details class="details custom-block"><summary>显示代码</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dg-badge</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">isDot</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dg-button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">badge</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dg-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dg-badge</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dg-badge</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">isDot</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dg-button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">badge</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dg-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dg-badge</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dg-badge</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">success</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">isDot</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dg-button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">badge</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dg-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dg-badge</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h2 id="badge-api" tabindex="-1">Badge API <a class="header-anchor" href="#badge-api" aria-hidden="true">#</a></h2><h2 id="badge-属性" tabindex="-1">Badge 属性 <a class="header-anchor" href="#badge-属性" aria-hidden="true">#</a></h2><div class="vp-table__container"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>value</td><td>徽标的内容</td><td>String, Number</td><td>—</td><td>—</td></tr><tr><td>max</td><td>最大值，超过最大值显示为 <code>max+</code>，默认为 <code>99</code></td><td>Number</td><td>—</td><td>99</td></tr><tr><td>isDot</td><td>是否为小圆点</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>type</td><td>徽标的类型，不同颜色</td><td>String</td><td>primary, success, warning, danger, info</td><td>danger</td></tr></tbody></table></div>`,4);function E(f,q,x,T,k,S){const n=e("dg-button"),o=e("dg-badge");return D(),r("div",null,[y,d,p("div",i,[p("div",g,[s(o,{type:"primary",value:1},{default:a(()=>[s(n,null,{default:a(()=>[l("badge")]),_:1})]),_:1}),s(o,{type:"success",value:2},{default:a(()=>[s(n,null,{default:a(()=>[l("badge")]),_:1})]),_:1}),s(o,{type:"warning",value:3},{default:a(()=>[s(n,null,{default:a(()=>[l("badge")]),_:1})]),_:1}),s(o,{type:"danger",value:4},{default:a(()=>[s(n,null,{default:a(()=>[l("badge")]),_:1})]),_:1}),s(o,{type:"info",value:5},{default:a(()=>[s(n,null,{default:a(()=>[l("badge")]),_:1})]),_:1})])]),u,p("div",C,[p("div",A,[s(o,{type:"primary",value:100,max:10,class:"item"},{default:a(()=>[s(n,null,{default:a(()=>[l("badge")]),_:1})]),_:1}),s(o,{type:"success",value:100},{default:a(()=>[s(n,null,{default:a(()=>[l("badge")]),_:1})]),_:1})])]),b,p("div",_,[p("div",null,[s(o,{value:"new",class:"item"},{default:a(()=>[s(n,null,{default:a(()=>[l("badge")]),_:1})]),_:1}),s(o,{value:"我是练习时长两年半..."},{default:a(()=>[s(n,null,{default:a(()=>[l("badge")]),_:1})]),_:1})])]),h,p("div",m,[p("div",null,[s(o,{isDot:"",class:"item"},{default:a(()=>[s(n,null,{default:a(()=>[l("badge")]),_:1})]),_:1}),s(o,{type:"primary",isDot:"",class:"item"},{default:a(()=>[s(n,null,{default:a(()=>[l("badge")]),_:1})]),_:1}),s(o,{type:"success",isDot:""},{default:a(()=>[s(n,null,{default:a(()=>[l("badge")]),_:1})]),_:1})])]),v])}const P=c(F,[["render",E]]);export{N as __pageData,P as default};