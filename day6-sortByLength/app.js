function sortByLength(strs) {
    //  write code here.
    // return strs.sort((stringA,stringB)=>{
    //     if ( stringA.length < stringB.length ) return -1
    //     else if ( stringA.length > stringB.length ) return 1
    //     else return 0 // if lengths are the same, leave them with no change.
    // })

    return strs.sort((a, b) => a.length - b.length)
}