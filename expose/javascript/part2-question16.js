let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2,
}

for (k in statistics){
    if (k.startsWith('r') || statistics[k] % 2 === 1){
        console.log(statistics[k])
    }
}