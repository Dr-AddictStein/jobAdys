"use client";

import React, { useEffect, useState } from "react";
import styles from "@/styles/Dashboard/Admin/Home.module.css";

const AdminHomeContent = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/API/admin/login-logs")
      .then((res) => {
        if (!res.ok) throw new Error("API failed");
        return res.json();
      })
      .then((data) => {
        setLogs(data.logs || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading logs:", err);
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <section className={styles.notificationSection}>
      <h3>System notification</h3>
      <div className={styles.notificationBox}>
        {loading ? (
          <p>Loading login logs...</p>
        ) : error ? (
          <p>❌ Failed to load login logs. Are you logged in as admin?</p>
        ) : logs.length === 0 ? (
          <p>No login logs available.</p>
        ) : (
          logs.map((log) => {
            const date = new Date(log.createdAt);
            const formattedTime = date.toLocaleTimeString("en-GB");
            const formattedDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;

            return (
              <p key={log.id}>
                - Sign in [{formattedTime}, {formattedDate}] from {log.location} by next ip: {log.ip}
              </p>
            );
          })
        )}
      </div>
    </section>
  );
};

export default AdminHomeContent;
