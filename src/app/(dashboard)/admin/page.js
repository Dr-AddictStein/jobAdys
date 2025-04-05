import React from "react";
import styles from "@/styles/Dashboard/Admin/Home.module.css";

import AdminHomeContent from "@/components/Dashboard/Admin/AdminHomeContent";

const AdminHomePage = () => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className={styles.wrapper}>
      <section className={styles.header}>
        <h2>Hello Vladyslav Titov,</h2>
        <p>Today is {currentDate}. A perfect time to be a part of JobAdys.</p>
      </section>

      <AdminHomeContent />
    </main>
  );
};

export default AdminHomePage;
