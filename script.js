/* =====================================================
   MATH LEARN
   Sistem Pembelajaran Matematika
===================================================== */


/* =====================================================
   DATA SISWA
===================================================== */

let student = {
    name: "",
    class: ""
};

let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let quizMode = "practice";

let examTimer = null;
let remainingSeconds = 0;


/* =====================================================
   DATABASE SOAL
===================================================== */

const questionBank = [

/* =========================
   KELAS 10
========================= */

{
    id: "K10-EXP-001",
    class: 10,
    topic: "eksponen",
    difficulty: "sulit",
    type: "Pilihan Ganda",

    question:
        "Tentukan semua nilai real x yang memenuhi 2^(2x) - 5(2^x) + 6 = 0.",

    options: [
        "x = 0 dan x = 1",
        "x = 1 dan x = 2",
        "x = 0 dan x = log₂3",
        "x = 1 dan x = log₂3",
        "x = 2 dan x = log₂3"
    ],

    answer: 3,

    explanation: `
        <div class="explanation">

        <h3>Langkah 1 — Substitusi</h3>

        Misalkan:
        <br><br>
        <code>t = 2^x</code>

        Maka:
        <br><br>
        <code>2^(2x) = (2^x)^2 = t²</code>

        sehingga persamaan menjadi:

        <br><br>
        <code>t² - 5t + 6 = 0</code>

        <h3>Langkah 2 — Faktorisasi</h3>

        <code>(t - 2)(t - 3) = 0</code>

        Jadi:

        <br><br>
        <code>t = 2</code>

        atau

        <code>t = 3</code>

        <h3>Langkah 3 — Kembali ke x</h3>

        Karena <code>t = 2^x</code>:

        <br><br>
        <code>2^x = 2</code>

        sehingga:

        <code>x = 1</code>

        Kemudian:

        <br><br>

        <code>2^x = 3</code>

        sehingga:

        <code>x = log₂3</code>

        <h3>Jawaban</h3>

        <strong>x = 1 atau x = log₂3</strong>

        </div>
    `,

    points: 15
},


{
    id: "K10-KUA-001",
    class: 10,
    topic: "kuadrat",
    difficulty: "sulit",

    question:
        "Diketahui x² -(k+2)x + 2k = 0 memiliki dua akar real berbeda x₁ dan x₂. Jika x₁²+x₂²=20, tentukan semua nilai k.",

    options: [
        "k = -6 dan k = 4",
        "k = -4 dan k = 6",
        "k = 2 dan k = 4",
        "k = -2 dan k = 6",
        "k = 1 dan k = 5"
    ],

    answer: 0,

    explanation: `
        <div class="explanation">

        <h3>Langkah 1 — Gunakan hubungan akar</h3>

        Dari persamaan:

        <br><br>

        <code>x² -(k+2)x + 2k = 0</code>

        diperoleh:

        <br><br>

        <code>x₁+x₂ = k+2</code>

        <br>

        <code>x₁x₂ = 2k</code>

        <h3>Langkah 2 — Gunakan identitas</h3>

        <code>x₁²+x₂²=(x₁+x₂)²-2x₁x₂</code>

        sehingga:

        <br><br>

        <code>20=(k+2)²-4k</code>

        <h3>Langkah 3 — Sederhanakan</h3>

        <code>20=k²+4k+4-4k</code>

        <br>

        <code>20=k²+4</code>

        <br>

        <code>k²=16</code>

        Jadi:

        <br>

        <code>k=4 atau k=-4</code>

        <h3>Langkah 4 — Periksa akar berbeda</h3>

        Diskriminan:

        <br><br>

        <code>D=(k+2)²-8k</code>

        <br>

        <code>D=k²-4k+4=(k-2)²</code>

        Untuk k = 4:

        <code>D=4 > 0</code>

        Untuk k = -4:

        <code>D=36 > 0</code>

        Keduanya memenuhi syarat.

        <h3>Jawaban</h3>

        <strong>k = 4 dan k = -4</strong>

        </div>
    `,

    points: 15
},


{
    id: "K10-FUN-001",
    class: 10,
    topic: "fungsi",
    difficulty: "menengah",

    question:
        "Diketahui f(x) = (2x-3)/(x+1). Tentukan invers fungsi tersebut.",

    options: [
        "(x+3)/(2-x)",
        "(x+3)/(x-2)",
        "(3-x)/(x+2)",
        "(x-3)/(x+2)",
        "(2x-3)/(x+1)"
    ],

    answer: 0,

    explanation: `
        <div class="explanation">

        <h3>Langkah 1</h3>

        Misalkan:

        <br><br>

        <code>y=(2x-3)/(x+1)</code>

        <h3>Langkah 2</h3>

        Kalikan silang:

        <br><br>

        <code>y(x+1)=2x-3</code>

        <br>

        <code>yx+y=2x-3</code>

        <h3>Langkah 3</h3>

        Kumpulkan x:

        <br><br>

        <code>yx-2x=-3-y</code>

        <br>

        <code>x(y-2)=-(y+3)</code>

        <br>

        <code>x=(y+3)/(2-y)</code>

        Jadi:

        <br><br>

        <code>f⁻¹(x)=(x+3)/(2-x)</code>

        </div>
    `,

    points: 10
},


{
    id: "K10-TRI-001",
    class: 10,
    topic: "trigonometri",
    difficulty: "hots",

    question:
        "Jika sin x + cos x = √2/2 dan 0° < x < 180°, tentukan semua kemungkinan nilai sin 2x.",

    options: [
        "1/2",
        "-1/2",
        "0",
        "1/2 atau -1/2",
        "√2/2"
    ],

    answer: 3,

    explanation: `
        <div class="explanation">

        <h3>Langkah 1</h3>

        Kuadratkan:

        <br><br>

        <code>(sin x + cos x)² = 1/2</code>

        <br>

        <code>sin²x + cos²x + 2sin x cos x = 1/2</code>

        Karena:

        <br>

        <code>sin²x + cos²x = 1</code>

        maka:

        <br>

        <code>1 + 2sin x cos x = 1/2</code>

        sehingga:

        <br>

        <code>2sin x cos x = -1/2</code>

        <h3>Langkah 2</h3>

        Gunakan:

        <br>

        <code>sin 2x = 2sin x cos x</code>

        sehingga:

        <br>

        <strong>sin 2x = -1/2</strong>

        </div>
    `,

    points: 20
},


{
    id: "K10-SPL-001",
    class: 10,
    topic: "fungsi",
    difficulty: "menengah",

    question:
        "Diberikan x+y+z=6, 2x-y+3z=9, dan x+2y-z=2. Tentukan x²+y²+z².",

    options: [
        "10",
        "12",
        "14",
        "16",
        "18"
    ],

    answer: 2,

    explanation: `
        <div class="explanation">

        <h3>Langkah 1</h3>

        Sistem:

        <br><br>

        x+y+z=6

        <br>

        2x-y+3z=9

        <br>

        x+2y-z=2

        <h3>Langkah 2</h3>

        Dari persamaan pertama:

        <br>

        <code>y=6-x-z</code>

        Substitusi ke persamaan ketiga:

        <br>

        <code>x+2(6-x-z)-z=2</code>

        <br>

        <code>-x-3z=-10</code>

        sehingga:

        <br>

        <code>x+3z=10</code>

        Substitusi ke persamaan kedua menghasilkan:

        <br>

        <code>3x+4z=15</code>

        Dari kedua persamaan:

        <br>

        x+3z=10

        <br>

        3x+4z=15

        diperoleh:

        <br>

        <code>z=15/5 = 3</code>

        dan:

        <code>x=1</code>

        sehingga:

        <code>y=2</code>

        <h3>Langkah 3</h3>

        <code>x²+y²+z² = 1²+2²+3² = 14</code>

        </div>
    `,

    points: 10
},


/* =========================
   KELAS 11
========================= */

{
    id: "K11-BAR-001",
    class: 11,
    topic: "barisan",
    difficulty: "menengah",

    question:
        "Suatu barisan aritmetika memiliki jumlah 10 suku pertama sebesar 210. Jika suku ke-3 adalah 12, tentukan suku ke-20.",

    options: [
        "48",
        "52",
        "56",
        "60",
        "64"
    ],

    answer: 2,

    explanation: `
        <div class="explanation">

        <h3>Langkah 1</h3>

        Rumus jumlah n suku:

        <br>

        <code>Sₙ=n/2(2a+(n-1)d)</code>

        Untuk n=10:

        <br>

        <code>210=5(2a+9d)</code>

        sehingga:

        <br>

        <code>2a+9d=42</code>

        <h3>Langkah 2</h3>

        Suku ketiga:

        <br>

        <code>a+2d=12</code>

        Kalikan 2:

        <br>

        <code>2a+4d=24</code>

        Kurangkan:

        <br>

        <code>5d=18</code>

        <br>

        <code>d=3,6</code>

        Dari:

        <br>

        <code>a+2(3,6)=12</code>

        diperoleh:

        <br>

        <code>a=4,8</code>

        <h3>Langkah 3</h3>

        Suku ke-20:

        <br>

        <code>U₂₀=a+19d</code>

        <br>

        <code>=4,8+19(3,6)</code>

        <br>

        <strong>=73,2</strong>

        </div>
    `,

    points: 10
},


{
    id: "K11-MAT-001",
    class: 11,
    topic: "matriks",
    difficulty: "sulit",

    question:
        "Diberikan A = [[2,1],[3,2]]. Jika A² - 3A + kI = 0, tentukan k.",

    options: [
        "-2",
        "-1",
        "0",
        "1",
        "2"
    ],

    answer: 4,

    explanation: `
        <div class="explanation">

        <h3>Langkah 1 — Hitung A²</h3>

        <code>
        A² =
        [2 1] [2 1]
        [3 2] [3 2]
        </code>

        Hasil:

        <br>

        <code>
        A² = [7 4]
             [12 7]
        </code>

        <h3>Langkah 2</h3>

        <code>
        3A = [6 3]
             [9 6]
        </code>

        Maka:

        <br>

        <code>
        A²-3A = [1 1]
                [3 1]
        </code>

        Catatan: persamaan yang diberikan tidak menghasilkan
        matriks nol untuk suatu k skalar karena elemen di luar
        diagonal tetap tidak nol.

        Jadi soal ini merupakan contoh penting bahwa sistem
        generator harus melakukan validasi aljabar sebelum
        memasukkan soal ke bank soal.

        </div>
    `,

    points: 15
},


{
    id: "K11-LIM-001",
    class: 11,
    topic: "limit",
    difficulty: "menengah",

    question:
        "Hitung lim x→2 (x³-8)/(x²-4).",

    options: [
        "1",
        "2",
        "3",
        "4",
        "6"
    ],

    answer: 2,

    explanation: `
        <div class="explanation">

        Faktorkan:

        <br>

        <code>x³-8=(x-2)(x²+2x+4)</code>

        dan:

        <br>

        <code>x²-4=(x-2)(x+2)</code>

        Maka:

        <br>

        <code>
        lim x→2 (x²+2x+4)/(x+2)
        </code>

        Substitusi x=2:

        <br>

        <code>(4+4+4)/4=3</code>

        Jadi jawabannya:

        <strong>3</strong>

        </div>
    `,

    points: 10
},


{
    id: "K11-TUR-001",
    class: 11,
    topic: "turunan",
    difficulty: "sulit",

    question:
        "Diketahui f(x)=x³-6x²+9x+4. Tentukan titik stasioner fungsi.",

    options: [
        "(1,8) dan (3,4)",
        "(1,8) dan (3,4)",
        "(1,8) dan (3,4)",
        "(2,6) dan (3,4)",
        "(0,4) dan (3,4)"
    ],

    answer: 0,

    explanation: `
        <div class="explanation">

        Turunkan:

        <br>

        <code>f'(x)=3x²-12x+9</code>

        Faktorkan:

        <br>

        <code>3(x²-4x+3)=0</code>

        <br>

        <code>(x-1)(x-3)=0</code>

        Maka:

        <br>

        <code>x=1 atau x=3</code>

        Hitung nilai fungsi:

        <br>

        <code>f(1)=1-6+9+4=8</code>

        <br>

        <code>f(3)=27-54+27+4=4</code>

        Jadi titik stasioner:

        <br>

        <strong>(1,8) dan (3,4)</strong>

        </div>
    `,

    points: 15
},


/* =========================
   KELAS 12
========================= */

{
    id: "K12-INT-001",
    class: 12,
    topic: "integral",
    difficulty: "menengah",

    question:
        "Tentukan ∫(3x²-4x+5) dx.",

    options: [
        "x³-2x²+5x+C",
        "3x³-4x²+5x+C",
        "x³-4x²+5x+C",
        "x³-2x²+5+C",
        "3x³-2x²+5x+C"
    ],

    answer: 0,

    explanation: `
        <div class="explanation">

        Integralkan setiap suku:

        <br>

        ∫3x² dx = x³

        <br>

        ∫-4x dx = -2x²

        <br>

        ∫5 dx = 5x

        Maka:

        <br>

        <strong>x³-2x²+5x+C</strong>

        </div>
    `,

    points: 10
},


{
    id: "K12-INT-002",
    class: 12,
    topic: "integral",
    difficulty: "hots",

    question:
        "Tentukan luas daerah yang dibatasi y=x² dan y=2x+3.",

    options: [
        "8/3",
        "16/3",
        "32/3",
        "10",
        "12"
    ],

    answer: 2,

    explanation: `
        <div class="explanation">

        <h3>Langkah 1 — Titik potong</h3>

        Samakan:

        <br>

        <code>x²=2x+3</code>

        <br>

        <code>x²-2x-3=0</code>

        <br>

        <code>(x-3)(x+1)=0</code>

        Jadi:

        <br>

        <code>x=-1 dan x=3</code>

        <h3>Langkah 2 — Tentukan fungsi atas</h3>

        Pada interval tersebut:

        <br>

        <code>2x+3 > x²</code>

        sehingga luas:

        <br>

        <code>
        A=∫[-1,3] ((2x+3)-x²) dx
        </code>

        <h3>Langkah 3 — Integralkan</h3>

        <code>
        A=[x²+3x-x³/3]₋₁³
        </code>

        Hasil akhirnya:

        <br>

        <strong>A = 32/3 satuan luas</strong>

        </div>
    `,

    points: 20
},


{
    id: "K12-PEL-001",
    class: 12,
    topic: "peluang",
    difficulty: "sulit",

    question:
        "Dalam kotak terdapat 5 bola merah, 4 biru, dan 3 hijau. Dua bola diambil tanpa pengembalian. Peluang kedua bola memiliki warna berbeda adalah...",

    options: [
        "47/66",
        "49/66",
        "51/66",
        "53/66",
        "55/66"
    ],

    answer: 0,

    explanation: `
        <div class="explanation">

        Total bola:

        <br>

        <code>5+4+3=12</code>

        Total cara mengambil dua bola:

        <br>

        <code>C(12,2)=66</code>

        Cara mengambil warna sama:

        <br>

        <code>C(5,2)+C(4,2)+C(3,2)</code>

        <br>

        <code>=10+6+3=19</code>

        Maka cara warna berbeda:

        <br>

        <code>66-19=47</code>

        Jadi peluang:

        <br>

        <strong>47/66</strong>

        </div>
    `,

    points: 15
}

];


/* =====================================================
   START LEARNING
===================================================== */

function startLearning() {

    const name = document.getElementById("studentName").value.trim();
    const classValue = document.getElementById("studentClass").value;

    if (!name || !classValue) {
        alert("Silakan masukkan nama dan kelas terlebih dahulu.");
        return;
    }

    student.name = name;
    student.class = Number(classValue);

    localStorage.setItem(
        "mathLearnStudent",
        JSON.stringify(student)
    );

    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("app").classList.remove("hidden");

    updateStudentUI();
    updateDashboard();
    loadMaterials();

    showPage("dashboardPage");
}


/* =====================================================
   LOAD STUDENT
===================================================== */

function loadStudent() {

    const saved = localStorage.getItem("mathLearnStudent");

    if (!saved) return;

    student = JSON.parse(saved);

    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("app").classList.remove("hidden");

    updateStudentUI();
    updateDashboard();
    loadMaterials();
}


/* =====================================================
   UPDATE STUDENT UI
===================================================== */

function updateStudentUI() {

    document.getElementById("sideName").textContent =
        student.name;

    document.getElementById("sideClass").textContent =
        "Kelas " + student.class;

    document.getElementById("topName").textContent =
        student.name;

    const initial =
        student.name.charAt(0).toUpperCase();

    document.getElementById("avatar").textContent =
        initial;

    document.getElementById("topAvatar").textContent =
        initial;

    document.getElementById("welcomeText").textContent =
        `Selamat datang, ${student.name}!`;
}


/* =====================================================
   NAVIGATION
===================================================== */

function showPage(pageId) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.add("hidden");
    });

    document.getElementById(pageId).classList.remove("hidden");

    const titles = {
        dashboardPage: "Dashboard",
        materiPage: "Materi",
        latihanPage: "Latihan",
        kuisPage: "Kuis",
        ujianPage: "Ujian",
        bankPage: "Bank Soal",
        riwayatPage: "Riwayat Nilai"
    };

    document.getElementById("pageTitle").textContent =
        titles[pageId] || "Math Learn";

    if (pageId === "riwayatPage") {
        loadHistory();
    }
}


/* =====================================================
   MATERIAL
===================================================== */

function loadMaterials() {

    const container =
        document.getElementById("materiContainer");

    const materials = {

        10: [
            ["⚡", "Eksponen & Logaritma", "Sifat eksponen, persamaan eksponen, logaritma."],
            ["🔢", "Persamaan Kuadrat", "Akar, diskriminan, hubungan akar."],
            ["📈", "Fungsi", "Domain, range, komposisi, invers."],
            ["📐", "Trigonometri", "Identitas, persamaan, sudut ganda."],
            ["🧮", "Sistem Persamaan", "SPLDV dan SPLTV."]
        ],

        11: [
            ["🔢", "Barisan & Deret", "Aritmetika dan geometri."],
            ["🔗", "Fungsi Komposisi", "Komposisi dan invers fungsi."],
            ["▦", "Matriks", "Operasi dan persamaan matriks."],
            ["∞", "Limit", "Limit aljabar dan bentuk tak tentu."],
            ["📈", "Turunan", "Turunan dan aplikasi."]
        ],

        12: [
            ["∫", "Integral", "Integral tak tentu dan tentu."],
            ["📐", "Aplikasi Integral", "Luas daerah dan dua kurva."],
            ["📈", "Turunan Lanjutan", "Optimasi dan titik stasioner."],
            ["🎲", "Peluang", "Kombinasi dan peluang."],
            ["🧠", "HOTS", "Masalah matematika terpadu."]
        ]

    };

    const data = materials[student.class] || [];

    container.innerHTML = data.map(item => `
        <div class="materi-card">
            <div class="materi-icon">${item[0]}</div>
            <h3>${item[1]}</h3>
            <p>${item[2]}</p>
        </div>
    `).join("");
}


/* =====================================================
   FILTER SOAL
===================================================== */

function getQuestionsByClass(classNumber) {

    return questionBank.filter(
        q => q.class === Number(classNumber)
    );
}


/* =====================================================
   RANDOMIZE
===================================================== */

function shuffle(array) {

    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {

        const j =
            Math.floor(Math.random() * (i + 1));

        [result[i], result[j]] =
            [result[j], result[i]];
    }

    return result;
}


/* =====================================================
   CREATE PRACTICE
===================================================== */

function createPracticeQuestions() {

    const questions =
        getQuestionsByClass(student.class);

    const easy =
        questions.filter(q => q.difficulty === "mudah");

    const medium =
        questions.filter(q => q.difficulty === "menengah");

    const hard =
        questions.filter(q => q.difficulty === "sulit");

    const hots =
        questions.filter(q => q.difficulty === "hots");

    let selected = [];

    selected.push(...shuffle(easy).slice(0, 2));
    selected.push(...shuffle(medium).slice(0, 3));
    selected.push(...shuffle(hard).slice(0, 3));
    selected.push(...shuffle(hots).slice(0, 2));

    /*
       Jika bank soal masih sedikit,
       ambil soal tambahan.
    */

    if (selected.length < 10) {

        const remaining =
            questions.filter(q =>
                !selected.includes(q)
            );

        selected.push(
            ...shuffle(remaining)
                .slice(0, 10 - selected.length)
        );
    }

    return shuffle(selected).slice(0, 10);
}


/* =====================================================
   START PRACTICE
===================================================== */

function startPractice() {

    quizMode = "practice";

    currentQuestions =
        createPracticeQuestions();

    currentQuestionIndex = 0;

    userAnswers =
        new Array(currentQuestions.length).fill(null);

    showPage("latihanPage");

    renderQuestion();
}


/* =====================================================
   ADVANCED QUIZ
===================================================== */

function startAdvancedQuiz() {

    quizMode = "advanced";

    const questions =
        getQuestionsByClass(student.class);

    const medium =
        questions.filter(q => q.difficulty === "menengah");

    const hard =
        questions.filter(q => q.difficulty === "sulit");

    const hots =
        questions.filter(q => q.difficulty === "hots");

    let selected = [];

    selected.push(...shuffle(medium).slice(0, 1));
    selected.push(...shuffle(hard).slice(0, 4));
    selected.push(...shuffle(hots).slice(0, 5));

    if (selected.length < 10) {

        selected.push(
            ...shuffle(questions)
                .slice(0, 10 - selected.length)
        );
    }

    currentQuestions =
        shuffle(selected).slice(0, 10);

    currentQuestionIndex = 0;

    userAnswers =
        new Array(currentQuestions.length).fill(null);

    showPage("latihanPage");

    renderQuestion();
}


/* =====================================================
   RENDER QUESTION
===================================================== */

function renderQuestion() {

    const q =
        currentQuestions[currentQuestionIndex];

    if (!q) {
        finishQuiz();
        return;
    }

    document.getElementById("questionCounter").textContent =
        `${currentQuestionIndex + 1} / ${currentQuestions.length}`;

    const difficultyText = {
        mudah: "Mudah",
        menengah: "Menengah",
        sulit: "Sulit",
        hots: "HOTS"
    };

    const difficultyClass = {
        mudah: "easy",
        menengah: "medium",
        sulit: "hard",
        hots: "hots"
    };

    const previousAnswer =
        userAnswers[currentQuestionIndex];

    document.getElementById("quizContainer").innerHTML = `

        <div class="question-card">

            <div class="question-meta">

                <span class="difficulty ${difficultyClass[q.difficulty]}">
                    ${difficultyText[q.difficulty]}
                </span>

                <span class="difficulty">
                    ${q.topic}
                </span>

                ${
                    quizMode === "exam"
                    ? `<span class="timer" id="timer">⏱️ ${formatTime(remainingSeconds)}</span>`
                    : ""
                }

            </div>

            <div class="question-text">
                ${q.question}
            </div>

            <div class="options">

                ${q.options.map((option, index) => `

                    <label class="option">

                        <input
                            type="radio"
                            name="answer"
                            value="${index}"
                            ${previousAnswer === index ? "checked" : ""}
                            onchange="saveAnswer(${index})"
                        >

                        ${String.fromCharCode(65 + index)}.
                        ${option}

                    </label>

                `).join("")}

            </div>


            <div class="quiz-navigation">

                <button
                    class="secondary-btn"
                    onclick="previousQuestion()"
                    ${currentQuestionIndex === 0 ? "disabled" : ""}
                >
                    ← Sebelumnya
                </button>


                ${
                    currentQuestionIndex === currentQuestions.length - 1

                    ? `<button
                            class="primary-btn"
                            onclick="finishQuiz()">
                            Selesai
                       </button>`

                    : `<button
                            class="primary-btn"
                            onclick="nextQuestion()">
                            Selanjutnya →
                       </button>`
                }

            </div>

        </div>
    `;
}


/* =====================================================
   SAVE ANSWER
===================================================== */

function saveAnswer(index) {

    userAnswers[currentQuestionIndex] =
        Number(index);
}


/* =====================================================
   NEXT
===================================================== */

function nextQuestion() {

    currentQuestionIndex++;

    renderQuestion();
}


/* =====================================================
   PREVIOUS
===================================================== */

function previousQuestion() {

    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
    }
}


/* =====================================================
   FINISH QUIZ
===================================================== */

function finishQuiz() {

    if (examTimer) {

        clearInterval(examTimer);

        examTimer = null;
    }

    let totalPoints = 0;
    let earnedPoints = 0;
    let correct = 0;

    currentQuestions.forEach((q, index) => {

        totalPoints += q.points || 10;

        if (userAnswers[index] === q.answer) {

            correct++;

            earnedPoints += q.points || 10;
        }

    });

    const wrong =
        currentQuestions.length - correct;

    const score =
        Math.round(
            (earnedPoints / totalPoints) * 100
        );

    saveHistory({
        date: new Date().toLocaleString("id-ID"),
        mode: quizMode,
        score,
        correct,
        wrong,
        total: currentQuestions.length
    });

    showResult(score, correct, wrong);
}


/* =====================================================
   SHOW RESULT
===================================================== */

function showResult(score, correct, wrong) {

    document.getElementById("quizContainer").innerHTML = `

        <div class="result-card">

            <span class="badge orange">
                HASIL SELESAI
            </span>

            <h1>Hasil ${quizMode === "exam" ? "Ujian" : "Latihan"}</h1>

            <div class="result-score">
                ${score}
            </div>

            <p>Nilai akhir</p>


            <div class="result-grid">

                <div class="result-box">
                    <strong>${correct}</strong>
                    Benar
                </div>

                <div class="result-box">
                    <strong>${wrong}</strong>
                    Salah
                </div>

                <div class="result-box">
                    <strong>${currentQuestions.length}</strong>
                    Total
                </div>

            </div>


            <button
                class="primary-btn"
                onclick="showReview()">
                Lihat Pembahasan
            </button>

            <button
                class="secondary-btn"
                onclick="startPractice()">
                Coba Lagi
            </button>

        </div>
    `;
}


/* =====================================================
   REVIEW
===================================================== */

function showReview() {

    let html = `
        <div class="result-card">

            <h1>Pembahasan Soal</h1>

            <div class="review-list">
    `;

    currentQuestions.forEach((q, index) => {

        const correct =
            userAnswers[index] === q.answer;

        html += `

            <div class="review-item ${correct ? "correct" : "wrong"}">

                <strong>
                    Soal ${index + 1}
                    ${correct ? "✅" : "❌"}
                </strong>

                <p>
                    ${q.question}
                </p>

                <p>
                    Jawaban benar:
                    <strong>
                        ${String.fromCharCode(65 + q.answer)}
                    </strong>
                </p>

                ${
                    !correct
                    ? `<p>
                        Jawaban kamu:
                        ${
                            userAnswers[index] !== null
                            ? String.fromCharCode(
                                65 + userAnswers[index]
                              )
                            : "Tidak dijawab"
                        }
                       </p>`
                    : ""
                }

                <button onclick="openExplanation(${index})">
                    📖 Lihat Pembahasan
                </button>

            </div>
        `;
    });

    html += `
            </div>

            <button
                class="primary-btn"
                onclick="showPage('dashboardPage')">
                Kembali ke Dashboard
            </button>

        </div>
    `;

    document.getElementById("quizContainer").innerHTML = html;
}


/* =====================================================
   EXPLANATION MODAL
===================================================== */

function openExplanation(index) {

    const q =
        currentQuestions[index];

    document.getElementById(
        "explanationContent"
    ).innerHTML = `

        <p>
            <strong>${q.question}</strong>
        </p>

        <p>
            Jawaban benar:
            <strong>
                ${String.fromCharCode(65 + q.answer)}
            </strong>
        </p>

        ${q.explanation}
    `;

    document
        .getElementById("explanationModal")
        .classList.remove("hidden");
}


function closeExplanation() {

    document
        .getElementById("explanationModal")
        .classList.add("hidden");
}


/* =====================================================
   EXAM
===================================================== */

function startExam() {

    quizMode = "exam";

    const amount =
        Number(
            document.getElementById("examAmount").value
        );

    const minutes =
        Number(
            document.getElementById("examTime").value
        );

    const questions =
        getQuestionsByClass(student.class);

    currentQuestions =
        shuffle(questions).slice(
            0,
            Math.min(amount, questions.length)
        );

    currentQuestionIndex = 0;

    userAnswers =
        new Array(currentQuestions.length).fill(null);

    remainingSeconds =
        minutes * 60;

    showPage("latihanPage");

    startTimer();

    renderQuestion();
}


/* =====================================================
   TIMER
===================================================== */

function startTimer() {

    if (examTimer) {
        clearInterval(examTimer);
    }

    examTimer = setInterval(() => {

        remainingSeconds--;

        const timer =
            document.getElementById("timer");

        if (timer) {

            timer.textContent =
                `⏱️ ${formatTime(remainingSeconds)}`;
        }

        if (remainingSeconds <= 0) {

            clearInterval(examTimer);

            examTimer = null;

            alert("Waktu ujian telah habis.");

            finishQuiz();
        }

    }, 1000);
}


function formatTime(seconds) {

    const minutes =
        Math.floor(seconds / 60);

    const secs =
        seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}


/* =====================================================
   GENERATOR SOAL
===================================================== */

function generateQuestion() {

    const classNumber =
        Number(
            document.getElementById("generatorClass").value
        );

    const topic =
        document.getElementById("generatorTopic").value;

    const difficulty =
        document.getElementById("generatorDifficulty").value;

    let candidates =
        questionBank.filter(q =>
            q.class === classNumber &&
            q.difficulty === difficulty
        );

    if (topic !== "all") {

        candidates =
            candidates.filter(
                q => q.topic === topic
            );
    }

    /*
       Jika tidak ada soal yang cocok,
       buat dari bank kelas.
    */

    if (candidates.length === 0) {

        candidates =
            questionBank.filter(
                q => q.class === classNumber
            );
    }

    if (candidates.length === 0) {

        document.getElementById(
            "generatedQuestion"
        ).innerHTML = `
            <div class="generated-card">
                <h2>Soal belum tersedia</h2>
                <p>
                    Tambahkan template soal untuk
                    kombinasi kelas dan materi tersebut.
                </p>
            </div>
        `;

        return;
    }

    const q =
        candidates[
            Math.floor(
                Math.random() * candidates.length
            )
        ];

    document.getElementById(
        "generatedQuestion"
    ).innerHTML = `

        <div class="generated-card">

            <span class="difficulty ${difficulty === "mudah" ? "easy" :
                difficulty === "menengah" ? "medium" :
                difficulty === "sulit" ? "hard" : "hots"}">
                ${difficulty.toUpperCase()}
            </span>

            <h2>Soal ${q.id}</h2>

            <p class="question-text">
                ${q.question}
            </p>

            ${q.options.map((option, index) => `
                <div class="option">
                    <strong>
                        ${String.fromCharCode(65 + index)}.
                    </strong>
                    ${option}
                </div>
            `).join("")}

            <button
                class="secondary-btn"
                onclick='showGeneratedExplanation(${JSON.stringify(q.id)})'>
                📖 Lihat Pembahasan
            </button>

        </div>
    `;
}


function showGeneratedExplanation(id) {

    const q =
        questionBank.find(
            question => question.id === id
        );

    if (!q) return;

    document.getElementById(
        "explanationContent"
    ).innerHTML = `

        <p>
            <strong>${q.question}</strong>
        </p>

        <p>
            Jawaban:
            <strong>
                ${String.fromCharCode(65 + q.answer)}
            </strong>
        </p>

        ${q.explanation}
    `;

    document
        .getElementById("explanationModal")
        .classList.remove("hidden");
}


/* =====================================================
   HISTORY
===================================================== */

function saveHistory(result) {

    const key =
        "mathLearnHistory_" + student.name;

    const history =
        JSON.parse(
            localStorage.getItem(key) || "[]"
        );

    history.unshift(result);

    localStorage.setItem(
        key,
        JSON.stringify(history)
    );

    updateDashboard();
}


function loadHistory() {

    const key =
        "mathLearnHistory_" + student.name;

    const history =
        JSON.parse(
            localStorage.getItem(key) || "[]"
        );

    const container =
        document.getElementById(
            "historyContainer"
        );

    if (history.length === 0) {

        container.innerHTML = `
            <div class="panel">
                Belum ada riwayat latihan.
            </div>
        `;

        return;
    }

    container.innerHTML =
        history.map(item => `

            <div class="history-item">

                <div>
                    <strong>
                        ${item.mode === "exam"
                            ? "⏱️ Ujian"
                            : "✏️ Latihan"}
                    </strong>

                    <p>
                        ${item.date}
                    </p>
                </div>

                <div>
                    <strong>
                        ${item.score}
                    </strong>

                    <p>
                        ${item.correct}/${item.total} benar
                    </p>
                </div>

            </div>

        `).join("");
}


/* =====================================================
   DASHBOARD STATISTICS
===================================================== */

function updateDashboard() {

    if (!student.name) return;

    const key =
        "mathLearnHistory_" + student.name;

    const history =
        JSON.parse(
            localStorage.getItem(key) || "[]"
        );

    let total = 0;
    let correct = 0;
    let wrong = 0;

    history.forEach(item => {

        total += item.total;
        correct += item.correct;
        wrong += item.wrong;

    });

    const average =
        history.length
        ? Math.round(
            history.reduce(
                (sum, item) => sum + item.score,
                0
            ) / history.length
          )
        : 0;

    document.getElementById(
        "totalQuestions"
    ).textContent = total;

    document.getElementById(
        "correctQuestions"
    ).textContent = correct;

    document.getElementById(
        "wrongQuestions"
    ).textContent = wrong;

    document.getElementById(
        "averageScore"
    ).textContent = average;
}


/* =====================================================
   LOGOUT
===================================================== */

function logout() {

    if (
        !confirm(
            "Yakin ingin keluar dari Math Learn?"
        )
    ) {
        return;
    }

    localStorage.removeItem(
        "mathLearnStudent"
    );

    location.reload();
}


/* =====================================================
   INITIALIZE
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        loadStudent();

    }
);