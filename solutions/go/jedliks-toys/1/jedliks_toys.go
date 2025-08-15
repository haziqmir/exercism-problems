package jedlik

import (
    "fmt"
)

// Drive moves the car ahead by its 'speed.' If there is not enough battery to move ahead, the car remains stationary.
func (c *Car) Drive() {
    if (c.battery >= c.batteryDrain) {
        c.distance += c.speed
        c.battery -= c.batteryDrain
    }
}

// DisplayDistance displays the number of meters driven by the car.
func (c *Car) DisplayDistance() string {
    return fmt.Sprintf("Driven %d meters", c.distance)
}

// DisplayBattery displays the car's remaining battery.
func (c *Car) DisplayBattery() string {
    return fmt.Sprintf("Battery at %d%%", c.battery)
}

// CanFinish calculates whether a particular car can or cannot complete the required distance with its current battery.
func (c *Car) CanFinish(distance int) bool {
    return (c.battery / c.batteryDrain * c.speed) >= distance
}