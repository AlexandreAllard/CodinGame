while (true) {
    let indexHighestMountain = 0; 
    let heightHighestMountain = -10;

    for (let i = 0; i < 8; i++) {
        const mountainH = parseInt(readline()); // represents the height of one mountain.

        if (mountainH > heightHighestMountain){
            heightHighestMountain = mountainH;
            indexHighestMountain = i;
        }
    }

    console.log(indexHighestMountain);     // The index of the mountain to fire on.
}
