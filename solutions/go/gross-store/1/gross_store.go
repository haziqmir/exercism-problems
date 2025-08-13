package gross

// Units stores the Gross Store unit measurements.
func Units() map[string]int {
    return map[string]int{
        "quarter_of_a_dozen": 3,
        "half_of_a_dozen": 6,
        "dozen": 12,
        "small_gross": 120,
        "gross": 144,
        "great_gross": 1728,
    }
}

// NewBill creates a new bill.
func NewBill() map[string]int {
    return map[string]int{}
}

// AddItem adds an item to customer bill.
func AddItem(bill, units map[string]int, item, unit string) bool {
    u, unitExists := units[unit]
    if !unitExists {
        // couldn't find the unit
        return false
    }
    i, itemExists := bill[item]
    if itemExists {
        bill[item] = i + u
    } else {
        bill[item] = u
    }
    return true
}

// RemoveItem removes an item from customer bill.
func RemoveItem(bill, units map[string]int, item, unit string) bool {
    i, itemExists := bill[item]
    u, unitExists := units[unit]
    if !unitExists || !itemExists{
        return false
    }
    // new quantity?
    newQty := i - u
    switch {
        case newQty < 0:
        return false
        case newQty == 0:
        delete(bill, item)
        return true
        default:
        bill[item] -= u
        return true
    }
}

// GetItem returns the quantity of an item that the customer has in his/her bill.
func GetItem(bill map[string]int, item string) (int, bool) {
    qty, ok := bill[item]
    return qty, ok
}
