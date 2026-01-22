
| summary          | pipeline                                                         | real fastest (1) to slowest (5)        | user fastest (1) to slowest (5)         | sys fastest (1) to slowest (5) |     |     |
| ---------------- | ---------------------------------------------------------------- | -------------------------------------- | --------------------------------------- | ------------------------------ | --- | --- |
| **`sed`**        | `sed -n '1000,2000p' pride_and_prejudice.txt > /dev/null`        |                                        |                                         |                                |     |     |
| **`tail\|head`** |                                                                  | `tail -n +1000 pride_and_prejudice.txt | head -n 1001 > /dev/null`               |                                |     |     |
| **`head          | tail`**                                                          | `head -n 2000 pride_and_prejudice.txt  | tail -n 1001 > /dev/null`               |                                |     |     |
| **`cat           | awk`**                                                           | `cat pride_and_prejudice.txt           | awk 'NR>=1000 && NR<=2000' > /dev/null` |                                |     |     |
| **`awk`**        | `awk 'NR>=1000 && NR<=2000' pride_and_prejudice.txt > /dev/null` |                                        |                                         |                                |     |     |
