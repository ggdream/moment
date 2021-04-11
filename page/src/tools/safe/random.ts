export default (bit: number): string => {
    const coll = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    let res="", ran = 0
    for(let i=0; i<bit; i++) {
        ran = Math.random()*coll.length
        ran = Math.floor(ran)
        res += coll.charAt(ran)
    }
    return res
}
