---
CreatedAt: 2025-11-14
tags:
  - lecture
class: CS 1MD3
---
```python
"""
My cat is orange.
My dog is grey.
My dog is a mutt.
My cat is scared of noise
My dog is scared of the cat.
Run dog run!
"""

d = {
    "My": ["cat", "dog", "dog", "cat", "dog"],
    "cat": ["is", "is"],
    "is": ["orange.", "grey.", "a", "scared", "scared"],
}

import random


def associate_pair(d, key, value):
    if key in d:
        d[key].append(value)
    else:
        d[key] = [value]


def make_dictionary(file_name):
    d = {}
    with open(file_name, "r") as file:
        lines = file.readlines()
        for line in lines:

            words = line.split()
            for i in range(len(words)):
                if i == 0:
                    associate_pair(d, "", words[i])
                if i == len(words) - 1:
                    associate_pair(d, words[i], "")
                    continue
                associate_pair(d, words[i], words[i + 1])
    return d

def make_dictionary2(file_name, k):
    d = {}
    prev = ("",) * k 
    with open(file_name, "r") as file:
        lines = file.readlines()
        for line in lines:

            words = line.split()
            for i in range(len(words)):
                associate_pair(d, prev, words[i])
                prev = prev[1:] + (words[i],)
                # if i == 0:
                #     associate_pair(d, "", words[i])
                # if i == len(words) - 1:
                #     associate_pair(d, words[i], "")
                #     continue
                # associate_pair(d, words[i], words[i + 1])
    
    associate_pair(d, prev, "")
    return d

# adding different books
def append_dictionary(d, file_name):
    with open(file_name, "r") as file:
        lines = file.readlines()
        for line in lines:

            words = line.split()
            for i in range(len(words)):
                if i == 0:
                    associate_pair(d, "", words[i])
                if i == len(words) - 1:
                    associate_pair(d, words[i], "")
                    continue
                associate_pair(d, words[i], words[i + 1])


def append_dictionary2(d, file_name, k):
    prev = ("",) * k
    with open(file_name, "r") as file:
        lines = file.readlines()
        for line in lines:
            words = line.split()
            for i in range(len(words)):
                associate_pair(d, prev, words[i])
                prev = prev[1:] + (words[i],)


def mimic_text(word_dict, num_words):
    story = ""
    context = ""
    current = word_dict[context]
    i = 0
    current_sentence = ""

    # with open(file_name, "r") as file:
    # lines = file.readlines()
    lines = []
    while i < num_words:
        i += 1
        rand_index = random.randint(0, len(current) - 1)
        next_word: str = current[rand_index]

        current_sentence += (
            next_word.lower() if len(current_sentence) > 0 and next_word != "I" else next_word
        ) + ("" if next_word == "" else " ")
        if (
            next_word.count(".") == 1
            or next_word.count("?") == 1
            or next_word.count("!") == 1
        ):
            if current_sentence in lines:
                continue
            else:
                story += current_sentence
                current_sentence = ""

        current = word_dict[next_word]
    return story

def mimic_text2(word_dict, num_words, k):
    story = ""
    context = ("",)*k
    i = 0

    # with open(file_name, "r") as file:
    # lines = file.readlines()

    while i < num_words:
        rand_index = random.randint(0, len(word_dict[context]) - 1)
        next_word = word_dict[context][rand_index]
        story += next_word + " "
        context = context[1:] + (next_word,)
        i += 1

    return story


# print(make_dictionary("sentences.txt"))
d = {}
append_dictionary2(d, "alice_in_wonderland.txt", 4)
append_dictionary2(d, "frankenstein.txt", 4)
append_dictionary2(d, "sentences.txt", 4)

print(len(d))
print(mimic_text2(d, 400, 4))

```