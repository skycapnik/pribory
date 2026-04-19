// ============================================================
// ОПИСАНИЯ ПРИБОРОВ
// Правь тексты здесь — каждому классу соответствует заголовок и описание
// ============================================================

const DEVICES = {
    "Баклан-5": {
        title: "Баклан-5",
        description: "Здесь будет описание для Баклан-5. Это авиационная связная радиостанция метрового диапазона, предназначенная для обеспечения двусторонней телефонной радиосвязи между самолётами и наземными станциями, а также между самолётами в воздухе."
    },
    "Пульт управления радиостанции «Микрон»": {
        title: "Пульт управления радиостанции «Микрон»",
        description: "Здесь будет описание для пульта управления радиостанции «Микрон». Обеспечивает дистанционное управление коротковолновой связной радиостанцией, выбор рабочих частот, режимов излучения и контроль состояния передатчика."
    },
    "Радиокомпас АРК-15": {
        title: "Радиокомпас АРК-15",
        description: "Здесь будет описание для радиокомпаса АРК-15. Автоматический радиокомпас предназначен для самолётовождения по приводным и радиовещательным станциям, а также для выполнения захода на посадку."
    },
    "СПУ-7": {
        title: "СПУ-7",
        description: "Здесь будет описание для СПУ-7. Самолётное переговорное устройство обеспечивает внутреннюю телефонную связь между членами экипажа, а также коммутацию выходов радиосредств на абонентов."
    },
    "Пульт управления приводной радиостанцией АРК": {
        title: "Пульт управления приводной радиостанцией АРК",
        description: "Здесь будет описание для пульта управления приводной радиостанцией АРК. Позволяет выбирать частотные каналы приводных радиостанций, управлять режимами работы радиокомпаса и контролировать качество приёма."
    },
    "Пульт выбора радионавигационных (посадочных) систем": {
        title: "Пульт выбора радионавигационных (посадочных) систем",
        description: "Здесь будет описание для пульта выбора радионавигационных (посадочных) систем. Обеспечивает коммутацию и переключение между различными системами посадки и навигационными комплексами, установленными на борту."
    },
    "Селектор радиосвязи и навигации самолета": {
        title: "Селектор радиосвязи и навигации самолёта",
        description: "Здесь будет описание для селектора радиосвязи и навигации. Осуществляет выбор активного радиосредства для работы экипажа, маршрутизацию сигналов между приёмопередатчиками и абонентскими пультами."
    },
    "Задатчик курса": {
        title: "Задатчик курса",
        description: "Здесь будет описание для задатчика курса. Прибор предназначен для установки и индикации заданного значения курса, используется в составе курсовой системы самолёта для выдерживания маршрута полёта."
    }
};

// ============================================================
// НАСТРОЙКИ
// ============================================================

// Путь к модели. Если используешь shareable link от Teachable Machine — замени сюда.
// Иначе оставь пусто и положи файлы model.json, metadata.json, weights.bin рядом с index.html
const MODEL_URL = "./model/";

// Порог уверенности — если меньше, считаем что прибор не распознан
const CONFIDENCE_THRESHOLD = 0.85;

// Частота распознавания (раз в сколько миллисекунд делаем предсказание)
const PREDICTION_INTERVAL = 400;

// ============================================================
// КОД ПРИЛОЖЕНИЯ
// ============================================================

let model = null;
let videoEl = null;
let predictionTimer = null;
let lastDetectedClass = null;

const titleEl = document.getElementById("device-title");
const descEl = document.getElementById("device-description");
const confEl = document.getElementById("confidence");
const panelEl = document.getElementById("info-panel");
const startBtn = document.getElementById("start-btn");

startBtn.addEventListener("click", async () => {
    startBtn.textContent = "Загрузка...";
    startBtn.disabled = true;
    try {
        await initApp();
        startBtn.classList.add("hidden");
    } catch (err) {
        console.error(err);
        startBtn.textContent = "Ошибка — нажмите для повтора";
        startBtn.disabled = false;
        descEl.textContent = "Ошибка: " + err.message;
    }
});

async function initApp() {
    // 1. Загружаем модель
    const modelURL = MODEL_URL + "model.json";
    const metadataURL = MODEL_URL + "metadata.json";
    model = await tmImage.load(modelURL, metadataURL);

    // 2. Включаем камеру
    videoEl = document.getElementById("webcam");
    const stream = await navigator.mediaDevices.getUserMedia({
        video: {
            facingMode: { ideal: "environment" }, // задняя камера
            width: { ideal: 1280 },
            height: { ideal: 720 }
        },
        audio: false
    });
    videoEl.srcObject = stream;

    await new Promise(resolve => {
        videoEl.onloadedmetadata = () => {
            videoEl.play();
            resolve();
        };
    });

    // 3. Запускаем цикл распознавания
    predictionTimer = setInterval(predict, PREDICTION_INTERVAL);
}

async function predict() {
    if (!model || !videoEl || videoEl.readyState < 2) return;

    const predictions = await model.predict(videoEl);

    // Находим класс с максимальной уверенностью
    let best = predictions[0];
    for (const p of predictions) {
        if (p.probability > best.probability) best = p;
    }

    const conf = best.probability;
    const className = best.className;

    confEl.textContent = `Класс: ${className} · уверенность: ${(conf * 100).toFixed(1)}%`;

    if (conf < CONFIDENCE_THRESHOLD) {
        if (lastDetectedClass !== null) {
            showIdle();
            lastDetectedClass = null;
        }
        return;
    }

    if (className === lastDetectedClass) return;

    const device = DEVICES[className];
    if (!device) {
        showUnknown(className);
        lastDetectedClass = className;
        return;
    }

    if (device.isBackground) {
        showIdle();
        lastDetectedClass = className;
        return;
    }

    showDevice(device);
    lastDetectedClass = className;
}

function showDevice(device) {
    titleEl.textContent = device.title;
    descEl.textContent = device.description;
    panelEl.classList.add("detected");
}

function showIdle() {
    titleEl.textContent = "Наведите камеру на прибор";
    descEl.textContent = "Ожидание распознавания...";
    panelEl.classList.remove("detected");
}

function showUnknown(className) {
    titleEl.textContent = className;
    descEl.textContent = "Описание не задано для этого класса.";
    panelEl.classList.add("detected");
}

// Регистрация service worker для PWA
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./sw.js").catch(err => {
            console.warn("Service worker не зарегистрирован:", err);
        });
    });
}
