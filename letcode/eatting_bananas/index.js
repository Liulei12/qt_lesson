var minEatingSpeed = function(piles,H = 8){
    let lo = 1,//min 
        hi = Math.max(...piles);//max
    while(lo<=hi){
        if(canEatAllBanans(piles,H,lo)){
            return lo ;
        }
        lo++;
    }
    function canEatAllBanans(piles,H,low){
        let h = 0;
        for(let pile of piles){
            h += Math.ceil(pile / low)
        }
        return h <= H;
    }
    return lo;
}
    console.log(minEatingSpeed([3,6,7,11]));