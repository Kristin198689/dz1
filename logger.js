// logger.js
const fs = require("fs");
const path = require("path");

// Определяем путь к файлу лога
const logFilePath = path.join(__dirname, "log.txt");

// Функция для записи логов
function logMessage(message) {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] ${message}\n`;

  fs.appendFile(logFilePath, logEntry, (err) => {
    if (err) {
      console.error("Ошибка записи лога:", err);
    } else {
      console.log("Лог записан:", message);
    }
  });
}

module.exports = { logMessage };
