const finishedFile = `#N canvas 0 50 1280 637 16;
#X obj 24 145 *~;
#X obj 8 595 dac~;
#X floatatom 72 125 5 0 0 0 - - -, f 5;
#X obj 11 490 *~;
#X obj 37 446 tgl 30 0 empty empty empty 17 7 0 20 -262144 -1 -1 0
1;
#X obj 364 558 tabwrite~ scope;
#X obj 374 466 tgl 30 0 empty empty empty 17 7 0 10 -262144 -1 -1 0
1;
#N canvas 0 50 450 250 (subpatch) 0;
#X array scope 500 float 3;
#A 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0;
#X coords 0 1 500 -1 400 300 1 0 0;
#X restore 661 253 graph;
#X obj 374 507 metro 200;
#X obj 333 110 table square;
#X obj 203 148 tabread4~ square;
#X obj 179 210 *~;
#X obj 167 495 *~;
#X floatatom 135 179 5 0 0 0 - - -, f 5;
#X obj 190 462 tgl 30 0 empty empty empty 17 7 0 10 -262144 -1 -1 0
1;
#X floatatom 28 67 5 0 0 0 - - -, f 5;
#X obj 204 95 phasor~;
#X obj 204 123 *~ 2048;
#X floatatom 208 73 5 0 0 0 - - -, f 5;
#X obj 24 91 osc~;
#X msg 647 45 \\; square sinesum 2048 1 0 0.333 0 0.2 0 0.1428 0 0.111
0 0.0909 0 \\; square normalize 1, f 33;
#X msg 120 60 440;
#X msg 161 89 0.3;
#X text 218 409 Click for Square;
#X text 31 387 Click for Sine;
#X text 409 452 Click For Graph;
#X msg 450 18 \\; pd dsp 1 \\;;
#X text 268 67 Frequency;
#X text 51 195 Amplitude;
#X text 3 45 Frequency;
#X obj 208 5 loadbang;
#X connect 0 0 3 0;
#X connect 2 0 0 1;
#X connect 3 0 1 0;
#X connect 3 0 1 1;
#X connect 3 0 5 0;
#X connect 4 0 3 1;
#X connect 6 0 8 0;
#X connect 8 0 5 0;
#X connect 10 0 11 0;
#X connect 11 0 12 0;
#X connect 12 0 1 0;
#X connect 12 0 1 1;
#X connect 12 0 5 0;
#X connect 13 0 11 1;
#X connect 14 0 12 1;
#X connect 15 0 19 0;
#X connect 16 0 17 0;
#X connect 17 0 10 0;
#X connect 18 0 16 0;
#X connect 19 0 0 0;
#X connect 21 0 15 0;
#X connect 21 0 18 0;
#X connect 22 0 2 0;
#X connect 22 0 13 0;
#X connect 30 0 21 0;
#X connect 30 0 22 0;
#X connect 30 0 26 0;
#X connect 30 0 20 0;
`
export default finishedFile;
