function binarySearch(list, element) {
    if(list.length == 0) {
        return -1;
    }
    else if(list[0] == element) {
        return 0;
    }
    else {
        let topList = list.length - 1;
        let bottomList = 0;
        while(topList >= bottomList) {
          let halfList = Math.floor((bottomList + topList)/2)
          if(element == list[halfList]) {
            return halfList;
          }
          else if(element > list[halfList]) {
            bottomList = halfList + 1;
          }
          else if(element < list[halfList]) {
            topList = halfList - 1;
          }
        }
    }
    
    return -1;
}
