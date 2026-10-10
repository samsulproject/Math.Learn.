
"use strict";

/* =========================================================
   MATHLEARN — DATA MATERI
========================================================= */

const topics = [
  {
    id: 1, title: "Operasi Bilangan Bulat", icon: "＋", category: "Bilangan",
    color: "lavender",
    description: "Operasi penjumlahan, pengurangan, perkalian, dan pembagian bilangan bulat.",
    formula: "a + b = jumlah\n a − b = selisih\n a × b = hasil kali\n a ÷ b = hasil bagi",
    explanation: "Kerjakan operasi sesuai urutan yang berlaku. Perkalian dan pembagian dikerjakan sebelum penjumlahan dan pengurangan jika tidak ada tanda kurung.",
    example: "Hitung 8 + 3 × 2.\nKerjakan perkalian terlebih dahulu: 3 × 2 = 6.\nKemudian 8 + 6 = 14.",
    generate: genInteger
  },
  {
    id: 2, title: "Pecahan", icon: "½", category: "Bilangan",
    color: "blue",
    description: "Memahami pecahan, penjumlahan, pengurangan, dan penyederhanaannya.",
    formula: "a/b + c/b = (a + c)/b\n a/b − c/b = (a − c)/b",
    explanation: "Untuk pecahan berpenyebut sama, operasikan pembilangnya dan pertahankan penyebut. Sederhanakan hasil dengan membagi pembilang dan penyebut oleh FPB.",
    example: "1/4 + 2/4 = 3/4.",
    generate: genFraction
  },
  {
    id: 3, title: "Persentase", icon: "%", category: "Bilangan",
    color: "green",
    description: "Menghitung persentase dari suatu nilai dan memahami hubungan persen dengan pecahan.",
    formula: "p% = p/100\nPersentase dari nilai = p/100 × nilai",
    explanation: "Ubah persentase menjadi pecahan per seratus, lalu kalikan dengan nilai yang diketahui.",
    example: "20% dari 150 = 20/100 × 150 = 30.",
    generate: genPercent
  },
  {
    id: 4, title: "Perbandingan", icon: "↔", category: "Bilangan",
    color: "amber",
    description: "Menyelesaikan perbandingan dua besaran dan menentukan bagian dari jumlah total.",
    formula: "a : b\nBagian pertama = a/(a+b) × total",
    explanation: "Jumlahkan seluruh bagian perbandingan. Bagian yang dicari dibagi jumlah bagian, lalu dikalikan total.",
    example: "Perbandingan 2 : 3 dengan total 25.\nJumlah bagian = 5.\nBagian pertama = 2/5 × 25 = 10.",
    generate: genRatio
  },
  {
    id: 5, title: "FPB dan KPK", icon: "⌁", category: "Bilangan",
    color: "lavender",
    description: "Menentukan faktor persekutuan terbesar dan kelipatan persekutuan terkecil.",
    formula: "FPB = faktor persekutuan terbesar\nKPK = kelipatan persekutuan terkecil",
    explanation: "FPB adalah faktor terbesar yang membagi kedua bilangan. KPK adalah kelipatan positif terkecil yang dapat dibagi kedua bilangan.",
    example: "FPB dari 12 dan 18 adalah 6.\nKPK dari 4 dan 6 adalah 12.",
    generate: genFpbKpk
  },
  {
    id: 6, title: "Bilangan Berpangkat", icon: "xⁿ", category: "Bilangan",
    color: "blue",
    description: "Memahami perpangkatan sebagai perkalian berulang dan menggunakan aturan pangkat.",
    formula: "aⁿ = a × a × ... × a\n aᵐ × aⁿ = aᵐ⁺ⁿ",
    explanation: "Pangkat positif menunjukkan berapa kali bilangan pokok dikalikan dengan dirinya sendiri.",
    example: "2⁴ = 2 × 2 × 2 × 2 = 16.",
    generate: genPower
  },
  {
    id: 7, title: "Bentuk Akar", icon: "√", category: "Bilangan",
    color: "green",
    description: "Menentukan akar kuadrat dari bilangan kuadrat sempurna.",
    formula: "√(a²) = |a|",
    explanation: "Akar kuadrat utama dari bilangan positif adalah bilangan nonnegatif yang jika dikuadratkan menghasilkan bilangan tersebut.",
    example: "√81 = 9 karena 9² = 81.",
    generate: genRoot
  },
  {
    id: 8, title: "Aljabar", icon: "x + y", category: "Aljabar",
    color: "amber",
    description: "Mengenali variabel, koefisien, konstanta, dan menghitung nilai ekspresi aljabar.",
    formula: "ax + b\nSuku sejenis dapat dijumlahkan",
    explanation: "Ganti variabel dengan nilai yang diberikan. Kerjakan perkalian terlebih dahulu, kemudian penjumlahan atau pengurangan.",
    example: "Jika x = 3, maka 2x + 5 = 2(3) + 5 = 11.",
    generate: genAlgebra
  },
  {
    id: 9, title: "Persamaan Linear Satu Variabel", icon: "＝", category: "Aljabar",
    color: "lavender",
    description: "Menentukan nilai variabel dalam persamaan linear sederhana.",
    formula: "ax + b = c\nx = (c − b)/a, a ≠ 0",
    explanation: "Pindahkan konstanta ke ruas lain dengan operasi kebalikan, lalu bagi kedua ruas dengan koefisien variabel.",
    example: "2x + 4 = 12\n2x = 8\nx = 4.",
    generate: genLinear
  },
  {
    id: 10, title: "Sistem Persamaan Linear Dua Variabel", icon: "x,y", category: "Aljabar",
    color: "blue",
    description: "Menentukan pasangan nilai yang memenuhi dua persamaan linear.",
    formula: "ax + by = c\npx + qy = r",
    explanation: "Salah satu metode adalah eliminasi: kalikan persamaan bila diperlukan agar koefisien salah satu variabel sama, lalu kurangkan atau jumlahkan kedua persamaan.",
    example: "x + y = 7 dan x − y = 1.\nJumlahkan persamaan: 2x = 8, sehingga x = 4.\nSubstitusi menghasilkan y = 3.",
    generate: genSpldv
  },
  {
    id: 11, title: "Pertidaksamaan Linear", icon: "≤", category: "Aljabar",
    color: "green",
    description: "Menyelesaikan pertidaksamaan linear satu variabel.",
    formula: "ax + b > c\nJika dibagi bilangan negatif, tanda berbalik.",
    explanation: "Lakukan operasi yang sama pada kedua ruas. Ingat, tanda pertidaksamaan harus dibalik jika kedua ruas dikalikan atau dibagi bilangan negatif.",
    example: "2x + 3 > 9\n2x > 6\nx > 3.",
    generate: genInequality
  },
  {
    id: 12, title: "Bangun Datar", icon: "▱", category: "Geometri",
    color: "amber",
    description: "Menghitung luas dan keliling persegi, persegi panjang, dan segitiga.",
    formula: "Persegi: L = s², K = 4s\nPersegi panjang: L = p × l\nSegitiga: L = ½ × a × t",
    explanation: "Luas mengukur daerah di dalam bangun, sedangkan keliling adalah jumlah panjang seluruh sisi.",
    example: "Persegi dengan sisi 5 cm memiliki luas 5 × 5 = 25 cm² dan keliling 4 × 5 = 20 cm.",
    generate: genFlat
  },
  {
    id: 13, title: "Teorema Pythagoras", icon: "△", category: "Geometri",
    color: "lavender",
    description: "Menghitung panjang sisi segitiga siku-siku.",
    formula: "c² = a² + b²\nc = √(a² + b²)",
    explanation: "Pada segitiga siku-siku, kuadrat sisi miring sama dengan jumlah kuadrat kedua sisi yang membentuk sudut siku-siku.",
    example: "Jika kedua sisi siku-siku 3 cm dan 4 cm, maka c = √(9 + 16) = √25 = 5 cm.",
    generate: genPythagoras
  },
  {
    id: 14, title: "Lingkaran", icon: "◯", category: "Geometri",
    color: "blue",
    description: "Menentukan keliling dan luas lingkaran menggunakan jari-jari.",
    formula: "K = 2πr = πd\nL = πr²\nd = 2r",
    explanation: "Gunakan π = 22/7 jika jari-jari atau diameter sesuai untuk perhitungan tersebut. Untuk soal lain, π dapat didekati 3,14.",
    example: "Lingkaran dengan r = 7 cm memiliki keliling 2 × 22/7 × 7 = 44 cm.",
    generate: genCircle
  },
  {
    id: 15, title: "Bangun Ruang", icon: "◇", category: "Geometri",
    color: "green",
    description: "Menghitung volume kubus, balok, dan tabung.",
    formula: "Kubus: V = s³\nBalok: V = p × l × t\nTabung: V = πr²t",
    explanation: "Volume menyatakan isi ruang. Pastikan semua ukuran panjang menggunakan satuan yang sama sebelum menghitung.",
    example: "Kubus dengan rusuk 3 cm memiliki volume 3³ = 27 cm³.",
    generate: genSolid
  },
  {
    id: 16, title: "Statistika Dasar", icon: "▥", category: "Data",
    color: "amber",
    description: "Memahami mean atau rata-rata dari sekumpulan data.",
    formula: "Mean = jumlah seluruh data / banyak data",
    explanation: "Jumlahkan semua nilai dalam data, kemudian bagi hasilnya dengan banyaknya nilai.",
    example: "Rata-rata 4, 6, dan 8 adalah (4 + 6 + 8)/3 = 6.",
    generate: genStatistics
  },
  {
    id: 17, title: "Peluang", icon: "◉", category: "Data",
    color: "lavender",
    description: "Menentukan peluang kejadian sederhana dengan hasil yang sama mungkin.",
    formula: "P(A) = n(A)/n(S)",
    explanation: "Banyak hasil yang mendukung kejadian dibagi banyak seluruh hasil yang mungkin, jika semua hasil memiliki peluang sama.",
    example: "Peluang muncul angka genap pada dadu fair = 3/6 = 1/2.",
    generate: genProbability
  },
  {
    id: 18, title: "Barisan Aritmetika", icon: "↗", category: "Aljabar",
    color: "blue",
    description: "Menentukan suku ke-n barisan dengan beda tetap.",
    formula: "Uₙ = a + (n − 1)b",
    explanation: "a adalah suku pertama, b adalah beda antar-suku, dan n adalah nomor suku yang dicari.",
    example: "Barisan 3, 7, 11, 15, ... memiliki a = 3 dan b = 4.\nU₅ = 3 + (5 − 1)4 = 19.",
    generate: genArithmeticSequence
  },
  {
    id: 19, title: "Barisan Geometri", icon: "⤴", category: "Aljabar",
    color: "green",
    description: "Menentukan suku ke-n barisan dengan rasio tetap.",
    formula: "Uₙ = a × rⁿ⁻¹",
    explanation: "a adalah suku pertama dan r adalah rasio, yaitu hasil bagi suku dengan suku sebelumnya.",
    example: "Barisan 2, 6, 18, ... memiliki a = 2 dan r = 3.\nU₄ = 2 × 3³ = 54.",
    generate: genGeometricSequence
  },
  {
    id: 20, title: "Jarak, Kecepatan, dan Waktu", icon: "◷", category: "Lainnya",
    color: "amber",
    description: "Menyelesaikan soal hubungan jarak, kecepatan, dan waktu.",
    formula: "Jarak = kecepatan × waktu\nKecepatan = jarak / waktu\nWaktu = jarak / kecepatan",
    explanation: "Samakan satuan terlebih dahulu. Jika kecepatan km/jam, waktu sebaiknya dinyatakan dalam jam dan jarak dalam kilometer.",
    example: "Mobil bergerak 60 km/jam selama 2 jam.\nJarak = 60 × 2 = 120 km.",
    generate: genSpeed
  }
];

/* =========================================================
   PEMBANTU PEMBUAT SOAL
========================================================= */

function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) [a, b] = [b, a % b];
  return a || 1;
}

function fractionText(n, d) {
  if (d < 0) { n = -n; d = -d; }
  const g = gcd(n, d);
  n /= g;
  d /= g;
  if (d === 1) return String(n);
  return `${n}/${d}`;
}

function choices(answer, distractors, seed) {
  const correct = String(answer);
  const pool = [...new Set([correct, ...distractors.map(String)])];
  let candidate = 1;
  while (pool.length < 4) {
    const value = String(Number(correct) + candidate * (seed % 2 ? 1 : -1));
    if (!pool.includes(value)) pool.push(value);
    candidate++;
  }
  const result = pool.slice(0, 4);
  const shift = seed % result.length;
  const rotated = result.slice(shift).concat(result.slice(0, shift));
  return { options: rotated, correct: rotated.indexOf(correct) };
}

function numericQuestion(question, answer, steps, seed, unit = "") {
  const display = `${answer}${unit}`;
  const distractors = [
    `${answer + (seed % 3 + 1)}${unit}`,
    `${answer - (seed % 3 + 1)}${unit}`,
    `${answer + (seed % 4 + 2)}${unit}`
  ];
  const c = choices(display, distractors, seed);
  return { question, options: c.options, correct: c.correct, steps };
}

function textQuestion(question, answer, distractors, steps, seed) {
  const c = choices(answer, distractors, seed);
  return { question, options: c.options, correct: c.correct, steps };
}

function genInteger(n) {
  const a = n + 9;
  const b = 2 + n % 7;
  const mode = n % 4;
  if (mode === 0) {
    return numericQuestion(`Hitung ${a} + ${b}.`, a + b,
      [`Jumlahkan kedua bilangan: ${a} + ${b} = ${a + b}.`], n);
  }
  if (mode === 1) {
    return numericQuestion(`Hitung ${a} − ${b}.`, a - b,
      [`Kurangkan ${a} dengan ${b}.`, `${a} − ${b} = ${a - b}.`], n);
  }
  if (mode === 2) {
    return numericQuestion(`Hitung ${a} × ${b}.`, a * b,
      [`Kalikan kedua bilangan.`, `${a} × ${b} = ${a * b}.`], n);
  }
  const divisor = 2 + n % 5;
  const dividend = divisor * (3 + n);
  return numericQuestion(`Hitung ${dividend} ÷ ${divisor}.`, dividend / divisor,
    [`Pembagian dapat diperiksa dengan perkalian.`, `${dividend} ÷ ${divisor} = ${dividend / divisor}.`], n);
}

function genFraction(n) {
  const d = 3 + n % 5;
  const a = 1 + (n % (d - 1));
  const b = 1 + ((n + 1) % (d - 1));
  const numerator = a + b;
  const answer = fractionText(numerator, d);
  const distractors = [
    fractionText(Math.max(1, numerator - 1), d),
    fractionText(numerator + 1, d),
    fractionText(a + b, d + 1)
  ];
  const c = choices(answer, distractors, n);
  return {
    question: `Hitung dan sederhanakan ${a}/${d} + ${b}/${d}.`,
    options: c.options, correct: c.correct,
    steps: [
      `Penyebut kedua pecahan sama, yaitu ${d}.`,
      `Jumlahkan pembilang: ${a} + ${b} = ${numerator}.`,
      `Hasilnya ${numerator}/${d}, disederhanakan menjadi ${answer}.`
    ]
  };
}

function genPercent(n) {
  const p = 10 + (n % 9) * 5;
  const value = 20 + (n % 10) * 10;
  const answer = p * value / 100;
  return numericQuestion(`Berapakah ${p}% dari ${value}?`, answer,
    [`Ubah persen menjadi pecahan: ${p}/100.`,
     `Kalikan ${p}/100 × ${value}.`,
     `Hasilnya ${answer}.`], n);
}

function genRatio(n) {
  const a = 2 + n % 5;
  const b = 3 + n % 4;
  const scale = 2 + n % 5;
  const total = (a + b) * scale;
  const answer = a * scale;
  return numericQuestion(
    `Perbandingan A : B = ${a} : ${b}. Jika jumlah A dan B adalah ${total}, berapa nilai A?`,
    answer,
    [`Jumlah bagian = ${a} + ${b} = ${a + b}.`,
     `Satu bagian = ${total} ÷ ${a + b} = ${scale}.`,
     `Nilai A = ${a} × ${scale} = ${answer}.`], n);
}

function genFpbKpk(n) {
  const pairs = [[12,18],[8,12],[15,20],[9,12],[14,21],[16,24],[18,30],[10,15],[12,20],[21,28]];
  const [a, b] = pairs[(n - 1) % pairs.length];
  const isFpb = n % 2 === 1;
  const answer = isFpb ? gcd(a, b) : a * b / gcd(a, b);
  const label = isFpb ? "FPB" : "KPK";
  const steps = isFpb
    ? [`Faktor ${a} dan ${b} yang sama antara lain 1 dan ${answer}.`,
       `Faktor persekutuan terbesar adalah ${answer}.`]
    : [`KPK dapat dihitung dengan a × b ÷ FPB.`,
       `${a} × ${b} ÷ ${gcd(a,b)} = ${answer}.`];
  return numericQuestion(`Tentukan ${label} dari ${a} dan ${b}.`, answer, steps, n);
}

function genPower(n) {
  const base = 2 + n % 4;
  const exp = 2 + n % 3;
  const answer = Math.pow(base, exp);
  return numericQuestion(`Hitung ${base} pangkat ${exp} (${base}^${exp}).`, answer,
    [`Pangkat ${exp} berarti mengalikan ${base} dengan dirinya sebanyak ${exp} faktor.`,
     `${Array(exp).fill(base).join(" × ")} = ${answer}.`], n);
}

function genRoot(n) {
  const base = 2 + n % 14;
  const number = base * base;
  return numericQuestion(`Tentukan nilai √${number}.`, base,
    [`Cari bilangan nonnegatif yang kuadratnya ${number}.`,
     `${base} × ${base} = ${number}, jadi √${number} = ${base}.`], n);
}

function genAlgebra(n) {
  const a = 2 + n % 5;
  const b = 3 + n % 8;
  const x = 2 + n % 6;
  const answer = a * x + b;
  return numericQuestion(`Jika x = ${x}, tentukan nilai ${a}x + ${b}.`, answer,
    [`Substitusikan x = ${x}.`,
     `${a}(${x}) + ${b} = ${a*x} + ${b}.`,
     `Hasilnya ${answer}.`], n);
}

function genLinear(n) {
  const a = 2 + n % 6;
  const x = 2 + n % 9;
  const b = 3 + n % 8;
  const c = a * x + b;
  return numericQuestion(`Tentukan x dari ${a}x + ${b} = ${c}.`, x,
    [`Kurangi kedua ruas dengan ${b}: ${a}x = ${c-b}.`,
     `Bagi kedua ruas dengan ${a}.`,
     `x = ${x}.`], n);
}

function genSpldv(n) {
  const x = 1 + n % 6;
  const y = 2 + n % 5;
  const a = 2 + n % 3;
  const b = 1 + (n + 1) % 3;
  const c = a*x + b*y;
  const d = x + y;
  const answer = `x = ${x}, y = ${y}`;
  const distractors = [
    `x = ${y}, y = ${x}`,
    `x = ${x+1}, y = ${y}`,
    `x = ${x}, y = ${y+1}`
  ];
  const q = `Tentukan solusi sistem persamaan berikut:\n${a}x + ${b}y = ${c}\nx + y = ${d}`;
  const ch = choices(answer, distractors, n);
  return {
    question: q, options: ch.options, correct: ch.correct,
    steps: [
      `Dari persamaan kedua, y = ${d} − x.`,
      `Substitusikan ke persamaan pertama: ${a}x + ${b}(${d} − x) = ${c}.`,
      `Sederhanakan persamaan untuk memperoleh x = ${x}.`,
      `Substitusikan x ke persamaan kedua: y = ${d} − ${x} = ${y}.`,
      `Jadi, solusi adalah x = ${x} dan y = ${y}.`
    ]
  };
}

function genInequality(n) {
  const a = 2 + n % 5;
  const x = 2 + n % 8;
  const b = 1 + n % 6;
  const c = a*x + b;
  const answer = `x > ${x}`;
  const ch = choices(answer, [`x > ${x-1}`, `x < ${x}`, `x > ${x+1}`], n);
  return {
    question: `Selesaikan pertidaksamaan ${a}x + ${b} > ${c}.`,
    options: ch.options, correct: ch.correct,
    steps: [
      `Kurangi kedua ruas dengan ${b}: ${a}x > ${c-b}.`,
      `Bagi kedua ruas dengan ${a}, bilangan positif sehingga tanda tetap.`,
      `Hasilnya x > ${x}.`
    ]
  };
}

function genFlat(n) {
  const mode = n % 3;
  if (mode === 0) {
    const s = 3 + n % 10;
    if (Math.floor(n / 3) % 2 === 0) {
      return numericQuestion(`Sebuah persegi memiliki sisi ${s} cm. Berapa luasnya?`, s*s,
        [`Rumus luas persegi adalah L = s².`, `L = ${s}² = ${s*s} cm².`], n, " cm²");
    }
    return numericQuestion(`Sebuah persegi memiliki sisi ${s} cm. Berapa kelilingnya?`, 4*s,
      [`Rumus keliling persegi adalah K = 4s.`, `K = 4 × ${s} = ${4*s} cm.`], n, " cm");
  }
  if (mode === 1) {
    const p = 4 + n % 9;
    const l = 2 + n % 5;
    return numericQuestion(`Persegi panjang memiliki panjang ${p} cm dan lebar ${l} cm. Hitung luasnya.`,
      p*l, [`Rumus luas persegi panjang adalah L = p × l.`,
      `L = ${p} × ${l} = ${p*l} cm².`], n, " cm²");
  }
  const base = 4 + n % 8;
  const height = 2 * (2 + n % 6);
  return numericQuestion(`Segitiga memiliki alas ${base} cm dan tinggi ${height} cm. Berapa luasnya?`,
    base*height/2, [`Rumus luas segitiga adalah L = ½ × alas × tinggi.`,
    `L = ½ × ${base} × ${height} = ${base*height/2} cm².`], n, " cm²");
}

function genPythagoras(n) {
  const triples = [[3,4,5],[5,12,13],[6,8,10],[8,15,17],[7,24,25]];
  const [a,b,c] = triples[(n-1) % triples.length];
  const mode = n % 3;
  if (mode === 0) {
    return numericQuestion(`Segitiga siku-siku memiliki sisi siku-siku ${a} cm dan ${b} cm. Tentukan sisi miringnya.`,
      c, [`Gunakan c² = a² + b².`,
      `c² = ${a}² + ${b}² = ${a*a+b*b}.`,
      `c = √${a*a+b*b} = ${c} cm.`], n, " cm");
  }
  if (mode === 1) {
    return numericQuestion(`Sisi miring segitiga siku-siku ${c} cm. Salah satu sisi siku-sikunya ${a} cm. Tentukan sisi lainnya.`,
      b, [`Gunakan b² = c² − a².`,
      `b² = ${c}² − ${a}² = ${c*c-a*a}.`,
      `b = √${c*c-a*a} = ${b} cm.`], n, " cm");
  }
  return numericQuestion(`Sisi miring segitiga siku-siku ${c} cm. Salah satu sisi siku-sikunya ${b} cm. Tentukan sisi lainnya.`,
    a, [`Gunakan a² = c² − b².`,
      `a² = ${c}² − ${b}² = ${c*c-b*b}.`,
      `a = √${c*c-b*b} = ${a} cm.`], n, " cm");
}

function genCircle(n) {
  const r = 7 * (1 + n % 4);
  if (n % 2 === 0) {
    const answer = 22/7 * r*r;
    return numericQuestion(`Lingkaran berjari-jari ${r} cm. Hitung luasnya dengan π = 22/7.`,
      answer, [`Rumus luas lingkaran adalah L = πr².`,
      `L = 22/7 × ${r} × ${r}.`,
      `L = ${answer} cm².`], n, " cm²");
  }
  const answer = 2 * 22/7 * r;
  return numericQuestion(`Lingkaran berjari-jari ${r} cm. Hitung kelilingnya dengan π = 22/7.`,
    answer, [`Rumus keliling lingkaran adalah K = 2πr.`,
    `K = 2 × 22/7 × ${r}.`,
    `K = ${answer} cm.`], n, " cm");
}

function genSolid(n) {
  const mode = n % 3;
  if (mode === 0) {
    const s = 2 + n % 8;
    return numericQuestion(`Kubus memiliki rusuk ${s} cm. Berapa volumenya?`, s*s*s,
      [`Rumus volume kubus V = s³.`, `V = ${s}³ = ${s*s*s} cm³.`], n, " cm³");
  }
  if (mode === 1) {
    const p = 2 + n % 6, l = 3 + n % 4, t = 2 + n % 5;
    return numericQuestion(`Balok berukuran ${p} cm × ${l} cm × ${t} cm. Berapa volumenya?`, p*l*t,
      [`Rumus volume balok V = p × l × t.`,
      `V = ${p} × ${l} × ${t} = ${p*l*t} cm³.`], n, " cm³");
  }
  const r = 7 * (1 + n % 2);
  const h = 2 + n % 6;
  const answer = 22/7 * r*r*h;
  return numericQuestion(`Tabung memiliki jari-jari ${r} cm dan tinggi ${h} cm. Hitung volumenya dengan π = 22/7.`,
    answer, [`Rumus volume tabung V = πr²t.`,
    `V = 22/7 × ${r}² × ${h}.`,
    `V = ${answer} cm³.`], n, " cm³");
}

function genStatistics(n) {
  const base = 5 + n * 2;
  const data = [base, base+2, base-1, base+3, base+1];
  const sum = data.reduce((a,b) => a+b, 0);
  const answer = sum / data.length;
  return numericQuestion(`Tentukan rata-rata data berikut:\n${data.join(", ")}.`,
    answer, [`Jumlahkan seluruh data: ${data.join(" + ")} = ${sum}.`,
    `Banyak data = ${data.length}.`,
    `Rata-rata = ${sum} ÷ ${data.length} = ${answer}.`], n);
}

function genProbability(n) {
  const pairs = [[1,2],[2,6],[3,6],[1,4],[2,4],[3,8],[4,8],[5,10],[2,5],[3,10]];
  const [num, den] = pairs[(n-1) % pairs.length];
  const answer = fractionText(num, den);
  const distractors = [
    fractionText(Math.min(den, num+1), den),
    fractionText(Math.max(1, num-1), den),
    fractionText(num, den+1)
  ];
  const ch = choices(answer, distractors, n);
  return {
    question: `Suatu percobaan memiliki ${den} hasil yang sama mungkin. Jika ${num} hasil mendukung kejadian A, tentukan P(A).`,
    options: ch.options, correct: ch.correct,
    steps: [
      `Peluang = banyak hasil yang mendukung kejadian ÷ banyak seluruh hasil.`,
      `P(A) = ${num}/${den}.`,
      `Setelah disederhanakan, P(A) = ${answer}.`
    ]
  };
}

function genArithmeticSequence(n) {
  const a = 2 + n % 7;
  const d = 2 + n % 5;
  const k = 3 + n % 12;
  const answer = a + (k-1)*d;
  return numericQuestion(`Barisan aritmetika memiliki suku pertama ${a} dan beda ${d}. Tentukan suku ke-${k}.`,
    answer, [`Gunakan Uₙ = a + (n − 1)b.`,
    `U${k} = ${a} + (${k} − 1) × ${d}.`,
    `U${k} = ${a} + ${(k-1)*d} = ${answer}.`], n);
}

function genGeometricSequence(n) {
  const a = 2 + n % 4;
  const r = 2 + n % 3;
  const k = 2 + n % 5;
  const answer = a * Math.pow(r, k-1);
  return numericQuestion(`Barisan geometri memiliki suku pertama ${a} dan rasio ${r}. Tentukan suku ke-${k}.`,
    answer, [`Gunakan Uₙ = a × rⁿ⁻¹.`,
    `U${k} = ${a} × ${r}^(${k}−1).`,
    `U${k} = ${a} × ${Math.pow(r,k-1)} = ${answer}.`], n);
}

function genSpeed(n) {
  const speed = 30 + (n % 7) * 10;
  const time = 2 + n % 5;
  const distance = speed * time;
  const mode = n % 3;
  if (mode === 0) {
    return numericQuestion(`Kendaraan bergerak ${speed} km/jam selama ${time} jam. Berapa jarak yang ditempuh?`,
      distance, [`Gunakan jarak = kecepatan × waktu.`,
      `Jarak = ${speed} × ${time} = ${distance} km.`], n, " km");
  }
  if (mode === 1) {
    return numericQuestion(`Sebuah perjalanan sejauh ${distance} km ditempuh selama ${time} jam. Berapa kecepatan rata-ratanya?`,
      speed, [`Kecepatan = jarak ÷ waktu.`,
      `Kecepatan = ${distance} ÷ ${time} = ${speed} km/jam.`], n, " km/jam");
  }
  return numericQuestion(`Jarak perjalanan ${distance} km dengan kecepatan ${speed} km/jam. Berapa waktu tempuhnya?`,
    time, [`Waktu = jarak ÷ kecepatan.`,
    `Waktu = ${distance} ÷ ${speed} = ${time} jam.`], n, " jam");
}

/* =========================================================
   STATUS, PENYIMPANAN, DAN PROFIL
========================================================= */

const STORAGE_KEY = "mathlearn_v3_progress";
const PROFILE_KEY = "mathlearn_v3_profile";
const THEME_KEY = "mathlearn_v3_theme";

function emptyProgress() {
  const result = {};
  topics.forEach(t => {
    result[t.id] = { done: [], correct: [] };
  });
  return result;
}

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const base = emptyProgress();
    if (!saved || typeof saved !== "object") return base;
    topics.forEach(t => {
      const item = saved[t.id];
      if (item && Array.isArray(item.done) && Array.isArray(item.correct)) {
        base[t.id] = {
          done: [...new Set(item.done.filter(n => Number.isInteger(n) && n >= 1 && n <= 20))],
          correct: [...new Set(item.correct.filter(n => Number.isInteger(n) && n >= 1 && n <= 20))]
        };
      }
    });
    return base;
  } catch {
    return emptyProgress();
  }
}

let progress = loadProgress();
let profile = { name: "Pelajar", studentClass: "10" };
try {
  const savedProfile = JSON.parse(localStorage.getItem(PROFILE_KEY));
  if (savedProfile && typeof savedProfile.name === "string" &&
      ["10","11","12"].includes(String(savedProfile.studentClass))) {
    profile = { name: savedProfile.name, studentClass: String(savedProfile.studentClass) };
  }
} catch {}

let currentTopicId = 1;
let currentQuestionNumber = 1;
let selectedOption = null;
let answeredThisQuestion = false;
let sessionAnswers = {};
let sessionCorrect = 0;
let toastTimeout;

const $ = id => document.getElementById(id);
const totalQuestions = topics.length * 20;

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    showToast("Penyimpanan browser tidak tersedia. Progres mungkin tidak tersimpan.");
  }
}

function getTopicProgress(id) {
  return progress[id] || { done: [], correct: [] };
}

function overallStats() {
  let answered = 0, correct = 0, completed = 0;
  topics.forEach(t => {
    const p = getTopicProgress(t.id);
    answered += p.done.length;
    correct += p.correct.length;
    if (p.done.length === 20) completed++;
  });
  return { answered, correct, completed, accuracy: answered ? Math.round(correct / answered * 100) : 0 };
}

function showToast(message) {
  const toast = $("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("show"), 2600);
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
  })[char]);
}

function topicById(id) {
  return topics.find(t => t.id === Number(id)) || topics[0];
}

function getQuestion(topicId, questionNumber) {
  const topic = topicById(topicId);
  return topic.generate(questionNumber);
}

/* =========================================================
   LOGIN DAN NAVIGASI
========================================================= */

function applyProfile() {
  $("welcomeName").textContent = profile.name;
  $("welcomeClass").textContent = profile.studentClass;
  $("sidebarName").textContent = profile.name;
  $("sidebarClass").textContent = `Kelas ${profile.studentClass}`;
  $("avatarInitial").textContent = profile.name.trim().charAt(0).toUpperCase() || "P";
}

function enterApp() {
  $("loginScreen").classList.add("hidden");
  $("app").classList.remove("hidden");
  applyProfile();
  updateToday();
  renderAll();
}

function updateToday() {
  const now = new Date();
  $("todayLabel").textContent = new Intl.DateTimeFormat("id-ID", {
    weekday: "short", day: "numeric", month: "short", year: "numeric"
  }).format(now);
}

function showPage(pageName) {
  const validPages = ["dashboard", "materials", "practice", "progress", "about"];
  if (!validPages.includes(pageName)) pageName = "dashboard";

  document.querySelectorAll(".page").forEach(page => page.classList.remove("active"));
  const target = $(`${pageName}Page`);
  if (target) target.classList.add("active");

  document.querySelectorAll(".nav-link").forEach(button => {
    button.classList.toggle("active", button.dataset.page === pageName);
  });

  const names = {
    dashboard: "Beranda",
    materials: "Materi & Rumus",
    practice: "Latihan Soal",
    progress: "Progres Belajar",
    about: "Tentang"
  };
  $("currentSection").textContent = names[pageName];
  $("sidebar").classList.remove("open");
  window.scrollTo({ top: 0, behavior: "smooth" });

  if (pageName === "materials") renderMaterials();
  if (pageName === "progress") renderProgress();
  if (pageName === "dashboard") renderDashboard();
}

document.querySelectorAll("[data-page]").forEach(button => {
  button.addEventListener("click", () => {
    const page = button.dataset.page;
    if (page) showPage(page);
  });
});

document.querySelectorAll("[data-go]").forEach(button => {
  button.addEventListener("click", () => showPage(button.dataset.go));
});

$("loginForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = $("studentName").value.trim();
  const studentClass = $("studentClass").value;
  if (!name) return showToast("Masukkan nama terlebih dahulu.");
  if (!["10","11","12"].includes(studentClass)) return showToast("Pilih kelas terlebih dahulu.");
  profile = { name, studentClass };
  localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
  enterApp();
});

$("changeProfile").addEventListener("click", () => {
  $("studentName").value = profile.name;
  $("studentClass").value = profile.studentClass;
  $("app").classList.add("hidden");
  $("loginScreen").classList.remove("hidden");
});

$("menuToggle").addEventListener("click", () => {
  $("sidebar").classList.toggle("open");
});

document.addEventListener("click", event => {
  if (window.innerWidth <= 900 &&
      !$("sidebar").contains(event.target) &&
      !$("menuToggle").contains(event.target)) {
    $("sidebar").classList.remove("open");
  }
});

$("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(THEME_KEY, document.body.classList.contains("dark") ? "dark" : "light");
});

if (localStorage.getItem(THEME_KEY) === "dark") {
  document.body.classList.add("dark");
}

/* =========================================================
   DASHBOARD
========================================================= */

function renderDashboard() {
  const stats = overallStats();
  $("statTopics").textContent = topics.length;
  $("statQuestions").textContent = totalQuestions;
  $("statAnswered").textContent = stats.answered;
  $("statCorrect").textContent = stats.correct;
  $("progressPercent").textContent = `${Math.round(stats.completed / topics.length * 100)}%`;
  $("progressCircle").style.setProperty("--progress", `${stats.completed / topics.length * 100}%`);
  $("progressCaption").textContent = stats.completed
    ? `${stats.completed} dari ${topics.length} topik selesai. Terus pertahankan kebiasaan belajarmu.`
    : "Ayo mulai latihan pertamamu.";

  const list = $("continueList");
  const sorted = [...topics].sort((a,b) =>
    getTopicProgress(a.id).done.length - getTopicProgress(b.id).done.length
  ).slice(0, 4);

  list.replaceChildren();
  sorted.forEach(topic => {
    const p = getTopicProgress(topic.id);
    const percent = Math.round(p.done.length / 20 * 100);
    const item = document.createElement("div");
    item.className = "continue-item";
    item.innerHTML = `
      <span class="topic-icon ${topic.color}">${escapeHTML(topic.icon)}</span>
      <div class="continue-copy">
        <strong>${escapeHTML(topic.title)}</strong>
        <small>${p.done.length}/20 soal dijawab</small>
        <div class="mini-bar"><span style="width:${percent}%"></span></div>
      </div>
      <button class="small-action" data-start="${topic.id}">Belajar</button>`;
    list.appendChild(item);
  });

  list.querySelectorAll("[data-start]").forEach(button => {
    button.addEventListener("click", () => startTopic(Number(button.dataset.start)));
  });
}

/* =========================================================
   MATERI DAN MODAL
========================================================= */

function renderMaterials() {
  const search = $("materialSearch").value.trim().toLowerCase();
  const category = $("topicFilter").value;
  const grid = $("materialsGrid");
  grid.replaceChildren();

  const filtered = topics.filter(t => {
    const matchesSearch = `${t.title} ${t.description} ${t.formula}`.toLowerCase().includes(search);
    const matchesCategory = category === "all" ||
      (category === "Lainnya" ? t.category === "Lainnya" :
        category === "Data" ? t.category === "Data" :
        t.category === category);
    return matchesSearch && matchesCategory;
  });

  filtered.forEach(topic => {
    const p = getTopicProgress(topic.id);
    const card = document.createElement("article");
    card.className = "material-card";
    card.innerHTML = `
      <div class="material-card-top">
        <span class="topic-icon ${topic.color}">${escapeHTML(topic.icon)}</span>
        <span class="category-tag">${escapeHTML(topic.category)}</span>
      </div>
      <div class="topic-number">TOPIK ${String(topic.id).padStart(2,"0")}</div>
      <h3>${escapeHTML(topic.title)}</h3>
      <p class="description">${escapeHTML(topic.description)}</p>
      <div class="formula-preview">${escapeHTML(topic.formula)}</div>
      <div class="material-card-top">
        <span class="topic-number">${p.done.length}/20 soal dijawab</span>
        <span class="topic-number">${Math.round(p.done.length/20*100)}%</span>
      </div>
      <div class="mini-bar" style="margin-bottom:15px"><span style="width:${p.done.length/20*100}%"></span></div>
      <div class="material-actions">
        <button class="btn btn-outline" data-detail="${topic.id}">Lihat materi</button>
        <button class="btn btn-primary" data-start="${topic.id}">Latihan →</button>
      </div>`;
    grid.appendChild(card);
  });

  $("noMaterials").classList.toggle("hidden", filtered.length !== 0);

  grid.querySelectorAll("[data-detail]").forEach(button => {
    button.addEventListener("click", () => openMaterial(Number(button.dataset.detail)));
  });
  grid.querySelectorAll("[data-start]").forEach(button => {
    button.addEventListener("click", () => startTopic(Number(button.dataset.start)));
  });
}

$("materialSearch").addEventListener("input", renderMaterials);
$("topicFilter").addEventListener("change", renderMaterials);

function openMaterial(id) {
  const t = topicById(id);
  $("modalContent").innerHTML = `
    <p class="eyebrow">TOPIK ${String(t.id).padStart(2,"0")} · ${escapeHTML(t.category.toUpperCase())}</p>
    <h2 style="font-size:25px;margin-bottom:8px">${escapeHTML(t.title)}</h2>
    <p class="muted">${escapeHTML(t.description)}</p>
    <div class="modal-formula">${escapeHTML(t.formula)}</div>
    <div class="modal-section"><h3>Konsep utama</h3><p>${escapeHTML(t.explanation)}</p></div>
    <div class="modal-section"><h3>Contoh pembahasan</h3><p>${escapeHTML(t.example)}</p></div>
    <button class="btn btn-primary btn-full" id="modalStartPractice">Mulai latihan topik ini →</button>`;
  $("materialModal").classList.remove("hidden");
  $("modalStartPractice").addEventListener("click", () => {
    $("materialModal").classList.add("hidden");
    startTopic(id);
  });
}

$("closeModal").addEventListener("click", () => $("materialModal").classList.add("hidden"));
$("materialModal").addEventListener("click", event => {
  if (event.target === $("materialModal")) $("materialModal").classList.add("hidden");
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") $("materialModal").classList.add("hidden");
});

/* =========================================================
   LATIHAN SOAL
========================================================= */

function populateTopicSelect() {
  $("practiceTopic").innerHTML = topics.map(t =>
    `<option value="${t.id}">${String(t.id).padStart(2,"0")} — ${escapeHTML(t.title)}</option>`
  ).join("");
}

function startTopic(id) {
  currentTopicId = Number(id);
  currentQuestionNumber = 1;
  selectedOption = null;
  answeredThisQuestion = false;
  sessionAnswers = {};
  sessionCorrect = 0;
  $("practiceTopic").value = String(currentTopicId);
  $("quizArea").classList.remove("hidden");
  $("quizResult").classList.add("hidden");
  showPage("practice");
  renderQuestion();
}

$("practiceTopic").addEventListener("change", () => startTopic(Number($("practiceTopic").value)));

function renderQuestion() {
  const topic = topicById(currentTopicId);
  const q = getQuestion(currentTopicId, currentQuestionNumber);
  selectedOption = null;
  answeredThisQuestion = false;

  $("quizTopicLabel").textContent = topic.title;
  $("questionCounter").textContent = `Soal ${currentQuestionNumber} dari 20`;
  $("quizProgressBar").style.width = `${currentQuestionNumber / 20 * 100}%`;
  $("answerFeedback").className = "answer-feedback hidden";
  $("answerFeedback").replaceChildren();
  $("submitAnswer").classList.remove("hidden");
  $("nextQuestion").classList.add("hidden");
  $("previousQuestion").disabled = currentQuestionNumber === 1;

  const content = $("questionContent");
  content.replaceChildren();

  const kicker = document.createElement("p");
  kicker.className = "question-kicker";
  kicker.textContent = `PERTANYAAN ${String(currentQuestionNumber).padStart(2,"0")}`;
  const title = document.createElement("h2");
  title.className = "question-title";
  title.textContent = q.question;
  const options = document.createElement("div");
  options.className = "options-list";

  q.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";
    button.innerHTML = `<span class="option-letter">${"ABCD"[index]}</span><span>${escapeHTML(option)}</span>`;
    button.addEventListener("click", () => {
      if (answeredThisQuestion) return;
      selectedOption = index;
      options.querySelectorAll(".option-button").forEach(item => item.classList.remove("selected"));
      button.classList.add("selected");
    });
    options.appendChild(button);
  });

  content.append(kicker, title, options);
  updateSessionSummary();
}

function updateSessionSummary() {
  const answers = Object.keys(sessionAnswers).length;
  $("sessionAnswered").textContent = `${answers}/20`;
  $("sessionCorrect").textContent = sessionCorrect;
  $("sessionScore").textContent = answers ? `${Math.round(sessionCorrect / answers * 100)}` : "—";
}

$("submitAnswer").addEventListener("click", () => {
  if (answeredThisQuestion) return;
  if (selectedOption === null) {
    showToast("Pilih salah satu jawaban terlebih dahulu.");
    return;
  }

  const q = getQuestion(currentTopicId, currentQuestionNumber);
  const isCorrect = selectedOption === q.correct;
  answeredThisQuestion = true;
  sessionAnswers[currentQuestionNumber] = isCorrect;
  if (isCorrect) sessionCorrect++;

  const p = getTopicProgress(currentTopicId);
  if (!p.done.includes(currentQuestionNumber)) p.done.push(currentQuestionNumber);
  if (isCorrect && !p.correct.includes(currentQuestionNumber)) p.correct.push(currentQuestionNumber);
  if (!isCorrect) p.correct = p.correct.filter(n => n !== currentQuestionNumber);

  saveProgress();

  const buttons = $("questionContent").querySelectorAll(".option-button");
  buttons.forEach((button, index) => {
    button.disabled = true;
    if (index === q.correct) button.classList.add("correct");
    if (index === selectedOption && !isCorrect) button.classList.add("incorrect");
  });

  const feedback = $("answerFeedback");
  feedback.className = `answer-feedback ${isCorrect ? "feedback-correct" : "feedback-wrong"}`;
  feedback.replaceChildren();

  const title = document.createElement("div");
  title.className = "feedback-title";
  title.textContent = isCorrect ? "✓ Jawabanmu benar!" : "Belum tepat, pelajari langkahnya.";
  const answer = document.createElement("p");
  answer.className = "feedback-answer";
  answer.textContent = `Jawaban benar: ${q.options[q.correct]}`;
  const heading = document.createElement("h4");
  heading.textContent = "Pembahasan langkah demi langkah";
  const list = document.createElement("ol");
  q.steps.forEach(step => {
    const li = document.createElement("li");
    li.textContent = step;
    list.appendChild(li);
  });
  feedback.append(title, answer, heading, list);

  $("submitAnswer").classList.add("hidden");
  $("nextQuestion").classList.remove("hidden");
  $("nextQuestion").textContent = currentQuestionNumber === 20 ? "Lihat hasil →" : "Soal berikutnya →";

  updateSessionSummary();
  renderDashboard();
});

$("nextQuestion").addEventListener("click", () => {
  if (!answeredThisQuestion) return;
  if (currentQuestionNumber < 20) {
    currentQuestionNumber++;
    renderQuestion();
  } else {
    finishQuiz();
  }
});

$("previousQuestion").addEventListener("click", () => {
  if (currentQuestionNumber <= 1) return;
  currentQuestionNumber--;
  renderQuestion();
});

function finishQuiz() {
  $("quizArea").classList.add("hidden");
  const result = $("quizResult");
  result.classList.remove("hidden");
  const attempted = Object.keys(sessionAnswers).length;
  const score = attempted ? Math.round(sessionCorrect / attempted * 100) : 0;
  const p = getTopicProgress(currentTopicId);
  const isComplete = p.done.length === 20;

  result.innerHTML = `
    <div class="result-icon">${score >= 80 ? "✦" : score >= 60 ? "✓" : "↗"}</div>
    <p class="eyebrow">HASIL LATIHAN</p>
    <h2>Latihan selesai!</h2>
    <p>Kamu telah menyelesaikan sesi latihan untuk ${escapeHTML(topicById(currentTopicId).title)}.</p>
    <div class="result-score">${score}</div>
    <p>Nilai sesi ini: ${sessionCorrect} jawaban benar dari ${attempted} soal yang dijawab.<br>
    Progres unik topik: ${p.done.length}/20 soal${isComplete ? " · Topik selesai!" : ""}.</p>
    <button class="btn btn-primary" id="retryQuiz">Ulangi latihan</button>
    <button class="btn btn-outline" id="resultMaterials">Pilih materi lain</button>
    <button class="btn btn-outline" id="resultProgress">Lihat progres</button>`;

  $("retryQuiz").addEventListener("click", () => startTopic(currentTopicId));
  $("resultMaterials").addEventListener("click", () => showPage("materials"));
  $("resultProgress").addEventListener("click", () => showPage("progress"));
  renderProgress();
  renderDashboard();
}

/* =========================================================
   PROGRES BELAJAR
========================================================= */

function renderProgress() {
  const stats = overallStats();
  $("progressAnswered").textContent = stats.answered;
  $("progressCorrect").textContent = stats.correct;
  $("progressAccuracy").textContent = `${stats.accuracy}%`;
  $("progressTopicsDone").textContent = `${stats.completed}/${topics.length}`;

  const list = $("progressList");
  list.replaceChildren();

  topics.forEach(topic => {
    const p = getTopicProgress(topic.id);
    const percent = Math.round(p.done.length / 20 * 100);
    const row = document.createElement("div");
    row.className = "progress-row";
    row.innerHTML = `
      <div class="progress-topic">
        <span class="topic-icon ${topic.color}">${escapeHTML(topic.icon)}</span>
        <div><strong>${escapeHTML(topic.title)}</strong><small>${p.correct.length} jawaban benar</small></div>
      </div>
      <div class="mini-bar"><span style="width:${percent}%"></span></div>
      <div class="progress-fraction">${p.done.length}/20</div>`;
    list.appendChild(row);
  });
}

$("resetProgress").addEventListener("click", () => {
  const confirmed = window.confirm("Hapus semua progres latihan yang tersimpan di browser ini? Tindakan ini tidak dapat dibatalkan.");
  if (!confirmed) return;
  progress = emptyProgress();
  saveProgress();
  renderAll();
  showToast("Progres belajar berhasil direset.");
});

function renderAll() {
  populateTopicSelect();
  renderDashboard();
  renderMaterials();
  renderProgress();
}

/* =========================================================
   MULAI APLIKASI
========================================================= */

if (profile && profile.name && ["10","11","12"].includes(profile.studentClass)) {
  enterApp();
} else {
  $("loginScreen").classList.remove("hidden");
  $("app").classList.add("hidden");
}
