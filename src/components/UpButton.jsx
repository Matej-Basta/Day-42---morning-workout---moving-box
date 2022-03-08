export function UpButton({marginTop, setMarginTop}) {
    return <button onClick={() => { if(marginTop > 0) {setMarginTop(marginTop - 10)}}} style={{position: "fixed", top: "0px", left: "100px"}}>Move up</button>
}