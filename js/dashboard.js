// ===============================
// FETCH SEMUA FILE JSON
// (KECUALI PROFILES)
// ===============================
async function fetchDashboardData() {
  const [
    Teacher,
    Student,
    Class,
    lesson,
    schedule
  ] = await Promise.all([
    fetch("data/Teacher_rows.json").then(r => r.json()),
    fetch("data/Student_rows.json").then(r => r.json()),
    fetch("data/Class_rows.json").then(r => r.json()),
    fetch("data/lesson_rows.json").then(r => r.json()),
    fetch("data/lesson_schedule_rows.json").then(r => r.json())
  ]);

  return {
    Teacher_rows: Teacher,
    Student_rows: Student,
    Class_rows: Class,
    lesson_rows: lesson,
    lesson_schedule_rows: schedule
  };
}

// ===============================
// RENDER STAT KE CARD
// ===============================
function renderStats(data) {
  document.getElementById("Teacher").textContent =
    data.Teacher_rows.length;

  document.getElementById("Student").textContent =
    data.Student_rows.length;

  document.getElementById("Class").textContent =
    data.Class_rows.length;

  document.getElementById("lesson").textContent =
    data.lesson_rows.length;

  document.getElementById("schedule").textContent =
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









