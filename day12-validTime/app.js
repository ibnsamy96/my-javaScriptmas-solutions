function validTime(str) {
    // solution 1
    const regex = /^(2[0-3]|[0-1][0-9]):[0-5][0-9]$/
    return regex.test(str)

    // solution 2    
    // const [hours,minutes] = str.split(':')
    // if (parseInt(hours,10)>=0 && parseInt(hours,10)<=23){
    //     return (parseInt(minutes,10)>=0 && parseInt(minutes,10)<=59) ? true : false
    // }
    // return false
}