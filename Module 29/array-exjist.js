function array(friends) {

    if (Array.isArray(friends) == false) {
        return " Please provide an array"
    }


    let leargName = friends[0]
    for (let friend of friends) {
        if (friend.length > leargName.length) {
            leargName = friend
        }
    }
    return leargName;
}
let myFriends = ['name', 'rakib', 'md rohim', 'nik', 'jon', 'samim']
// console.log(array(myFriends));
console.log(array(1010));




/* // indexOf
if (myFriends.indexOf('md  rohim') != -1) {
    console.log("md rohim  is hear");
} else {
    console.log('jon dosen not hear');
}
 */



/*
// includs 
 if (myFriends.includes('nik')) {
    console.log('nik is hear');
} else {
    console.log('nic doset esgist');
} */