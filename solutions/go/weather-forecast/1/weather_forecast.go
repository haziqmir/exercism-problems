// Package weather gives the forecast for a city at a given time.
package weather

// CurrentCondition is the current weather condition.
var CurrentCondition string
// CurrentLocation is the location of the place.
var CurrentLocation string

// Forecast returns the forecast for a city at a given time.
func Forecast(city, condition string) string {
	CurrentLocation, CurrentCondition = city, condition
	return CurrentLocation + " - current weather condition: " + CurrentCondition
}
