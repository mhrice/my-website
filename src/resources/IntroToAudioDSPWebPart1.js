const finishedFile = `#N canvas 0 50 1280 637 16;
#X obj 24 145 *~;
#X obj 8 595 dac~;
#X floatatom 72 125 5 0 0 0 - - -, f 5;
#X obj 11 490 *~;
#X obj 37 446 tgl 30 0 empty empty empty 17 7 0 20 -262144 -1 -1 1
1;
#X obj 364 558 tabwrite~ scope;
#X obj 374 466 tgl 30 0 empty empty empty 17 7 0 10 -262144 -1 -1 0
1;
#N canvas 0 50 450 250 (subpatch) 0;
#X array scope 500 float 3;
#A 0 -0.295511 -0.298171 -0.299655 -0.299963 -0.299093 -0.297048 -0.293836
-0.289471 -0.283969 -0.277352 -0.269645 -0.260877 -0.251083 -0.240303
-0.228579 -0.215958 -0.202489 -0.188225 -0.173221 -0.157537 -0.141233
-0.124373 -0.107025 -0.0892574 -0.0711389 -0.0527411 -0.0341361 -0.0153969
0.00340295 0.0221896 0.0408887 0.0594271 0.077732 0.0957315 0.113355
0.130534 0.1472 0.163288 0.178735 0.193477 0.207459 0.220627 0.232928
0.244314 0.254741 0.264168 0.272557 0.279876 0.286093 0.291185 0.295133
0.297923 0.299542 0.299986 0.299251 0.297342 0.294264 0.290029 0.284652
0.278158 0.270572 0.261923 0.252245 0.241577 0.229961 0.217441 0.204065
0.189887 0.174963 0.159352 0.143115 0.126316 0.109021 0.0912984 0.0732167
0.054847 0.0362613 0.0175334 -0.00126324 -0.0200548 -0.0387676 -0.0573281
-0.0756637 -0.0937023 -0.111373 -0.128605 -0.145331 -0.161487 -0.177008
-0.191834 -0.205907 -0.219172 -0.231576 -0.24307 -0.253607 -0.263148
-0.271654 -0.279094 -0.285438 -0.290661 -0.294742 -0.297666 -0.299422
-0.299999 -0.299395 -0.297616 -0.294668 -0.290563 -0.285317 -0.278951
-0.271489 -0.262961 -0.253399 -0.242839 -0.231325 -0.218903 -0.205622
-0.191533 -0.176692 -0.161157 -0.144989 -0.128251 -0.111008 -0.0933293
-0.075284 -0.0569432 -0.0383788 -0.0196637 -0.000871262 0.0179248 0.0366506
0.0552321 0.0735963 0.0916714 0.109386 0.126672 0.14346 0.159684 0.175282
0.190192 0.204352 0.217709 0.230211 0.241809 0.252457 0.262114 0.270742
0.278306 0.284778 0.290129 0.294339 0.297392 0.299278 0.299988 0.299521
0.297877 0.295064 0.291091 0.285976 0.279733 0.272391 0.263981 0.254533
0.244086 0.232681 0.220361 0.207177 0.193178 0.178418 0.162958 0.146857
0.13018 0.112992 0.09536 0.0773535 0.0590431 0.0405006 0.0217986 0.00301097
-0.0157883 -0.0345254 -0.0531269 -0.0715197 -0.0896318 -0.107392 -0.124731
-0.141579 -0.15787 -0.17354 -0.188529 -0.202778 -0.21623 -0.228833
-0.240538 -0.251298 -0.261071 -0.269815 -0.277499 -0.284094 -0.289573
-0.293915 -0.297103 -0.299124 -0.29997 -0.299639 -0.298125 -0.295442
-0.291598 -0.286609 -0.280494 -0.273278 -0.264989 -0.255659 -0.245325
-0.234025 -0.221805 -0.208714 -0.194803 -0.180128 -0.164745 -0.148715
-0.132101 -0.114968 -0.0973827 -0.0794142 -0.0611341 -0.042614 -0.0239266
-0.00514526 0.0136563 0.0324044 0.0510255 0.069446 0.087593 0.105396
0.122785 0.139691 0.156049 0.171794 0.186865 0.201202 0.214749 0.227449
0.239256 0.250123 0.260008 0.268872 0.276681 0.283402 0.289011 0.293485
0.296802 0.298954 0.299931 0.29973 0.298353 0.295804 0.292093 0.287236
0.28125 0.274157 0.265986 0.25677 0.246546 0.235354 0.223238 0.210245
0.196427 0.181837 0.166531 0.15057 0.134018 0.11694 0.0994027 0.0814749
0.0632272 0.0447311 0.0260592 0.00728464 -0.0115186 -0.0302763 -0.048915
-0.0673615 -0.0855435 -0.10339 -0.12083 -0.137796 -0.154221 -0.170037
-0.185186 -0.199608 -0.213246 -0.226046 -0.237958 -0.248936 -0.258937
-0.267921 -0.27585 -0.282694 -0.288428 -0.293029 -0.29648 -0.298766
-0.299879 -0.299815 -0.298573 -0.296156 -0.292574 -0.287843 -0.281982
-0.275013 -0.266965 -0.257868 -0.247758 -0.236675 -0.224662 -0.211764
-0.198035 -0.183528 -0.1683 -0.152411 -0.135924 -0.118903 -0.101415
-0.0835286 -0.0653128 -0.0468406 -0.0281847 -0.00941821 0.00938523
0.0281518 0.046808 0.0652805 0.0834969 0.101384 0.118873 0.135895 0.152383
0.168273 0.183501 0.19801 0.211741 0.22464 0.236655 0.24774 0.257851
0.26695 0.275 0.281971 0.287834 0.292567 0.296151 0.29857 0.299814
0.29988 0.29877 0.296485 0.293037 0.288438 0.282706 0.275864 0.267938
0.258956 0.248957 0.237981 0.226071 0.213272 0.199636 0.185216 0.170069
0.154253 0.13783 0.120865 0.103425 0.0855801 0.0673987 0.0489527 0.0303143
0.0115567 -0.00724646 -0.0260212 -0.0446934 -0.0631899 -0.0814382 -0.0993666
-0.116905 -0.133984 -0.150537 -0.166499 -0.181807 -0.196398 -0.210218
-0.223213 -0.235331 -0.246525 -0.256751 -0.265968 -0.274142 -0.281237
-0.287225 -0.292085 -0.295798 -0.298349 -0.299729 -0.299931 -0.298956
-0.296807 -0.293492 -0.28902 -0.283413 -0.276693 -0.268887 -0.260025
-0.250142 -0.239276 -0.22747 -0.214772 -0.201227 -0.186891 -0.171821
-0.156077 -0.13972 -0.122815 -0.105427 -0.0876245 -0.069478 -0.051058
-0.0324372 -0.0136893 0.00511227 0.0238937 0.0425813 0.0611017 0.0793824
0.0973514 0.114938 0.132072 0.148686 0.164717 0.180101 0.194778 0.20869
0.221782 0.234004 0.245307 0.255642 0.264974 0.273265 0.280483 0.286599
0.29159 0.295436 0.298122 0.299637 0.299971 0.299127 0.297108 0.293922
0.289583 0.284106 0.277514 0.269831 0.261089 0.251319 0.240561 0.228858
0.216256 0.202806 0.188559 0.173571 0.157902 0.141612 0.124766 0.107428
0.0896683 0.0715568 0.0531645 0.0345633 0.0158264 -0.00297278 -0.0217605
-0.0404628 -0.0590057 -0.0773167 -0.0953239 -0.112957 -0.130146 -0.146824
-0.162926 -0.178388 -0.193149 -0.207149 -0.220336 -0.232657 -0.244064
-0.254513 -0.263963 -0.272376 -0.279719 -0.285964;
#X coords 0 1 500 -1 400 300 1 0 0;
#X restore 661 253 graph;
#X floatatom 28 67 5 0 0 0 - - -, f 5;
#X obj 24 91 osc~;
#X msg 118 46 440;
#X msg 161 89 0.3;
#X text 31 387 Click for Sine;
#X text 409 452 Click For Graph;
#X msg 450 18 \\; pd dsp 1 \\;;
#X text 134 129 Amplitude;
#X text 3 45 Frequency;
#X obj 208 5 loadbang;
#X obj 374 507 metro 200;
#X connect 0 0 3 0;
#X connect 2 0 0 1;
#X connect 3 0 1 0;
#X connect 3 0 1 1;
#X connect 3 0 5 0;
#X connect 4 0 3 1;
#X connect 6 0 18 0;
#X connect 8 0 9 0;
#X connect 9 0 0 0;
#X connect 10 0 8 0;
#X connect 11 0 2 0;
#X connect 17 0 10 0;
#X connect 17 0 11 0;
#X connect 17 0 14 0;
#X connect 18 0 5 0;
`
export default finishedFile;