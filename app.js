// ================================================================
// КАК МЕНЯТЬ НАЗВАНИЯ И ОПИСАНИЯ ПРИБОРОВ
// ================================================================
// Всё редактируется ТОЛЬКО в блоке DEVICES ниже.
// Каждый прибор — это объект с полями:
//   title       — название, которое отображается крупно
//   description — текст описания (можно длинный, поддерживает \n для переноса)
//   specs       — характеристики в виде пар { label, value }
//                 можно удалить specs полностью если не нужны
//
// КЛЮЧ (строка перед двоеточием) должен ТОЧНО совпадать
// с названием класса в Teachable Machine — буква в букву!
// Проверь в файле metadata.json (поле "labels") из экспорта модели.
// ================================================================

const DEVICES = {

    "Баклан-20": {
        title: "Баклан-20",
        description: "Авиационная связная радиостанция метрового диапазона. Предназначена для обеспечения двусторонней телефонной радиосвязи между самолётами и наземными станциями, а также между самолётами в воздухе. Обеспечивает работу в режиме дежурного приёма.",
        specs: [
            { label: "Диапазон", value: "100–150 МГц" },
            { label: "Тип", value: "УКВ" },
            { label: "Режим", value: "АМ / ЧМ" },
            { label: "Дальность", value: "до 400 км" }
        ]
    },

    "Пульт управления радиостанции «Микрон»": {
        title: "Пульт управления р/с «Микрон»",
        description: "Обеспечивает дистанционное управление коротковолновой связной радиостанцией «Микрон». Позволяет выбирать рабочие частоты, режимы излучения (ОМ, АМ, АТ, ЧТ) и контролировать состояние передатчика по световым индикаторам ПРД / НАСТ / АВАР.",
        specs: [
            { label: "Диапазон", value: "2–24 МГц" },
            { label: "Тип", value: "КВ" },
            { label: "Режимы", value: "ОМ / АМ / АТ / ЧТ" },
            { label: "Управление", value: "Дистанц." }
        ]
    },

    "СП-50": {
        title: "СП-50",
        description: "Автоматический радиокомпас предназначен для самолётовождения по приводным и радиовещательным станциям, а также для выполнения захода на посадку по приводным маякам. Определяет курсовой угол радиостанции и выдаёт информацию на стрелочный прибор.",
        specs: [
            { label: "Диапазон", value: "150–1799 кГц" },
            { label: "Точность", value: "±2°" },
            { label: "Каналы", value: "2" },
            { label: "Режимы", value: "АВТ / РУЧ" }
        ]
    },

    "СПУ-7": {
        title: "СПУ-7",
        description: "Самолётное переговорное устройство обеспечивает внутреннюю телефонную связь между членами экипажа, а также коммутацию выходов бортовых радиосредств на абонентские пульты. Позволяет одновременно прослушивать несколько радиосредств.",
        specs: [
            { label: "Абоненты", value: "до 6" },
            { label: "Тип", value: "Переговорное" },
            { label: "Связь", value: "Внутренняя" },
            { label: "Питание", value: "27 В" }
        ]
    },

    "Пульт управления АРК-15М": {
        title: "Пульт управления АРК-15М",
        description: "Позволяет выбирать частотные каналы приводных радиостанций, управлять режимами работы радиокомпаса (ТЛФ / ТЛГ) и контролировать качество приёма. Имеет два независимых канала настройки с барабанными переключателями частоты в диапазоне 150–1799,5 кГц.",
        specs: [
            { label: "Диапазон", value: "150–1799,5 кГц" },
            { label: "Каналы", value: "2" },
            { label: "Режимы", value: "ТЛФ / ТЛГ / УПР" },
            { label: "Антенна", value: "КОМ / РАМ" }
        ]
    },

    "Пульт выбора радионавигационных(посадочных) систем": {
        title: "Пульт выбора радионавигационных (посадочных) систем",
        description: "Обеспечивает коммутацию и переключение между различными системами захода на посадку: ILS (инструментальная система посадки), КАТЕТ и СП-50. Управляет выбором маршрутных (К1/Г1) и посадочных (К2/Г2) каналов, а также системами РСБН и ДМЕ.",
        specs: [
            { label: "Системы", value: "ILS / СП-50 / РСБН" },
            { label: "Режимы", value: "МАРШРУТ / ПОСАДКА" },
            { label: "Каналы", value: "К1, К2, Г1, Г2" },
            { label: "Тип", value: "Навигац." }
        ]
    },

    "Селектор радиосвязи и навигации самолета": {
        title: "Селектор радиосвязи и навигации",
        description: "Осуществляет выбор активного радиосредства для работы экипажа, маршрутизацию сигналов между приёмопередатчиками и абонентскими пультами. Обеспечивает прослушивание сигналов VOR, УКВ, КВ, РСБН, АРК и других систем.",
        specs: [
            { label: "Системы", value: "УКВ / КВ / АРК / РСБН" },
            { label: "Режим VOR", value: "VOR1 / VOR2" },
            { label: "Спец.", value: "РЕЗ / БП / ПАСС" },
            { label: "Тип", value: "Коммутатор" }
        ]
    },

    " СК системы «Курс МП-70» ": {
        title: "Задатчик курса",
        description: "Прибор предназначен для установки и индикации заданного значения курса. Используется в составе курсовой системы самолёта для задания и выдерживания маршрута полёта. Отображает заданный курс в градусах на трёхразрядном барабанном индикаторе.",
        specs: [
            { label: "Диапазон", value: "0–359°" },
            { label: "Индикация", value: "Барабанная" },
            { label: "Управление", value: "Ручка КУРС" },
            { label: "Тип", value: "Курсовой" }
        ]
    },

    "УВ-5М": {
        title: "УВ-5М",
        description: "Барометрический высотомер предназначен для измерения и индикации высоты полёта над уровнем моря. Оснащён сигнальной лампой «ОПАСНАЯ» для предупреждения экипажа при снижении ниже заданной высоты. Имеет ручку установки опорного давления.",
        specs: [
            { label: "Диапазон", value: "0–800 м" },
            { label: "Шкала", value: "МЕТРЫ" },
            { label: "Сигнал", value: "ОПАСНАЯ" },
            { label: "Тип", value: "Барометр." }
        ]
    },

    "Индикатор МНРЛС «Гроза-86»": {
        title: "Индикатор МНРЛС «Гроза-86»",
        description: "Индикатор радиолокационной станции отображает радиолокационную картину пространства в режимах ЗЕМЛЯ и МЕТЕО. Кругообразная развёртка позволяет наблюдать метеорологические образования и рельеф местности. Имеет регулировку контраста, наклон антенны и режим ДН/НОЧЬ.",
        specs: [
            { label: "Режимы", value: "ЗЕМЛЯ / МЕТЕО" },
            { label: "Дальность", value: "50 / 250 / 375 км" },
            { label: "Индикация", value: "ДН / НОЧЬ" },
            { label: "Тип", value: "РЛС" }
        ]
    },

    "КПП (Командно-пилотажный прибор)": {
        title: "Индикатор МНРЛС «Гроза-86»",
        description: "Индикатор радиолокационной станции отображает радиолокационную картину пространства в режимах ЗЕМЛЯ и МЕТЕО. Кругообразная развёртка позволяет наблюдать метеорологические образования и рельеф местности. Имеет регулировку контраста, наклон антенны и режим ДН/НОЧЬ.",
        specs: [
            { label: "Режимы", value: "ЗЕМЛЯ / МЕТЕО" },
            { label: "Дальность", value: "50 / 250 / 375 км" },
            { label: "Индикация", value: "ДН / НОЧЬ" },
            { label: "Тип", value: "РЛС" }
        ]
    },

    "НПП-72": {
        title: "НПП-72",
        description: "Индикатор радиолокационной станции отображает радиолокационную картину пространства в режимах ЗЕМЛЯ и МЕТЕО. Кругообразная развёртка позволяет наблюдать метеорологические образования и рельеф местности. Имеет регулировку контраста, наклон антенны и режим ДН/НОЧЬ.",
        specs: [
            { label: "Режимы", value: "ЗЕМЛЯ / МЕТЕО" },
            { label: "Дальность", value: "50 / 250 / 375 км" },
            { label: "Индикация", value: "ДН / НОЧЬ" },
            { label: "Тип", value: "РЛС" }
        ]
    },

    "Ось-1": {
        title: "Ось-1",
        description: "Индикатор радиолокационной станции отображает радиолокационную картину пространства в режимах ЗЕМЛЯ и МЕТЕО. Кругообразная развёртка позволяет наблюдать метеорологические образования и рельеф местности. Имеет регулировку контраста, наклон антенны и режим ДН/НОЧЬ.",
        specs: [
            { label: "Режимы", value: "ЗЕМЛЯ / МЕТЕО" },
            { label: "Дальность", value: "50 / 250 / 375 км" },
            { label: "Индикация", value: "ДН / НОЧЬ" },
            { label: "Тип", value: "РЛС" }
        ]
    },

    "Прибор навигационный плановый ПНП-72": {
        title: "Прибор навигационный плановый ПНП-72",
        description: "Навигационно-плановый прибор обеспечивает индикацию курса самолёта, заданного курса, курсовых углов радиостанций и углов сноса. Комбинирует показания курсовой системы и радионавигационных средств на одном приборе для удобства пилотирования.",
        specs: [
            { label: "Режимы", value: "ЦВМ / ЗК / ЗПУ / ЗАХОД" },
            { label: "Шкала", value: "0–360°" },
            { label: "Тип", value: "Навигац." },
            { label: "Курс", value: "К / Л" }
        ]
    }

};

// ================================================================
// НАСТРОЙКИ — менять здесь
// ================================================================

const MODEL_URL = "./model/";
const CONFIDENCE_THRESHOLD = 0.85;
const PREDICTION_INTERVAL = 400;

// ================================================================
// КОД ПРИЛОЖЕНИЯ — ниже не трогай
// ================================================================

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

// ---- Вкладки ----
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

// ---- Запуск ----
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

// ---- Пауза ----
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

    // Заморозить кадр
    const ctx = freezeCanvas.getContext("2d");
    freezeCanvas.width = videoEl.videoWidth;
    freezeCanvas.height = videoEl.videoHeight;
    ctx.drawImage(videoEl, 0, 0);
    freezeCanvas.classList.add("active");

    pauseIcon.textContent = "▶";
    pauseLabel.textContent = "Продолжить";
    btnPause.classList.add("paused");

    // Показать данные на вкладке "Прибор"
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

// ---- Распознавание ----
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

// ---- Карточка прибора ----
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

// ---- PWA ----
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./sw.js").catch(() => {});
    });
}
