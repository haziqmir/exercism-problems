"""Functions used in preparing Guido's gorgeous lasagna.

Learn about Guido, the creator of the Python language:
https://en.wikipedia.org/wiki/Guido_van_Rossum

This is a module docstring, used to describe the functionality
of a module and its functions and/or classes.
"""

#TODO: define your EXPECTED_BAKE_TIME (required) and PREPARATION_TIME (optional) constants below.
EXPECTED_BAKE_TIME = 40
PREPARATION_TIME = 2

def bake_time_remaining(elapsed_bake_time):
    """Calculate the bake time remaining.

    :param elapsed_bake_time: int - baking time already elapsed.
    :return: int - remaining bake time (in minutes) derived from 'EXPECTED_BAKE_TIME'.

    Function that takes the actual minutes the lasagna has been in the oven as
    an argument and returns how many minutes the lasagna still needs to bake
    based on the `EXPECTED_BAKE_TIME`.
    """

    return EXPECTED_BAKE_TIME - elapsed_bake_time


def preparation_time_in_minutes(number_of_layers):
    """Calculate preparation time in minutes.

    :param number_of_layers: int - number of layers to cook.
    :return: int - time takent to prepare (in minutes) derived from 'PREPARATION_TIME'.
    """

    return PREPARATION_TIME * number_of_layers    


def elapsed_time_in_minutes(number_of_layers, elapsed_bake_time):
    """Calculate time taken to cook.

    :param number_of_layers: int - number of layers to cook.
    :param elapsed_bake_time: int - time elapsed so far.
    :return: int - total time elapsed.
    """
    return elapsed_bake_time + preparation_time_in_minutes(number_of_layers)


# TODO: Remember to go back and add docstrings to all your functions
#  (you can copy and then alter the one from bake_time_remaining.)
