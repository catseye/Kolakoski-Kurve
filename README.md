Kolakoski Kurve
===============

_Try it online_ [@ catseye.tc](https://catseye.tc/installation/Kolakoski_Kurve)
| _See also:_ [Maze Clouds](https://codeberg.org/catseye/Maze-Clouds#maze-clouds)
∘ [Latcarf](https://codeberg.org/catseye/Latcarf#latcarf)
∘ [Erratic Turtle Graphics](https://codeberg.org/catseye/Erratic-Turtle-Graphics#erratic-turtle-graphics)

![screenshot](images/Kolakoski_Kurve.jpg?raw=true)
![screenshot of XOR version](images/Kolakoski_Kurve_XOR.jpg?raw=true)

The [Kolakoski sequence (Wikipedia)][], also called the "see and say" sequence,
is an unbounded sequence of 1's and 2's which starts

    1, 2, 2, 1, 1, 2, 1, 2, 2, 1, 2, 2, 1, 1, 2, 1, 1, ...

An interesting property of this sequence is that is describes its own run
lengths: there is **one** 1's, followed by **two** 2's, followed by **two**
1's, followed by **one** 2, and so forth.

**Kolakoski Kurve** is a 2-dimensional visualization of the Kolakoski sequence
that I devised circa 2016.  It can be thought of as combining the sequence with
turtle graphics, by the following method:  Read the sequence left to right;
whenever you see a 1, go forward some fixed distance, and whenever you see a 2,
turn right 90 degrees.

Because the sequence itself is irregular, this process produces irregular
shapes which are, to my mind, aesthetically pleasing.

The path does fold back on itself quite often (whenever two 2's appear in the
sequence), so drawing the path with an XOR pen (which inverts any existing
pixels on the line) instead of simply laying down black pixels results in
another interesting drawing.

[Kolakoski sequence (Wikipedia)]: https://en.wikipedia.org/wiki/Kolakoski_sequence
