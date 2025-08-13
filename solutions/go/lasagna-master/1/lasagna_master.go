package lasagna

const (
    defaultPrepTime = 2
    noodleQtyPerLayer = 50
    sauceQtyPerLayer = 0.2
    defaultPortions = 2.0
)

func PreparationTime(layers []string, time int) int {
    prepTime := time
    if (time <= 0) {
        prepTime = defaultPrepTime
    }
    return len(layers) * prepTime
}

func Quantities(layers []string) (int, float64) {
    var sauceQty int
    var noodleQty int
	for _, v := range layers {
        if v == "sauce" {
            sauceQty += 1
        }
        if v == "noodles" {
            noodleQty += 1
        }
    }
    return (noodleQty * noodleQtyPerLayer), (float64(sauceQty) * sauceQtyPerLayer)
}

func AddSecretIngredient(friendRecipe []string, ownRecipe []string) {
    secretIngredient := friendRecipe[len(friendRecipe) - 1]
    ownRecipe[len(ownRecipe) - 1] = secretIngredient
}

func ScaleRecipe(quantities []float64, portions int) []float64 {
    var newQuantities []float64
    
    for _, qty := range quantities {
        newQuantities = append(newQuantities, qty/defaultPortions * float64(portions))
    }
    return newQuantities
}