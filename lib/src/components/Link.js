import{jsx as _jsx}from"react/jsx-runtime";import{BUTONS,NAVIGATION_EVENT}from"../const";function navigate(href){window.history.pushState({},"",href);const navigationEvent=new Event(NAVIGATION_EVENT.PUSHSTATE);window.dispatchEvent(navigationEvent)}export function Link({target,to,...props}){const handleClick=event=>{const isMainEvent=event.button===BUTONS.primary;const isModifiedEvent=event.metaKey||event.altKey||event.ctrlKey||event.shiftKey;const isManageableEvent=target===undefined||target==="_self";if(isMainEvent&&isManageableEvent&&!isModifiedEvent){event.preventDefault();navigate(to)}};return _jsx("a",{onClick:handleClick,href:to,target:target,...props})}