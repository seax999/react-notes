export const isPhone = ()=>{
    return /Android|iPhone|iPad|iPod/i.test(window.navigator.userAgent)
}