package booking

import "time"

// Schedule returns a time.Time from a string containing a date.
func Schedule(date string) time.Time {
    layout := "1/2/2006 15:04:05"
	t, _ := time.Parse(layout, date)
    return t
}

// HasPassed returns whether a date has passed.
func HasPassed(date string) bool {
	appointment, _ := time.Parse("January 2, 2006 15:04:05", date)
    now := time.Now()
    return now.Sub(appointment) > 0
}

// IsAfternoonAppointment returns whether a time is in the afternoon.
func IsAfternoonAppointment(date string) bool {
	appointment, _ := time.Parse("Monday, January 2, 2006 15:04:05", date)
    return appointment.Hour() >= 12 && appointment.Hour() < 18
}

// Description returns a formatted string of the appointment time.
func Description(date string) string {
    t, _ := time.Parse("1/2/2006 15:04:05", date)
	return "You have an appointment on " + t.Format("Monday, January 2, 2006, at 15:04.")
}

// AnniversaryDate returns a Time with this year's anniversary.
func AnniversaryDate() time.Time {
	return time.Date(2025, time.September, 15, 0, 0, 0, 0, time.UTC)
}
