(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){e.innerHTML=`<h2>⚾ Baseball Team Manager Pro</h2>`}function t(e){e.innerHTML=`
    <nav>
      <ul>
        <li>Dashboard</li>
        <li>Players</li>
        <li>Lineup</li>
        <li>Game Day</li>
      </ul>
    </nav>
  `}function n(){`serviceWorker`in navigator&&navigator.serviceWorker.register(`./service-worker.js`).then(()=>console.log(`PWA Service Worker registered`)).catch(e=>console.error(e))}function r(){window.addEventListener(`beforeinstallprompt`,e=>{e.preventDefault()})}function i(){n(),r()}var a={name:`Baseball Team Manager Pro`,version:`5.2.0`,storageKey:`btm_pro_data`};function o(e){localStorage.setItem(a.storageKey,JSON.stringify(e))}function s(){let e=localStorage.getItem(a.storageKey);return e?JSON.parse(e):{}}var c=`players`;function l(){return s()[c]||[]}function u(e){let t=s();t[c]=e,o(t)}function d(e){let t=l();e.innerHTML=t.length?t.map(e=>`
      <div class="player-card">
        <strong>#${e.number} ${e.name}</strong>
        <span>${e.position}</span>
      </div>
    `).join(``):`<p>尚無球員資料</p>`}function f(e={}){return{id:crypto.randomUUID(),number:e.number||``,name:e.name||``,position:e.position||`P`,injured:!1,suspended:!1,note:``}}function p(e){let t=l();return t.push(f(e)),u(t),t}function m(e){e.innerHTML=`
    <input id="playerNumber" placeholder="背號">
    <input id="playerName" placeholder="姓名">
    <button id="addPlayerBtn">新增球員</button>
  `,e.querySelector(`#addPlayerBtn`).onclick=()=>{p({number:document.querySelector(`#playerNumber`).value,name:document.querySelector(`#playerName`).value})}}function h(e){e.innerHTML=`
    <section class="player-page">
      <h2>⚾ 球員管理</h2>
      <div id="player-form"></div>
      <div id="player-list"></div>
    </section>
  `,m(e.querySelector(`#player-form`)),d(e.querySelector(`#player-list`))}function g(){return{id:crypto.randomUUID(),starters:Array(9).fill(null),dh:null,createdAt:new Date().toISOString()}}var _=`lineups`;function v(){return s()[_]||[]}function y(e){let t=s();t[_]=e,o(t)}function b(e){if(e.length!==9)return!1;let t=e.map(e=>e?.id).filter(Boolean);return t.length===new Set(t).size}function x(e){if(!b(e))return!1;let t=v();return t.push({...g(),starters:e}),y(t),!0}function S(e){return e.filter(e=>!e.injured&&!e.suspended)}function C(e){let t=S(l());e.innerHTML=`
    <p>可用球員：${t.length} 人</p>
    <button id="autoOrderBtn">AI 建立先發</button>
  `,e.querySelector(`#autoOrderBtn`).onclick=()=>{x(t.slice(0,9))}}function w(e){let t=v().at(-1);e.innerHTML=t?t.starters.map((e,t)=>`<div>${t+1}棒 - ${e.name}</div>`).join(``):`<p>尚未建立先發</p>`}function T(e){e.innerHTML=`
    <section class="lineup-page">
      <h2>⚾ 先發 Order</h2>
      <div id="lineup-form"></div>
      <div id="lineup-card"></div>
    </section>
  `,C(e.querySelector(`#lineup-form`)),w(e.querySelector(`#lineup-card`))}function E(e){e.innerHTML=`
    <section class="dashboard">
      <h2>⚾ 球隊儀表板</h2>
      <button id="playersBtn">球員管理</button>
      <button id="lineupBtn">先發 Order</button>
      <div id="dashboard-content"></div>
    </section>
  `;let t=e.querySelector(`#dashboard-content`);e.querySelector(`#playersBtn`).onclick=()=>{h(t)},e.querySelector(`#lineupBtn`).onclick=()=>{T(t)}}function D(){i();let n=document.querySelector(`#app`);n&&(n.innerHTML=`
    <div class="app-layout">
      <header id="header"></header>
      <aside id="sidebar"></aside>
      <main id="dashboard" class="content"></main>
    </div>
  `,e(document.querySelector(`#header`)),t(document.querySelector(`#sidebar`)),E(document.querySelector(`#dashboard`)))}window.addEventListener(`DOMContentLoaded`,D),D();