import{r as a}from"./index-CBqU2yxZ.js";import{b as h}from"./factory-DKdOmnTE.js";const x=(u,e)=>u!=="loaded"&&e==="beforeLoadOrError"||u==="failed"&&e==="onError",R=({loading:u,src:e,srcSet:l,onLoad:n,onError:r,crossOrigin:i,sizes:d,ignoreFallback:o})=>{const[c,m]=a.useState("pending");a.useEffect(()=>{m(e?"loading":"pending")},[e]);const f=a.useRef(),g=a.useCallback(()=>{if(!e)return;s();const t=new Image;t.src=e,i&&(t.crossOrigin=i),l&&(t.srcset=l),d&&(t.sizes=d),u&&(t.loading=u),t.onload=p=>{s(),m("loaded"),n==null||n(p)},t.onerror=p=>{s(),m("failed"),r==null||r(p)},f.current=t},[e,i,l,d,n,r,u]),s=()=>{f.current&&(f.current.onload=null,f.current.onerror=null,f.current=null)};return h(()=>{if(!o)return c==="loading"&&g(),()=>{s()}},[c,g,o]),o?"loaded":c};export{x as s,R as u};
