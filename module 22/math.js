

function myFun(chearWood, tableWood, BadWood) {

    let perChearWood = 3;
    let perTableWood = 10;
    let perBadWood = 40
    let TotalChaerWood = perChearWood * chearWood;
    let TotalTableWood = perTableWood * tableWood;
    let TotalBadWood = perBadWood * BadWood;
    //   add all wood
    let totalWood = TotalChaerWood + TotalTableWood + TotalBadWood
    return totalWood;
} console.log(myFun(1, 1, 1));
