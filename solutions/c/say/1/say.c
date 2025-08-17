#include "say.h"

static const char *ones[] = {
    "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
    "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen",
    "eighteen", "nineteen"
};

static const char *tens[] = {
    "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty",
    "ninety"
};

static const char *scale[] = {
    "", "thousand", "million", "billion"
};


static void convert_group(int num, char *res) {
    if (num == 0) return;

    int hundredsPl = (num / 100) | 0;
    if (hundredsPl) {
        strcat(res, ones[hundredsPl]);
        strcat(res, " hundred");
        num %= 100;
        if (num) {
            strcat(res, " ");
        }
    }

    if (num < 20) {
        strcat(res, ones[num]);
    } else {
        int tensPl = (num / 10) | 0;
        int onesPl = num % 10;
        if (onesPl) {
            strcat(res, tens[tensPl]);
            strcat(res, "-");
            strcat(res, ones[onesPl]);
        } else {
            strcat(res, tens[tensPl]);
        }
    } 
}

int say(int64_t input, char **ans) {
    if (input == 0) {
        *ans = malloc(5);
        if (*ans == NULL) return -1;
        strcpy(*ans, "zero");
        return 0;
    }
    if (input < 0 || input > 999999999999) {
        return -1;
    }

    char *result = malloc(500);
    if (result == NULL) return -1;
    result[0] = '\0'; // needed?

    int64_t remaining = input;
    char parts[4][200];

    for (int i = 0; i < 4; ++i) {
        parts[i][0] = '\0'; // needed?
    }

    for (int i = 0; i < 4 && remaining > 0; ++i) {
        int group = remaining % 1000;
        remaining /= 1000;
        if (group > 0) {
            convert_group(group, parts[i]);
            if (i > 0) {
                strcat(parts[i], " ");
                strcat(parts[i], scale[i]);
            }
        }
    }

    int first = 1;
    for (int i = 3; i >= 0; --i) {
        if (strlen(parts[i]) > 0) {
            if (!first) {
                strcat(result, " ");
            }
            strcat(result, parts[i]);
            first = 0;
        }
    }

    *ans = malloc(strlen(result) + 1);
    if (!ans) {
        free(result);
        return -1;
    }
    strcpy(*ans, result);
    free(result);
    
    return 0;
}