#include "sublist.h"

// typedef enum { EQUAL, UNEQUAL, SUBLIST, SUPERLIST } comparison_result_t;

comparison_result_t check_lists(int *list_to_compare, int *base_list,
        size_t list_to_compare_element_count,
        size_t base_list_element_count) {
    // compare A with B
    // A = B EQUAL
    // A > B SUPERLIST
    // A < B SUBLIST
    // A ≠ B UNEQUAL
    // empty lists are equal
    if (!list_to_compare && !base_list)
        return EQUAL;
    if (!list_to_compare)
        return SUBLIST;
    if (!base_list)
        return SUPERLIST;
    // if lengths match then check for EQUAL
    // single element mistmatch entails UNEQUAL
    if (list_to_compare_element_count == base_list_element_count) {
        for (size_t i = 0; i < list_to_compare_element_count; ++i) {
            if (list_to_compare[i] != base_list[i]) {
                return UNEQUAL;
            }
        }
        return EQUAL;
    }
    // sublist
    int *shorter      = list_to_compare;
    int *longer       = base_list;
    size_t short_len  = list_to_compare_element_count;
    size_t long_len   = base_list_element_count;
    comparison_result_t short_is_sub = SUBLIST;

    if (short_len > long_len) {
        shorter      = base_list;
        longer       = list_to_compare;
        short_len    = base_list_element_count;
        long_len     = list_to_compare_element_count;
        short_is_sub = SUPERLIST;
    }

    for (size_t start = 0; start + short_len <= long_len; ++start) {
        if (longer[start] != shorter[0]) continue;
        size_t j = 1;
        while (j < short_len && longer[start + j] == shorter[j]) ++j;
        if (j == short_len)
            return short_is_sub;
    }
    // if (list_to_compare_element_count <= base_list_element_count) {
    //     // if the first list is empty it is trivially a sublist
    //     if (!list_to_compare)
    //         return SUBLIST;
    //     // check for sublist
    //     size_t start_idx;
    //     for (size_t i = 0; i < base_list_element_count; ++i) {
    //         // first element HAS to be in the second list
    //         if (base_list[i] == list_to_compare[0])
    //             start_idx = i;
    //     }
    //     for (size_t i = 0; i < list_to_compare_element_count; ++i) {
    //         if (list_to_compare[i] != base_list[start_idx+i]) {
    //             return UNEQUAL;
    //         }
    //     }
    //     return SUBLIST;
    // }
    // default case, might have to refactor a bit
    return UNEQUAL;
}
