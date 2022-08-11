module.exports = function check(str, bracketsConfig) {

    let temp = {}
    bracketsConfig.forEach( ( item, index ) => {
        if ( item[0] !== item[1] ) {
            temp[item[0]] = { key: item[0], row: index, col: 0 }
            temp[item[1]] = { key: item[1], row: index, col: 1 }
        }
    })
    let stack = []

    stack.push( str[0] )
    for ( let i = 1; i < str.length; i++ ) {

        if ( !Object.keys( temp ).includes( str[i] ) ) {

           stack[stack.length - 1] === str[i]
                ? stack.pop()
                : stack.push( str[i] )

        } else {
            const sym = temp[str[i]]
            if ( sym['col'] === 0 ) {
                if ( i === str.length - 1 ) return false
                stack.push( sym['key'] )
            }  else {
                if ( !(stack.length > 0) ) return false;

                    const prev = temp[stack[ stack.length - 1]]
                    if ( !prev )                     return false;
                    if ( sym['row'] !== prev['row']) return false;
                        stack.pop()
            }
        }
    }


    return stack.length === 0 ? true : false
}




