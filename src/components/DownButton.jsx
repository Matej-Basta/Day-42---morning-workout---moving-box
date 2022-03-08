export function DownButton({marginTop, setMarginTop}) {
    return <button onClick={() => { if(marginTop < window.innerHeight - 170) {setMarginTop(marginTop + 10)}}} style={{position: "fixed", top: "0px", left: "0px"}}>Move down</button>
}