const { request } = require("express");

let db;

request.onupgradeneeded = function (event) {
  const db = event.target.result;
  db.createObjectStore("BudgetStore", { autoIncrement: true });
};

request.onsuccess = function (event) {
  db = event.target.result;

  if (navigator.onLine) {
    checkDatabase;
  }
};

request.onerror = function (event) {
  console.log(err);
};

function saveRecord(record) {
    const transaction = db.transaction(["pending", "readwrite"]),
    const store = trasnaction.ObjectStore("pending")
    store.add(record)
}

function checkDatabase() {}

window.addEventListener("online", checkDatabase);
