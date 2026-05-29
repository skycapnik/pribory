//название, описание, и характеристики приборов.
//ВАЖНАЯ ДЕТАЛЬ: название прибора ОБЯЗАТЕЛЬНО должно совпадать с названием прибора из тичбл машин. Проверить название можно в файле metedata.json

const DEVICES = {
    "Баклан-20": {
        title: "Баклан-20",
        description: "Авиационная УКВ-радиостанция для двусторонней телефонной связи экипажа с наземными службами и другими воздушными судами. Работает в режиме А3Е, обеспечивает 720 рабочих каналов с дискретностью сетки 25 кГц. Время перестройки не превышает 1 с, готовность к работе — не более 1 мин.",
        specs: [
            { label: "Диапазон", value: "118,000–135,975 МГц" },
            { label: "Мощность", value: "16 Вт" },
            { label: "Чувствительность", value: "2,5 мкВ" },
            { label: "Масса", value: "5,7 кг" }
        ]
    },

    "Пульт управления радиостанции «Микрон»": {
        title: "Пульт управления р/с «Микрон»",
        description: "Пульт дистанционного управления КВ-радиостанцией «Микрон», предназначенной для симплексной радиотелефонной связи на дальних маршрутах. Оснащён шестью барабанными ручками набора частоты, переключателем видов работы и световыми индикаторами состояния ПРД, НАСТ, АВАР. Время перестройки радиостанции не превышает 26 с.",
        specs: [
            { label: "Диапазон", value: "2–23,9999 МГц" },
            { label: "Виды излучения", value: "А3Е, J3Е, R3E, A1A, F2A" },
            { label: "Мощность", value: "80–400 Вт" },
            { label: "Число каналов", value: "220 000" }
        ]
    },

    "СП-50": {
        title: "СП-50",
        description: "Система инструментальной посадки для захода воздушного судна на посадку в сложных метеоусловиях по курсовому и глиссадному маякам. Пульт обеспечивает выбор типа маяка и режима работы приёмника, цифровое табло отображает частотный канал. Индикаторы ПОС и КОНТР сигнализируют о режиме работы системы.",
        specs: [
            { label: "Курсовой маяк", value: "108–112 МГц" },
            { label: "Глиссадный маяк", value: "329–335 МГц" },
            { label: "Режимы", value: "РУЧ / АВТ" },
            { label: "Точность по курсу", value: "±0,5°" }
        ]
    },

    "СПУ-7": {
        title: "СПУ-7",
        description: "Самолётное переговорное устройство для внутренней телефонной связи между членами экипажа и коммутации сигналов бортовых радиосредств на рабочие места. Обеспечивает одновременное прослушивание нескольких радиосистем с индивидуальной регулировкой громкости.",
        specs: [
            { label: "Абонентов", value: "до 6" },
            { label: "Полоса частот", value: "300–3400 Гц" },
            { label: "Питание", value: "27 В пост. тока" },
            { label: "Радиосредств", value: "до 8" }
        ]
    },

    "Пульт управления АРК-15М": {
        title: "Пульт управления АРК-15М",
        description: "Пульт дистанционного управления автоматическим радиокомпасом АРК-15М для самолётовождения по приводным радиостанциям и радиомаякам. Имеет два независимых частотных канала с барабанными переключателями, режимы работы: «Антенна», «Компас» и «Рамка». Погрешность измерения курсового угла не превышает ±2°.",
        specs: [
            { label: "Диапазон", value: "150–1799,5 кГц" },
            { label: "Дальность", value: "не менее 200 км" },
            { label: "Погрешность КУР", value: "±2°" },
            { label: "Чувствительность", value: "5–8 мкВ (АНТ)" }
        ]
    },

    "Пульт выбора радионавигационных(посадочных) систем": {
        title: "Пульт выбора посадочных систем",
        description: "Предназначен для выбора и коммутации навигационных и посадочных систем в зависимости от этапа полёта. Обеспечивает переключение между ILS, СП-50, КАТЕТ, РСБН и ДМЕ. Световые индикаторы К1/Г1/К2/Г2 сигнализируют об исправности каналов.",
        specs: [
            { label: "Системы посадки", value: "ILS, СП-50, КАТЕТ" },
            { label: "Нав. системы", value: "РСБН, ДМЕ" },
            { label: "Каналы", value: "К1, Г1, К2, Г2" },
            { label: "Режимы", value: "МАРШРУТ / ПОСАДКА" }
        ]
    },

    "Селектор радиосвязи и навигации самолета": {
        title: "Селектор радиосвязи и навигации",
        description: "Обеспечивает коммутацию аудиосигналов от всех бортовых радиосредств на гарнитуры и динамики членов экипажа. Позволяет одновременно прослушивать несколько систем с раздельной регулировкой громкости по каждому каналу.",
        specs: [
            { label: "Системы", value: "УКВ1/2, КВ1/2, АРК, VOR" },
            { label: "Каналы", value: "СПУ, РЕЗ, ПРОСЛ" },
            { label: "Режимы", value: "ВОРИ, ВОР2, ВЫКЛ" },
            { label: "Тип", value: "Аудиокоммутатор" }
        ]
    },

    " СК системы «Курс МП-70» ": {
        title: "СК системы «Курс МП-70»",
        description: "Счётчик курса системы «Курс МП-70» предназначен для ввода и индикации заданного магнитного курса посадки. Введённое значение передаётся в навигационный комплекс для обеспечения точного выхода на ВПП. Управление производится вращением ручки КУРС, индикация — трёхразрядная барабанная.",
        specs: [
            { label: "Диапазон", value: "0–359°" },
            { label: "Тип индикации", value: "Барабанная, 3 разряда" },
            { label: "Управление", value: "Ручка КУРС" },
            { label: "Применение", value: "Система «Курс МП-70»" }
        ]
    },

    "УВ-5М": {
        title: "УВ-5М",
        description: "Указатель высоты УВ-5М — индикаторный прибор системы радиовысотомера, отображающий истинную высоту полёта над подстилающей поверхностью в метрах. Жёлтый световой сигнализатор «Опасная высота» загорается при снижении ниже установленного экипажем значения. Взаимозаменяем с указателем А-034-4, отличается от него конструкцией флажкового сигнализатора.",
        specs: [
            { label: "Единицы", value: "Метры" },
            { label: "Тип индикации", value: "Стрелочная, круговая" },
            { label: "Сигнализация", value: "Опасная высота (жёлт.)" },
            { label: "Контроль", value: "Кнопка «Контроль. Уст. высот»" }
        ]
    },

    "Индикатор МНРЛС «Гроза-86»": {
        title: "Индикатор МНРЛС «Гроза-86»",
        description: "Индикатор радиолокационной станции «Гроза-86» отображает радиолокационную картину в режимах обзора земной поверхности и обнаружения встречных воздушных судов. Работает в Х-диапазоне с магнетронным передатчиком и рефлекторной антенной, обеспечивает наблюдение крупных ориентиров на дальности до 350 км.",
        specs: [
            { label: "Рабочая частота", value: "9370 МГц" },
            { label: "Мощность", value: "9,0 кВт" },
            { label: "Дальность (города)", value: "до 350 км" },
            { label: "Сектор сканир.", value: "±100°" }
        ]
    },

    "КПП (Командно-пилотажный прибор)": {
        title: "КПП (Командно-пилотажный прибор)",
        description: "Электронный пилотажный прибор с цветным дисплеем, отображающий крен и тангаж воздушного судна относительно искусственного горизонта. Выдаёт командные стрелки управления при работе совместно с системой автоматического управления. Флажки РВ и ДГ сигнализируют об отказе гироскопического датчика.",
        specs: [
            { label: "Диапазон крена", value: "±180°" },
            { label: "Диапазон тангажа", value: "±85°" },
            { label: "Сигнализация", value: "Флажки РВ, ДГ" },
            { label: "Контроль", value: "Кнопка ТЕСТ" }
        ]
    },

    "НПП-72 (Навигационно-плановый прибор)": {
        title: "НПП-72 (Навигационно-плановый прибор)",
        description: "Обеспечивает одновременную индикацию курса самолёта, заданного путевого угла и бокового уклонения от линии заданного пути на единой компасной шкале. Совмещает функции курсовой системы и радиокомпаса, применяется на самолётах Ту-154 и Ил-62.",
        specs: [
            { label: "Шкала", value: "0–360°" },
            { label: "Точность", value: "±1°" },
            { label: "Параметры", value: "Курс, КУР, ЗПУ, уклон." },
            { label: "Применение", value: "Ту-154, Ил-62" }
        ]
    },

    "Ось-1": {
        title: "Ось-1",
        description: "Навигационный индикатор для настройки и отображения параметров системы VOR/DME. Обеспечивает захват сигнала маяка и его автоматическое или ручное сопровождение. Переключатель М.МИЛИ/КМ выбирает единицы дальности, три кнопки КОНТРОЛЬ проверяют исправность каналов.",
        specs: [
            { label: "Системы", value: "VOR, DME" },
            { label: "Режимы", value: "АВТОМ / РУЧН / ЗАХВАТ" },
            { label: "Единицы дальн.", value: "М.МИЛИ / КМ" },
            { label: "Каналов контроля", value: "3" }
        ]
    },

    "Прибор навигационный плановый ПНП-72": {
        title: "ПНП-72 (Прибор навигационный плановый)",
        description: "Пилотажно-навигационный индикатор, совмещающий компасную шкалу курса с плановой информацией от курсовой системы и радионавигационных средств. Устанавливается на рабочем месте второго пилота, работает в режимах ЦВМ, ЗК, ЗПУ и ЗАХОД.",
        specs: [
            { label: "Шкала", value: "0–360°" },
            { label: "Вх. системы", value: "КС, РСБН, VOR, ILS" },
            { label: "Режимы", value: "ЦВМ / ЗК / ЗПУ / ЗАХОД" },
            { label: "Точность", value: "±1°" }
        ]
    }

};

//настройки, их можно менять (название файла с моделью, необходимая уверенность для определения прибора и частота обновления просмотра камеры)

const MODEL_URL = "./model/";
const CONFIDENCE_THRESHOLD = 0.85;
const PREDICTION_INTERVAL = 400;

//дальше лучше не трогать (графика, оформление и т. д.):

let model = null;
let videoEl = null;
let predictionTimer = null;
let currentDevice = null;
let isPaused = false;

const screenCamera = document.getElementById("screen-camera");
const screenInfo = document.getElementById("screen-info");
const cameraWrap = document.getElementById("camera-wrap");
const overlayTop = document.getElementById("overlay-top");
const overlayLabel = document.getElementById("overlay-label");
const overlayConf = document.getElementById("overlay-conf");
const freezeCanvas = document.getElementById("freeze-canvas");
const btnStart = document.getElementById("btn-start");
const btnPause = document.getElementById("btn-pause");
const pauseIcon = document.getElementById("pause-icon");
const pauseLabel = document.getElementById("pause-label");
const noDevice = document.getElementById("no-device");
const deviceCard = document.getElementById("device-card");
const cardTitle = document.getElementById("card-title");
const cardDesc = document.getElementById("card-desc");
const cardSpecs = document.getElementById("card-specs");
const specsGrid = document.getElementById("specs-grid");
const tabBtns = document.querySelectorAll(".tab-btn");
const infoTabBtn = document.querySelector('.tab-btn[data-tab="info"]');

// вкладки
tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const tab = btn.dataset.tab;
        tabBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        if (tab === "camera") {
            screenCamera.classList.remove("hidden");
            screenInfo.classList.add("hidden");
        } else {
            screenCamera.classList.add("hidden");
            screenInfo.classList.remove("hidden");
        }
    });
});

// запуск
btnStart.addEventListener("click", async () => {
    btnStart.textContent = "Загрузка модели…";
    btnStart.disabled = true;
    try {
        await initApp();
    } catch (err) {
        console.error(err);
        btnStart.textContent = "Ошибка — нажмите снова";
        btnStart.disabled = false;
    }
});

async function initApp() {
    const modelURL = MODEL_URL + "model.json";
    const metaURL = MODEL_URL + "metadata.json";
    model = await tmImage.load(modelURL, metaURL);

    videoEl = document.getElementById("webcam");
    const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: "environment" }, width: { ideal: 1280 }, height: { ideal: 720 } },
        audio: false
    });
    videoEl.srcObject = stream;
    await new Promise(resolve => { videoEl.onloadedmetadata = () => { videoEl.play(); resolve(); }; });

    btnStart.classList.add("hidden");
    btnPause.classList.remove("hidden");
    overlayTop.classList.remove("hidden");
    cameraWrap.classList.add("scanning");

    predictionTimer = setInterval(predict, PREDICTION_INTERVAL);
}

// логика паузы
btnPause.addEventListener("click", () => {
    if (!isPaused) {
        pauseCamera();
    } else {
        resumeCamera();
    }
});

function pauseCamera() {
    isPaused = true;
    clearInterval(predictionTimer);
    cameraWrap.classList.remove("scanning");

    // заморозка каждра
    const ctx = freezeCanvas.getContext("2d");
    freezeCanvas.width = videoEl.videoWidth;
    freezeCanvas.height = videoEl.videoHeight;
    ctx.drawImage(videoEl, 0, 0);
    freezeCanvas.classList.add("active");

    pauseIcon.textContent = "▶";
    pauseLabel.textContent = "Продолжить";
    btnPause.classList.add("paused");

    // показ данных на второй вкладке
    if (currentDevice) {
        showDeviceCard(currentDevice);
        infoTabBtn.classList.add("has-device");
    }
}

function resumeCamera() {
    isPaused = false;
    freezeCanvas.classList.remove("active");
    cameraWrap.classList.add("scanning");

    pauseIcon.textContent = "⏸";
    pauseLabel.textContent = "Пауза";
    btnPause.classList.remove("paused");

    predictionTimer = setInterval(predict, PREDICTION_INTERVAL);
}

// само распознавание
async function predict() {
    if (!model || !videoEl || videoEl.readyState < 2) return;
    const preds = await model.predict(videoEl);
    let best = preds[0];
    for (const p of preds) { if (p.probability > best.probability) best = p; }

    const conf = best.probability;
    const name = best.className;

    overlayConf.textContent = `${name} · ${(conf * 100).toFixed(0)}%`;

    if (conf >= CONFIDENCE_THRESHOLD && DEVICES[name]) {
        currentDevice = name;
        overlayLabel.textContent = DEVICES[name].title;
        overlayLabel.style.color = "var(--amber)";
    } else {
        currentDevice = null;
        overlayLabel.textContent = "Наведите на прибор";
        overlayLabel.style.color = "rgba(240,236,224,0.6)";
    }
}

//графика (карточка прибора)
function showDeviceCard(name) {
    const dev = DEVICES[name];
    if (!dev) return;

    noDevice.classList.add("hidden");
    deviceCard.classList.remove("hidden");

    cardTitle.textContent = dev.title;
    cardDesc.textContent = dev.description;

    if (dev.specs && dev.specs.length > 0) {
        cardSpecs.classList.remove("hidden");
        specsGrid.innerHTML = dev.specs.map(s =>
            `<div class="spec-item"><div class="spec-label">${s.label}</div><div class="spec-value">${s.value}</div></div>`
        ).join("");
    } else {
        cardSpecs.classList.add("hidden");
    }
}

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./sw.js").catch(() => {});
    });
}
