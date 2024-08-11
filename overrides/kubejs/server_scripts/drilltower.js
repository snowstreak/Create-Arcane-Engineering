/*let ticker = 30;
let first = true;
onEvent('mbd.update_tick.cae.drill_tower', e => {
    
    ticker = ticker ? ticker-1 : 30;
    //console.log(ticker)
   
})

onEvent('mbd.status_changed.cae.drill_tower', event => {
    console.log(Object.keys(event))
    console.log(event.getStatus())
    if(event.getStatus() == "working" && first){
        event.setStatus("idle")
        first = false;
    }
})
//[cancel,getClass,wait,isCancelled,notifyAll,getStatus,notify,setStatus,component,post,hashCode,equals,cancelled,toString,getComponent,class,canCancel,status] [dev.latvian.mods.kubejs.util.ListJS]*/