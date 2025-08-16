#include "knapsack.h"

int maximum_value(unsigned int max_weight, item_t *items, size_t item_count) {
    if (!items || item_count == 0 || max_weight == 0) return 0;
    unsigned int dp[item_count + 1][max_weight + 1];
    memset(dp, 0, sizeof dp);
    
    for (size_t i = 1; i <= item_count; ++i) {
        unsigned int prevWeight = items[i-1].weight;
        unsigned int prevValue = items[i-1].value;
        
        for (unsigned int w = 0; w <= max_weight; ++w) {
            if (prevWeight > w) {
                dp[i][w] = dp[i-1][w];
            } else {
                dp[i][w] = dp[i-1][w] > dp[i-1][w-prevWeight] + prevValue ? dp[i-1][w] : dp[i-1][w-prevWeight] + prevValue;
            }
        }
    }
    return dp[item_count][max_weight];
}
