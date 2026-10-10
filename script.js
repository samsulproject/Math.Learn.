/* =====================================================
   MATHLEARN 3.0
   ===================================================== */


/* ================= DATA MATERI ================= */

const topics = [

    {
        id: 1,
        title: "Operasi Bilangan",
        icon: "➕",
        description: "Penjumlahan, pengurangan, perkalian, dan pembagian bilangan.",
        formula: "a + b, a − b, a × b, a ÷ b",
        example: "12 + 8 = 20",
        generator: generateInteger
    },

    {
        id: 2,
        title: "Pecahan",
        icon: "½",
        description: "Operasi dasar pada bilangan pecahan.",
        formula: "a/b + c/b = (a+c)/b",
        example: "1/4 + 2/4 = 3/4",
        generator: generateFraction
    },

    {
        id: 3,
        title: "Persentase",
        icon: "%",
        description: "Menghitung persentase dari suatu bilangan.",
        formula: "Persentase = bagian / total × 100%",
        example: "20% dari 200 = 40",
        generator: generatePercent
    },

    {
        id: 4,
        title: "Perbandingan",
        icon: "⚖️",
        description: "Menyelesaikan masalah menggunakan perbandingan.",
        formula: "a : b = c : d",
        example: "2 : 3 dengan total 25",
        generator: generateRatio
    },

    {
        id: 5,
        title: "FPB & KPK",
        icon: "🔢",
        description: "Mencari faktor persekutuan terbesar dan kelipatan persekutuan terkecil.",
        formula: "FPB dan KPK dari dua bilangan",
        example: "FPB(12,18) = 6",
        generator: generateGcdLcm
    },

    {
        id: 6,
        title: "Pangkat",
        icon: "x²",
        description: "Memahami operasi bilangan berpangkat.",
        formula: "aⁿ = a × a × ... × a",
        example: "2³ = 8",
        generator: generatePower
    },

    {
        id: 7,
        title: "Akar",
        icon: "√",
        description: "Menentukan nilai akar kuadrat.",
        formula: "√a × √a = a",
        example: "√81 = 9",
        generator: generateRoot
    },

    {
        id: 8,
        title: "Aljabar",
        icon: "x",
        description: "Operasi dan substitusi bentuk aljabar.",
        formula: "ax + b",
        example: "3x + 2 untuk x = 4 adalah 14",
        generator: generateAlgebra
    },

    {
        id: 9,
        title: "Persamaan Linear",
        icon: "=", 
        description: "Menyelesaikan persamaan linear satu variabel.",
        formula: "ax + b = c",
        example: "2x + 4 = 10 → x = 3",
        generator: generateLinear
    },

    {
        id: 10,
        title: "SPLDV",
        icon: "🧮",
        description: "Sistem persamaan linear dua variabel.",
        formula: "ax + by = c",
        example: "x + y = 7",
        generator: generateSPLDV
    },

    {
        id: 11,
        title: "Pertidaksamaan",
        icon: "≤",
        description: "Menyelesaikan pertidaksamaan linear.",
        formula: "ax + b > c",
        example: "2x + 4 > 10 → x > 3",
        generator: generateInequality
    },

    {
        id: 12,
        title: "Bangun Datar",
        icon: "⬛",
        description: "Luas dan keliling bangun datar.",
        formula: "Persegi: L = s²",
        example: "s = 5 → L = 25",
        generator: generatePlane
    },

    {
        id: 13,
        title: "Pythagoras",
        icon: "📐",
        description: "Menentukan sisi segitiga siku-siku.",
        formula: "a² + b² = c²",
        example: "3² + 4² = 5²",
        generator: generatePythagoras
    },

    {
        id: 14,
        title: "Lingkaran",
        icon: "⭕",
        description: "Luas dan keliling lingkaran.",
        formula: "L = πr² dan K = 2πr",
        example: "r = 7 → K = 44",
        generator: generateCircle
    },

    {
        id: 15,
        title: "Bangun Ruang",
        icon: "🧊",
        description: "Menghitung volume berbagai bangun ruang.",
        formula: "Kubus: V = s³",
        example: "s = 4 → V = 64",
        generator: generateSolid
    },

    {
        id: 16,
        title: "Statistika",
        icon: "📊",
        description: "Menghitung rata-rata dari sekumpulan data.",
        formula: "Mean = jumlah data / banyak data",
        example: "2,4,6 → mean = 4",
        generator: generateStatistics
    },

    {
        id: 17,
        title: "Peluang",
        icon: "🎲",
        description: "Menghitung peluang suatu kejadian.",
        formula: "P(A) = n(A) / n(S)",
        example: "Peluang angka genap pada dadu = 3/6 = 1/2",
        generator: generateProbability
    },

    {
        id: 18,
        title: "Barisan Aritmetika",
        icon: "🔢",
        description: "Menentukan suku ke-n barisan aritmetika.",
        formula: "Un = a + (n−1)b",
        example: "2,5,8,... → U4 = 11",
        generator: generateArithmetic
    },

    {
        id: 19,
        title: "Barisan Geometri",
        icon: "📈",
        description: "Menentukan suku ke-n barisan geometri.",
        formula: "Un = a × rⁿ⁻¹",
        example: "2,4,8,... → U4 = 16",
        generator: generateGeometric
    },

    {
        id: 20,
        title: "Jarak, Waktu & Kecepatan",
        icon: "🚗",
        description: "Menghitung hubungan jarak, waktu, dan kecepatan.",
        formula: "v = s/t",
        example: "120 km / 2 jam = 60 km/jam",
        generator: generateSpeed
    }

];


/* ================= HELPER ================= */

function choiceMC(answer, distractors, seed) {

    let values = [
        String(answer),
        ...distractors.map(String)
    ];

    values = [...new Set(values)];

    while (values.length < 4) {
        values.push(String(values.length + 1));
    }

    values = values.slice(0, 4);

    const shift = seed % 4;

    values = [
        ...values.slice(shift),
        ...values.slice(0, shift)
    ];

    return {
        options: values,
        correct: values.indexOf(String(answer))
    };
}


function numericMC(answer, seed) {

    return choiceMC(
        answer,
        [
            answer - 2,
            answer - 1,
            answer + 1
        ],
        seed
    );

}


function fraction(n, d) {

    function gcd(a, b) {

        a = Math.abs(a);
        b = Math.abs(b);

        while (b !== 0) {
            let t = a % b;
            a = b;
            b = t;
        }

        return a;
    }

    const g = gcd(n, d);

    n /= g;
    d /= g;

    if (d === 1) {
        return String(n);
    }

    return `${n}/${d}`;
}


/* ================= QUESTION GENERATORS ================= */


/* 1 OPERASI BILANGAN */

function generateInteger(i) {

    const type = (i - 1) % 4;

    const a = 10 + i;
    const b = 2 + (i % 7);

    if (type === 0) {

        const ans = a + b;

        return {
            question: `Hitung ${a} + ${b}.`,
            ...numericMC(ans, i),
            steps: [
                `Tuliskan operasi: ${a} + ${b}.`,
                `Jumlahkan kedua bilangan.`,
                `${a} + ${b} = ${ans}.`
            ]
        };

    }

    if (type === 1) {

        const ans = a - b;

        return {
            question: `Hitung ${a} − ${b}.`,
            ...numericMC(ans, i),
            steps: [
                `Tuliskan operasi: ${a} − ${b}.`,
                `Kurangkan ${b} dari ${a}.`,
                `${a} − ${b} = ${ans}.`
            ]
        };

    }

    if (type === 2) {

        const ans = a * b;

        return {
            question: `Hitung ${a} × ${b}.`,
            ...numericMC(ans, i),
            steps: [
                `Tuliskan operasi: ${a} × ${b}.`,
                `Kalikan kedua bilangan.`,
                `${a} × ${b} = ${ans}.`
            ]
        };

    }

    const divisor = 2 + (i % 5);
    const dividend = divisor * (3 + (i % 6));
    const ans = dividend / divisor;

    return {
        question: `Hitung ${dividend} ÷ ${divisor}.`,
        ...numericMC(ans, i),
        steps: [
            `Tuliskan operasi: ${dividend} ÷ ${divisor}.`,
            `Cari bilangan yang jika dikalikan ${divisor} menghasilkan ${dividend}.`,
            `${dividend} ÷ ${divisor} = ${ans}.`
        ]
    };
}


/* 2 PECAHAN */

function generateFraction(i) {

    const d = 3 + (i % 5);

    const a = 1 + ((i - 1) % (d - 1));
    const b = 1 + (i % (d - 1));

    const numerator = a + b;

    const ans = fraction(numerator, d);

    const options = choiceMC(
        ans,
        [
            fraction(numerator - 1, d),
            fraction(numerator + 1, d),
            fraction(numerator + 2, d)
        ],
        i
    );

    return {
        question: `Hitung ${a}/${d} + ${b}/${d}.`,
        ...options,
        steps: [
            `Penyebut kedua pecahan sama, yaitu ${d}.`,
            `Jumlahkan pembilang: ${a} + ${b} = ${numerator}.`,
            `Hasilnya ${numerator}/${d}.`,
            `Sederhanakan menjadi ${ans}.`
        ]
    };
}


/* 3 PERSENTASE */

function generatePercent(i) {

    const p = 10 + (i % 8) * 5;
    const n = 100 + (i % 5) * 20;

    const ans = p * n / 100;

    return {
        question: `Berapakah ${p}% dari ${n}?`,
        ...numericMC(ans, i),
        steps: [
            `Ubah ${p}% menjadi ${p}/100.`,
            `Kalikan ${p}/100 × ${n}.`,
            `Hasilnya adalah ${ans}.`
        ]
    };
}


/* 4 PERBANDINGAN */

function generateRatio(i) {

    const a = 2 + (i % 4);
    const b = 3 + (i % 3);
    const multiplier = 2 + (i % 4);

    const total = (a + b) * multiplier;
    const ans = a * multiplier;

    return {
        question:
            `Perbandingan siswa laki-laki dan perempuan adalah ${a}:${b}. Jika jumlah seluruh siswa ${total}, berapa siswa laki-laki?`,
        ...numericMC(ans, i),
        steps: [
            `Jumlah bagian = ${a} + ${b} = ${a + b}.`,
            `Setiap bagian bernilai ${total} ÷ ${a + b} = ${multiplier}.`,
            `Siswa laki-laki = ${a} × ${multiplier}.`,
            `Jadi jumlah siswa laki-laki = ${ans}.`
        ]
    };
}


/* 5 FPB KPK */

function generateGcdLcm(i) {

    const pairs = [
        [12,18],
        [15,20],
        [16,24],
        [18,30],
        [21,28],
        [24,36],
        [25,35],
        [27,36],
        [30,45],
        [32,48]
    ];

    const pair = pairs[(i - 1) % pairs.length];

    const a = pair[0];
    const b = pair[1];

    function gcd(x,y) {
        while (y) {
            [x,y] = [y,x % y];
        }
        return x;
    }

    const g = gcd(a,b);
    const l = Math.abs(a*b)/g;

    const askFPB = i % 2 === 1;
    const ans = askFPB ? g : l;

    return {
        question: `${askFPB ? "Tentukan FPB" : "Tentukan KPK"} dari ${a} dan ${b}.`,
        ...numericMC(ans, i),
        steps: askFPB
            ? [
                `Faktor ${a} dan ${b}.`,
                `Faktor persekutuan terbesar keduanya adalah ${g}.`,
                `Jadi FPB(${a}, ${b}) = ${g}.`
            ]
            : [
                `Gunakan hubungan KPK × FPB = ${a} × ${b}.`,
                `KPK = (${a} × ${b}) ÷ ${g}.`,
                `KPK = ${l}.`
            ]
    };
}


/* 6 PANGKAT */

function generatePower(i) {

    const base = 2 + (i % 4);
    const exponent = 2 + (i % 3);

    const ans = Math.pow(base, exponent);

    return {
        question: `Hitung ${base}^${exponent}.`,
        ...numericMC(ans, i),
        steps: [
            `${base}^${exponent} berarti ${base} dikalikan sebanyak ${exponent} kali.`,
            `Hasil perkalian tersebut adalah ${ans}.`
        ]
    };
}


/* 7 AKAR */

function generateRoot(i) {

    const n = 2 + (i % 12);
    const value = n * n;

    return {
        question: `Tentukan nilai √${value}.`,
        ...numericMC(n, i),
        steps: [
            `Cari bilangan yang jika dikuadratkan menghasilkan ${value}.`,
            `${n} × ${n} = ${value}.`,
            `Jadi √${value} = ${n}.`
        ]
    };
}


/* 8 ALJABAR */

function generateAlgebra(i) {

    const a = 2 + (i % 5);
    const b = 3 + (i % 7);
    const x = 2 + (i % 6);

    const ans = a*x + b;

    return {
        question: `Jika x = ${x}, tentukan nilai ${a}x + ${b}.`,
        ...numericMC(ans, i),
        steps: [
            `Substitusikan x = ${x}.`,
            `${a}(${x}) + ${b}.`,
            `${a*x} + ${b} = ${ans}.`
        ]
    };
}


/* 9 PERSAMAAN LINEAR */

function generateLinear(i) {

    const a = 2 + (i % 5);
    const x = 2 + (i % 7);
    const b = 3 + (i % 6);

    const c = a*x + b;

    return {
        question: `Tentukan x dari persamaan ${a}x + ${b} = ${c}.`,
        ...numericMC(x, i),
        steps: [
            `Kurangkan ${b} pada kedua ruas.`,
            `${a}x = ${c} − ${b} = ${a*x}.`,
            `Bagi kedua ruas dengan ${a}.`,
            `x = ${x}.`
        ]
    };
}


/* 10 SPLDV */

function generateSPLDV(i) {

    const x = 2 + (i % 5);
    const y = 1 + (i % 6);

    const a1 = 1;
    const b1 = 1;
    const c1 = x + y;

    const a2 = 2;
    const b2 = 1;
    const c2 = 2*x + y;

    const ans = `(${x}, ${y})`;

    return {
        question:
            `Tentukan pasangan (x,y) dari:
             x + y = ${c1}
             2x + y = ${c2}`,
        ...choiceMC(
            ans,
            [
                `(${x+1}, ${y})`,
                `(${x}, ${y+1})`,
                `(${y}, ${x})`
            ],
            i
        ),
        steps: [
            `Persamaan 1: x + y = ${c1}.`,
            `Persamaan 2: 2x + y = ${c2}.`,
            `Kurangkan persamaan 1 dari persamaan 2.`,
            `x = ${c2} − ${c1} = ${x}.`,
            `Substitusikan x ke persamaan pertama.`,
            `y = ${y}.`,
            `Jadi pasangan penyelesaiannya adalah ${ans}.`
        ]
    };
}


/* 11 PERTIDAKSAMAAN */

function generateInequality(i) {

    const a = 2 + (i % 5);
    const x = 2 + (i % 7);
    const b = 3 + (i % 5);
    const c = a*x + b;

    const ans = `x > ${x}`;

    return {
        question: `Tentukan penyelesaian ${a}x + ${b} > ${c}.`,
        ...choiceMC(
            ans,
            [
                `x > ${x+1}`,
                `x < ${x}`,
                `x > ${x-1}`
            ],
            i
        ),
        steps: [
            `Kurangkan ${b} pada kedua ruas.`,
            `${a}x > ${c-b}.`,
            `${a}x > ${a*x}.`,
            `Bagi dengan ${a}.`,
            `x > ${x}.`
        ]
    };
}


/* 12 BANGUN DATAR */

function generatePlane(i) {

    const type = (i - 1) % 3;

    if (type === 0) {

        const s = 3 + (i % 8);
        const ans = s*s;

        return {
            question: `Hitung luas persegi dengan sisi ${s} cm.`,
            ...numericMC(ans, i),
            steps: [
                `Rumus luas persegi: L = s².`,
                `L = ${s}².`,
                `L = ${ans} cm².`
            ]
        };
    }

    if (type === 1) {

        const p = 5 + (i % 8);
        const l = 3 + (i % 5);
        const ans = p*l;

        return {
            question: `Hitung luas persegi panjang dengan panjang ${p} cm dan lebar ${l} cm.`,
            ...numericMC(ans, i),
            steps: [
                `Rumus: L = p × l.`,
                `L = ${p} × ${l}.`,
                `L = ${ans} cm².`
            ]
        };
    }

    const alas = 6 + (i % 8) * 2;
    const tinggi = 4 + (i % 5) * 2;
    const ans = alas*tinggi/2;

    return {
        question: `Hitung luas segitiga dengan alas ${alas} cm dan tinggi ${tinggi} cm.`,
        ...numericMC(ans, i),
        steps: [
            `Rumus: L = ½ × alas × tinggi.`,
            `L = ½ × ${alas} × ${tinggi}.`,
            `L = ${ans} cm².`
        ]
    };
}


/* 13 PYTHAGORAS */

function generatePythagoras(i) {

    const triples = [
        [3,4,5],
        [5,12,13],
        [6,8,10],
        [8,15,17],
        [7,24,25]
    ];

    const [a,b,c] = triples[(i-1)%triples.length];

    if (i % 2 === 1) {

        return {
            question: `Sebuah segitiga siku-siku memiliki sisi ${a} cm dan ${b} cm. Berapa sisi miringnya?`,
            ...numericMC(c, i),
            steps: [
                `Gunakan rumus a² + b² = c².`,
                `${a}² + ${b}² = c².`,
                `${a*a} + ${b*b} = ${c*c}.`,
                `c = ${c} cm.`
            ]
        };

    }

    return {
        question: `Sisi miring segitiga adalah ${c} cm dan salah satu sisi siku-sikunya ${a} cm. Tentukan sisi lainnya.`,
        ...numericMC(b, i),
        steps: [
            `Gunakan b² = c² − a².`,
            `b² = ${c}² − ${a}².`,
            `b² = ${c*c} − ${a*a}.`,
            `b² = ${b*b}.`,
            `b = ${b} cm.`
        ]
    };
}


/* 14 LINGKARAN */

function generateCircle(i) {

    const r = 7 * (1 + (i % 4));

    if (i % 2 === 1) {

        const ans = 22/7 * r*r;

        return {
            question: `Hitung luas lingkaran dengan jari-jari ${r} cm. Gunakan π = 22/7.`,
            ...numericMC(ans, i),
            steps: [
                `Rumus luas lingkaran: L = πr².`,
                `L = 22/7 × ${r}².`,
                `L = ${ans} cm².`
            ]
        };

    }

    const ans = 2 * 22/7 * r;

    return {
        question: `Hitung keliling lingkaran dengan jari-jari ${r} cm. Gunakan π = 22/7.`,
        ...numericMC(ans, i),
        steps: [
            `Rumus keliling: K = 2πr.`,
            `K = 2 × 22/7 × ${r}.`,
            `K = ${ans} cm.`
        ]
    };
}


/* 15 BANGUN RUANG */

function generateSolid(i) {

    const type = (i-1)%3;

    if (type === 0) {

        const s = 3 + (i%6);
        const ans = s*s*s;

        return {
            question: `Hitung volume kubus dengan sisi ${s} cm.`,
            ...numericMC(ans,i),
            steps: [
                `Rumus volume kubus: V = s³.`,
                `V = ${s}³.`,
                `V = ${ans} cm³.`
            ]
        };
    }

    if (type === 1) {

        const p = 4 + (i%5);
        const l = 3 + (i%4);
        const t = 2 + (i%4);

        const ans = p*l*t;

        return {
            question:
                `Hitung volume balok dengan panjang ${p} cm, lebar ${l} cm, dan tinggi ${t} cm.`,
            ...numericMC(ans,i),
            steps: [
                `Rumus V = p × l × t.`,
                `V = ${p} × ${l} × ${t}.`,
                `V = ${ans} cm³.`
            ]
        };
    }

    const r = 7;
    const h = 2 + (i%5);
    const ans = 22/7*r*r*h;

    return {
        question:
            `Hitung volume tabung dengan r = ${r} cm dan tinggi ${h} cm. Gunakan π = 22/7.`,
        ...numericMC(ans,i),
        steps: [
            `Rumus V = πr²t.`,
            `V = 22/7 × ${r}² × ${h}.`,
            `V = ${ans} cm³.`
        ]
    };
}


/* 16 STATISTIKA */

function generateStatistics(i) {

    const base = 5 + i;

    const data = [
        base,
        base + 2,
        base - 1,
        base + 3,
        base + 1
    ];

    const sum = data.reduce((a,b)=>a+b,0);
    const ans = sum/data.length;

    return {
        question: `Tentukan mean dari data: ${data.join(", ")}.`,
        ...numericMC(ans,i),
        steps: [
            `Jumlahkan semua data.`,
            `${data.join(" + ")} = ${sum}.`,
            `Banyak data = ${data.length}.`,
            `Mean = ${sum} ÷ ${data.length} = ${ans}.`
        ]
    };
}


/* 17 PELUANG */

function generateProbability(i) {

    const favorable = 1 + (i%4);
    const total = favorable * (2 + (i%3));

    const ans = fraction(favorable,total);

    return {
        question:
            `Jika terdapat ${total} kemungkinan hasil dan ${favorable} hasil yang diinginkan, berapakah peluangnya?`,
        ...choiceMC(
            ans,
            [
                fraction(favorable+1,total),
                fraction(favorable,total+1),
                fraction(total-favorable,total)
            ],
            i
        ),
        steps: [
            `Gunakan rumus P(A) = banyak kejadian yang diinginkan / banyak seluruh kejadian.`,
            `P(A) = ${favorable}/${total}.`,
            `Sederhanakan pecahan tersebut.`,
            `P(A) = ${ans}.`
        ]
    };
}


/* 18 BARISAN ARITMETIKA */

function generateArithmetic(i) {

    const a = 2 + (i%5);
    const d = 2 + (i%4);
    const n = 3 + (i%8);

    const ans = a + (n-1)*d;

    return {
        question:
            `Tentukan suku ke-${n} dari barisan dengan suku pertama ${a} dan beda ${d}.`,
        ...numericMC(ans,i),
        steps: [
            `Gunakan Un = a + (n−1)d.`,
            `Un = ${a} + (${n}−1) × ${d}.`,
            `Un = ${a} + ${(n-1)*d}.`,
            `Un = ${ans}.`
        ]
    };
}


/* 19 BARISAN GEOMETRI */

function generateGeometric(i) {

    const a = 2 + (i%4);
    const r = 2 + (i%3);
    const n = 2 + (i%6);

    const ans = a * Math.pow(r,n-1);

    return {
        question:
            `Tentukan suku ke-${n} dari barisan geometri dengan a = ${a} dan rasio ${r}.`,
        ...numericMC(ans,i),
        steps: [
            `Gunakan Un = a × rⁿ⁻¹.`,
            `Un = ${a} × ${r}^${n-1}.`,
            `Un = ${ans}.`
        ]
    };
}


/* 20 JARAK WAKTU KECEPATAN */

function generateSpeed(i) {

    const type = (i-1)%3;

    if (type === 0) {

        const v = 40 + (i%5)*10;
        const t = 2 + (i%4);
        const ans = v*t;

        return {
            question: `Sebuah kendaraan bergerak dengan kecepatan ${v} km/jam selama ${t} jam. Berapa jaraknya?`,
            ...numericMC(ans,i),
            steps: [
                `Gunakan s = v × t.`,
                `s = ${v} × ${t}.`,
                `s = ${ans} km.`
            ]
        };
    }

    if (type === 1) {

        const t = 2 + (i%4);
        const v = 50 + (i%4)*10;
        const s = v*t;

        return {
            question: `Sebuah kendaraan menempuh ${s} km dalam ${t} jam. Berapa kecepatannya?`,
            ...numericMC(v,i),
            steps: [
                `Gunakan v = s/t.`,
                `v = ${s} ÷ ${t}.`,
                `v = ${v} km/jam.`
            ]
        };
    }

    const v = 40 + (i%4)*10;
    const t = 2 + (i%4);
    const s = v*t;

    return {
        question: `Sebuah kendaraan menempuh ${s} km dengan kecepatan ${v} km/jam. Berapa waktunya?`,
        ...numericMC(t,i),
        steps: [
            `Gunakan t = s/v.`,
            `t = ${s} ÷ ${v}.`,
            `t = ${t} jam.`
        ]
    };
}


/* ================= GENERATE 400 SOAL ================= */

topics.forEach(topic => {

    topic.questions = [];

    for (let i = 1; i <= 20; i++) {
        topic.questions.push(topic.generator(i));
    }

});


/* ================= STATE ================= */

const STORAGE_KEY = "mathlearn_3_progress";

let progress =
    JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

topics.forEach(topic => {

    if (!progress[topic.id]) {

        progress[topic.id] = {
            answered: [],
            correct: []
        };

    }

});


function saveProgress() {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(progress)
    );

}


/* ================= USER ================= */

let userName =
    localStorage.getItem("mathlearn_name") || "Pelajar";

function updateUser() {

    document.getElementById("topName").textContent = userName;

    document.getElementById("topClass").textContent =
        "Siswa SMA";

}

updateUser();


document.getElementById("profileBtn").addEventListener("click", () => {

    const name = prompt(
        "Masukkan nama kamu:",
        userName
    );

    if (name && name.trim()) {

        userName = name.trim();

        localStorage.setItem(
            "mathlearn_name",
            userName
        );

        updateUser();

    }

});


/* ================= NAVIGATION ================= */

function openPage(pageId) {

    document.querySelectorAll(".page")
        .forEach(page => page.classList.remove("active"));

    document.getElementById(pageId)
        .classList.add("active");

    document.querySelectorAll(".nav-btn")
        .forEach(btn => {

            btn.classList.toggle(
                "active",
                btn.dataset.page === pageId
            );

        });

    if (pageId === "dashboard") {
        updateDashboard();
    }

    if (pageId === "progress") {
        updateProgressPage();
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


document.querySelectorAll(".nav-btn")
    .forEach(btn => {

        btn.addEventListener("click", () => {

            openPage(btn.dataset.page);

            document.getElementById("sidebar")
                .classList.remove("open");

        });

    });


/* ================= DASHBOARD ================= */

function calculateStats() {

    let answered = 0;
    let correct = 0;

    topics.forEach(topic => {

        answered += progress[topic.id].answered.length;

        correct += progress[topic.id].correct.length;

    });

    return {
        answered,
        correct,
        accuracy:
            answered === 0
                ? 0
                : Math.round(correct / answered * 100)
    };

}


function updateDashboard() {

    const stats = calculateStats();

    document.getElementById("statMaterials")
        .textContent = topics.length;

    document.getElementById("statAnswered")
        .textContent = stats.answered;

    document.getElementById("statCorrect")
        .textContent = stats.correct;

    document.getElementById("statAccuracy")
        .textContent = stats.accuracy + "%";


    let recommended = topics.find(topic =>
        progress[topic.id].answered.length < 20
    );

    if (!recommended) {
        recommended = topics[0];
    }

    document.getElementById("recommendation").innerHTML = `

        <div class="recommend-card">

            <div class="recommend-icon">
                ${recommended.icon}
            </div>

            <div>
                <h3>${recommended.title}</h3>
                <p>
                    Materi yang bisa kamu pelajari atau
                    latih berikutnya.
                </p>
            </div>

            <button class="primary-btn"
                    onclick="showMaterial(${recommended.id})">
                Pelajari
            </button>

        </div>

    `;

    renderAchievements();

}


/* ================= ACHIEVEMENT ================= */

function renderAchievements() {

    const stats = calculateStats();

    const achievements = [

        {
            icon: "🌱",
            title: "First Step",
            description: "Mengerjakan 10 soal",
            unlocked: stats.answered >= 10
        },

        {
            icon: "🔥",
            title: "Math Fighter",
            description: "Mengerjakan 50 soal",
            unlocked: stats.answered >= 50
        },

        {
            icon: "🏆",
            title: "Math Master",
            description: "Mengerjakan 100 soal",
            unlocked: stats.answered >= 100
        },

        {
            icon: "💯",
            title: "Perfect Score",
            description: "Mendapat 100% akurasi",
            unlocked: stats.answered >= 20 &&
                      stats.accuracy === 100
        }

    ];

    document.getElementById("achievementGrid")
        .innerHTML = achievements.map(a => `

            <div class="achievement
                ${a.unlocked ? "unlocked" : ""}">

                <div class="medal">${a.icon}</div>

                <h3>${a.title}</h3>

                <p>${a.description}</p>

            </div>

        `).join("");

}


/* ================= MATERIAL ================= */

function renderMaterials(filter = "") {

    const query = filter.toLowerCase();

    const filtered = topics.filter(topic =>
        topic.title.toLowerCase().includes(query)
    );

    document.getElementById("materialGrid").innerHTML =
        filtered.map(topic => `

            <div class="material-card">

                <div class="material-icon">
                    ${topic.icon}
                </div>

                <h3>${topic.id}. ${topic.title}</h3>

                <p>${topic.description}</p>

                <div class="formula-mini">
                    ${topic.formula}
                </div>

                <div class="card-buttons">

                    <button class="view-btn"
                            onclick="showMaterial(${topic.id})">
                        Lihat
                    </button>

                    <button class="practice-btn"
                            onclick="startPractice(${topic.id})">
                        Latihan
                    </button>

                </div>

            </div>

        `).join("");

}


renderMaterials();


document.getElementById("materialSearch")
    .addEventListener("input", e => {

        renderMaterials(e.target.value);

    });


/* GLOBAL SEARCH */

document.getElementById("globalSearch")
    .addEventListener("input", e => {

        const value = e.target.value.trim();

        if (value.length > 0) {

            openPage("materials");

            document.getElementById("materialSearch")
                .value = value;

            renderMaterials(value);

        }

    });


/* ================= MODAL ================= */

let selectedModalTopic = null;

function showMaterial(id) {

    const topic = topics.find(t => t.id === id);

    if (!topic) return;

    selectedModalTopic = id;

    document.getElementById("modalBadge")
        .textContent = topic.icon + " " + topic.title;

    document.getElementById("modalTitle")
        .textContent = topic.title;

    document.getElementById("modalDescription")
        .textContent = topic.description;

    document.getElementById("modalFormula")
        .textContent = topic.formula;

    document.getElementById("modalExample")
        .textContent = topic.example;

    document.getElementById("materialModal")
        .classList.remove("hidden");

}


document.getElementById("closeModal")
    .addEventListener("click", () => {

        document.getElementById("materialModal")
            .classList.add("hidden");

    });


document.getElementById("modalPractice")
    .addEventListener("click", () => {

        document.getElementById("materialModal")
            .classList.add("hidden");

        startPractice(selectedModalTopic);

    });


/* ================= TOPIC SELECT ================= */

function renderTopicSelector() {

    document.getElementById("topicSelectGrid")
        .innerHTML = topics.map(topic => {

            const done =
                progress[topic.id].answered.length;

            return `

                <button class="topic-button"
                        onclick="startPractice(${topic.id})">

                    <span class="topic-icon">
                        ${topic.icon}
                    </span>

                    <strong>
                        ${topic.title}
                    </strong>

                    <small>
                        ${done}/20 soal dikerjakan
                    </small>

                </button>

            `;

        }).join("");

}


renderTopicSelector();


/* ================= QUIZ ================= */

let currentTopic = null;
let currentQuestionIndex = 0;
let selectedAnswer = null;
let sessionScore = 0;
let sessionAnswered = 0;


function startPractice(topicId) {

    currentTopic =
        topics.find(t => t.id === topicId);

    if (!currentTopic) return;

    currentQuestionIndex = 0;
    selectedAnswer = null;
    sessionScore = 0;
    sessionAnswered = 0;

    document.getElementById("topicSelector")
        .classList.add("hidden");

    document.getElementById("quizArea")
        .classList.remove("hidden");

    renderQuestion();

    openPage("practice");

}


function renderQuestion() {

    const question =
        currentTopic.questions[currentQuestionIndex];

    selectedAnswer = null;

    document.getElementById("quizTopicName")
        .textContent = currentTopic.title;

    document.getElementById("questionNumber")
        .textContent =
        `Soal ${currentQuestionIndex + 1} dari 20`;

    document.getElementById("sessionScore")
        .textContent =
        `Nilai: ${sessionScore}`;

    document.getElementById("quizProgressBar")
        .style.width =
        `${((currentQuestionIndex + 1) / 20) * 100}%`;

    document.getElementById("questionText")
        .textContent =
        question.question;

    document.getElementById("options").innerHTML =
        question.options.map((option,index) => `

            <button class="option"
                    data-index="${index}">
                <strong>${String.fromCharCode(65+index)}.</strong>
                ${option}
            </button>

        `).join("");

    document.querySelectorAll(".option")
        .forEach(btn => {

            btn.addEventListener("click", () => {

                if (selectedAnswer !== null) return;

                document.querySelectorAll(".option")
                    .forEach(o =>
                        o.classList.remove("selected")
                    );

                btn.classList.add("selected");

                selectedAnswer =
                    Number(btn.dataset.index);

            });

        });


    document.getElementById("submitAnswer")
        .classList.remove("hidden");

    document.getElementById("feedback")
        .className = "feedback hidden";

    document.getElementById("feedback")
        .innerHTML = "";

    document.getElementById("solution")
        .classList.add("hidden");

    document.getElementById("nextQuestion")
        .classList.add("hidden");

}


document.getElementById("submitAnswer")
    .addEventListener("click", checkAnswer);


function checkAnswer() {

    if (selectedAnswer === null) {

        alert("Pilih jawaban terlebih dahulu!");

        return;
    }

    const question =
        currentTopic.questions[currentQuestionIndex];

    const isCorrect =
        selectedAnswer === question.correct;

    const topicProgress =
        progress[currentTopic.id];

    if (!topicProgress.answered.includes(currentQuestionIndex)) {

        topicProgress.answered.push(
            currentQuestionIndex
        );

        if (isCorrect) {

            topicProgress.correct.push(
                currentQuestionIndex
            );

        }

        saveProgress();

    }


    sessionAnswered++;

    if (isCorrect) {
        sessionScore++;
    }


    document.querySelectorAll(".option")
        .forEach((btn,index) => {

            if (index === question.correct) {
                btn.classList.add("correct");
            }

            if (
                index === selectedAnswer &&
                !isCorrect
            ) {
                btn.classList.add("wrong");
            }

            btn.disabled = true;

        });


    const feedback =
        document.getElementById("feedback");

    feedback.classList.remove("hidden");

    feedback.className =
        "feedback " +
        (isCorrect ? "correct" : "wrong");

    feedback.innerHTML = isCorrect
        ? "✅ Jawaban kamu benar!"
        : `❌ Jawaban kurang tepat. Jawaban yang benar adalah <strong>${question.options[question.correct]}</strong>.`;


    document.getElementById("solution")
        .classList.remove("hidden");

    document.getElementById("solutionSteps")
        .innerHTML =
        question.steps.map(step =>
            `<li>${step}</li>`
        ).join("");


    document.getElementById("submitAnswer")
        .classList.add("hidden");

    document.getElementById("nextQuestion")
        .classList.remove("hidden");

}


document.getElementById("nextQuestion")
    .addEventListener("click", () => {

        if (currentQuestionIndex < 19) {

            currentQuestionIndex++;

            renderQuestion();

        } else {

            finishQuiz();

        }

    });


/* ================= FINISH QUIZ ================= */

function finishQuiz() {

    const percentage =
        Math.round(sessionScore / 20 * 100);

    document.querySelector(".question-card")
        .innerHTML = `

        <div style="text-align:center;padding:30px">

            <div style="font-size:60px">🎉</div>

            <h2>Latihan Selesai!</h2>

            <p style="color:var(--muted);margin:10px 0 25px">
                Kamu telah menyelesaikan 20 soal
                ${currentTopic.title}.
            </p>

            <div style="
                font-size:50px;
                font-weight:bold;
                color:var(--primary);
                margin:20px">
                ${percentage}
            </div>

            <p>
                Jawaban benar:
                <strong>${sessionScore}/20</strong>
            </p>

            <div style="
                display:flex;
                gap:10px;
                justify-content:center;
                margin-top:25px">

                <button class="primary-btn"
                        onclick="startPractice(${currentTopic.id})">
                    🔄 Ulangi
                </button>

                <button class="secondary-btn"
                        onclick="backToTopics()">
                    📚 Pilih Materi
                </button>

            </div>

        </div>

    `;

    updateDashboard();

}


function backToTopics() {

    document.getElementById("quizArea")
        .classList.add("hidden");

    document.getElementById("topicSelector")
        .classList.remove("hidden");

    renderTopicSelector();

}


/* ================= BACK BUTTON ================= */

document.getElementById("backTopicBtn")
    .addEventListener("click", backToTopics);


/* ================= PROGRESS PAGE ================= */

function updateProgressPage() {

    const stats = calculateStats();

    const percent =
        Math.round(stats.answered / 400 * 100);

    document.getElementById("overallPercent")
        .textContent = percent + "%";

    document.getElementById("overallText")
        .textContent =
        `${stats.answered} dari 400 soal selesai`;

    document.getElementById("progressAnswered")
        .textContent = stats.answered;

    document.getElementById("progressCorrect")
        .textContent = stats.correct;

    document.getElementById("progressAccuracy")
        .textContent = stats.accuracy + "%";


    document.querySelector(".circle-progress")
        .style.background =
        `conic-gradient(
            var(--primary) ${percent * 3.6}deg,
            #e9eaf0 ${percent * 3.6}deg
        )`;


    document.getElementById("progressList")
        .innerHTML = topics.map(topic => {

            const answered =
                progress[topic.id].answered.length;

            const percent =
                Math.round(answered / 20 * 100);

            return `

                <div class="progress-row">

                    <div class="progress-row-top">

                        <strong>
                            ${topic.icon} ${topic.title}
                        </strong>

                        <span>
                            ${answered}/20 soal
                        </span>

                    </div>

                    <div class="mini-progress">

                        <div style="
                            width:${percent}%">
                        </div>

                    </div>

                </div>

            `;

        }).join("");

}


/* ================= THEME ================= */

const savedTheme =
    localStorage.getItem("mathlearn_theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
}


document.getElementById("themeBtn")
    .addEventListener("click", () => {

        document.body.classList.toggle("dark");

        const isDark =
            document.body.classList.contains("dark");

        localStorage.setItem(
            "mathlearn_theme",
            isDark ? "dark" : "light"
        );

        document.getElementById("themeBtn")
            .textContent =
            isDark
                ? "☀️ Mode Terang"
                : "🌙 Mode Gelap";

    });


/* ================= MOBILE MENU ================= */

document.getElementById("menuBtn")
    .addEventListener("click", () => {

        document.getElementById("sidebar")
            .classList.toggle("open");

    });


/* ================= RESET ================= */

document.getElementById("resetBtn")
    .addEventListener("click", () => {

        const confirmReset =
            confirm(
                "Yakin ingin menghapus seluruh progress?"
            );

        if (!confirmReset) return;

        localStorage.removeItem(STORAGE_KEY);

        location.reload();

    });


/* ================= INITIAL ================= */

updateDashboard();
updateProgressPage();