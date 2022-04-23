Kolakoski Kurve
===============

_Try it online_ [@ catseye.tc](https://catseye.tc/installation/Kolakoski_Kurve)
| _See also:_ [Maze Clouds](https://github.com/catseye/Maze-Clouds#readme)
∘ [Latcarf](https://github.com/catseye/Latcarf#readme)

![screenshot](images/Kolakoski_Kurve.jpg?raw=true)

The [Kolakoski sequence (Wikipedia)][], also called the "see and say" sequence,
is an infinite sequence of 1's and 2's which starts

    1, 2, 2, 1, 1, 2, 1, 2, 2, 1, 2, 2, 1, 1, 2, 1, 1, ...

An interesting property of this sequence is that is describes its own run
lengths: there is **one** 1's, followed by **two** 2's, followed by **two**
1's, followed by **one** 2, and so forth.

**Kolakoski Kurve** is a 2-dimensional visualization of the Kolakoski sequence
that I devised circa 2016.  It can be thought of as combining it with turtle
graphics.  Read the sequence left to right; whenever you see a 1, go forward
some fixed distance, and whenever you see a 2, turn right 90 degrees.

[Kolakoski sequence (Wikipedia)]: https://en.wikipedia.org/wiki/Kolakoski_sequence
