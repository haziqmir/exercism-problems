#include "rail_fence_cipher.h"

static inline size_t cycle_len(size_t rails) {
    return 2 * (rails - 1);
}

char *encode(char *text, size_t rails) {
    if (!text) return NULL;

    size_t len = strlen(text);
    // if more rails than text OR
    // just 1 rail
    // do nothing actually?

    char *out = malloc(len + 1);
    if (!out) return NULL;
    size_t idx = 0;
    size_t cycle = cycle_len(rails);

    for (size_t row = 0; row < rails; ++row) {
        for (size_t i = row; i < len; i += cycle) {
            out[idx++] = text[i];

            size_t j = i + cycle - 2 * row;
            if (row != 0 && row != rails - 1 && j < len)
                out[idx++] = text[j];
        }
    }

    out[len] = '\0';
    return out;
}

char *decode(char *ciphertext, size_t rails) {
    if (!ciphertext) return NULL;

    size_t len = strlen(ciphertext);

    size_t *indices = malloc(len * sizeof *indices);
    if (!indices) {
        return NULL;
    }
    char *out = malloc(len + 1);
    if (!out) {
        return NULL;
    }
    size_t idx = 0;
    size_t cycle = cycle_len(rails);

    for (size_t row = 0; row < rails; ++row) {
        for (size_t i = row; i < len; i += cycle) {
            indices[idx++] = i;

            size_t j = i + cycle - 2 * row;
            if (row != 0 && row != rails - 1 && j < len)
                indices[idx++] = j;
        }
    }
    for (size_t k = 0; k < len; ++k) {
        out[indices[k]] = ciphertext[k];
    }
    out[len] = '\0';
    return out;
}
