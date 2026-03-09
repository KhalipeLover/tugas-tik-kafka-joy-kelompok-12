// ===============================
// FETCH SEMUA FILE JSON
// (KECUALI PROFILES)
// ===============================
async function fetchDashboardData() {
  const [
    Teachers,
    Students,
    Classes,
    lessons,
    schedules
  ] = await Promise.all([
    fetch("data/Teachers_rows.json").then(r => r.json()),
    fetch("data/Students_rows.json").then(r => r.json()),
    fetch("data/Classes_rows.json").then(r => r.json()),
    fetch("data/lessons_rows.json").then(r => r.json()),
    fetch("data/lesson_schedule_rows.json").then(r => r.json())
  ]);

  return {
    Teachers_rows: Teachers,
    Students_rows: Students,
    Classes_rows: Classes,
    lessons_rows: lessons,
    lesson_schedule_rows: schedules
  };
}

// ===============================
// RENDER STAT KE CARD
// ===============================
function renderStats(data) {
  document.getElementById("Teachers").textContent =
    data.teachers_rows.length;

  document.getElementById("Students").textContent =
    data.students_rows.length;

  document.getElementById("Classes").textContent =
    data.classes_rows.length;

  document.getElementById("lessons").textContent =
    data.lessons_rows.length;

  document.getElementById("schedules").textContent =
    data.lesson_schedule_rows.length;

  document.getElementById("stats").classList.remove("opacity-60");
}

// ===============================
// INIT DASHBOARD
// ===============================
async function initDashboard() {
  try {
    const data = await fetchDashboardData();
    renderStats(data);
  } catch (error) {
    console.error("Gagal memuat dashboard:", error);
    alert("Data gagal dimuat");
  }
}

initDashboard();



