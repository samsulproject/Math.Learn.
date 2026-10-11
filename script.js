
const $ = s => document.querySelector(s);

const topics = [
  {id:1,g:10,n:"Eksponen",e:"⚡",d:"Sifat pangkat dan persamaan eksponen.",q:"Sederhanakan (2³ × 2⁵) ÷ 2⁴.",a:"16",steps:["Gabungkan perkalian: 2³ × 2⁵ = 2⁸.","Kurangi pangkat saat dibagi: 2⁸ ÷ 2⁴ = 2⁴.","Hasilnya 16."],questions:[
    ["(3² × 3⁴) ÷ 3³ = ...",["9","27","81","243"],2,"3²⁺⁴⁻³ = 3³ = 27."],
    ["Jika 2ˣ = 32, x = ...",["4","5","6","8"],1,"Karena 2⁵ = 32, x = 5."],
    ["Nilai 4³ ÷ 2⁴ adalah ...",["2","4","8","16"],1,"4³ = 2⁶, lalu 2⁶ ÷ 2⁴ = 2² = 4."]
  ]},
  {id:2,g:10,n:"Bentuk Akar",e:"🌱",d:"Menyederhanakan dan mengoperasikan bentuk akar.",q:"Sederhanakan 3√12 + 2√27.",a:"12√3",steps:["√12 = 2√3, maka 3√12 = 6√3.","√27 = 3√3, maka 2√27 = 6√3.","Jumlahnya 12√3."],questions:[
    ["√75 − √12 = ...",["√3","2√3","3√3","5√3"],2,"5√3 − 2√3 = 3√3."],
    ["√8 × √18 = ...",["6","8","12","18"],2,"√(8 × 18) = √144 = 12."],
    ["Rasionalisasi 6/√3 adalah ...",["√3","2√3","3√3","6√3"],1,"Kalikan atas dan bawah dengan √3: 6√3/3 = 2√3."]
  ]},
  {id:3,g:10,n:"Logaritma",e:"📐",d:"Sifat logaritma dan persamaan logaritma.",q:"Jika log₂(x − 1) = 3, tentukan x.",a:"9",steps:["Ubah ke eksponen: x − 1 = 2³.","x − 1 = 8.","Jadi x = 9."],questions:[
    ["log₃ 81 = ...",["2","3","4","5"],2,"3⁴ = 81, jadi jawabannya 4."],
    ["log₂ 8 + log₂ 4 = ...",["3","4","5","6"],2,"3 + 2 = 5."],
    ["Jika log₅ x = 2, nilai x adalah ...",["10","15","20","25"],3,"x = 5² = 25."]
  ]},
  {id:4,g:10,n:"Persamaan Linear",e:"⚖️",d:"Persamaan linear dan penerapannya.",q:"Tentukan x: 3(2x − 4) = 2x + 12.",a:"6",steps:["6x − 12 = 2x + 12.","4x = 24.","x = 6."],questions:[
    ["5x − 7 = 3x + 9. Nilai x adalah ...",["6","7","8","9"],2,"2x = 16, maka x = 8."],
    ["2(x + 4) − 3 = 15. Nilai x adalah ...",["3","4","5","6"],1,"2x + 5 = 15, jadi x = 5. (Pilihan C)"],
    ["Jika 4x + 3 = 2x + 17, x = ...",["5","6","7","8"],2,"2x = 14, jadi x = 7."]
  ]},
  {id:5,g:10,n:"Sistem Persamaan Linear",e:"🔢",d:"Menyelesaikan dua persamaan dengan eliminasi atau substitusi.",q:"Tentukan x dan y: 2x + y = 11 dan x − y = 1.",a:"x = 4, y = 3",steps:["Jumlahkan persamaan: 3x = 12.","x = 4.","Substitusi: 4 − y = 1, sehingga y = 3."],questions:[
    ["x + y = 9 dan x − y = 3. Nilai x adalah ...",["3","4","5","6"],2,"Jumlahkan persamaan: 2x = 12, x = 6. (Pilihan D)"],
    ["2x + y = 10 dan x + y = 7. Nilai x adalah ...",["2","3","4","5"],1,"Kurangkan persamaan, x = 3."],
    ["x + 2y = 11 dan x + y = 7. Nilai y adalah ...",["2","3","4","5"],2,"Kurangkan persamaan, y = 4."]
  ]},
  {id:6,g:10,n:"Fungsi Kuadrat",e:"📈",d:"Grafik parabola, titik puncak, dan akar fungsi.",q:"Tentukan titik puncak y = x² − 6x + 5.",a:"(3, −4)",steps:["Koordinat x puncak = −b/(2a) = 6/2 = 3.","Substitusi x = 3: 9 − 18 + 5 = −4.","Titik puncak adalah (3, −4)."],questions:[
    ["Akar x² − 5x + 6 = 0 adalah ...",["1 dan 6","2 dan 3","−2 dan −3","3 dan 5"],1,"Faktorkan (x − 2)(x − 3) = 0."],
    ["Sumbu simetri y = x² − 8x + 3 adalah ...",["x=2","x=3","x=4","x=8"],2,"x = −b/(2a) = 8/2 = 4."],
    ["Nilai minimum x² − 4x + 7 adalah ...",["2","3","4","7"],1,"Puncak di x=2, f(2)=4−8+7=3."]
  ]},
  {id:7,g:10,n:"Persamaan Kuadrat",e:"🧩",d:"Pemfaktoran, akar persamaan, dan diskriminan.",q:"Tentukan akar x² − 7x + 12 = 0.",a:"3 dan 4",steps:["Faktorkan: (x − 3)(x − 4) = 0.","x − 3 = 0 atau x − 4 = 0.","x = 3 atau x = 4."],questions:[
    ["Akar x² − 9x + 20 = 0 adalah ...",["2 dan 10","4 dan 5","3 dan 6","−4 dan −5"],1,"Faktorkan (x − 4)(x − 5)."],
    ["Diskriminan x² + 2x + 5 adalah ...",["−16","−4","4","16"],0,"D = b²−4ac = 4−20 = −16."],
    ["Persamaan dengan akar 2 dan −3 adalah ...",["x²+x−6=0","x²−x−6=0","x²+5x+6=0","x²−5x+6=0"],0,"Jumlah akar −1 dan hasil kali −6."]
  ]},
  {id:8,g:10,n:"Trigonometri Dasar",e:"📐",d:"Perbandingan trigonometri dan sudut istimewa.",q:"Jika sin θ = 3/5 dan θ sudut lancip, tentukan cos θ.",a:"4/5",steps:["Gunakan sin²θ + cos²θ = 1.","cos²θ = 1 − 9/25 = 16/25.","Karena sudut lancip, cos θ = 4/5."],questions:[
    ["Jika tan θ = 3/4, sisi depan 6 cm. Sisi sampingnya ...",["6 cm","8 cm","10 cm","12 cm"],1,"Perbandingan depan:samping = 3:4, sehingga samping = 8 cm."],
    ["sin 30° + cos 60° = ...",["0","1/2","1","√3"],2,"Keduanya 1/2, jumlahnya 1."],
    ["Jika cos θ=12/13 untuk sudut lancip, sin θ= ...",["5/13","12/5","13/12","1/13"],0,"Segitiga 5-12-13, sehingga sin θ = 5/13."]
  ]},
  {id:9,g:10,n:"Nilai Mutlak",e:"🎯",d:"Persamaan dan pertidaksamaan nilai mutlak.",q:"Selesaikan |2x − 3| = 7.",a:"x = 5 atau x = −2",steps:["Kasus pertama: 2x − 3 = 7, sehingga x = 5.","Kasus kedua: 2x − 3 = −7, sehingga x = −2.","Jadi x = 5 atau −2."],questions:[
    ["|x − 4| = 6. Solusinya ...",["x=10 atau −2","x=2 atau 10","x=−10 atau 2","x=4 atau 6"],0,"x−4=6 atau x−4=−6."],
    ["|3x| = 12. Nilai x adalah ...",["4 saja","−4 saja","±4","±3"],2,"3x=12 atau 3x=−12."],
    ["|x+2| < 5 setara dengan ...",["−7<x<3","−3<x<7","x<−7","x>3"],0,"−5 < x+2 < 5, maka −7 < x < 3."]
  ]},
  {id:10,g:10,n:"Statistika",e:"📊",d:"Mean, median, modus, dan interpretasi data.",q:"Data 3, 5, 7, 9, 16. Tentukan mean dan median.",a:"Mean 8, median 7",steps:["Jumlah data = 40, banyak data = 5.","Mean = 40/5 = 8.","Nilai tengah data adalah 7."],questions:[
    ["Rata-rata 6 data adalah 8. Jika lima data berjumlah 35, data keenam adalah ...",["8","10","12","13"],2,"Jumlah seluruh data 48; data keenam = 48−35 = 13. (Pilihan D)"],
    ["Data 2, 4, 4, 5, 10 memiliki modus ...",["2","4","5","10"],1,"Angka 4 muncul paling sering."],
    ["Median dari 3, 5, 8, 10, 14, 20 adalah ...",["8","9","10","12"],1,"Median = (8+10)/2 = 9."]
  ]},

  {id:11,g:11,n:"Komposisi Fungsi",e:"🔗",d:"Komposisi fungsi dan evaluasi fungsi gabungan.",q:"f(x)=2x+1 dan g(x)=x²−3. Tentukan (f∘g)(2).",a:"3",steps:["g(2)=2²−3=1.","f(1)=2(1)+1.","Hasilnya 3."],questions:[
    ["f(x)=3x−2, g(x)=x+4. (f∘g)(2)= ...",["10","12","16","18"],1,"g(2)=6, lalu f(6)=16. (Pilihan C)"],
    ["f(x)=x², g(x)=2x−1. (g∘f)(3)= ...",["8","15","17","19"],2,"f(3)=9, g(9)=17."],
    ["f(x)=x+2, g(x)=x². (f∘g)(−3)= ...",["7","9","11","13"],1,"g(−3)=9, lalu f(9)=11. (Pilihan C)"]
  ]},
  {id:12,g:11,n:"Fungsi Invers",e:"🔄",d:"Menentukan fungsi invers aljabar.",q:"Tentukan invers f(x)=(3x−2)/4.",a:"(4x+2)/3",steps:["Misalkan y=(3x−2)/4.","Tukar x dan y, lalu kalikan 4: 4x=3y−2.","y=(4x+2)/3."],questions:[
    ["Invers f(x)=5x−7 adalah ...",["(x−7)/5","(x+7)/5","5x+7","(5x−7)"],1,"Tukar variabel dan selesaikan: y=(x+7)/5."],
    ["Invers f(x)=(x+3)/2 adalah ...",["2x+3","2x−3","(x−3)/2","x/2+3"],1,"y=(x+3)/2, tukar dan selesaikan: y=2x−3."],
    ["Jika f(x)=3x+6, f⁻¹(12)= ...",["1","2","3","6"],1,"Cari x saat 3x+6=12, hasilnya 2."]
  ]},
  {id:13,g:11,n:"Lingkaran",e:"⭕",d:"Sudut pusat, sudut keliling, dan panjang busur.",q:"Sudut pusat 124°. Sudut keliling pada busur yang sama adalah ...",a:"62°",steps:["Sudut keliling = setengah sudut pusat.","124°/2 = 62°.","Jadi sudut keliling 62°."],questions:[
    ["Sudut keliling 35°. Sudut pusat yang menghadap busur sama adalah ...",["35°","55°","70°","105°"],2,"Sudut pusat = 2 × 35° = 70°."],
    ["Jika jari-jari 14 cm, keliling lingkaran (π=22/7) adalah ...",["44 cm","66 cm","88 cm","176 cm"],2,"K = 2πr = 2×22/7×14 = 88 cm."],
    ["Luas lingkaran berjari-jari 7 cm (π=22/7) adalah ...",["44","88","154","308"],2,"L = πr² = 22/7 × 49 = 154."]
  ]},
  {id:14,g:11,n:"Matriks",e:"🔲",d:"Operasi matriks dan determinan.",q:"Determinan [[4,3],[2,5]] adalah ...",a:"14",steps:["Gunakan ad−bc.","4×5 − 3×2 = 20−6.","Hasilnya 14."],questions:[
    ["[[1,2],[3,4]] + [[2,0],[1,5]] adalah ...",["[[3,2],[4,9]]","[[2,2],[3,20]]","[[3,0],[4,5]]","[[1,2],[4,9]]"],0,"Jumlahkan setiap elemen yang bersesuaian."],
    ["Determinan [[3,2],[4,6]] adalah ...",["8","10","12","18"],1,"3×6 − 2×4 = 10."],
    ["Jika A=[[1,2],[0,3]], nilai det(A) adalah ...",["0","2","3","5"],2,"1×3 − 2×0 = 3."]
  ]},
  {id:15,g:11,n:"Transformasi Geometri",e:"🪞",d:"Translasi, refleksi, rotasi, dan dilatasi.",q:"A(3,−2) ditranslasi T(−4,5). Bayangannya adalah ...",a:"(−1,3)",steps:["x′=3−4=−1.","y′=−2+5=3.","A′=(−1,3)."],questions:[
    ["Titik (2,−5) dicerminkan pada sumbu x menjadi ...",["(−2,−5)","(2,5)","(−2,5)","(5,2)"],1,"Refleksi sumbu x: (x,y) menjadi (x,−y)."],
    ["Titik (3,4) didilatasi pusat O dengan faktor 2 menjadi ...",["(3,8)","(6,4)","(6,8)","(1.5,2)"],2,"Kalikan kedua koordinat dengan 2."],
    ["Rotasi 90° berlawanan arah jarum jam pada (2,1) menghasilkan ...",["(1,−2)","(−1,2)","(2,−1)","(−2,−1)"],1,"Aturan rotasi: (x,y)→(−y,x)."]
  ]},
  {id:16,g:11,n:"Barisan Aritmetika",e:"🪜",d:"Suku ke-n dan jumlah barisan aritmetika.",q:"a=5 dan beda 4. Tentukan suku ke-15.",a:"61",steps:["Un=a+(n−1)b.","U15=5+14×4.","U15=61."],questions:[
    ["Barisan 7, 11, 15, ... suku ke-20 adalah ...",["79","81","83","87"],2,"U20=7+19×4=83."],
    ["U3=12 dan U8=32. Bedanya adalah ...",["3","4","5","6"],1,"5b=20, jadi b=4."],
    ["Jumlah 10 suku pertama 2,5,8,... adalah ...",["145","150","155","160"],2,"S10=10/2 × (4+27)=155."]
  ]},
  {id:17,g:11,n:"Barisan Geometri",e:"🧬",d:"Rasio, suku ke-n, dan jumlah deret geometri.",q:"Barisan geometri memiliki a=3 dan r=2. Tentukan U8.",a:"384",steps:["Un=ar⁽ⁿ⁻¹⁾.","U8=3×2⁷.","U8=384."],questions:[
    ["Barisan 2,6,18,... suku ke-6 adalah ...",["162","243","486","729"],1,"U6=2×3⁵=486. (Pilihan C)"],
    ["Jika a=5 dan r=3, suku ke-4 adalah ...",["45","90","135","405"],2,"U4=5×3³=135."],
    ["Deret 2+6+18+54 berjumlah ...",["72","78","80","82"],2,"Jumlahnya 2+6+18+54=80."]
  ]},
  {id:18,g:11,n:"Limit Fungsi",e:"🚀",d:"Limit aljabar, faktorisasi, dan substitusi.",q:"lim x→2 (x²−4)/(x−2) = ...",a:"4",steps:["Faktorkan x²−4=(x−2)(x+2).","Sederhanakan menjadi x+2.","Substitusi x=2 menghasilkan 4."],questions:[
    ["lim x→3 (x²−9)/(x−3) adalah ...",["3","6","9","12"],1,"Faktorkan, hasilnya x+3=6."],
    ["lim x→2 (x²+x−6)/(x−2) adalah ...",["3","4","5","6"],2,"Faktorkan (x+3)(x−2), limit = 5."],
    ["lim x→1 (2x²+3x−1) adalah ...",["2","3","4","5"],2,"Substitusi langsung: 2+3−1=4."]
  ]},
  {id:19,g:11,n:"Turunan",e:"📈",d:"Aturan turunan polinomial.",q:"Jika f(x)=3x³−4x²+5x−7, tentukan f′(x).",a:"9x²−8x+5",steps:["Turunan 3x³ adalah 9x².","Turunan −4x² adalah −8x; turunan 5x adalah 5.","f′(x)=9x²−8x+5."],questions:[
    ["Turunan f(x)=4x³−2x²+7 adalah ...",["12x²−4x","4x²−2x","12x−4","12x²−2x"],0,"Turunkan setiap suku: 12x²−4x."],
    ["Jika f(x)=x²−6x, f′(4)= ...",["0","2","4","8"],1,"f′=2x−6; f′(4)=2."],
    ["Turunan (2x+1)(x²) adalah ...",["2x²+2x","6x²+2x","4x²+1","3x²+2x"],1,"Kembangkan 2x³+x², turunannya 6x²+2x."]
  ]},
  {id:20,g:11,n:"Peluang",e:"🎲",d:"Peluang kejadian dan ruang sampel.",q:"Dua dadu dilempar. Peluang jumlah mata dadu 8 adalah ...",a:"5/36",steps:["Ruang sampel memiliki 36 hasil.","Pasangan berjumlah 8 ada 5.","Peluangnya 5/36."],questions:[
    ["Peluang mengambil kartu As dari 52 kartu adalah ...",["1/52","1/26","1/13","1/4"],2,"Ada 4 As dari 52 kartu: 4/52=1/13."],
    ["Dua koin dilempar. Peluang tepat satu gambar adalah ...",["1/4","1/2","3/4","1"],1,"Kemungkinan GG, GA, AG, AA; dua dari empat."],
    ["Kotak berisi 3 merah dan 5 biru. Peluang mengambil merah adalah ...",["3/5","3/8","5/8","1/3"],1,"Total 8 bola, peluang merah 3/8."]
  ]},

  {id:21,g:12,n:"Integral",e:"∫",d:"Integral tak tentu fungsi polinomial.",q:"Hitung ∫(6x²−4x+3) dx.",a:"2x³−2x²+3x+C",steps:["Integral 6x² adalah 2x³.","Integral −4x adalah −2x² dan integral 3 adalah 3x.","Tambahkan konstanta C."],questions:[
    ["∫(3x²+4x)dx adalah ...",["x³+2x²+C","6x+4+C","x³+4x²+C","3x³+2x²+C"],0,"Integral suku per suku menghasilkan x³+2x²+C."],
    ["∫ 8x³ dx adalah ...",["2x⁴+C","8x⁴+C","24x²+C","4x²+C"],0,"8x³ diintegralkan menjadi 2x⁴+C."],
    ["∫(2x−5)dx adalah ...",["x²−5x+C","2x²−5+C","x²−5+C","2x−5x²+C"],0,"Integral 2x adalah x², integral −5 adalah −5x."]
  ]},
  {id:22,g:12,n:"Statistika Lanjutan",e:"📉",d:"Varians dan simpangan baku populasi.",q:"Data 2,4,6,8 memiliki varians populasi ...",a:"5",steps:["Mean=(2+4+6+8)/4=5.","Kuadrat selisih: 9,1,1,9; jumlah 20.","Varians=20/4=5."],questions:[
    ["Data 1,3,5 memiliki varians populasi ...",["2","8/3","4","5"],2,"Mean 3; kuadrat selisih 4,0,4. Varians=8/3. (Pilihan B)"],
    ["Jika varians populasi 16, simpangan bakunya ...",["2","4","8","16"],1,"Simpangan baku adalah akar varians: √16=4."],
    ["Data 2,2,6,6 memiliki mean ...",["2","3","4","6"],2,"Jumlah 16 dibagi 4 = 4."]
  ]},
  {id:23,g:12,n:"Distribusi Peluang",e:"🎯",d:"Variabel acak diskret dan nilai harapan.",q:"P(X=1)=0,3 dan P(X=4)=0,7. Tentukan E(X).",a:"3,1",steps:["E(X)=ΣxP(x).","E(X)=1(0,3)+4(0,7).","E(X)=0,3+2,8=3,1."],questions:[
    ["X=0 dengan peluang 0,4 dan X=5 dengan peluang 0,6. E(X)=...",["2","2,5","3","5"],2,"E=0×0,4+5×0,6=3."],
    ["P(X=2)=0,25 dan P(X=6)=0,75. E(X)=...",["4","5","5,5","6"],2,"E=2×0,25+6×0,75=5."],
    ["Nilai harapan X=1,2,3 dengan peluang sama adalah ...",["1","2","2,5","3"],1,"E=(1+2+3)/3=2."]
  ]},
  {id:24,g:12,n:"Dimensi Tiga",e:"🧊",d:"Diagonal ruang dan jarak pada bangun ruang.",q:"Kubus bersisi 6 cm. Diagonal ruangnya adalah ...",a:"6√3 cm",steps:["Rumus diagonal ruang d=s√3.","Masukkan s=6.","d=6√3 cm."],questions:[
    ["Kubus bersisi 4 cm. Diagonal ruangnya ...",["4√2","4√3","8√3","12"],1,"Diagonal ruang kubus = s√3."],
    ["Balok berukuran 3,4,12 cm. Diagonal ruangnya ...",["12","13","√169","15"],1,"√(3²+4²+12²)=√169=13."],
    ["Kubus bersisi 5 cm. Diagonal bidangnya ...",["5√2","5√3","10","25"],0,"Diagonal bidang = s√2."]
  ]},
  {id:25,g:12,n:"Vektor",e:"➡️",d:"Operasi vektor dan panjang vektor.",q:"a=(2,−1) dan b=(3,4). Tentukan 2a+b.",a:"(7,2)",steps:["2a=(4,−2).","Tambahkan b: (4,−2)+(3,4).","Hasilnya (7,2)."],questions:[
    ["Panjang vektor (6,8) adalah ...",["8","10","12","14"],1,"√(36+64)=10."],
    ["a=(1,3), b=(4,−2). a+b=...",["(5,1)","(3,5)","(4,6)","(−3,5)"],0,"Jumlahkan komponen: (1+4,3−2)=(5,1)."],
    ["Jika a=(2,5), 3a=...",["(5,8)","(6,15)","(6,5)","(2,15)"],1,"Kalikan setiap komponen dengan 3."]
  ]},
  {id:26,g:12,n:"Matriks Lanjutan",e:"🧮",d:"Determinan dan invers matriks 2×2.",q:"Invers [[2,1],[5,3]] adalah ...",a:"[[3,−1],[−5,2]]",steps:["Determinan=2×3−1×5=1.","Tukar elemen diagonal: 2 dan 3.","Ubah tanda elemen lainnya; bagi dengan determinan 1."],questions:[
    ["Determinan [[3,2],[4,5]] adalah ...",["5","7","8","15"],1,"3×5−2×4=7."],
    ["Determinan [[1,4],[2,3]] adalah ...",["−5","−2","5","11"],0,"1×3−4×2=−5."],
    ["Jika det(A)=0, matriks A ...",["selalu identitas","tidak memiliki invers","selalu diagonal","pasti simetris"],1,"Matriks dengan determinan nol adalah singular."]
  ]},
  {id:27,g:12,n:"Trigonometri Lanjutan",e:"🌐",d:"Identitas dan persamaan trigonometri.",q:"Jika sin x=3/5 dan x lancip, cos x=...",a:"4/5",steps:["sin²x+cos²x=1.","cos²x=1−9/25=16/25.","Karena x lancip, cos x=4/5."],questions:[
    ["Jika tan x=1 dan 0°<x<90°, x=...",["30°","45°","60°","90°"],1,"tan 45°=1."],
    ["2 sin 30° cos 30° sama dengan ...",["1/2","√3/2","1","√3"],1,"2×1/2×√3/2=√3/2."],
    ["Jika cos x=0 dan 0°≤x≤180°, x=...",["0°","45°","90°","180°"],2,"cos 90°=0."]
  ]},
  {id:28,g:12,n:"Aplikasi Turunan",e:"🏎️",d:"Titik stasioner, maksimum, dan minimum.",q:"Tentukan titik stasioner f(x)=x²−6x+5.",a:"(3,−4)",steps:["f′(x)=2x−6.","Setarakan dengan nol: x=3.","f(3)=9−18+5=−4, jadi (3,−4)."],questions:[
    ["Titik stasioner f(x)=x²−8x+7 memiliki absis ...",["2","3","4","8"],2,"f′=2x−8=0, x=4."],
    ["Jika s(t)=t²+4t, kecepatan v(t)=...",["t+4","2t+4","t²+4","2t"],1,"Kecepatan adalah turunan posisi."],
    ["Nilai minimum x²−10x+21 adalah ...",["−4","−3","−2","21"],0,"Puncak pada x=5; f(5)=25−50+21=−4."]
  ]},
  {id:29,g:12,n:"Aplikasi Integral",e:"🖼️",d:"Luas daerah menggunakan integral tentu.",q:"Luas di bawah y=2x dari x=0 hingga x=3 adalah ...",a:"9",steps:["Luas=∫₀³2x dx.","Integralnya x².","3²−0²=9 satuan luas."],questions:[
    ["∫₀² 3x² dx = ...",["4","6","8","12"],2,"Antiturunan x³; 2³−0=8."],
    ["Luas di bawah y=x dari 0 sampai 4 adalah ...",["4","6","8","16"],2,"∫₀⁴x dx = 16/2 = 8."],
    ["∫₁³ 2 dx = ...",["2","3","4","6"],2,"Integral konstanta 2 sepanjang interval 2 menghasilkan 4."]
  ]},
  {id:30,g:12,n:"Kombinatorika",e:"🧠",d:"Permutasi, kombinasi, dan aturan pencacahan.",q:"Dari 8 siswa dipilih 3 sebagai tim. Banyak cara adalah ...",a:"56",steps:["Urutan tidak penting, gunakan kombinasi.","C(8,3)=8!/(3!5!).","Hasilnya 56 cara."],questions:[
    ["Banyak susunan 4 orang dalam satu baris adalah ...",["12","16","24","48"],2,"Permutasi 4 orang = 4! = 24."],
    ["C(7,2) = ...",["14","21","28","42"],1,"7×6/(2×1)=21."],
    ["Ada 3 baju dan 4 celana. Banyak pasangan pakaian ...",["7","12","16","24"],1,"Aturan perkalian: 3×4=12."]
  ]}
];

const examples = [
  {g:10,t:1,q:"Sederhanakan (2³ × 2⁵) ÷ 2⁴.",steps:["Gabungkan pangkat: 2⁸.","Kurangi pangkat: 2⁸⁻⁴=2⁴.","Hasilnya 16."],a:"16"},
  {g:10,t:2,q:"Sederhanakan 3√12 + 2√27.",steps:["3√12=6√3.","2√27=6√3.","Hasilnya 12√3."],a:"12√3"},
  {g:10,t:3,q:"Jika log₂(x−1)=3, tentukan x.",steps:["Ubah ke eksponen: x−1=2³.","x−1=8.","x=9."],a:"9"},
  {g:10,t:4,q:"Tentukan x: 3(2x−4)=2x+12.",steps:["6x−12=2x+12.","4x=24.","x=6."],a:"6"},
  {g:10,t:5,q:"2x+y=11 dan x−y=1. Tentukan x dan y.",steps:["Jumlahkan persamaan: 3x=12.","x=4.","4−y=1, sehingga y=3."],a:"x=4, y=3"},
  {g:10,t:6,q:"Tentukan titik puncak y=x²−6x+5.",steps:["x puncak=−b/(2a)=3.","Substitusi x=3 menghasilkan −4.","Titik puncak (3,−4)."],a:"(3,−4)"},
  {g:10,t:7,q:"Tentukan akar x²−7x+12=0.",steps:["Faktorkan (x−3)(x−4)=0.","x−3=0 atau x−4=0.","Akar 3 dan 4."],a:"3 dan 4"},
  {g:10,t:8,q:"Jika sin θ=3/5 dan θ lancip, tentukan cos θ.",steps:["sin²θ+cos²θ=1.","cos²θ=16/25.","cos θ=4/5."],a:"4/5"},
  {g:10,t:9,q:"Selesaikan |2x−3|=7.",steps:["2x−3=7 memberi x=5.","2x−3=−7 memberi x=−2.","Solusi x=5 atau −2."],a:"5 atau −2"},
  {g:10,t:10,q:"Data 3,5,7,9,16. Tentukan mean dan median.",steps:["Jumlah 40, banyak data 5.","Mean=40/5=8.","Median=7."],a:"Mean 8, median 7"},
  {g:11,t:11,q:"f(x)=2x+1 dan g(x)=x²−3. Tentukan (f∘g)(2).",steps:["g(2)=1.","f(1)=2+1.","Jawaban 3."],a:"3"},
  {g:11,t:12,q:"Tentukan invers f(x)=(3x−2)/4.",steps:["Tulis y=(3x−2)/4.","Tukar x dan y.","Hasilnya f⁻¹(x)=(4x+2)/3."],a:"(4x+2)/3"},
  {g:11,t:13,q:"Sudut pusat 124°. Berapa sudut keliling pada busur sama?",steps:["Sudut keliling setengah sudut pusat.","124°/2=62°.","Jawaban 62°."],a:"62°"},
  {g:11,t:14,q:"Tentukan determinan [[4,3],[2,5]].",steps:["Gunakan ad−bc.","4×5−3×2=20−6.","Determinan 14."],a:"14"},
  {g:11,t:15,q:"A(3,−2) ditranslasi T(−4,5).",steps:["x′=3−4=−1.","y′=−2+5=3.","A′=(−1,3)."],a:"(−1,3)"},
  {g:11,t:16,q:"Barisan aritmetika a=5, b=4. Tentukan U₁₅.",steps:["Un=a+(n−1)b.","U₁₅=5+14×4.","Hasilnya 61."],a:"61"},
  {g:11,t:17,q:"Barisan geometri a=3, r=2. Tentukan U₈.",steps:["Un=ar⁽ⁿ⁻¹⁾.","U₈=3×2⁷.","Hasilnya 384."],a:"384"},
  {g:11,t:18,q:"lim x→2 (x²−4)/(x−2).",steps:["Faktorkan x²−4=(x−2)(x+2).","Sederhanakan menjadi x+2.","Limitnya 4."],a:"4"},
  {g:11,t:19,q:"Turunkan f(x)=3x³−4x²+5x−7.",steps:["Turunan 3x³=9x².","Turunan −4x²=−8x, turunan 5x=5.","f′=9x²−8x+5."],a:"9x²−8x+5"},
  {g:11,t:20,q:"Dua dadu dilempar. Peluang jumlahnya 8?",steps:["Ada 36 kemungkinan.","Ada 5 pasangan dengan jumlah 8.","Peluang 5/36."],a:"5/36"},
  {g:12,t:21,q:"Hitung ∫(6x²−4x+3)dx.",steps:["Integral 6x²=2x³.","Integral −4x=−2x²; integral 3=3x.","Jawaban 2x³−2x²+3x+C."],a:"2x³−2x²+3x+C"},
  {g:12,t:22,q:"Data 2,4,6,8. Tentukan varians populasi.",steps:["Mean=5.","Kuadrat selisih berjumlah 20.","Varians=20/4=5."],a:"5"},
  {g:12,t:23,q:"P(X=1)=0,3 dan P(X=4)=0,7. Tentukan E(X).",steps:["E(X)=ΣxP(x).","E(X)=0,3+2,8.","Jawaban 3,1."],a:"3,1"},
  {g:12,t:24,q:"Kubus memiliki rusuk 6 cm. Tentukan diagonal ruang.",steps:["d=s√3.","s=6.","d=6√3 cm."],a:"6√3 cm"},
  {g:12,t:25,q:"a=(2,−1), b=(3,4). Tentukan 2a+b.",steps:["2a=(4,−2).","Jumlahkan dengan b.","Hasilnya (7,2)."],a:"(7,2)"},
  {g:12,t:26,q:"Tentukan invers [[2,1],[5,3]].",steps:["Determinan=6−5=1.","Tukar elemen diagonal.","Invers [[3,−1],[−5,2]]."],a:"[[3,−1],[−5,2]]"},
  {g:12,t:27,q:"Jika sin x=3/5 dan x lancip, tentukan cos x.",steps:["Identitas sin²x+cos²x=1.","cos²x=16/25.","cos x=4/5."],a:"4/5"},
  {g:12,t:28,q:"Tentukan titik stasioner f(x)=x²−6x+5.",steps:["f′(x)=2x−6.","Setarakan nol: x=3.","f(3)=−4, titiknya (3,−4)."],a:"(3,−4)"},
  {g:12,t:29,q:"Luas di bawah y=2x dari x=0 hingga x=3.",steps:["Luas=∫₀³2x dx.","Integralnya x².","3²−0=9."],a:"9"},
  {g:12,t:30,q:"Dari 8 siswa dipilih 3 untuk tim. Berapa cara?",steps:["Gunakan kombinasi karena urutan tidak penting.","C(8,3)=8!/(3!5!).","Hasilnya 56 cara."],a:"56 cara"}
];

const quotes = [
  "Kamu tidak harus sempurna untuk mulai, tetapi kamu harus mulai untuk menjadi lebih baik. 🌱",
  "Satu soal yang kamu pahami hari ini adalah satu langkah maju. ✨",
  "Kesalahan bukan akhir. Itu petunjuk tentang apa yang perlu kamu pelajari. 💡",
  "Jangan bandingkan prosesmu dengan orang lain. Fokuslah pada perkembanganmu sendiri. 🌻",
  "Matematika melatihmu berpikir, bukan sekadar menghitung. 🧠",
  "Istirahat boleh, menyerah jangan! 💪",
  "Usaha kecil yang konsisten bisa menghasilkan perubahan besar. ⭐",
  "Percaya pada proses. Kamu sedang berkembang, meskipun belum menyadarinya. 🌈"
];

const get = (key, fallback) => {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
  catch { return fallback; }
};
const save = (key, value) => {
  try { localStorage.setItem(key, JSON.stringify(value)); }
  catch { alert("Penyimpanan browser tidak tersedia."); }
};
const safe = s => String(s).replace(/[&<>"']/g, c => ({
  "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
}[c]));

let student = get("mathlearnStudent", null);
let scores = get("mathlearnScores", []);
let quiz = null;
let questionIndex = 0;
let correctCount = 0;
let picked = null;
let checked = false;
let currentQuestions = [];

function init() {
  $("#loginForm").addEventListener("submit", e => {
    e.preventDefault();
    student = {name:$("#studentName").value.trim(), grade:Number($("#studentClass").value)};
    if (!student.name || !student.grade) return;
    save("mathlearnStudent", student);
    showApp();
  });
  $("#logoutBtn").addEventListener("click", () => {
    if (!confirm("Keluar dari MathLearn? Nilai tetap tersimpan di browser ini.")) return;
    student = null;
    $("#app").classList.add("hidden");
    $("#loginPage").classList.remove("hidden");
  });
  $("#navigation").addEventListener("click", e => {
    const b = e.target.closest("[data-page]");
    if (b) go(b.dataset.page);
  });
  $("#menuToggle").addEventListener("click", () => $("#sidebar").classList.toggle("open"));
  $("#pageContent").addEventListener("click", actionHandler);
  if (student) showApp();
}

function showApp() {
  $("#loginPage").classList.add("hidden");
  $("#app").classList.remove("hidden");
  $("#sideName").textContent = student.name;
  $("#sideClass").textContent = "Kelas " + student.grade;
  go("home");
}
function go(page) {
  quiz = null;
  $("#sidebar").classList.remove("open");
  document.querySelectorAll(".nav-btn").forEach(b => b.classList.toggle("active",b.dataset.page===page));
  ({home:homePage,materials:materialsPage,practice:practicePage,examples:examplesPage,scores:scoresPage}[page]||homePage)();
  window.scrollTo({top:0,behavior:"smooth"});
}
function header(title, desc) {
  return `<div class="page-title"><h1>${title}</h1><p>${desc}</p></div>`;
}
function quote() {
  return `<div class="quote-card">💌 <strong>Pengingat hari ini</strong><br>${quotes[Math.floor(Math.random()*quotes.length)]}</div>`;
}

function homePage() {
  $("#pageContent").innerHTML = `
    <section class="hero">
      <div class="hero-copy">
        <span class="eyebrow">✨ DUNIA BELAJAR BARU</span>
        <h1>Halo, ${safe(student.name)}! 👋</h1>
        <p>Selamat datang di MathLearn! Siap menjelajahi matematika dan mengasah kemampuanmu hari ini?</p>
        <button class="primary-btn" data-action="materials">Mulai Belajar →</button>
      </div>
      <div class="hero-art">🧑🏻‍🎓</div>
      <div class="hero-doodle">x² + y² = ? ✨</div>
    </section>
    <div class="section-heading"><div><h2>Mau belajar apa hari ini? 🌟</h2><p>Pilih petualanganmu di bawah ini.</p></div></div>
    <section class="menu-grid">
      <button class="menu-card purple" data-action="materials"><div class="menu-info"><div class="menu-icon">📖</div><h3>Belajar Materi</h3><p>Temukan konsep dan rumus matematika.</p><span class="menu-arrow">→</span></div><div class="menu-art">👩🏻‍🏫</div></button>
      <button class="menu-card yellow" data-action="practice"><div class="menu-info"><div class="menu-icon">✏️</div><h3>Latihan Soal</h3><p>Uji kemampuan dengan tantangan SMA.</p><span class="menu-arrow">→</span></div><div class="menu-art">🧑🏻‍💻</div></button>
      <button class="menu-card green" data-action="examples"><div class="menu-info"><div class="menu-icon">📝</div><h3>Contoh Soal</h3><p>Pahami cara pengerjaan langkah demi langkah.</p><span class="menu-arrow">→</span></div><div class="menu-art">🐱</div></button>
      <button class="menu-card blue" data-action="scores"><div class="menu-info"><div class="menu-icon">📊</div><h3>Nilai Saya</h3><p>Lihat nilai dan perkembangan belajar.</p><span class="menu-arrow">→</span></div><div class="menu-art">🏆</div></button>
    </section>
    <section class="motivation"><div><h3>Terus belajar, raih cita-citamu! ⭐</h3><p>Setiap soal yang kamu coba membuatmu semakin hebat.</p></div><span>🐈📚</span></section>
    ${quote()}`;
}

function materialsPage() {
  $("#pageContent").innerHTML = header("📚 Materi Matematika",`Materi kelas ${student.grade}. Pilih topik untuk membaca pembahasan dan berlatih.`)+`
    <div class="toolbar"><input id="searchMaterial" placeholder="🔍 Cari materi..." aria-label="Cari materi">
    <select id="filterGrade" aria-label="Pilih kelas"><option value="10">Kelas 10</option><option value="11">Kelas 11</option><option value="12">Kelas 12</option></select></div>
    <div id="materialList" class="material-grid"></div>${quote()}`;
  $("#filterGrade").value=student.grade;
  $("#filterGrade").addEventListener("change",drawMaterials);
  $("#searchMaterial").addEventListener("input",drawMaterials);
  drawMaterials();
}
function drawMaterials() {
  const g=Number($("#filterGrade").value), term=$("#searchMaterial").value.toLowerCase();
  const list=topics.filter(t=>t.g===g&&(t.n+" "+t.d).toLowerCase().includes(term));
  $("#materialList").innerHTML=list.length?list.map(t=>`
    <article class="material-card"><div class="emoji">${t.e}</div><span class="pill">Kelas ${t.g}</span>
    <h3>${t.n}</h3><p>${t.d}</p>
    <button class="small-btn" data-action="topic" data-id="${t.id}">Pelajari →</button>
    <button class="small-btn" data-action="startQuiz" data-id="${t.id}">Latihan ✏️</button></article>`).join(""):`<div class="empty-state">🔎<h3>Materi tidak ditemukan</h3></div>`;
}
function topicPage(id) {
  const t=topics.find(x=>x.id===Number(id)); if(!t)return;
  $("#pageContent").innerHTML=header(`${t.e} ${t.n}`,`Matematika kelas ${t.g}`)+`
    <article class="example-box"><span class="pill">MATERI PEMBELAJARAN</span><h2>${t.n}</h2><p>${t.d}</p>
    <h3>Contoh dan pembahasan</h3><p><strong>${t.q}</strong></p>
    <ol class="steps">${t.steps.map(s=>`<li>${s}</li>`).join("")}</ol>
    <p><strong>Jawaban: ${t.a}</strong></p>
    <button class="primary-btn" data-action="startQuiz" data-id="${t.id}">Coba Latihan Soal →</button>
    <button class="small-btn" data-action="materials">← Kembali ke materi</button></article>${quote()}`;
}

function examplesPage() {
  const list=examples.map((e,i)=>({...e,index:i})).filter(e=>e.g===student.grade);
  $("#pageContent").innerHTML=header("📝 Contoh Soal","Pilih materi untuk melihat contoh soal dan langkah pengerjaannya.")+`
    <div class="toolbar"><select id="exampleSelect" aria-label="Pilih contoh soal">
    ${list.map(e=>`<option value="${e.index}">${topics.find(t=>t.id===e.t).n}</option>`).join("")}</select></div>
    <div id="exampleBody"></div>${quote()}`;
  $("#exampleSelect").addEventListener("change",drawExample);
  drawExample();
}
function drawExample() {
  const e=examples[Number($("#exampleSelect").value)];
  const t=topics.find(x=>x.id===e.t);
  $("#exampleBody").innerHTML=`<article class="example-box"><span class="pill">KELAS ${e.g} · ${t.n}</span>
    <h2>${e.q}</h2><h3>Langkah pengerjaan</h3>
    <ol class="steps">${e.steps.map(s=>`<li>${s}</li>`).join("")}</ol>
    <p><strong>Jawaban akhir: ${e.a}</strong></p>
    <button class="primary-btn" data-action="startQuiz" data-id="${t.id}">Latihan materi ini →</button></article>`;
}

function practicePage() {
  $("#pageContent").innerHTML=header("✏️ Latihan Soal","Pilih materi sesuai kelasmu. Soal dibuat khusus untuk setiap topik dengan tingkat menengah.")+`
    <div class="material-grid">${topics.filter(t=>t.g===student.grade).map(t=>`
    <article class="material-card"><div class="emoji">${t.e}</div><h3>${t.n}</h3><p>${t.d}</p>
    <span class="pill">Tingkat menengah</span><br><button class="primary-btn" style="margin-top:12px" data-action="startQuiz" data-id="${t.id}">Mulai latihan →</button></article>`).join("")}</div>${quote()}`;
}

function startQuiz(id) {
  const t=topics.find(x=>x.id===Number(id));
  if(!t)return;
  if(t.g!==student.grade && !confirm(`Materi ini untuk kelas ${t.g}. Tetap mulai?`))return;
  quiz={topic:t,questions:t.questions};
  questionIndex=0; correctCount=0; picked=null; checked=false;
  currentQuestions=[...t.questions];
  drawQuiz();
}
function drawQuiz() {
  const t=quiz.topic,q=currentQuestions[questionIndex];
  $("#pageContent").innerHTML=header(`✏️ ${t.n}`,"Baca soal dengan teliti. Kamu pasti bisa!")+`
    <section class="quiz-box">
      <div class="quiz-top"><span>Soal ${questionIndex+1} dari ${currentQuestions.length}</span><span>Benar: ${correctCount}</span></div>
      <div class="progress"><div class="progress-bar" style="width:${questionIndex/currentQuestions.length*100}%"></div></div>
      <span class="pill">KELAS ${t.g} · MENENGAH</span>
      <h2 style="margin-top:18px">${q[0]}</h2>
      <div class="options">${q[1].map((o,i)=>`<button class="option-btn ${picked===i?"selected":""} ${checked&&i===q[2]?"correct":""} ${checked&&picked===i&&i!==q[2]?"wrong":""}" data-action="pick" data-index="${i}" ${checked?"disabled":""}>${String.fromCharCode(65+i)}. ${o}</button>`).join("")}</div>
      <div id="answerFeedback">${checked?`<div class="feedback ${picked===q[2]?"good":"bad"}">${picked===q[2]?"🎉 Benar!":"💡 Belum tepat."} ${q[3]}</div>`:""}</div>
      ${checked?`<button class="primary-btn" data-action="next">${questionIndex===currentQuestions.length-1?"Lihat hasil 🎉":"Soal berikutnya →"}</button>`:`<button class="primary-btn" data-action="check" ${picked===null?"disabled":""}>Periksa jawaban</button>`}
    </section>${quote()}`;
}
function finishQuiz() {
  const t=quiz.topic, total=currentQuestions.length, score=Math.round(correctCount/total*100);
  const result={topic:t.n,grade:t.g,score,correct:correctCount,total,date:new Date().toLocaleDateString("id-ID")};
  scores=get("mathlearnScores",[]);
  scores.unshift(result); scores=scores.slice(0,100); save("mathlearnScores",scores);
  quiz=null;
  $("#pageContent").innerHTML=header("🎉 Latihan Selesai!","Apa pun hasilnya, kamu sudah meluangkan waktu untuk belajar.")+`
    <section class="score-box" style="text-align:center"><div style="font-size:65px">🏆</div>
    <h2>${t.n}</h2><div class="score-number">${score}</div><p>Nilai dari 100</p>
    <p>Jawaban benar <strong>${correctCount} dari ${total} soal</strong>.</p>
    <div class="progress"><div class="progress-bar" style="width:${score}%"></div></div>
    <p>${score>=80?"Hebat! Pertahankan semangatmu! 🌟":score>=60?"Bagus! Periksa lagi jawaban yang salah dan terus berlatih. 💪":"Tidak apa-apa. Pelajari kembali langkahnya lalu coba lagi. Kamu bisa berkembang! 🌱"}</p>
    <button class="primary-btn" data-action="scores">Lihat nilai saya</button>
    <button class="small-btn" data-action="startQuiz" data-id="${t.id}">Coba lagi ↻</button>
    <button class="small-btn" data-action="materials">Kembali ke materi</button></section>${quote()}`;
}
function scoresPage() {
  scores=get("mathlearnScores",[]);
  const list=scores.filter(s=>Number(s.grade)===Number(student.grade));
  const avg=list.length?Math.round(list.reduce((a,b)=>a+b.score,0)/list.length):0;
  $("#pageContent").innerHTML=header("📊 Nilai Saya","Nilai latihan tersimpan di browser perangkat ini.")+`
    <section class="score-box"><div class="menu-grid">
      <div class="material-card"><div class="emoji">🏅</div><p>Jumlah latihan</p><div class="score-number" style="font-size:35px">${list.length}</div></div>
      <div class="material-card"><div class="emoji">⭐</div><p>Rata-rata nilai</p><div class="score-number" style="font-size:35px">${avg}</div></div>
    </div><div class="section-heading"><div><h2>Riwayat latihan</h2><p>Terus tingkatkan hasilmu.</p></div></div>
    <div class="score-list">${list.length?list.map(s=>`<div class="score-row"><div><strong>${safe(s.topic)}</strong><small>${safe(s.date)} · Benar ${s.correct}/${s.total}</small></div><span class="pill">${s.score}/100</span></div>`).join(""):`<div class="empty-state"><div class="emoji">🐱</div><h3>Belum ada nilai</h3><p>Ayo mulai latihan pertamamu!</p><button class="primary-btn" data-action="practice">Mulai latihan</button></div>`}</div></section>${quote()}`;
}

function actionHandler(e) {
  const b=e.target.closest("[data-action]"); if(!b)return;
  const a=b.dataset.action,id=b.dataset.id;
  if(a==="materials")materialsPage();
  else if(a==="practice")practicePage();
  else if(a==="examples")examplesPage();
  else if(a==="scores")scoresPage();
  else if(a==="topic")topicPage(id);
  else if(a==="startQuiz")startQuiz(id);
  else if(a==="pick"&&quiz&&!checked){picked=Number(b.dataset.index);drawQuiz();}
  else if(a==="check"&&quiz&&picked!==null&&!checked){
    checked=true;
    if(picked===currentQuestions[questionIndex][2])correctCount++;
    drawQuiz();
  }
  else if(a==="next"&&quiz&&checked){
    questionIndex++;picked=null;checked=false;
    if(questionIndex>=currentQuestions.length)finishQuiz();else drawQuiz();
  }
}
init();
