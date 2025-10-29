export function lorem(what = 'lorem'){
  
    if (what.startsWith('lorem')){
        console.warn('lorem -> dummy')
        return true
    }
    return false
}